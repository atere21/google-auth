import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [uid, setUid] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setDisplayName(user.displayName);
        setUid(user.uid);
      } else {
        setDisplayName('');
        setUid('');
      }
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') {
      setError('Please enter a valid message');
      return;
    }
    if (!uid) {
      setError('User is not logged in');
      // Handle the case where the user is not logged in
      return;
    }

    try {
      await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      });

      setError(null);
      setInput('');
      scroll.current.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      setError('Error sending message');
      console.error('Error adding message: ', error);
      // Handle the error
    }
  };

  return (
    <div>
      <form onSubmit={sendMessage} className={style.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={style.input}
          type='text'
          placeholder='Message'
        />
        <button className={style.button} type='submit'>
          Send
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SendMessage;

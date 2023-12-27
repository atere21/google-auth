import React from 'react'

const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name:`flex mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#e5e5ea] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received:` text-black float-left rounded-br-full`

}
const Message = () => {
    
  return (
    <div>
        <div className={style.message}>
            <p className={style.name}>Dave</p>
            <p>Im learning React! </p>
        </div>
    </div> 
  )
}

export default Message
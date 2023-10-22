import React from 'react'

const OwnedIcon = ({ owned, add, remove }) => {
  if (owned) {
    return (
      <svg onClick={remove} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect width="30" height="30" rx="15" fill="#3DDC84" />
        <path d="M10 9.9C10 9.1268 10.6268 8.5 11.4 8.5H18.6C19.3732 8.5 20 9.1268 20 9.9V20.4789C20 20.9367 19.5079 21.2258 19.108 21.003L15.9734 19.2566C15.3683 18.9195 14.6317 18.9195 14.0266 19.2566L10.892 21.003C10.4921 21.2258 10 20.9367 10 20.4789V9.9Z" fill="white" />
      </svg>
    )
  }
  return (
    <svg onClick={add} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect width="30" height="30" rx="15" fill="#313131" />
      <path d="M10.5 9.9C10.5 9.40294 10.9029 9 11.4 9H18.6C19.0971 9 19.5 9.40294 19.5 9.9V20.4789C19.5 20.5552 19.418 20.6034 19.3513 20.5662L16.2168 18.8198C15.4603 18.3984 14.5397 18.3984 13.7832 18.8198L10.6487 20.5662C10.582 20.6034 10.5 20.5552 10.5 20.4789V9.9Z" stroke="#424242" />
    </svg>
  )
}

export default OwnedIcon;
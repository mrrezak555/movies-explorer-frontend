import React from 'react'

const BurgerMenu = ({ onClick }) => {
  return (
    <svg
      className={"navigation__account-burger"}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 14L8 14V11L36 11V14Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 24L8 24V21L36 21V24Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 34L8 34V31L36 31V34Z"
        fill="white"
      />
    </svg>
  );
};

export default BurgerMenu;


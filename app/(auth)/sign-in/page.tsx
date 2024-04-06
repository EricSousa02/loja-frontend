import emailIcon from '/public/assets/icons/email-icon.svg';
import eyeIcon from '/public/assets/icons/eye-icon.svg';
import Image from 'next/image';
import React from 'react'

const signIn = () => {
  return (
    <div className="signIn">

      <form className="signIn_form">
        <h2>Welcome</h2>

        <div className="input_container">
          <label htmlFor="">email</label>
          <input type="email" name="email" id="email" />
          <Image
            src={emailIcon}
            width={15}
            height={15}
            alt="email icon"
          />
        </div>
        <div className="input_container">
          <label htmlFor="">password</label>
          <input type="password" name="password" id="password" />
          <Image
            src={eyeIcon}
            width={15}
            height={15}
            alt="email icon"
          />
        </div>

        <button>
          sign in
        </button>

        <a href="#">Have an account</a>
      </form>

    </div>
  )
}

export default signIn
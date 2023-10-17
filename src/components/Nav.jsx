import React from "react";
import logo from "../Images/logo.png";
import style from "./nav.module.css";

const Nav = () => {
  return (
    <nav>
      <div className={style.center}>
        <div className={style.logo}>
          <img src={logo} alt="Logo" height={50} />
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.5L22.5 20.5M1.5 20.5L22.5 1.5"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className={style.menu}>
          <div>Home</div>
          <div>Contact Us</div>
          <div>Features</div>
          <div className={style.price}>
            Pricing{" "}
            <span>
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L8.36842 7L15 1"
                  stroke="#80BC40"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
          <div>About Us</div>
        </div>
        <div className={style.btn}>
          <a href="#" className={style.active}>
            Get a Demo
          </a>
          <a href="#">Sign in</a>
        </div>
      </div>
      <div className={style.menu2}>
        <div>Home</div>
        <div>Contact Us</div>
        <div className={style.price}>
          Features
          <span>
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L8.36842 7L15 1"
                stroke="#80BC40"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </div>
        <div className={style.price}>
          Pricing{" "}
          <span>
            <svg
              width="17"
              height="9"
              viewBox="0 0 17 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8L8.5 2L15.5 8"
                stroke="#80BC40"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

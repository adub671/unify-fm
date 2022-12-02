import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function AuthModal({ isLogin }) {
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState(isLogin);
  return (
    <div>
      {login ? (
        <div
          className="auth-modal-log-in nav-link"
          onClick={() => {
            setShowModal(true);
            setLogin(true);
          }}
        >
          Login
        </div>
      ) : (
        <div
          className="auth-modal-sign-up nav-link"
          onClick={() => {
            setShowModal(true);
            setLogin(false);
          }}
        >
          Sign Up
        </div>
      )}

      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <div className="auth-nav-container">
            <div
              onClick={() => setLogin(true)}
              className={login ? "auth-nav auth-active" : "auth-nav"}
            >
              Login
            </div>
            <div
              onClick={() => setLogin(false)}
              className={!login ? "auth-nav auth-active" : "auth-nav"}
            >
              Sign Up
            </div>
          </div>
          {login ? (
            <LoginForm setShowModal={setShowModal} />
          ) : (
            <SignUpForm setShowModal={setShowModal} />
          )}
        </Modal>
      )}
    </div>
  );
}
export default AuthModal;

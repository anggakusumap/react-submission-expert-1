import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="flex lg:mt-10 justify-center items-center">
      <form onSubmit={() => login({ email, password })} className="bg-white shadow-md rounded py-10 px-16 mb-4">
        <h1 className="text-xl text-center font-bold mb-10">Login</h1>
        <div className="mb-4">
          <label className="block text-stone-700 text-sm font-bold mb-2" htmlFor="email">
            Email
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Type your Email here..."
              value={email}
              onChange={onEmailChange}
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-stone-700 text-sm font-bold mb-2" htmlFor="password">
            Password
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Type your password here..."
              value={password}
              onChange={onPasswordChange}
            />
          </label>
        </div>
        <p className="mb-4">
          Don&apos;t have an account yet?
          {' '}
          <Link to="/register" className="underline hover:text-amber-500">Register</Link>
        </p>
        <div className="flex items-center justify-center">
          <button
            className="bg-amber-400 hover:bg-amber-600 text-white font-bold py-2 px-4 transition transform scale-95 hover:scale-110 duration-200 ease-in rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;

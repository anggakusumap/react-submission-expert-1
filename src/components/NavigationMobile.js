import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setIsShowMobileActionCreator } from '../states/showMobile/action';

export default function NavigationMobile(props) {
  const { showMobile } = props;

  const dispatch = useDispatch();

  const handleCloseBurger = (e) => {
    e.preventDefault();
    dispatch(setIsShowMobileActionCreator(false));
  };

  if (showMobile) {
    return (
      <div className="navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" href="/">
              <h1 className="text-amber-500">Forum App</h1>
            </Link>
            <button type="button" className="navbar-close" onClick={handleCloseBurger}>
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-amber-500 rounded" to="/">Threads</Link>
              </li>
              <li className="mb-1">
                <Link className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-amber-500 rounded" to="/">Leaderboards</Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link className="block px-4 py-3 mb-3 text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl" to="/">Login</Link>
              <Link className="block px-4 py-3 mb-2 text-xs text-center text-white font-semibold bg-amber-600 hover:bg-amber-700  rounded-xl" to="/">Register</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

NavigationMobile.propTypes = {
  showMobile: PropTypes.bool.isRequired,
};

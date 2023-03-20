import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineMore } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { setIsShowMobileActionCreator } from '../states/showMobile/action';
import NavigationMobile from './NavigationMobile';

export default function Navigation() {
  const isShowMobile = useSelector((state) => state.isShowMobile);
  const dispatch = useDispatch();

  const handleClickBurger = (e) => {
    e.preventDefault();
    dispatch(setIsShowMobileActionCreator(true));
  };

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-stone-900">
        <Link className="text-3xl font-bold leading-none" to="/">
          <h1 className=" text-amber-500">Forum App</h1>
        </Link>
        <div className="lg:hidden">
          <button type="button" className="navbar-burger flex items-center text-amber-500 p-3" onClick={handleClickBurger}>
            <GiHamburgerMenu />
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li className="text-gray-300">
            <AiOutlineMore />
          </li>
          <li>
            <Link className="text-sm text-amber-500 font-bold" to="/">Threads</Link>
          </li>
          <li className="text-gray-300">
            <AiOutlineMore />
          </li>
          <li>
            <Link className="text-sm text-gray-400 hover:text-gray-500" to="/">Leaderboards</Link>
          </li>
          <li className="text-gray-300">
            <AiOutlineMore />
          </li>
        </ul>
        <Link className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-amber-700 font-bold  rounded-xl transition scale-95 hover:scale-100 transform ease-in duration-200" to="/">Login</Link>
        <Link className="hidden lg:inline-block py-2 px-6 bg-amber-500 hover:bg-amber-600 text-sm text-white font-bold rounded-xl transition scale-95 hover:scale-100 transform ease-in duration-200" href="/">Register</Link>
      </nav>
      <NavigationMobile showMobile={isShowMobile} />
    </>
  );
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import Navigation from '../components/Navigation';
import { asyncSetAuthUser } from '../states/authUser/action';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <>
      <Navigation />
      <LoginInput login={onLogin} />
    </>
  );
}

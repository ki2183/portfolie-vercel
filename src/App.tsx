import './App.scss';
import React, { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { InitialFrame  } from './COMPONENTS/frame/initial_frame';
import { useAppSelector } from './REDUX/hooks';
import { useDispatch } from 'react-redux';
import { change_theme } from './REDUX/Slices/themeSlice';
import { GlobalStyle } from './GlobalStyles';
import MainPage from './PAGE/mainPage/mainPage';
import { useDebouncedCallback } from './util/debounce';
import { setWH } from './REDUX/Slices/WHSlice';

function App() {

  const Theme = useAppSelector(state => state.theme);
  const wh = useAppSelector(state => state.wh);
  const dispatch = useDispatch();

  const setWidthHeight = ()=> {
    const widthheight = {
      w: window.innerWidth,
      h: window.innerHeight,
    }
    dispatch(setWH(widthheight));
  };
  
  const resizeHandler = useDebouncedCallback(()=> {
    setWidthHeight();
  },300);

  useEffect(()=>{
    setWidthHeight();
    window.addEventListener('resize', resizeHandler);
    return ()=> {
      window.removeEventListener('resize', resizeHandler);
    };
  },[resizeHandler]);

  useEffect(()=>{
    const getTheme = localStorage.getItem('theme')
    if(!getTheme) return

    if(getTheme === "light" && Theme.theme !== "light")
      dispatch(change_theme("light"))
    else if(getTheme === "dark" && Theme.theme !== "dark")
      dispatch(change_theme("dark"))
  },[])

  return (
    <div className="App">
      <GlobalStyle theme={Theme}/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
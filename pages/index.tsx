

import About from '@/components/AboutPage';
import HomePage from '@/components/HomePage';
import Navbar from '@/components/NavBar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { SelectedPage } from '@/types';
import React, { useEffect, useState } from 'react';


const Main = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopofPage, setIsTopofPage] = useState<boolean>(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopofPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopofPage(false)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
    <Navbar selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}/>
    <HomePage setSelectedPage={setSelectedPage}/>
    <About setSelectedPage={setSelectedPage}/>
    <Skills setSelectedPage={setSelectedPage}/>
    <Projects setSelectedPage={setSelectedPage}/>
    </>
  );
};

export default Main;
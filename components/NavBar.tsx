import { SelectedPage } from '@/types';
import Link from '@/lib/Link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? 'fixed w-full bg-greenblue-100 h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full bg-gradient-to-b from-teal-100 via-teal-50 to-teal-100 h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-10 2xl:px-16'>
        <Link page= "Home" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}>
        <h2 className='ml-10 bg-gradient-to-t from-violet-500 
        to-greenblue-600 bg-clip-text text-transparent'>A.Feruz</h2>
        </Link>
        <div>
          <div  className='hidden md:flex'>
            <Link 
            page= "Home" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <span className='ml-10 text-sm uppercase hover:border-b'>Home</span>
            </Link>
            <Link 
            page= "About" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <span className='ml-10 text-sm uppercase hover:border-b'>About</span>
            </Link>
            <Link 
            page= "Skills" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <span className='ml-10 text-sm uppercase hover:border-b'>Skills</span>
            </Link>
            <Link 
            page= "Projects" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <span className='ml-10 text-sm uppercase hover:border-b'>Projects</span>
            </Link>
            <Link 
            page= "Contact" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <span className='ml-10 text-sm uppercase hover:border-b'>Contact</span>
            </Link>
          </div>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
            nav
              ? ' fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-greenblue-100 p-10 ease-in duration-500'
              : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-end'>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
            <Link 
            page= "Contact" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h2 className='ml-10 bg-gradient-to-t from-violet-500 
            to-greenblue-600 bg-clip-text text-transparent py-4'>A.Feruz</h2>
            </Link>
            </div>
          </div>
          <div className='py-4 flex flex-col justify-center items-center'>
            <Link page= "Home" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h4 onClick={() => setNav(false)} 
            className='py-4 font-normal uppercase'>Home</h4>
            </Link>
            <Link page= "About" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h4 onClick={() => setNav(false)} 
            className='py-4 font-normal uppercase'>About</h4>
            </Link>
            <Link page= "Skills" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h4 onClick={() => setNav(false)} 
            className='py-4 font-normal uppercase'>Skills</h4>
            </Link>
            <Link page= "Projects" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h4 onClick={() => setNav(false)} 
            className='py-4 font-normal uppercase'>Projects</h4>
            </Link>
            <Link page= "Resume" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h4 onClick={() => setNav(false)} 
            className='py-4 font-normal uppercase'>Resume</h4>
            </Link>
            <Link page= "Contact" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h4 onClick={() => setNav(false)} 
            className='py-4 font-normal uppercase'>Contact</h4>
            </Link>
            <div className='mt-5'>
            <p className='uppercase tracking-widest text-[#5651e5]'>
            Let&#39;s Connect
            </p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
            <a href='https://www.linkedin.com/in/clint-briley-50056920a/'
            target='_blank' rel='noreferrer'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
            hover:scale-105 ease-in duration-300'>
            <FaLinkedinIn />
            </div>
            </a>
            <a href='https://www.linkedin.com/in/clint-briley-50056920a/'
            target='_blank' rel='noreferrer'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 
            cursor-pointer hover:scale-105 ease-in duration-300'>
            <FaGithub />
            </div>
            </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
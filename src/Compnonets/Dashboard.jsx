import React from 'react';
import logo from '../assets/SEO_logo.jpg';
import mainimg from '../assets/SEO main image.webp';
import { Link  } from 'react-router-dom';
function Dashboard() {
  return (
    <div className='flex flex-col h-auto bg-darkNavy'>
      <div className='flex-grow'>
        <div className='h-auto' id='navbar'>
          <div className='flex flex-row justify-evenly pt-4'>
          <Link to='/features'><div className='text-white text-2xl font-medium'>Features</div></Link>
            <Link to='/price'><div className='text-white text-2xl font-medium'>Pricing</div></Link>
            <div className='flex flex-row items-center'>
              <img src={logo} alt='logo' className='h-[70px] w-auto pt-2 rounded-xl' />
              <div className='pl-2 text-5xl font-bold text-white flex flex-col'>
                SEO  
                <span className='text-lg font-light'>optimizer</span>
              </div>
            </div>
            <Link to='/faq'><div className='text-white font-medium text-2xl'>FAQ</div></Link>
            <Link to='/signin'><div className='text-white font-medium text-2xl'>Sign In</div></Link>
          </div>
        </div>

        <div className='bg-darkNavy flex flex-row h-auto'>
          <div className='flex flex-col pl-5 space-y-4 w-1/2' id='middle-part'>
            <div className='text-yellow-400'>SEO optimizer</div>
            <div className='text-white h-[350px] text-9xl font-bold'>
              AMAZINGLY SIMPLE
            </div>
            <div className='text-white text-sm font-medium'>
              SEO Optimizer with GENAI is a cutting-edge tool designed to revolutionize search engine optimization by leveraging generative AI. It automates content analysis, keyword generation, and optimization strategies to enhance website visibility and ranking. By integrating AI-driven insights, the tool helps businesses create high-quality, SEO-friendly content tailored to search engine algorithms, ensuring improved traffic, relevance, and user engagement.
            </div>
            <div className='pt-10'>
            <div className="pl-4 pt-2 h-[50px] w-[250px] bg-xoraTeal text-center text-2xl font-medium ease-in-out duration-200 hover:scale-110 hover:font-bold hover:opacity-80 rounded-lg cursor-pointer">Try it ...</div>
            </div>
          </div>
          <div className='w-1/2 ml-48 mt-10'>
            <div className="shadow-lg"></div><img src={mainimg}  className='absolute right-[200px] top-[200px] h-[400px] w-[550px] bg-no-repeat bg-cover' />
          </div>
        </div>
      </div>

      <footer className='bg-darkNavy text-white py-4 border-cyan-900 border-t-2'>
        <div className='container mx-auto text-center'>
          <div className='flex justify-center space-x-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
              <i className='fab fa-facebook-f fa-2x'></i>
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
              <i className='fab fa-instagram fa-2x'></i>
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white'>
              <i className='fab fa-linkedin-in fa-2x'></i>
            </a>
          </div>
          <p className='mt-4 text-gray-400'>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;

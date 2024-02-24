import React from 'react'
import { Text } from './Text'
import { Img } from './Img'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'
import Dot from './Dot'

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const matchRoute = (route) => {
      return matchPath({path:route},location.pathname)
    }
  return (
    <>
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between ml-[164px] mr-[181px] my-[15px] w-[76%]">
            <div className="header-row ">
              <Img
                className="h-[50px] cursor-pointer "
                src="images/img_group642.svg"
                alt="Group642"
                onClick={() => navigate('/')}
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-row sm:hidden items-start justify-between pl-[7px] pt-[7px] w-2/5">
              <div className="flex flex-col gap-2.5 items-center justify-start ml-[18px]">
                <Text
                  className={`text-lg cursor-pointer ${matchRoute('/') ? 'text-red-401':'text-black-900'} `}
                  size="txtSourceSansProBold18"
                  onClick={() => navigate('/')}
                >
                  Home
                </Text>
                
                
              </div>
              <Text
                className={`text-lg cursor-pointer ${matchRoute('/about') ? 'text-red-401':'text-black-900'} `}
                size="txtSourceSansProBold18Black900"
                onClick={() => navigate("/about")}
              >
                About
                
              </Text>
              {/* <div className={` h-1.5 rounded-[50%] w-1.5 ${matchRoute('/about') ? 'bg-red-401':''} `}></div> */}
              
              <Text
                className={`text-lg cursor-pointer ${matchRoute('/works') ? 'text-red-401':'text-black-900'} `}
                size="txtSourceSansProBold18Black900"
                onClick={() => navigate("/works")}
              >
                Works
              </Text>
              <Text
                className={`text-lg cursor-pointer ${matchRoute('/contact') ? 'text-red-401':'text-black-900'} `}
                size="txtSourceSansProBold18Black900"
                onClick={() => navigate("/contact")}
              >
                Contact
              </Text>
            </div>
          </div>
        </header>
    </>
  )
}

export default Navbar
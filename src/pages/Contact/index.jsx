import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer1 from "components/Footer1";
import Navbar from "components/Navbar";
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false)
  const [formData, setFormData] = useState({
    from_name: "",
    email: '',
    message: '',
  })

  function handleNavigate() {
    window.location.href = "www.nexus.com";
  }
  const sendEmail = (e) => {
    e.preventDefault();
    setFormData({
      from_name: '',
      email: '',
      message: '',
    })

    emailjs
      .sendForm('serviceid', 'template_duyypb6', e.target, {
        publicKey: 'M4bWn_69MjBf-4Dx3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          
          setEmailSent(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
          setEmailSent(false);
        },
        setEmailSent(false)
      );
      
  };
  
  const handleChange = (e) => {
    console.log(e.target.value)
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sourcesanspro gap-[54px] items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          
          <Navbar/>
        </div>
        <div className="flex flex-col items-start justify-start md:px-5 w-[92%] md:w-full">
          <div className="bg-blue-50 flex flex-col items-center justify-start md:ml-[0] ml-[121px] p-[51px] md:px-10 sm:px-5 rounded-[90px] w-[91%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[76px] h-[381px] items-center justify-end mb-[91px] mt-[72px] p-[72px] md:px-10 sm:px-5"
              style={{ backgroundImage: "url('images/img_group744.svg')" }}
            >
              <Text
                className="mt-1 sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtSourceSansProBold50"
              >
                <span className="text-black-900 font-sourcesanspro text-left font-bold">
                  Get in{" "}
                </span>
                <span className="text-red-401 font-sourcesanspro text-left font-bold">
                  touch
                </span>
              </Text>
              <Text
                className="leading-[40.00px] text-center text-gray-700 text-xl w-[86%] sm:w-full"
                size="txtSourceSansProRegular20Gray700"
              >
                Stay connected with us, we will help you with your various
                needs. we will provide the best service in technical and
                consulting matters. You can provide your needs or something you
                ask in the form below
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[41px] items-center justify-end md:ml-[0] ml-[120px] mt-[100px] w-[91%] md:w-full">
            <div className="bg-white-A700  md:h-[425px] sm:h-[538px] h-[599px] md:mt-0 mt-[15px] p-[70px] md:px-10 sm:px-5 relative rounded-[20px] shadow-bs6 w-[66%] md:w-full">
              <div className="absolute flex  flex-col gap-[23px] inset-x-[0] items-center justify-start mx-auto pb-[72px] rounded-[5px] top-[12%] w-3/4">
                <Input
                  name="Group843"
                  placeholder="Send Message"
                  className="font-bold leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-left text-xl w-full"
                  wrapClassName="pr-[35px] w-full"
                  size="xs"
                ></Input>
                <div className="flex flex-col items-center justify-start rounded-[5px] w-full">
                  <form ref={form} onSubmit={sendEmail} >
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row items-center justify-between gap-4  ">
                      <input
                        name="from_name"
                        value = {formData.from_name}
                        onChange = {handleChange}
                        placeholder="Your Name"
                        className="font-semibold leading-[normal] p-3 bg-gray-100  border-2 border-gray-200 rounded-sm placeholder:text-gray-400 placeholder:italic text-base w-1/2"
                        
                        type="text"
                        
                      ></input>
                      <input
                        name="email"
                        value = {formData.email}
                        onChange = {handleChange}
                        placeholder="Your Email"
                        className="font-semibold leading-[normal] p-3 bg-gray-100  border-2 border-gray-200 rounded-sm placeholder:text-gray-400 placeholder:italic text-base w-1/2"
                        
                        type="email"
                        
                      ></input>
                    </div>
                    <textarea
                      className="bg-gray-100 border-2 border-gray-200 font-bold leading-[normal] placeholder:italic pb-[35px] pl-[19px] sm:pr-5 pr-[35px] pt-6 rounded-[5px] text-base placeholder:text-gray-400 text-gray-400 text-left w-full"
                      name="message"
                      value={formData.message}
                      onChange = {handleChange}
                      placeholder="Your Message..."
                    ></textarea>

                    <div>
                      <Button
                        className=" bottom-[17%] cursor-pointer leading-[normal] left-[14%] min-w-[182px] rounded-[25px] text-center text-xl"
                        color="green_600"
                      >
                          Send
                      </Button>
                    </div>

                    <div>
                      {
                        emailSent ? <span className="text-green-600_63 italic text-lg font-bold " >Email Sent</span> : <span></span>
                      }
                    </div>

                  </div>
                  </form>
                </div>
                
              </div>
              
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-center mb-3 p-[33px] sm:px-5 rounded-[20px] shadow-bs6 w-[32%] md:w-full">
              <div className="flex flex-col gap-[31px] items-center justify-start mb-9 mt-11 w-[90%] md:w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-[98%] md:w-full">
                  <Input
                    name="Group762"
                    placeholder="Contact Information"
                    className="font-bold leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-left text-xl w-full"
                    wrapClassName="pr-[35px] w-full"
                    size="sm"
                  ></Input>
                  <div className="flex flex-col gap-[29px] items-start justify-start ml-1 md:ml-[0] w-[92%] md:w-full">
                    <div className="flex flex-row gap-[25px] items-start justify-start w-[74%] md:w-full">
                      <Img
                        className="h-6 w-6 "
                        src="images/img_frame666.svg"
                        alt="Frame666"

                      />
                      <Text
                        className="text-[17px] text-gray-401"
                        size="txtSourceSansProSemiBold17"
                      >
                        anshj9y@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start w-[70%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_globe.svg"
                        alt="globe"
                      />
                      <a href="https://github.com/alwaysAnsh/Nexus" target="_blank">
                      <Text
                        className="common-pointer mt-1 text-[17px] text-gray-401"
                        size="txtSourceSansProSemiBold17"
                        // onClick={handleNavigate}
                      >
                        www.nexus.com
                      </Text>
                      </a>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start w-full">
                      <Img
                        className="h-6 mt-[3px] w-6"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="sm:flex-1 text-[17px] text-gray-401 w-4/5 sm:w-full"
                        size="txtSourceSansProSemiBold17"
                      >
                        Near Rangmahal Garden, Indore
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Text
                        className="mt-1 text-[17px] text-gray-401"
                        size="txtSourceSansProSemiBold17"
                      >
                        7617231365
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[41px] justify-start w-full">
                  <div className="flex flex-col gap-[25px] items-start justify-start mr-2 w-[98%] md:w-full">
                    <Text
                      className="text-gray-600 text-xl"
                      size="txtSourceSansProBold20Gray600"
                    >
                      Social Media
                    </Text>
                    <Line className="bg-gray-200 h-px w-full" />
                  </div>
                  <div className="flex flex-row gap-[19px] items-center justify-end md:ml-[0] ml-[31px] w-[89%] md:w-full">
                    <a href="https://www.instagram.com/maha.purush__/" target="_blank">
                      <Img
                        className="h-[47px] md:h-auto object-cover w-[47px] hover:bg-pink-600 hover:border-2 hover:cursor-pointer transition-all duration-200 rounded-full "
                        src="images/img_group270.png"
                        alt="Instagram"
                      />
                    </a>
                    <a href="https://twitter.com/home?lang=en" target="_blank">
                      <Img
                        className="h-[47px] md:h-auto object-cover w-[47px] hover:bg-blue-600 hover:border-2 hover:cursor-pointer transition-all duration-200 rounded-full"
                        src="images/img_group271.png"
                        alt="Twitter"
                      />
                    </a>
                    <a href="https://github.com/alwaysAnsh" target="_blank">
                      <Img
                        className="h-[47px] md:h-auto object-cover w-[47px] hover:bg-black-900 hover:border-2 hover:cursor-pointer transition-all duration-200 rounded-full"
                        src="images/img_group268.png"
                        alt="Github Link"
                      />
                    </a>
                    <a href="mailto:anshj9y@gmail.com" target="_blank" >
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px] hover:bg-pink-600 hover:border-2 hover:cursor-pointer transition-all duration-200 rounded-full"
                      src="images/img_group269.png"
                      alt="email Icon"
                    />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer1 className="bg-gray-801 flex items-center justify-center mt-[108px] rounded-tr-[50px] w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;

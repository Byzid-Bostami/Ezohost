import React,{useState} from 'react';
import { IoMdCheckbox } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";



import banner from "../assets/ezohost_banner.png";
import domain from "../assets/domain.jpg";
import apps from '../assets/apps.png';
import mail from '../assets/email.jpg';

import FaqData from '../FaqData';
import SliderApp from '../components/SliderApp';
import FooterApp from '../components/FooterApp';
import BackToTopButton from '../components/BackToTopButton';



const Home = () => {

  const [annualy, setAnnualy] = useState(false);
  const [faqs, setFaqs] = useState(null);


  const handleFaqClick = (id) => {
    setFaqs(faqs === id ? null : id);
  };

  return (
    <div className='relative -mt-1 space-y-4'> {/* Parent container needs relative positioning */}

      {/* orenge color section start from here */}

      <div className='bg-[#FF6746] pb-16 lg:pb-48 pt-10'>
        <div className='lg:max-w-[1280px] md:max-w-[800px] p-2 md:p-5 max-w-[680px] px-10 grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-6 pt-20'>
          
          {/* Left content */}
          <div className='flex flex-col order-2 md:order-1 space-y-7'>
            <div className='flex items-center justify-center p-2 space-x-1 rounded-lg w-80 bg-slate-100/20'>
              <IoMdCheckbox className='text-xl text-[#79DE82]' />
              <p className='text-lg text-white'>15 Days money back guarantee</p>
            </div>

            <div className='flex flex-col space-y-3'>
              <h1 className='font-bold text-white text-7xl'>Managed Cloud Hosting</h1>
              <p className='text-lg text-slate-200'>Managed, fast, secure cloud hosting platform. Our 24/7 support makes hosting easy from the start.</p>
            </div>

            <div className='flex space-x-7'>
              <button className='px-4 py-2 text-lg bg-white rounded-xl hover:text-white hover:bg-[#79DE82]'>Get Started</button>
              <button className='flex items-center space-x-3 text-lg text-white hover:text-[#79DE82]'>
                <span>Contact Sales</span>
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Banner image */}
          <div className='order-1 lg:absolute lg:right-0 md:order-2'>
            <img src={banner} alt="banner" className='object-cover w-full md:w-auto md:h-auto' />
          </div>

        </div>
      </div>



            {/* orenge color section end here */}



            {/* our service section start */}


      <div className='bg-[#FFFFFF] pb-14 pt-16'>
        <div className='lg:max-w-[1280px] md:max-w-[800px] p-2 md:p-5 max-w-[680px] px-10'>

            <div className='flex flex-col items-center justify-center space-y-5'>
              <h2 className='text-3xl font-bold'>Our Services</h2>
              <p className="max-w-md mx-auto text-lg text-center text-gray-500">
                 Ezohost is a premium cloud hosting platform designed to discover possibilities, manage web projects faster, with industry-leading load times.
              </p>
            </div>

            <div className='grid grid-cols-1 gap-5 pt-16 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1'>

                <div className='bg-[#FF6746] rounded-xl  hover:shadow-[6px_6px] transition-shadow duration-150 hover:shadow-[#E0F1FD] p-9 space-y-4 flex flex-col'>
                    <h2 className='text-3xl font-bold text-white'>Cloud Hosting</h2>
                    <p className="max-w-md pb-16 text-lg text-left text-gray-200">Ezohost Shared or Premium Cloud Web Hosting, Give your site a rocket booster!</p>
                    <FaArrowRight className='self-end text-4xl text-white' />
                </div>

                <div className='bg-[#414154] rounded-xl hover:shadow-[6px_6px] transition-shadow duration-150 hover:shadow-[#E0F1FD] p-9 space-y-4 flex flex-col'>
                    <h2 className='text-3xl font-bold text-white'>Windows RDP</h2>
                    <p className="max-w-md pb-16 text-lg text-left text-gray-200">Claim the best Windows RDP server at affordable price. Now discover your possibilities!</p>
                    <FaArrowRight className='self-end text-4xl text-white' />
                </div>

                <div className='bg-[#0F1113] rounded-xl w-full md:h-64 lg:h-auto box-border md:col-span-2 lg:col-span-1 hover:shadow-[6px_6px] transition-shadow duration-150 hover:shadow-[#E0F1FD] p-9 space-y-4 flex flex-col'>
                    <h2 className='text-3xl font-bold text-white'>Cloud Storage</h2>
                    <p className="max-w-md pb-16 text-lg text-left text-gray-200 md:max-w-full lg:pb-16 md:pb-10">Get highly scalable and affordable Cloud Storage Server with admin Panel.</p>
                    <FaArrowRight className='self-end text-4xl text-white' />
                </div>
                

            </div>

        </div>
      </div>


                {/*our service end */}

            
      
      <div className='bg-[#FFFFFF] pb-14 pt-5'>

        <div className='lg:max-w-[1280px] md:max-w-[800px] p-2 md:p-5 max-w-[680px] lg:px-10 md:px-10 px-0  '>

            <div className='grid grid-cols-1 gap-6 border border-black/25 p-9 md:grid-cols-2 lg:grid-cols-2 rounded-3xl'>
            
                
          <div className='flex flex-col items-start space-y-4 justify-evenly'>
            <div className='flex items-center justify-center w-64 p-2 space-x-1 rounded-lg bg-slate-200'>
              <IoMdCheckbox className='text-xl text-[#79DE82]' />
              <p className='text-lg text-[#FF6746]'>Satisfaction Guaranteed</p>
            </div>

            <div className='flex flex-col space-y-4'>
              <h2 className='max-w-md text-3xl font-bold'>Ezohost is Powered by Industry-Leading Cloud Providers</h2>
              <p className='max-w-md text-xl text-slate-600'>We operate on leading providers that include Google Cloud, Azure, DigitalOcean, Vultr & Linode to create a powerful and technically superior hosting service.</p>
            </div>

            <div className='flex flex-row space-x-6 lg:space-x-12 md:space-x-11 pt-7'>
              <div className='flex flex-col space-y-2'>
                <h1 className='text-[#FF6746] text-4xl font-bold'>5</h1>
                <p className='text-xl text-slate-600'>Providers</p>
              </div>

              <div className='flex flex-col space-y-2'>
                <h1 className='text-[#FF6746] text-4xl font-bold'>500+</h1>
                <p className='text-xl text-slate-600'>Active users</p>
              </div>

              <div className='flex flex-col space-y-2'>
                <h1 className='text-[#FF6746] text-4xl font-bold'>32+</h1>
                <p className='text-xl text-slate-600'>Locations</p>
              </div>
              
            </div>

          </div>


          <div className='content-center pt-6 md:pt-0 lg:pt-0'>
            <img className='rounded-3xl' src={domain} alt="domain" />
          </div>

            </div>

        </div>

      </div>



          {/* simple pricing start */}


      <div className='bg-[#FFFFFF] pb-14 pt-4'>

        <div className='lg:max-w-[1280px] md:max-w-[800px] p-2 md:p-5 space-y-5 max-w-[680px] lg:px-10 md:px-10 px-0'>

            <div className='flex flex-col items-center justify-center space-y-5'>
              <h2 className='text-3xl font-bold'>Simple Pricing</h2>
              <p className="max-w-md mx-auto text-lg text-center text-gray-500">
                Our transparent pricing ensures affordability without compromising on premium features and support
              </p>
            </div>



            <div className='px-2 space-y-12 pt-7 '>

              <div className='flex justify-center space-x-5 text-lg' >

                <button
                 onClick={()=>{setAnnualy(false)}}
                 className={`py-3 px-7 rounded-full ${!annualy? "text-white bg-black" : "text-black border border-black/20 hover:text-[#FF6746]"} `}
                >Monthly</button>

                <button
                 onClick={()=>{setAnnualy(true)}}
                 className={`py-3 px-7 rounded-full ${annualy? "text-white bg-black" : "text-black border border-black/20 hover:text-[#FF6746]"} `}
                >Annualy</button>
                  
              </div>



             


              {!annualy? (<div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3'> {/* monthly card start */}

<div className='flex flex-col items-center p-10 space-y-4 border rounded-3xl hover:border-black border-black/30 '> {/* ffirst card */}
  <h2 className='text-xl font-semibold'>EASY</h2>
  <p className='text-5xl font-bold'><span className='text-5xl font-extrabold'>৳</span> 349 <span className='text-3xl font-medium'>/mo</span></p>
  <p className='text-xl text-center text-slate-600'>Ideal for baby websites, Start faster!</p>

  <ul className='self-start pt-8 pb-8 space-y-3 text-xl text-slate-600'>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">2 Websites</li>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">10GB SSD</li>
    <li className="before:content-['✓'] flex items-center before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered Traffic <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
    <li className="before:content-['✓'] flex items-center before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered Bandwidth <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free SSL</li>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Daily Backup</li>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free CDN</li>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free Migration</li>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">24/7 Live Support</li>
  </ul>

  <button className='w-full px-6 py-3 text-xl text-black border rounded-xl border-black/25 hover:bg-black hover:text-white'>Get started Now</button>

</div>


<div className='flex flex-col relative items-center p-10 space-y-4 border rounded-3xl bg-[#FF6746] text-white '> {/* second card */}
  <h2 className='text-xl font-semibold'>PRO</h2>
  <p className='text-5xl font-bold'><span className='text-5xl font-extrabold'>৳</span> 599 <span className='text-3xl font-medium'>/mo</span></p>
  <p className='px-4 text-xl text-center text-white'>Best performance on a budget</p>

  <p className='absolute px-2 py-1 bg-black border border-white border-dotted rounded-full right-5 top-2'>Popular</p>

  <ul className='self-start pt-8 pb-8 space-y-3 text-xl text-white'>
    <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">5 Websites</li>
    <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">50GB SSD</li>
    <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif flex items-center hover:text-[#79DE82]">Unmetered Traffic <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
    <li className="before:content-['✓'] flex items-center before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered Bandwidth <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
    <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free SSL</li>
    <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Daily Backup</li>
    <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free CDN</li>
    <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free Migration</li>
    <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">24/7 Live Support</li>
  </ul>

  <button className='w-full px-6 py-3 text-xl text-black bg-white rounded-xl hover:bg-black hover:text-white'>Get started Now</button>

</div>



<div className='flex flex-col items-center p-10 space-y-4 text-white bg-black border rounded-3xl '> {/* third card */}
  <h2 className='text-xl font-semibold'>ENTERPRISE</h2>
  <p className='text-5xl font-bold'><span className='text-5xl font-extrabold'>৳</span> 1.2K <span className='text-3xl font-medium'>/mo</span></p>
  <p className='px-6 text-xl text-center text-slate-500 '>Get optimized web resources</p>

  <ul className='self-start pt-8 pb-8 space-y-3 text-xl text-white'>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">15 Websites</li>
    <li className="before:content-['✓'] flex items-center before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered SSD <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
    <li className="before:content-['✓'] flex items-center before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered Traffic <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
    <li className="before:content-['✓'] flex items-center before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered Bandwidth <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free SSL</li>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Daily Backup</li>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free CDN</li>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free Migration</li>
    <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">24/7 Live Support</li>
  </ul>

  <button className='w-full px-6 py-3 text-xl text-white border rounded-xl border-white hover:bg-[#FF6746] hover:border-0'>Get started Now</button>

</div>





</div>


) : (<div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3'>

  <div className='flex flex-col items-center p-10 space-y-4 border rounded-3xl hover:border-black border-black/30 '> {/* ffirst card */}
    <h2 className='text-xl font-semibold'>EASY</h2>
    <p className='text-5xl font-bold'><span className='text-5xl font-extrabold'>৳</span> 2.3K <del className='text-[#FF6746] text-base'>3.5K</del> <span className='text-3xl font-medium'>/yr</span></p>
    <p className='text-xl text-center text-slate-600'>Ideal for baby websites, Start faster!</p>

    <ul className='self-start pt-8 pb-8 space-y-3 text-xl text-slate-600'>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">2 Websites</li>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">10GB SSD</li>
      <li className="before:content-['✓'] flex items-center before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered Traffic <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
      <li className="before:content-['✓'] flex items-center before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered Bandwidth <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free SSL</li>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Daily Backup</li>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free CDN</li>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free Migration</li>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">24/7 Live Support</li>
    </ul>

    <button className='w-full px-6 py-3 text-xl text-black border rounded-xl border-black/25 hover:bg-black hover:text-white'>Get started Now</button>

  </div>


  <div className='flex flex-col relative items-center p-10 space-y-4 border rounded-3xl bg-[#FF6746] text-white '> {/* second card */}
    <h2 className='text-xl font-semibold'>PRO</h2>
    <p className='text-5xl font-bold'><span className='text-5xl font-extrabold'>৳</span> 4.7K <del className='text-base text-white'>7K</del> <span className='text-3xl font-medium'>/yr</span></p>
    <p className='px-4 text-xl text-center text-white'>Best performance on a budget</p>

    <p className='absolute px-2 py-1 bg-black border border-white border-dotted rounded-full right-5 top-2'>Popular</p>

    <ul className='self-start pt-8 pb-8 space-y-3 text-xl text-white'>
      <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">5 Websites</li>
      <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">50GB SSD</li>
      <li className="before:content-['✓'] flex items-center before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered Traffic <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
      <li className="before:content-['✓'] flex items-center before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered Bandwidth <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
      <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free SSL</li>
      <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Daily Backup</li>
      <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free CDN</li>
      <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free Migration</li>
      <li className="before:content-['✓'] before:text-white before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">24/7 Live Support</li>
    </ul>

    <button className='w-full px-6 py-3 text-xl text-black bg-white rounded-xl hover:bg-black hover:text-white'>Get started Now</button>

  </div>



  <div className='flex flex-col items-center p-10 space-y-4 text-white bg-black border rounded-3xl '> {/* third card */}
    <h2 className='text-xl font-semibold'>ENTERPRISE</h2>
    <p className='text-5xl font-bold'><span className='text-5xl font-extrabold'>৳</span> 9.5K <del className='text-[#FF6746] text-base'>13K</del> <span className='text-3xl font-medium'>/yr</span></p>
    <p className='px-6 text-xl text-center text-slate-500 '>Get optimized web resources</p>

    <ul className='self-start pt-8 pb-8 space-y-3 text-xl text-white'>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">15 Websites</li>
      <li className="before:content-['✓'] flex items-center before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered SSD <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
      <li className="before:content-['✓'] flex items-center before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered Traffic <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
      <li className="before:content-['✓'] flex items-center before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Unmetered Bandwidth <span className='pl-2 text-base'><FaRegCircleQuestion /></span></li>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free SSL</li>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Daily Backup</li>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free CDN</li>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">Free Migration</li>
      <li className="before:content-['✓'] before:text-gray-600 before:mr-3 before:font-extrabold before:font-serif hover:text-[#79DE82]">24/7 Live Support</li>
    </ul>

    <button className='w-full px-6 py-3 text-xl text-white border rounded-xl border-white hover:bg-[#FF6746] hover:border-0'>Get started Now</button>

  </div>





</div>


)}




            </div>

        </div>

      </div>



          {/* simple pricing end */}



      <div className='bg-[#F3F6F9] pb-24 pt-16 '>
        <div className='lg:max-w-[1280px] md:max-w-[800px] p-2 space-y-5 max-w-[680px] lg:px-8 md:px-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>

            <div className='flex flex-col space-y-12'>
              <div className='space-y-4'>
                <h2 className='text-4xl font-bold'>Ezohost is simple and transparent but powerful for your websites</h2>
                <p className='max-w-lg text-xl text-slate-600'>we have all the latest and the greatest technologies integrated on our platform. CyberPanel, cPanel, LiteSpeed WebServer, NGINX, Varnish Cache, Redis, MariaDB, MySQL. These components help deliver a fast hosting stack on Ezohost.</p>
              </div>

              <div className='flex flex-col space-y-3 lg:w-[500px]'>
                {FaqData.map((faq) => (
                  <div className='space-y-3' key={faq.id}>
                    {/* Make h2 tag clickable */}
                    <h2 
                      className={`flex justify-between items-center text-lg font-bold cursor-pointer bg-white rounded-none p-4 ${faqs === faq.id ? "text-[#FB7356]" : "text-black"}`} 
                      onClick={() => handleFaqClick(faq.id)} // Click handler to open/close FAQ
                    >
                      {faq.title} 
                      {faqs === faq.id ? <FaMinus /> : <FaPlus />} {/* Show minus if open, plus if closed */}
                    </h2>
                    {/* Conditionally render description if this FAQ is open */}
                    {faqs === faq.id && (
                      <p className='p-4 text-lg bg-white text-slate-600'>{faq.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className='content-center'>
              <img src={apps} alt="apps" />
            </div>

        </div>
      </div>


                    {/* slider start */}


      <div className='pt-16 pb-16 bg-white'>

            <div className='lg:max-w-[1280px] md:max-w-[800px] p-6 space-y-5 max-w-[680px] lg:px-8 md:px-8 px-4'>

              <div className='bg-[#0D1C30] rounded-3xl p-10 space-y-12'>

                <div className='flex flex-col items-center justify-center space-y-5'>
                  <h2 className='text-2xl font-bold text-white lg:text-3xl md:text-3xl'>Client Success Stories</h2>
                  <p className='text-xl text-center text-gray-400'>Discover what our happy customers have to say about their experience with us. Their success stories and positive feedback speak volumes about the quality and reliability of our hosting solutions.</p>
                </div>

                <div className='relative p-4'>
                  <SliderApp />
                </div>

              </div>
                
            </div>


      </div>

                    {/* slider ends */}


      <div className='pb-16 bg-white '>
        <div className='lg:max-w-[1280px] md:max-w-[800px] p-6 space-y-5 max-w-[680px] lg:px-8 md:px-8 px-4'>
          <div className='grid grid-cols-1 gap-12 p-8 border border-black/25 rounded-3xl md:grid-cols-2 lg:grid-cols-2'>
              
                <div className='content-center'>
                  <img className='lg:w-[500px] rounded-3xl' src={mail} alt="mail" />
                </div>

                <div className='flex flex-col items-start space-y-5'>
                  <h2 className='text-3xl font-bold'>Build your website in no time with Ezo!</h2>
                  <p className='text-xl text-slate-600'>We provide both <span className='font-bold'>shared hosting</span>, which is a cost-effective option ideal for smaller websites and blogs, and <span className='font-bold'>premium cloud hosting</span> with dedicated resources.</p>

                  <div className='flex flex-col items-start space-y-4'>
                  <div className='flex items-center justify-center space-x-1'>
                    <IoMdCheckbox className='text-xl text-[#79DE82]' />
                    <p className='text-lg text-slate-600'>Get all essential hosting features with the ease of 1-Click</p>
                  </div>

                  <div className='flex items-center justify-center space-x-1'>
                    <IoMdCheckbox className='text-xl text-[#79DE82]' />
                    <p className='text-lg text-slate-600'>Get dedicated resources for a limitless performance</p>
                  </div>

                  <div className='flex items-center justify-center space-x-1'>
                    <IoMdCheckbox className='text-xl text-[#79DE82]' />
                    <p className='text-lg text-slate-600'>Our dedicated experts are always here to help, 24/7</p>
                  </div>

                  <div className='flex items-center justify-center space-x-1'>
                    <IoMdCheckbox className='text-xl text-[#79DE82]' />
                    <p className='text-lg text-slate-600'>Choose the cloud provider that best suits your needs</p>
                  </div>

                  <div className='flex items-center justify-center space-x-1'>
                    <IoMdCheckbox className='text-xl text-[#79DE82]' />
                    <p className='text-lg text-slate-600'>Fully Automated and Managed Platform</p>
                  </div>
                  
                  </div>
                  
                </div>

          </div>
        </div>
      </div>

      
      <div className='pb-16 bg-white '>
        <div className='lg:max-w-[1280px] md:max-w-[800px] p-6 space-y-5 max-w-[680px] lg:px-8 md:px-8 px-4'>
          <div className='bg-[#FF6746] rounded-3xl lg:p-20 items-center md:p-10 p-6 flex flex-col space-y-8 '>

            <h2 className='max-w-lg text-4xl font-bold text-center text-white' >
            Need custom plan or storage solution or anything?
            </h2>

            <div className='flex space-x-7'>
              <button className='px-4 py-2 text-lg bg-white rounded-xl hover:text-white hover:bg-[#79DE82]'>Get Started</button>
              <button className='flex items-center space-x-3 text-lg text-white hover:text-[#79DE82]'>
                <span>Contact Sales</span>
                <FaArrowRight />
              </button>
            </div>

          </div>
        </div>
      </div>

      <BackToTopButton />
      <FooterApp />

      
      
    </div>
  );
}

export default Home;

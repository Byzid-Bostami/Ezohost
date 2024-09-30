import React from 'react'

import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import {Link} from 'react-router-dom';


const FooterApp = () => {
  return (
    <div>


<div className='bg-[#0D1C30] p-5 pb-8'>

<div className='lg:max-w-[1280px] md:max-w-[800px] p-10 space-y-11 max-w-[680px] lg:px-8 md:px-8 px-4 flex flex-col'>

    <div className='space-y-4 text-white'>
        <h2 className='text-3xl font-bold'>Need Some Help?</h2>
        <p className='text-xl lg:max-w-2xl'>Whether you're stuck or just want some tips on where to start, hit up our experts anytime. We're here to help!</p>
    </div>


    <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3'>

        <div className='flex flex-col items-start p-7 bg-[#122033] rounded-2xl space-y-5'>
            <LuMessagesSquare className='text-5xl text-blue-600' />
            <div className='flex flex-col space-y-3 '>
                <h2 className='text-2xl font-bold text-white'>Ezohost Sales Help</h2>
                <p className='text-lg text-slate-400'>24/7 Through the Chat Widget or <br /> Call +88 016 016 00070</p>
            </div>
            <button className='flex items-center space-x-3 text-lg text-white hover:text-[#79DE82]'>
                <span>Chat Now</span>
                <FaArrowRight />
            </button>
        </div>

        <div className='flex flex-col items-start p-7 bg-[#122033] rounded-2xl space-y-5'>
            <CgProfile className='text-5xl text-green-400' />
            <div className='flex flex-col space-y-3 '>
                <h2 className='text-2xl font-bold text-white'>Customer Support Chat</h2>
                <p className='text-lg text-slate-400'>24/7/365 Through the Panel Options</p>
            </div>
            <button className='flex items-center space-x-3 text-lg text-white hover:text-[#79DE82]'>
                <span>Go to Panel</span>
                <FaArrowRight />
            </button>
        </div>

        <div className='flex flex-col items-start p-7 bg-[#122033] rounded-2xl space-y-5'>
            <LuMessagesSquare className='text-5xl text-yellow-400' />
            <div className='flex flex-col space-y-3 '>
                <h2 className='text-2xl font-bold text-white'>Customer Support Email</h2>
                <p className='text-lg text-slate-400'>24/7/365 Through the Panel Options</p>
            </div>
            <button className='flex items-center space-x-3 text-lg text-white hover:text-[#79DE82]'>
                <span>Go to Palen</span>
                <FaArrowRight />
            </button>
        </div>

    </div>

</div>

</div>


<div className='bg-[#13243C] pt-10 pb-10 text-white'>

    <div className='lg:max-w-[1280px] md:max-w-[800px] p-10 max-w-[680px] lg:px-12 md:px-10 px-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5'>

        <div className='flex flex-col col-span-2 space-y-4 md:col-span-1 lg:col-span-1 pb-7 md:pb-0 lg:pb-0'>
            <Link className='text-3xl font-bold' to="/"> Ezohost </Link> 
            <div className='space-y-2'>
                <p className='text-lg'>Connect with us</p>
                <button className='flex flex-row space-x-5 text-3xl md:space-x-3'>
                <FaFacebook className='hover:text-blue-500' />
                <FaTwitter className='hover:text-blue-500' />
                <FaYoutube className='hover:text-blue-500' />
                <FaLinkedin className='hover:text-blue-500' />
                </button>
            </div>
            <p className='pt-3 text-xl'>Copyright © 2024 Ezo, LLC</p>
        </div>

        <div className='flex flex-col space-y-6 pb-7 lg:pb-0 md:pb-0'>
            <h2 className='text-3xl font-bold uppercase '>Products</h2>
            <ul className='space-y-3 text-lg'>
                <li className='cursor-pointer hover:text-green-400'>Shared Cloud Hosting</li>
                <li className='cursor-pointer hover:text-green-400'>Premium Cloud Hosting</li>
                <li className='cursor-pointer hover:text-green-400'>Windows RDP Server</li>
                <li className='cursor-pointer hover:text-green-400'>Cloud Storage Server</li>
                <li className='cursor-pointer hover:text-green-400'>Cloud Proxy Server</li>
                <li className='cursor-pointer hover:text-green-400'>Search Domains</li>
                <li className='cursor-pointer hover:text-green-400'>Migrate to Ezo</li>
            </ul>
        </div>

        <div className='flex flex-col space-y-6'>
            <h2 className='text-3xl font-bold uppercase'>COMPANY</h2>
            <ul className='space-y-3 text-lg'>
                <li className='cursor-pointer hover:text-green-400'>About</li>
                <li className='cursor-pointer hover:text-green-400'>Affiliates</li>
                <li className='cursor-pointer hover:text-green-400'>Blog</li>
                <li className='cursor-pointer hover:text-green-400'>Careers</li>
                <li className='cursor-pointer hover:text-green-400'>Community</li>
                <li className='cursor-pointer hover:text-green-400'>News</li>
                <li className='cursor-pointer hover:text-green-400'>Partners</li>
                <li className='cursor-pointer hover:text-green-400'>Press Releases</li>
                <li className='cursor-pointer hover:text-green-400'>Reviews</li>
            </ul>
        </div>

        <div className='flex flex-col space-y-6'>
            <h2 className='text-3xl font-bold uppercase'>Legal</h2>
            <ul className='space-y-3 text-lg'>
                <li className='cursor-pointer hover:text-green-400'>Legal Information</li>
                <li className='cursor-pointer hover:text-green-400'>Privacy Policy</li>
                <li className='cursor-pointer hover:text-green-400'>Report Abuse</li>
                <li className='cursor-pointer hover:text-green-400'>Terms of Service</li>
                <li className='cursor-pointer hover:text-green-400'>Accessibility</li>
                <li className='cursor-pointer hover:text-green-400'>WHOIS Lookup</li>
            </ul>
        </div>

    </div>

</div>


    </div>
  )
}

export default FooterApp;
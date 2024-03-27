import React from 'react'
import { GrLinkedinOption, GrMail, GrGithub } from 'react-icons/gr'
import { BiSolidPhoneCall } from "react-icons/bi"

function Footer() {
    return (
        <div>
            <div className=' w-[screen] bg-black'>
                <div className=' flex flex-row p-2 flex-wrap justify-around '>
                    <a href='' target='blank ' className='text-lg flex flex-row text-violet-300'>
                        <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400' >
                            <GrLinkedinOption className="text-white"></GrLinkedinOption>
                        </div>
                        <span className='text-white ml-1 mt-[0.1rem]'>Intellipaat</span>
                    </a>


                    <a href='' target='blank ' className='text-lg flex flex-row text-violet-300'>
                        <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400' >
                            <GrMail className="text-white"></GrMail>
                        </div>
                        <span className='text-white ml-1 mt-[0.1rem]'>Intellipaat</span>
                    </a>


                    <a href='//' target='blank ' className='text-lg flex flex-row text-violet-300'>
                        <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400' >
                            <BiSolidPhoneCall className="text-white"></BiSolidPhoneCall>
                        </div>
                        <span className='text-white ml-1 mt-[0.1rem]'>012345679</span>
                    </a>


                    <a href='//' target='blank ' className='text-lg flex flex-row text-violet-300'>
                        <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400' >
                            <GrGithub className="text-white"></GrGithub>
                        </div>
                        <span className='text-white ml-1 mt-[0.1rem]'>Intellipaat</span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer

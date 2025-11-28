import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { LuUserRoundCheck } from "react-icons/lu";

import { TbSunMoon } from "react-icons/tb";
import { IoMdImages } from "react-icons/io";
import { BiTachometer } from "react-icons/bi";
import { AiOutlineDrag } from "react-icons/ai";
import { FaRegPlayCircle } from "react-icons/fa";
import Link from 'next/link';

function Card({title , icon , content,link}) {
  return (      <Link href={link?link:""} className='flex cursor-pointer flex-col gap-5  font-bold justify-center items-center rounded-2xl   hover:scale-105 transition shadow-black shadow-2xl bg-neutral-900/90 border text-white border-[#1B998B]'>
                  
                      <span className='text-4xl'>
                        {
                          icon=="login"?<LuUserRoundCheck/>:
                          icon=="theme"?<TbSunMoon/>:
                          icon=="gallery"?<IoMdImages/>:
                          icon=="dashboard"?<BiTachometer/>:
                          icon=="d&d"?<AiOutlineDrag/>:
                          icon=="media"?<FaRegPlayCircle/>:
                          ""
                        }
                      </span>
                      <h3 className='text-2xl'>
                          {title}
                      </h3>
                      <p className='text-white text-xs  opacity-40'>
                        {content}
                      </p>
                  
                  </Link>
  )
}

export default Card
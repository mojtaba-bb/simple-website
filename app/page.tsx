"use client"

import Card from '@/components/Cards';
import ShaderBackground from '@/components/ui/shader-background';
import { useState } from 'react';


export default function Home() {
  const [cards, setCards] = useState([
    {
      title:"Login Page",
      icon:"login",
      content:"Secure Authentication Flow",
      link:"/login"
    },
    {
      title:"Theme Switcher",
      icon:"theme",
      content:"Dynamic Theme Management",
      link:"/theme-switcher"
    },
    {
      title:"Gallery",
      icon:"gallery",
      content:"Responsive Image Layout"
    },
    {
      title:"Dashboard",
      icon:"dashboard",
      content:"Data Visualization"
    },
    {
      title:"Drag and Drop",
      icon:"d&d",
      content:"Intractive UI Handling"
    },
    {
      title:"Media player",
      icon:"media",
      content:"Custom Audio/Video Controls"
    },
  ])

  return (
    <div className=" relative min-h-screen">
        <ShaderBackground
          color='#1B998B'
        
        />
        <div className='w-10/12 p-10 gap-5 px-30   grid grid-rows-2 grid-cols-3 h-10/12 absolute left-1/2 top-1/2 -translate-1/2 border border-[#1B998B]  bg-[#DECDF5]/10 rounded-2xl backdrop-blur-2xl'>
          {
            cards.map((card , i)=>(
              <Card key={i} link={card.link} title={card.title} icon={card.icon} content = {card.content} />
            ))
          }

        </div>
    </div>
  );
}

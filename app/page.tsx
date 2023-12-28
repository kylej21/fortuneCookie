'use client'
import {useForm, Controller} from "react-hook-form";
import { TextField, Button, Callout } from '@radix-ui/themes';
import axios from 'axios';
import {useState} from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import { createSchema } from "@/app/createSchema";
import { useRouter } from "next/navigation";
import Image from "next/image"
import fortuneCookie from "./public/fortuneCookie.png"
interface IssueForm{
    title: string;
    description: string;
}

const Home = () => {
  const router = useRouter();
  const {register, control, handleSubmit} = useForm<IssueForm>({
    resolver: zodResolver(createSchema)
});
const [error,setError]= useState('');
  
  var fortuneText = "";
  return (
    <div className="flex text-black h-full w-full flex-col items-center space-y-10 ">
        <div className = "text-6xl text-black pb-10">
          Fortune Cookie Creator
        </div>
        <div className = "flex flex-col text-4xl text-gray-800 items-center justify-center text-center space-y-10">
          <b className="pb-52">CLICK ME!</b>
          <Button className="bg-gray-50"
              onClick= {async() =>{
                try {
                  var data = await axios.get('https://api.adviceslip.com/advice');
                  fortuneText= data.data.slip["advice"];
                  document.getElementById('FortuneOut')!.textContent = fortuneText;
                } catch (error) {
                    setError('Error fetching data');
                }
              }}>
            <Image 
              alt = "Fortune Cookie Pic"
              src ={fortuneCookie}
              width={400}
              height={400}
              />
          </Button>
          <div className="flex border-black pt-40 pb-32">
              <p id="FortuneOut">Test text</p>
          </div>
        </div>
    </div>
    
  )
}

export default Home
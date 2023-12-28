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
    <div className="flex text-black h-screen w-full flex-col items-center space-y-10 ">
        <div className = "text-6xl text-black pb-10">
          Analysis
        </div>
        <div className = "flex flex-col text-4xl text-gray-800 items-center justify-center text-center space-y-10">
          <div className="flex border-black pt-40 pb-32">
              <p id="FortuneOut">In Progress</p>
          </div>
        </div>
    </div>
    
  )
}

export default Home
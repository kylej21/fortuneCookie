import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client"
import { createSchema } from "../../createSchema";
export async function POST(request: NextRequest){
    const body = await request.json();
    console.log(body);
    return NextResponse.json(body, {status:201});
}   

import bcrypt from "bcrypt";
import prisma from '../../../libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request:Request){
    try{
    const body = await request.json();
    const {name,email,password} = body;

    if(!email || !password || !name){
        return new NextResponse('Missing info',{status: 400})
    }

    const hashedPassword = await bcrypt.hash(password,12)

    const newUser = await prisma.user.create({data:{name,email,hashedPassword}})
    return NextResponse.json(newUser)
}catch(err){
    console.log(err)
}
}
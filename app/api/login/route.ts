

import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; //prisma is something to connect nextJS with mysql, we can use tauri too i havent tried that
import bcrypt from 'bcrypt'; // this one is just to decrypt passwords, right now passwords are saved as hashcodes

export async function POST(request: Request) {
  const { role, email, password } = await request.json();

  // Validate the user in the database based on role and email
  const user = await prisma.user.findFirst({
    where: {
      email,
      role, 
    },
  });


  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password); 
    if (isPasswordValid) {
      return NextResponse.json({  id: user.id, role: user.role, name: user.name}, { status: 200 });
    }
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}

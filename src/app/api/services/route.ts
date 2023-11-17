import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next';
import DatabaseHelper from '@/database/helpers/dbHelper';

const db = new DatabaseHelper();

export async function GET() {
  try {
    const services = await db.getAllServices();
    return NextResponse.json({ services });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

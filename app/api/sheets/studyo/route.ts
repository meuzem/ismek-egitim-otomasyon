import { NextResponse } from 'next/server';

const SHEET_ID = process.env.GOOGLE_SHEETS_STUDYO_ID || '';

export async function GET() {
  try {
    // TODO: Google Sheets API - Takvim verilerini çek
    return NextResponse.json({ data: [], success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Veri çekilemedi', success: false }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // TODO: Eğitmen atama - Sheets'e yaz
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'İşlem başarısız', success: false }, { status: 500 });
  }
}
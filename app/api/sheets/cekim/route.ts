import { NextResponse } from 'next/server';

const SHEET_ID = process.env.GOOGLE_SHEETS_CEKIM_ID || '';

export async function GET() {
  try {
    // TODO: Google Sheets API - Çekim takip verilerini çek
    return NextResponse.json({ data: [], success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Veri çekilemedi', success: false }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    // TODO: Checkbox güncellemesi
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Güncelleme başarısız', success: false }, { status: 500 });
  }
}
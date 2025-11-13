import { NextResponse } from 'next/server';

const SHEET_ID = process.env.GOOGLE_SHEETS_EGITIM_ID || '';

export async function GET() {
  try {
    // TODO: Google Sheets API entegrasyonu
    const mockData = [
      {
        id: "1",
        dal: "Güzel Sanatlar",
        alan: "Sanat ve Tasarım",
        bolum: "Fotoğraf",
        egitim: "Drone Fotoğrafçılığı 1",
        egitmen: "Bülent Eren",
        durum: "Montaj Sırasında",
        icerikBaslamaTarihi: "02.10.2025",
        notlar: "Toplantı yapıldı"
      }
    ];

    return NextResponse.json({ data: mockData, success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Veri çekilemedi', success: false }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // TODO: Google Sheets'e ekle
    return NextResponse.json({ success: true, message: 'Eklendi' });
  } catch (error) {
    return NextResponse.json({ error: 'Eklenemedi', success: false }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    // TODO: Google Sheets'ten sil
    return NextResponse.json({ success: true, message: 'Silindi' });
  } catch (error) {
    return NextResponse.json({ error: 'Silinemedi', success: false }, { status: 500 });
  }
}

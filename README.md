# İSMEK Uzaktan Eğitim Otomasyon Sistemi

Modern Next.js 14 tabanlı eğitim ve stüdyo çekim yönetim platformu.

## Özellikler

- 📊 **Dashboard**: Genel bakış ve istatistikler
- 📚 **Eğitim Takibi**: Tüm eğitimlerin detaylı takibi
- 📅 **Stüdyo Çekim Takvimi**: İnteraktif çekim planlaması
- 🎬 **Çekim Takip**: Çekim süreçlerinin adım adım izlenmesi
- 🔄 **Google Sheets Entegrasyonu**: Otomatik veri senkronizasyonu
- 🔔 **Pushbullet Bildirimleri**: Anlık güncellemeler
- 🌙 **Dark Mode**: Göz dostu karanlık tema desteği

## Teknolojiler

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui Components
- Google Sheets API
- Pushbullet API

## Kurulum

\`\`\`bash
npm install
npm run dev
\`\`\`

Uygulama http://localhost:3000 adresinde çalışacaktır.

## Çevre Değişkenleri

\`.env.local\` dosyası oluşturun:

\`\`\`
GOOGLE_SHEETS_API_KEY=your_api_key
PUSHBULLET_API_KEY=your_pushbullet_key
NEON_DATABASE_URL=your_neon_connection_string
\`\`\`

## Dağıtım

Vercel'e otomatik dağıtım için GitHub repository'yi bağlayın.

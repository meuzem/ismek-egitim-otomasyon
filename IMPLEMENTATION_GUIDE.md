# İSMEK Eğitim Otomasyon Sistemi

## 📊 Proje Durumu

**Son Güncelleme:** 13 Kasım 2025
**Durum:** 🟡 Geliştirme Aşaması - API Routes Eklendi

---

## ✅ YAPILAN İYİLEŞTİRMELER

### 1. API Routes Eklendi (13 Kasım 2025)

#### ✅ Eğitim Takibi API
- **Dosya:** `app/api/sheets/egitim/route.ts`
- **Endpoint'ler:**
  - `GET /api/sheets/egitim` - Eğitim verilerini çek
  - `POST /api/sheets/egitim` - Yeni eğitim ekle
  - `DELETE /api/sheets/egitim?id=X` - Eğitim sil
- **Google Sheet ID:** `GOOGLE_SHEETS_EGITIM_ID`
- **Sheet:** [Eğitim Takibi_UZEM](https://docs.google.com/spreadsheets/d/1IVV5RKKzx2561xyIuV0_AG2Rf31Nr6_kAt5ofazl-1E)

#### ✅ Stüdyo Takvimi API  
- **Dosya:** `app/api/sheets/studyo/route.ts`
- **Endpoint'ler:**
  - `GET /api/sheets/studyo` - Takvim verilerini çek
  - `POST /api/sheets/studyo` - Eğitmen ata (sabah/öğle seans)
- **Google Sheet ID:** `GOOGLE_SHEETS_STUDYO_ID`
- **Sheet:** [UZEM Stüdyo Çekim Planı](https://docs.google.com/spreadsheets/d/1RHQFbzA-IBOfccFD9ZOIYD47gifahbfj0oDNXdQ4ySQ)

#### ✅ Çekim Takip API
- **Dosya:** `app/api/sheets/cekim/route.ts`
- **Endpoint'ler:**
  - `GET /api/sheets/cekim` - Çekim takip verilerini çek
  - `PUT /api/sheets/cekim` - Checkbox durumunu güncelle
- **Google Sheet ID:** `GOOGLE_SHEETS_CEKIM_ID`
- **Sheet:** [Stüdyo Çekim Takip Formu](https://docs.google.com/spreadsheets/d/1khG1LKPUiBc-CLFQZzKO7RL10Q3Z3c_0x6dwmHA4xhY)

---

## 🔴 TESPİT EDİLEN SORUNLAR

### 1. Google Sheets Senkronizasyonu YOK ❌
**Sorun:** Tüm component'ler `mockData` kullanıyor, Google Sheets'ten veri çekmiyor.

**Etkilenen Dosyalar:**
- `components/egitim-takibi/egitim-table.tsx`
- `components/studyo-takvimi/calendar.tsx`
- `components/cekim-takip/cekim-table.tsx`

**Çözüm:** API route'lar eklendi, şimdi component'lerde API çağrısı yapılmalı.

### 2. CRUD İşlemleri Çalışmıyor ❌
**Sorun:** Ekle/Sil butonları yok veya işlevsiz.

**Gerekli:**
- Modal formlar ekle
- Validation ekle  
- API çağrıları yap
- Optimistic UI updates

### 3. Takvim Eğitmen Seçimi YOK ❌
**Sorun:** Takvim sadece boş grid gösteriyor, sabah/öğle seanslarına eğitmen atanamıyor.

**Gerekli:**
- Dropdown menu ile eğitmen seçimi
- Seans seçimi (sabah/öğle)
- Google Sheets'e yazma fonksiyonu

### 4. Çekim Takip Card Formatında ❌  
**Sorun:** İstenen tablo görünümünde değil.

**Gerekli:**
- Card'dan tablo formatına dönüştür
- Checkbox'ları interaktif yap
- Google Sheets ile senkronize et

---

## 🎯 YAPILACAKLAR LİSTESİ

### Faz 1: Google Sheets Entegrasyonu (YÜK SEK ÖNCELİK)

#### 1.1. Google Sheets API Kütüphanesi
```bash
npm install google-spreadsheet googleapis
```

#### 1.2. Service Account Kurulumu
1. Google Cloud Console'a git
2. Service account oluştur
3. JSON key indir
4. Vercel environment variables ekle:
   ```
   GOOGLE_SERVICE_ACCOUNT_EMAIL=xxx@xxx.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
"
   ```

#### 1.3. API Route'ları Tamamla
Her 3 route'ta TODO kısımlarını tamamla:
- Google Sheets bağlantısı
- Veri okuma (batch get)
- Veri yazma (upsert)
- Veri silme

### Faz 2: Component Güncellemeleri (YÜK SEK ÖNCELİK)

#### 2.1. Eğitim Tablosu
- [ ] `useState` + `useEffect` ekle
- [ ] API'den veri çek
- [ ] Ekle butonu + modal
- [ ] Sil butonu + confirmation
- [ ] Search fonksiyonu
- [ ] Filter fonksiyonu

#### 2.2. Stüdyo Takvimi
- [ ] Sabah/öğle seans seçimi ekle
- [ ] Eğitmen dropdown ekle
- [ ] Eğitmen atama fonksiyonu
- [ ] API'ye kaydet
- [ ] Görsel feedback

#### 2.3. Çekim Takip
- [ ] Card'dan tablo formatına çevir
- [ ] Checkbox'ları interaktif yap
- [ ] Progress bar'ı dinamikleştir
- [ ] API güncellemeleri

### Faz 3: Senkronizasyon (KRİTİK)

- [ ] Real-time senkronizasyon (polling 30sn)
- [ ] Optimistic UI updates
- [ ] Error handling
- [ ] Loading states
- [ ] Success/Error toasts

---

## 📝 NOTLAR

### Environment Variables (Mevcut)
```
GOOGLE_SHEETS_EGITIM_ID=1IVV5RKKzx2561xyIuV0_AG2Rf31Nr6_kAt5ofazl-1E
GOOGLE_SHEETS_STUDYO_ID=1RHQFbzA-IBOfccFD9ZOIYD47gifahbfj0oDNXdQ4ySQ
GOOGLE_SHEETS_CEKIM_ID=1khG1LKPUiBc-CLFQZzKO7RL10Q3Z3c_0x6dwmHA4xhY
```

### Google Sheets Yapısı

**Eğitim Takibi (223 satır):**
- Kolonlar: DAL, ALAN, BÖLÜM, EĞİTİM, EĞİTMEN, İÇERİK TAKİP, DURUM, TARİHLER, NOTLAR
- Durumlar: ID Bekliyor, Çekim Bekliyor, Montaj Sırasında, vb.

**Stüdyo Takvimi (28 satır):**
- Haftalık takvim görünümü
- Sabah/Öğle seansları
- Eğitmen atamaları

**Çekim Takip (32 satır):**
- Çekim aşamaları (checkbox'lar)
- Progress tracking
- Synology kayıt durumu

---

## 🚀 DEPLOYMENT

### Otomatik Deployment
Vercel otomatik olarak `main` branch'e push'lanan her değişikliği deploy eder.

**Canlı Site:** https://ismek-egitim-otomasyon.vercel.app/

### Manuel Deployment
```bash
vercel --prod
```

---

## 📚 KAYNAKLAR

- **GitHub Repo:** https://github.com/meuzem/ismek-egitim-otomasyon
- **Vercel Project:** https://vercel.com/uzems-projects/ismek-egitim-otomasyon
- **Google Sheets API Docs:** https://developers.google.com/sheets/api

---

## 💡 GELİŞTİRME ÖNERİLERİ

1. **Google Sheets Kütüphanesi için helper class oluştur:**
```typescript
// lib/sheets.ts
import { GoogleSpreadsheet } from 'google-spreadsheet';

export class SheetsService {
  private doc: GoogleSpreadsheet;

  constructor(sheetId: string) {
    this.doc = new GoogleSpreadsheet(sheetId);
  }

  async init() {
    await this.doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
      private_key: process.env.GOOGLE_PRIVATE_KEY!,
    });
    await this.doc.loadInfo();
  }

  async readSheet(sheetIndex: number = 0) {
    const sheet = this.doc.sheetsByIndex[sheetIndex];
    const rows = await sheet.getRows();
    return rows.map(row => row.toObject());
  }

  async addRow(sheetIndex: number, data: any) {
    const sheet = this.doc.sheetsByIndex[sheetIndex];
    await sheet.addRow(data);
  }

  async updateRow(sheetIndex: number, rowIndex: number, data: any) {
    const sheet = this.doc.sheetsByIndex[sheetIndex];
    const rows = await sheet.getRows();
    Object.assign(rows[rowIndex], data);
    await rows[rowIndex].save();
  }
}
```

2. **Polling için custom hook:**
```typescript
// hooks/useSheets.ts
import { useState, useEffect } from 'react';

export function useSheets(endpoint: string, interval: number = 30000) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(endpoint);
      const json = await res.json();
      if (json.success) setData(json.data);
      setLoading(false);
    };

    fetchData();
    const timer = setInterval(fetchData, interval);
    return () => clearInterval(timer);
  }, [endpoint, interval]);

  return { data, loading, refetch: fetchData };
}
```

---

**Oluşturulma Tarihi:** 13 Kasım 2025
**Oluşturan:** Rube AI (Composio)
**Versiyon:** 1.0.0

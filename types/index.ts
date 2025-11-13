export interface Egitim {
  id: string
  dal: string
  alan: string
  bolum: string
  egitim: string
  egitmen: string
  durum: string
  icerikBaslamaTarihi: string
  cekimBaslamaTarihi: string
  montajBaslamaTarihi: string
  yayinTarihi: string
  notlar: string
}

export interface CekimTakip {
  id: string
  cekimSorumlusu: string
  egitmenAdi: string
  egitimAdi: string
  videoAdi: string
  cekimTarihi: string
  onCekim: boolean
  izlence: boolean
  isik: boolean
  fotografCekimleri: boolean
  kontroller: boolean
  tasnif: boolean
  dipSesTemizligi: boolean
  cekimTamamlandi: boolean
  synologyKaydedildi: boolean
}

export const statusColors = {
  "ID Bekliyor": "bg-yellow-100 text-yellow-800",
  "Çekim Bekliyor": "bg-blue-100 text-blue-800",
  "Montaj Sırasında": "bg-purple-100 text-purple-800",
  "Eğitmen İçerik Hazırlıyor": "bg-orange-100 text-orange-800",
  "Eğitim Beklemede": "bg-gray-100 text-gray-800",
  "Eğitim Planlanıyor": "bg-indigo-100 text-indigo-800",
  "Çekim Devam Ediyor": "bg-green-100 text-green-800",
}

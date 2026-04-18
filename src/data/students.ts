export interface Student {
  id: number;
  name: string;
  origin: string;
  photo: string | null; // isi dengan URL/path foto, null = tampil placeholder
}

// ─── EDIT DATA MAHASISWA DI SINI ───────────────────────────────────────────
// Untuk mengganti foto: isi field "photo" dengan URL gambar atau path ke file
// Contoh: photo: "/photos/nama.jpg"  (taruh foto di folder public/photos/)
// Atau   : photo: "https://link-foto.com/foto.jpg"
// Biarkan null jika foto belum tersedia
// ───────────────────────────────────────────────────────────────────────────

export const students: Student[] = [
  { id: 1,  name: "YAYAN RAMADHANI",       origin: "Semparuk",       photo: null },
  { id: 2,  name: "INTAN RAMADHANI",       origin: "Kartiasa",   photo: null },
  { id: 3,  name: "IBNU LUTHFI",     origin: "Tebas",    photo: null },
  { id: 4,  name: "SULAIMAN",     origin: "Sambas",       photo: null },
  { id: 5,  name: "HENGKY KURNIAWAN",       origin: "Sambas",     photo: null },
  { id: 6,  name: "MELY",      origin: "Sungai Kelambu",       photo: null },
  { id: 7,  name: "YANA",         origin: "Sungai Pinang",   photo: null },
  { id: 8,  name: "ZETIARA PANGARAHUP",       origin: "Kartiasa",   photo: null },
  { id: 9,  name: "CICI",    origin: "Sambas",       photo: null },
  { id: 10, name: "DAFAN SUFIAN",      origin: "Tekarang",    photo: null },
  { id: 11, name: "ADILAH",    origin: "Galing",       photo: null },
  { id: 12, name: "NAYLA KHAIRANI WAHYUDI",    origin: "Sambas",       photo: null },
  { id: 13, name: "AZAN FAHRIZA",      origin: "Singkawang",       photo: null },
  { id: 14, name: "SUMI",       origin: "Tebas",   photo: null },
  { id: 15, name: "EFRY ARVENZIA",      origin: "Sebubus",     photo: null },
  { id: 16, name: "DESTRIA PUTRI",    origin: "Sekura",       photo: null },
  { id: 17, name: "NAZWA DIKA SAPUTRA",       origin: "Subah",   photo: null },
  { id: 18, name: "ARIF FAUZAN RENALDI",      origin: "Sambas",       photo: null },
  { id: 19, name: "NINDIA ARIQA NISRINA",      origin: "Sambas",    photo: null },
  { id: 20, name: "FARELLY KANATA RAYYA",       origin: "Galing",       photo: null },
  { id: 21, name: "MUHAMMAD IQRAM PANE",   origin: "Singkawang",   photo: null },
  { id: 22, name: "RIZKY FAJAR",      origin: "Sungai Baru",       photo: null },
  { id: 23, name: "MUHAMMAD IRFAN",    origin: "Sambas",       photo: null },
  { id: 24, name: "HAIKAL",     origin: "Sungai Baru",       photo: null },
  { id: 25, name: "FAZLY",   origin: "Tebas",     photo: null },
  { id: 26, name: "URAY SATRIYA BAYU PRATAMA",      origin: "Sambas",       photo: null },
  { id: 27, name: "FACHRURROZI",    origin: "Sekura",   photo: null },
  { id: 28, name: "ZAKIA",      origin: "Sambas",       photo: null },
  { id: 29, name: "IDBAN HUSNUZHAN",     origin: "Sempalai",   photo: null },
  { id: 30, name: "MALINI",     origin: "Pemangkat",       photo: null },
];

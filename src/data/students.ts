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
  { id: 1,  name: "Ahmad Fauzi",       origin: "Sambas",       photo: null },
  { id: 2,  name: "Aulia Rahma",       origin: "Singkawang",   photo: null },
  { id: 3,  name: "Bagas Pratama",     origin: "Pontianak",    photo: null },
  { id: 4,  name: "Bella Safitri",     origin: "Sambas",       photo: null },
  { id: 5,  name: "Danu Wijaya",       origin: "Mempawah",     photo: null },
  { id: 6,  name: "Dewi Kartika",      origin: "Sambas",       photo: null },
  { id: 7,  name: "Eko Surya",         origin: "Bengkayang",   photo: null },
  { id: 8,  name: "Farah Nadia",       origin: "Singkawang",   photo: null },
  { id: 9,  name: "Galih Setiawan",    origin: "Sambas",       photo: null },
  { id: 10, name: "Hana Permata",      origin: "Pontianak",    photo: null },
  { id: 11, name: "Ilham Ramadhan",    origin: "Sambas",       photo: null },
  { id: 12, name: "Intan Maharani",    origin: "Landak",       photo: null },
  { id: 13, name: "Joko Purnomo",      origin: "Sambas",       photo: null },
  { id: 14, name: "Kirana Sari",       origin: "Singkawang",   photo: null },
  { id: 15, name: "Lukman Hakim",      origin: "Mempawah",     photo: null },
  { id: 16, name: "Mega Wulandari",    origin: "Sambas",       photo: null },
  { id: 17, name: "Nanda Putra",       origin: "Bengkayang",   photo: null },
  { id: 18, name: "Oktavia Dewi",      origin: "Sambas",       photo: null },
  { id: 19, name: "Pandu Kusuma",      origin: "Pontianak",    photo: null },
  { id: 20, name: "Qori Amalia",       origin: "Sambas",       photo: null },
  { id: 21, name: "Reza Firmansyah",   origin: "Singkawang",   photo: null },
  { id: 22, name: "Sinta Rahayu",      origin: "Sambas",       photo: null },
  { id: 23, name: "Taufik Hidayat",    origin: "Landak",       photo: null },
  { id: 24, name: "Ulfa Nurjanah",     origin: "Sambas",       photo: null },
  { id: 25, name: "Vino Ardiansyah",   origin: "Mempawah",     photo: null },
  { id: 26, name: "Widya Astuti",      origin: "Sambas",       photo: null },
  { id: 27, name: "Xandra Pratiwi",    origin: "Singkawang",   photo: null },
  { id: 28, name: "Yoga Prawira",      origin: "Sambas",       photo: null },
  { id: 29, name: "Zara Fitriani",     origin: "Bengkayang",   photo: null },
  { id: 30, name: "Zulfikar Amin",     origin: "Sambas",       photo: null },
];

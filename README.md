# 🎓 TM2B — Teknik Multimedia 2B
### Politeknik Negeri Sambas · Angkatan 2025

Website kelas resmi **Teknik Multimedia 2B** — tampilan minimalist aesthetic berbasis typografi dengan warna utama navy.

---

## 📋 Fitur

- 🏠 **Hero Section** — landing page dengan typografi besar
- 👥 **Profil 30 Mahasiswa** — kartu profil dengan foto & asal daerah
- 🏆 **Prestasi Kelas** — termasuk Juara 3 Panen Karya 2025
- 📸 **Foto Kenangan** — slideshow yang bisa di-swipe kanan/kiri
- 🔍 **Search/Filter** — cari mahasiswa berdasarkan nama atau asal
- 📱 **Responsive** — tampil sempurna di HP dan desktop

---

## 🚀 Cara Menjalankan

### Requirement
- [Node.js](https://nodejs.org/) versi 18 ke atas
- npm (sudah termasuk dalam Node.js)

### Langkah-langkah

```bash
# 1. Clone repository ini
git clone https://github.com/USERNAME/REPO-NAME.git

# 2. Masuk ke folder project
cd REPO-NAME

# 3. Install semua dependencies
npm install

# 4. Jalankan di localhost
npm run dev
```

Buka browser → `http://localhost:5173`

---

## ✏️ Cara Edit Data

### 📝 Ganti Nama & Asal Mahasiswa

Edit file: **`src/data/students.ts`**

```ts
export const students: Student[] = [
  { id: 1, name: "Ahmad Fauzi", origin: "Sambas", photo: null },
  //        ↑ ganti nama       ↑ ganti asal
  ...
];
```

---

### 🖼️ Ganti Foto Profil Mahasiswa

1. **Taruh foto** di folder `public/photos/`
   - Format: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Rekomendasi ukuran: **400×400 px** (kotak/square)
   - Contoh nama file: `ahmad.jpg`

2. **Edit file** `src/data/students.ts`, isi field `photo`:

```ts
{ id: 1, name: "Ahmad Fauzi", origin: "Sambas", photo: "/photos/ahmad.jpg" },
//                                                        ↑ path ke foto
```

> Kalau foto belum ada, biarkan `photo: null` — akan tampil inisial nama otomatis.

---

### 📸 Tambah / Ubah Foto Kenangan

1. **Taruh foto** di folder `public/gallery/`
   - Format: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Rekomendasi: foto landscape/horizontal
   - Contoh: `foto1.jpg`, `foto2.jpg`

2. **Edit file** `src/data/gallery.ts`:

```ts
export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/gallery/foto1.jpg", caption: "Orientasi Mahasiswa Baru 2025" },
  { id: 2, src: "/gallery/foto2.jpg", caption: "Praktikum Desain Grafis" },
  { id: 3, src: "/gallery/foto3.jpg", caption: "Panen Karya 2025 — Juara 3 🏆" },
  // tambah baris baru di sini...
];
```

> **Penting:** Setiap entry harus punya `id` yang unik dan berbeda!

---

### 🏆 Tambah Prestasi Baru

Edit file **`src/App.tsx`**, cari bagian `{/* ── Slot kosong 1 ── */}` dan ganti dengan kartu prestasi baru. Ikuti template dari kartu "Juara 3 Panen Karya 2025" yang sudah ada.

---

## 🌐 Deploy ke GitHub Pages

### Cara 1 — Manual (Build & Push)

```bash
# 1. Build project
npm run build

# 2. Hasilnya ada di folder dist/
#    Upload isi folder dist/ ke branch gh-pages
```

### Cara 2 — Pakai gh-pages (Otomatis)

```bash
# Install package gh-pages
npm install -D gh-pages

# Tambahkan script di package.json:
# "deploy": "gh-pages -d dist"

# Lalu jalankan:
npm run build
npm run deploy
```

Setelah itu aktifkan GitHub Pages di:
`Settings → Pages → Source → gh-pages branch`

### Cara 3 — Vercel (Paling Mudah)

1. Push ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository ini
4. Klik Deploy — selesai! 🎉

---

## 📁 Struktur Folder

```
├── public/
│   ├── photos/          ← taruh foto profil mahasiswa di sini
│   └── gallery/         ← taruh foto kenangan di sini
├── src/
│   ├── components/
│   │   ├── Navbar.tsx   ← navigasi
│   │   ├── StudentCard.tsx  ← kartu profil mahasiswa
│   │   └── Gallery.tsx  ← slideshow foto kenangan
│   ├── data/
│   │   ├── students.ts  ← ⭐ DATA MAHASISWA — edit di sini
│   │   └── gallery.ts   ← ⭐ DATA FOTO KENANGAN — edit di sini
│   ├── App.tsx          ← halaman utama
│   └── index.css        ← global styles
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🛠️ Tech Stack

| Tech | Versi | Fungsi |
|------|-------|--------|
| [React](https://react.dev) | 19 | UI framework |
| [Vite](https://vite.dev) | 7 | Build tool |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Styling |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |

---

## 📌 Catatan Penting

- **Hanya developer** (yang punya akses ke repo ini) yang bisa mengubah data, foto, dan konten website
- Pengunjung website hanya bisa **melihat** — tidak ada fitur upload dari browser
- Foto yang ditaruh di `public/` folder **tidak ikut di-commit** secara default jika ukurannya besar — pertimbangkan menggunakan [Git LFS](https://git-lfs.github.com/) untuk file gambar besar

---

<div align="center">
  <p>Made with ❤️ for <strong>Teknik Multimedia 2B</strong></p>
  <p>Politeknik Negeri Sambas · Angkatan 2025</p>
</div>

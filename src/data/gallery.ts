export interface GalleryImage {
  id: number;
  src: string;        // URL atau path gambar, contoh: "/gallery/foto1.jpg"
  caption: string;    // Keterangan foto
}

// ─── EDIT FOTO KENANGAN DI SINI ────────────────────────────────────────────
// Tambah foto: copy salah satu blok { id, src, caption } dan sesuaikan
// Hapus foto : hapus blok yang tidak diinginkan
// Foto taruh di folder public/gallery/ lalu isi src: "/gallery/namafile.jpg"
// ───────────────────────────────────────────────────────────────────────────

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "public/gallery/foto1.jpg", caption: "Hari Pertama Kuliah" },
  // Contoh — ganti src dengan path foto asli lo
  // { id: 1, src: "/gallery/foto1.jpg", caption: "Orientasi Mahasiswa Baru 2025" },
  // { id: 2, src: "/gallery/foto2.jpg", caption: "Praktikum Desain Grafis" },
  // { id: 3, src: "/gallery/foto3.jpg", caption: "Panen Karya 2025 — Juara 3 🏆" },
];

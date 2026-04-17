# 🚀 Panduan Upload & Deploy ke GitHub

Ikuti langkah-langkah berikut untuk upload project ini ke GitHub dan otomatis deploy ke GitHub Pages.

---

## Langkah 1 — Buat Repository di GitHub

1. Buka [github.com](https://github.com) → Login
2. Klik tombol **"New"** (+ di pojok kanan atas)
3. Isi nama repository, contoh: `tm2b-website`
4. Set visibility: **Public** (wajib untuk GitHub Pages gratis)
5. **Jangan** centang "Add README" (sudah ada)
6. Klik **"Create repository"**

---

## Langkah 2 — Setup Vite Base URL

> Ini penting! Kalau dilewati, website tidak akan tampil dengan benar.

Buka file **`vite.config.ts`**, uncomment dan ganti bagian `base`:

```ts
// Sebelum (masih comment):
// base: "/NAMA-REPO/",

// Sesudah (uncomment & ganti nama repo):
base: "/tm2b-website/",
```

> Ganti `tm2b-website` dengan nama repo yang kamu buat di Langkah 1.

---

## Langkah 3 — Upload ke GitHub via Terminal

Buka terminal/command prompt di folder project ini, lalu jalankan:

```bash
# Inisialisasi git (skip jika sudah pernah)
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "🎓 Initial commit — TM2B Website"

# Hubungkan ke repository GitHub
# Ganti USERNAME dan NAMA-REPO dengan milik kamu
git remote add origin https://github.com/USERNAME/NAMA-REPO.git

# Push ke GitHub
git push -u origin main
```

---

## Langkah 4 — Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik tab **Settings** (ikon gear)
3. Scroll ke bawah → klik **Pages** di sidebar kiri
4. Di bagian **Source**, pilih: **GitHub Actions**
5. Simpan

---

## Langkah 5 — Tunggu Deploy Otomatis

Setelah push, GitHub Actions akan otomatis:
1. Install dependencies
2. Build project
3. Deploy ke GitHub Pages

Cek progress di tab **Actions** di repository kamu.

Setelah selesai (biasanya 1-3 menit), website bisa diakses di:
```
https://USERNAME.github.io/NAMA-REPO/
```

---

## ♻️ Cara Update Website

Setiap kali kamu edit data (foto, nama, gallery, dll), cukup:

```bash
git add .
git commit -m "Update data mahasiswa"
git push
```

GitHub Actions akan otomatis rebuild dan deploy ulang! 🎉

---

## 🖼️ Cara Tambah Foto ke Repository

### Foto Profil Mahasiswa
```bash
# Taruh foto di folder public/photos/
# Contoh: public/photos/ahmad.jpg

# Lalu push ke GitHub
git add public/photos/
git commit -m "Add foto profil mahasiswa"
git push
```

### Foto Kenangan
```bash
# Taruh foto di folder public/gallery/
# Contoh: public/gallery/foto1.jpg

# Lalu push ke GitHub
git add public/gallery/
git commit -m "Add foto kenangan"
git push
```

---

## ❗ Troubleshooting

### Website tidak tampil / CSS hilang
→ Pastikan `base` di `vite.config.ts` sudah diisi dengan nama repo yang benar.

### GitHub Actions gagal
→ Cek tab **Actions** di repository → klik workflow yang merah → baca error log-nya.

### Foto tidak tampil
→ Pastikan path di `students.ts` atau `gallery.ts` sudah benar dan file foto sudah di-push ke GitHub.

---

<div align="center">
  <strong>Teknik Multimedia 2B · Politeknik Negeri Sambas · 2025</strong>
</div>

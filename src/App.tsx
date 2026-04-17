import React, { useState } from "react";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Gallery from "./components/Gallery";
import { students } from "./data/students";

const App: React.FC = () => {
  const [search, setSearch] = useState("");

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.origin.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-[#f9f8f6] text-[#0a1628]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a1628]"
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.05]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.03]" />

        {/* Glow blob */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-10">
            <span className="h-px w-10 bg-white/25" />
            <span className="text-white/45 text-xs tracking-[0.35em] uppercase font-light">
              Politeknik Negeri Sambas
            </span>
            <span className="h-px w-10 bg-white/25" />
          </div>

          {/* Main Title */}
          <h1
            className="text-white leading-[0.9] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="block text-[clamp(3.5rem,11vw,9rem)] font-bold italic tracking-tight">
              Teknik
            </span>
            <span className="block text-[clamp(3rem,9vw,7.5rem)] font-bold tracking-tight">
              Multimedia
            </span>
            <span className="block text-[clamp(2rem,6vw,4.5rem)] font-light text-white/50 tracking-[0.15em] mt-3">
              Kelas 2B
            </span>
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <span className="h-px w-14 bg-white/15" />
            <span className="text-white/35 text-xs tracking-[0.45em] uppercase font-mono">
              Angkatan 2025
            </span>
            <span className="h-px w-14 bg-white/15" />
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              { value: "30", label: "Mahasiswa" },
              { value: "1", label: "Prestasi" },
              { value: "2025", label: "Angkatan" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm"
              >
                <span
                  className="text-white text-lg font-semibold mr-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-white/40 text-xs tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-24 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/25 text-xs tracking-[0.35em] uppercase">
              Scroll
            </span>
            <svg
              className="w-4 h-4 text-white/25"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ANGGOTA KELAS
      ══════════════════════════════════════════════════════════ */}
      <section id="anggota" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[#0a1628]/35 text-xs tracking-[0.35em] uppercase mb-3 font-mono">
              — Anggota Kelas
            </p>
            <h2
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              30{" "}
              <span className="italic font-normal text-[#0a1628]/35">
                Mahasiswa
              </span>
            </h2>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Cari nama atau asal..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2.5 rounded-xl border border-[#0a1628]/10 bg-white text-sm text-[#0a1628] placeholder:text-[#0a1628]/30 focus:outline-none focus:border-[#0a1628]/25 w-60 transition-colors"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a1628]/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Student Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#0a1628]/25 text-sm tracking-widest uppercase font-mono">
            Tidak ada hasil ditemukan
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════════
          PRESTASI
      ══════════════════════════════════════════════════════════ */}
      <section id="prestasi" className="py-28 bg-[#0a1628]">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-white/30 text-xs tracking-[0.35em] uppercase mb-3 font-mono">
              — Prestasi Kelas
            </p>
            <h2
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our{" "}
              <span className="italic font-normal text-white/40">
                Achievements
              </span>
            </h2>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ── Featured: Juara 3 Panen Karya 2025 ── */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 group hover:bg-white/[0.07] transition-all duration-500">
              {/* Gold top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

              {/* Trophy icon */}
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-amber-400 text-xs tracking-widest uppercase font-mono">
                  Juara III
                </span>
              </div>

              <h3
                className="text-white text-2xl font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Panen Karya 2025
              </h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Meraih Juara 3 pada event Panen Karya 2025 — pencapaian
                membanggakan di tahun pertama kelas Teknik Multimedia 2B
                bersama.
              </p>

              {/* Decorative large number */}
              <div
                className="absolute bottom-4 right-6 text-white/[0.04] font-bold leading-none select-none pointer-events-none"
                style={{
                  fontSize: "6rem",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                III
              </div>

              {/* Year tag */}
              <div className="mt-6 flex items-center gap-2">
                <span className="h-px w-4 bg-white/20" />
                <span className="text-white/25 text-xs font-mono tracking-widest">
                  2025
                </span>
              </div>
            </div>

            {/* ── Slot kosong 1 ── */}
            <div className="relative overflow-hidden rounded-3xl border border-dashed border-white/10 p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white/20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <p className="text-white/20 text-xs tracking-[0.3em] uppercase font-mono">
                Prestasi Berikutnya
              </p>
              <p className="text-white/10 text-xs mt-1">Coming Soon</p>
            </div>

            {/* ── Slot kosong 2 ── */}
            <div className="relative overflow-hidden rounded-3xl border border-dashed border-white/10 p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white/20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <p className="text-white/20 text-xs tracking-[0.3em] uppercase font-mono">
                Prestasi Berikutnya
              </p>
              <p className="text-white/10 text-xs mt-1">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOTO KENANGAN
      ══════════════════════════════════════════════════════════ */}
      <section id="galeri" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[#0a1628]/35 text-xs tracking-[0.35em] uppercase mb-3 font-mono">
            — Foto Kenangan
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our{" "}
            <span className="italic font-normal text-[#0a1628]/35">
              Memories
            </span>
          </h2>
        </div>

        <Gallery />
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════ */}
      <footer className="bg-[#0a1628] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p
              className="text-white/70 text-sm font-semibold tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Teknik Multimedia 2B
            </p>
            <p className="text-white/25 text-xs tracking-widest uppercase font-mono mt-1">
              Politeknik Negeri Sambas · Angkatan 2025
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-white/15" />
            <span className="text-white/20 text-xs font-mono tracking-widest">
              TM2B · 2025
            </span>
            <span className="h-px w-6 bg-white/15" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

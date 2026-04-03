const members = [
  { name: "Ahmad Fauzi",      nim: "2411500001", role: "Ketua",       asal: "Jakarta",    hobi: "Robotika" },
  { name: "Budi Santoso",     nim: "2411500002", role: "Wakil Ketua", asal: "Bandung",    hobi: "Coding" },
  { name: "Citra Dewi",       nim: "2411500003", role: "Sekretaris",  asal: "Surabaya",   hobi: "Mendesain" },
  { name: "Dian Purnama",     nim: "2411500004", role: "Anggota",     asal: "Yogyakarta", hobi: "Membaca" },
  { name: "Eko Prasetyo",     nim: "2411500005", role: "Anggota",     asal: "Semarang",   hobi: "Musik" },
  { name: "Farah Nabila",     nim: "2411500006", role: "Anggota",     asal: "Medan",      hobi: "Fotografi" },
  { name: "Gilang Ramadan",   nim: "2411500007", role: "Anggota",     asal: "Palembang",  hobi: "Gaming" },
  { name: "Hana Safitri",     nim: "2411500008", role: "Anggota",     asal: "Makassar",   hobi: "Memasak" },
  { name: "Ivan Wijaya",      nim: "2411500009", role: "Anggota",     asal: "Balikpapan", hobi: "Olahraga" },
  { name: "Joko Susilo",      nim: "2411500010", role: "Anggota",     asal: "Solo",       hobi: "Traveling" },
  { name: "Kirana Ayu",       nim: "2411500011", role: "Anggota",     asal: "Malang",     hobi: "Melukis" },
  { name: "Lutfi Hakim",      nim: "2411500012", role: "Anggota",     asal: "Depok",      hobi: "Coding" },
  { name: "Maya Sari",        nim: "2411500013", role: "Anggota",     asal: "Bekasi",     hobi: "Bernyanyi" },
  { name: "Nando Kurnia",     nim: "2411500014", role: "Anggota",     asal: "Tangerang",  hobi: "Robotika" },
  { name: "Olivia Putri",     nim: "2411500015", role: "Anggota",     asal: "Bogor",      hobi: "Membaca" },
  { name: "Putra Aditya",     nim: "2411500016", role: "Anggota",     asal: "Batam",      hobi: "Musik" },
  { name: "Qori Rahma",       nim: "2411500017", role: "Anggota",     asal: "Pekanbaru",  hobi: "Menulis" },
  { name: "Rizky Firmansyah", nim: "2411500018", role: "Anggota",     asal: "Jakarta",    hobi: "Gaming" },
  { name: "Sinta Wulandari",  nim: "2411500019", role: "Anggota",     asal: "Bandung",    hobi: "Fotografi" },
  { name: "Teguh Santoso",    nim: "2411500020", role: "Anggota",     asal: "Surabaya",   hobi: "Olahraga" },
  { name: "Ulfa Rahmawati",   nim: "2411500021", role: "Anggota",     asal: "Semarang",   hobi: "Memasak" },
  { name: "Vino Pratama",     nim: "2411500022", role: "Anggota",     asal: "Yogyakarta", hobi: "Traveling" },
  { name: "Wilda Setyani",    nim: "2411500023", role: "Anggota",     asal: "Aceh",       hobi: "Mendesain" },
  { name: "Xander Bagas",     nim: "2411500024", role: "Anggota",     asal: "Pontianak",  hobi: "Coding" },
  { name: "Yuda Permana",     nim: "2411500025", role: "Anggota",     asal: "Manado",     hobi: "Musik" },
  { name: "Zahra Aulia",      nim: "2411500026", role: "Anggota",     asal: "Lombok",     hobi: "Menulis" },
  { name: "Aldi Nugroho",     nim: "2411500027", role: "Anggota",     asal: "Padang",     hobi: "Gaming" },
  { name: "Bella Oktavia",    nim: "2411500028", role: "Anggota",     asal: "Jambi",      hobi: "Melukis" },
  { name: "Candra Mahesa",    nim: "2411500029", role: "Anggota",     asal: "Kupang",     hobi: "Robotika" },
  { name: "Dinda Lestari",    nim: "2411500030", role: "Anggota",     asal: "Samarinda",  hobi: "Bernyanyi" },
];

const roleColors = {
  "Ketua": "ketua",
  "Wakil Ketua": "wakil",
  "Sekretaris": "sekretaris",
  "Anggota": ""
};

function getInitials(name) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
}

function renderMembers() {
  const grid = document.getElementById('membersGrid');
  members.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.style.animationDelay = `${i * 0.04}s`;
    card.innerHTML = `
      <div class="member-avatar">${getInitials(m.name)}</div>
      <div class="member-name">${m.name}</div>
      <div class="member-nim">${m.nim}</div>
      <span class="member-role ${roleColors[m.role]}">${m.role}</span>
    `;
    card.addEventListener('click', () => openModal(m));
    grid.appendChild(card);
  });
}

function openModal(m) {
  document.getElementById('modalAvatar').textContent = getInitials(m.name);
  document.getElementById('modalName').textContent   = m.name;
  document.getElementById('modalNim').textContent    = m.nim;
  document.getElementById('modalRole').innerHTML     = `<span class="member-role ${roleColors[m.role]}">${m.role}</span>`;
  document.getElementById('modalInfo').innerHTML     = `
    <div class="modal-info-item"><div class="label">Asal Kota</div><div class="value">📍 ${m.asal}</div></div>
    <div class="modal-info-item"><div class="label">Hobi</div><div class="value">🎯 ${m.hobi}</div></div>
    <div class="modal-info-item"><div class="label">Program Studi</div><div class="value">⚡ Teknik Elektro</div></div>
    <div class="modal-info-item"><div class="label">Angkatan</div><div class="value">🎓 2024</div></div>
  `;
  document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

// Event listeners
document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.style.opacity = '1'; });
}, { threshold: 0.1 });

document.querySelectorAll('.member-card, .info-card').forEach(el => observer.observe(el));

// Init
renderMembers();
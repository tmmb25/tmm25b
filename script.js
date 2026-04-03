const members = [
  { name: "Yayan Ramadhani",      nim: "4202504012", role: "Anggota",       asal: "Semparuk",    hobi: "3D" },
  { name: "Intan Ramadhani",     nim: "4202504013", role: "Anggota", asal: "Sambas",    hobi: "Coding" },
  { name: "Ibnu Luthfi",       nim: "4202504014", role: "Anggota",  asal: "Tebas",   hobi: "Mendesain" },
  { name: "Sulaiman",     nim: "4202504015", role: "Anggota",     asal: "Sebarang", hobi: "Membaca" },
  { name: "Hengki Kurniawan",     nim: "4202504015", role: "Anggota",     asal: "Semarang",   hobi: "Musik" },
  { name: "Mely",     nim: "4202504017", role: "Anggota",     asal: "Medan",      hobi: "Fotografi" },
  { name: "Yana",   nim: "4202504018", role: "Anggota",     asal: "Palembang",  hobi: "Gaming" },
  { name: "Zetiara Pangarahup",     nim: "4202504019", role: "Anggota",     asal: "Makassar",   hobi: "Memasak" },
  { name: "Cici",      nim: "4202504020", role: "Anggota",     asal: "Balikpapan", hobi: "Olahraga" },
  { name: "Dafan Sufian",      nim: "4202504021", role: "Anggota",     asal: "Solo",       hobi: "Traveling" },
  { name: "Adilah",       nim: "4202504022", role: "Anggota",     asal: "Malang",     hobi: "Melukis" },
  { name: "Nayla Khairani Wahyudi",      nim: "4202504047", role: "Anggota",     asal: "Depok",      hobi: "Coding" },
  { name: "Azan Fahriza",        nim: "4202504048", role: "Anggota",     asal: "Bekasi",     hobi: "Bernyanyi" },
  { name: "Sumi",     nim: "4202504049", role: "Anggota",     asal: "Tangerang",  hobi: "Robotika" },
  { name: "Efry Arvenza",     nim: "4202504050", role: "Anggota",     asal: "Bogor",      hobi: "Membaca" },
  { name: "Destria Putri",     nim: "4202504051", role: "Anggota",     asal: "Batam",      hobi: "Musik" },
  { name: "Nazwa Dika Saputra",       nim: "4202504052", role: "Anggota",     asal: "Pekanbaru",  hobi: "Menulis" },
  { name: "Arif Fauzan Rinaldi", nim: "4202504053", role: "Ketua",     asal: "Jakarta",    hobi: "Gaming" },
  { name: "Nindia Ariqa Nisrina",  nim: "4202504054", role: "Anggota",     asal: "Bandung",    hobi: "Fotografi" },
  { name: "Farelly Kanata Rayya",    nim: "4202504055", role: "Anggota",     asal: "Surabaya",   hobi: "Olahraga" },
  { name: "Muhammad Iqram Pane",   nim: "4202504056", role: "Anggota",     asal: "Semarang",   hobi: "Memasak" },
  { name: "Rizky Fajar",     nim: "4202504057", role: "Anggota",     asal: "Yogyakarta", hobi: "Traveling" },
  { name: "Muhammad Irfan",    nim: "4202504058", role: "Anggota",     asal: "Aceh",       hobi: "Mendesain" },
  { name: "Haikal",     nim: "4202504059", role: "Anggota",     asal: "Pontianak",  hobi: "Coding" },
  { name: "Fazly",     nim: "4202504060", role: "Anggota",     asal: "Manado",     hobi: "Musik" },
  { name: "Uray Satria Bayu Pratama",      nim: "4202504080", role: "Anggota",     asal: "Lombok",     hobi: "Menulis" },
  { name: "Fachrurrozi",     nim: "4202504081", role: "Anggota",     asal: "Padang",     hobi: "Gaming" },
  { name: "Zakia",    nim: "4202504082", role: "Anggota",     asal: "Jambi",      hobi: "Melukis" },
  { name: "Idban Husnuzhan",    nim: "4202504083", role: "Anggota",     asal: "Kota Sempalai",     hobi: "Ngedit" },
  { name: "Malini",    nim: "4202504084", role: "Anggota",     asal: "Samarinda",  hobi: "Bernyanyi" },
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
    <div class="modal-info-item"><div class="label">Program Studi</div><div class="value">Teknik Multimedia</div></div>
    <div class="modal-info-item"><div class="label">Angkatan</div><div class="value">2025</div></div>
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
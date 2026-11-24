// Core Engine - CBT SRT 68 Luwu Utara V.1.0 (Build v22)
const APP_STORAGE_KEY = 'cbt_srt68_v22_db';

const DEFAULT_DB = {
  config: {
    namaSekolah: 'Sekolah Rakyat Terintegrasi 68 Luwu Utara',
    judulUjian: 'Portal Aplikasi Asesmen Sumatif Akhir Semester (ASAS)',
    tahunPelajaran: '2026/2027',
    activeToken: 'CBT2026',
    maxWarnings: 4
  },
  kelas: [
    { idRombel: 'RBL-SD1A', namaKelas: 'Kelas 1A', jenjang: 'SD Rendah', waliKelasId: 'USR-G01' },
    { idRombel: 'RBL-SD5A', namaKelas: 'Kelas 5A', jenjang: 'SD Tinggi', waliKelasId: 'USR-G02' },
    { idRombel: 'RBL-SMP9A', namaKelas: 'Kelas 9A', jenjang: 'SMP', waliKelasId: 'USR-G03' }
  ],
  mapel: [
    { kode: 'INF-SD', nama: 'Informatika & KKA', jenjang: 'SD Tinggi', aktif: true },
    { kode: 'INF-SMP', nama: 'Informatika', jenjang: 'SMP', aktif: true },
    { kode: 'MTK-SD1', nama: 'Matematika Dasar', jenjang: 'SD Rendah', aktif: true },
    { kode: 'BIN-SMP', nama: 'Bahasa Indonesia', jenjang: 'SMP', aktif: true }
  ],
  users: [
    { id: 'USR-ADM', username: 'admin', password: '123', nama: 'Administrator SRT 68', role: 'admin', mapelAmpu: [], jenjangAmpu: [], idRombel: '', foto: '' },
    { id: 'USR-G01', username: 'guru1', password: '123', nama: 'Siti Aminah, S.Pd.', role: 'guru', isWaliKelas: true, waliRombel: 'RBL-SD1A', mapelAmpu: ['MTK-SD1'], jenjangAmpu: ['SD Rendah'], foto: '' },
    { id: 'USR-G02', username: 'fajar', password: '123', nama: 'Fajar Jamal, S.Pd., Gr.', role: 'guru', isWaliKelas: true, waliRombel: 'RBL-SD5A', mapelAmpu: ['INF-SD', 'INF-SMP'], jenjangAmpu: ['SD Tinggi', 'SMP'], foto: '' },
    { id: 'USR-G03', username: 'guru3', password: '123', nama: 'Budi Santoso, S.Pd.', role: 'guru', isWaliKelas: true, waliRombel: 'RBL-SMP9A', mapelAmpu: ['BIN-SMP'], jenjangAmpu: ['SMP'], foto: '' },
    { id: 'USR-PRK', username: 'proktor1', password: '123', nama: 'Pengawas Ruang 01', role: 'proktor', ruang: 'Ruang Lab Komputer 1', foto: '' },
    { id: 'USR-S01', username: '2026001', password: '123', nama: 'Ahmad Fauzi', role: 'siswa', idRombel: 'RBL-SD5A', ruang: 'Ruang Lab Komputer 1', sesi: 'Sesi 1', statusUjian: 'Belum Mulai', pelanggaran: 0, skor: null, foto: '' },
    { id: 'USR-S02', username: '2026002', password: '123', nama: 'Nurul Hidayah', role: 'siswa', idRombel: 'RBL-SMP9A', ruang: 'Ruang Lab Komputer 1', sesi: 'Sesi 1', statusUjian: 'Belum Mulai', pelanggaran: 0, skor: null, foto: '' }
  ],
  ruangSesi: [
    { id: 'RS-01', namaRuang: 'Ruang Lab Komputer 1', namaSesi: 'Sesi 1', waktuMulai: '07:30', waktuSelesai: '09:30', durasiMenit: 90, aktif: true },
    { id: 'RS-02', namaRuang: 'Ruang Kelas Digital 2', namaSesi: 'Sesi 2', waktuMulai: '10:00', waktuSelesai: '12:00', durasiMenit: 90, aktif: true }
  ],
  soal: [
    {
      id: 'SOAL-001',
      kodeMapel: 'INF-SD',
      jenjang: 'SD Tinggi',
      tipe: 'PG',
      pertanyaan: 'Perangkat keras komputer yang berfungsi sebagai otak pemroses utama data disebut...',
      opsi: { A: 'Monitor', B: 'CPU (Processor)', C: 'Keyboard', D: 'Printer' },
      kunci: 'B',
      bobot: 25
    },
    {
      id: 'SOAL-002',
      kodeMapel: 'INF-SD',
      jenjang: 'SD Tinggi',
      tipe: 'PG',
      pertanyaan: 'Contoh penerapan Kecerdasan Artifisial (AI) dalam kehidupan sehari-hari adalah...',
      opsi: { A: 'Penggaris kayu', B: 'Asisten suara pintar dan rekomendasi video', C: 'Buku tulis bergaris', D: 'Papan tulis kapur' },
      kunci: 'B',
      bobot: 25
    },
    {
      id: 'SOAL-003',
      kodeMapel: 'INF-SD',
      jenjang: 'SD Tinggi',
      tipe: 'PG',
      pertanyaan: 'Urutan langkah-langkah logis untuk menyelesaikan suatu masalah dalam koding disebut...',
      opsi: { A: 'Algoritma', B: 'Hardware', C: 'Wallpaper', D: 'Baterai' },
      kunci: 'A',
      bobot: 25
    },
    {
      id: 'SOAL-004',
      kodeMapel: 'INF-SD',
      jenjang: 'SD Tinggi',
      tipe: 'URAIAN',
      pertanyaan: 'Jelaskan secara singkat manfaat belajar Koding dan Kecerdasan Artifisial bagi siswa sekolah!',
      opsi: null,
      kunci: 'Melatih berpikir komputasional, logika pemecahan masalah, dan kreativitas digital.',
      bobot: 25
    },
    {
      id: 'SOAL-005',
      kodeMapel: 'INF-SMP',
      jenjang: 'SMP',
      tipe: 'PG',
      pertanyaan: 'Topologi jaringan yang menghubungkan setiap komputer ke satu perangkat pusat (Switch/Hub) adalah...',
      opsi: { A: 'Topologi Bus', B: 'Topologi Ring', C: 'Topologi Star', D: 'Topologi Mesh' },
      kunci: 'C',
      bobot: 100
    }
  ],
  hasilUjian: [
    {
      id: 'HSL-001',
      siswaId: 'USR-S01',
      kodeMapel: 'INF-SD',
      jawaban: { 'SOAL-001': 'B', 'SOAL-002': 'B', 'SOAL-003': 'A', 'SOAL-004': 'Untuk melatih logika dan membuat program bermanfaat.' },
      skorPG: 75,
      skorUraian: 20,
      skorTotal: 95,
      statusKoreksi: 'Selesai',
      waktuSelesai: '2026-11-24 08:45'
    }
  ]
};

function getDB() {
  const raw = localStorage.getItem(APP_STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(DEFAULT_DB));
    return JSON.parse(JSON.stringify(DEFAULT_DB));
  }
  return JSON.parse(raw);
}

function saveDB(db) {
  localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(db));
  pushCloudDB(db);
}

async function resetDemoDB() {
  localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(DEFAULT_DB));
  await pushCloudDB(DEFAULT_DB);
  showToast('Database cloud & lokal berhasil di-reset ke pengaturan awal.', 'success');
  setTimeout(() => location.reload(), 800);
}

function getCurrentUser() {
  const raw = sessionStorage.getItem('cbt_srt68_user');
  return raw ? JSON.parse(raw) : null;
}

function setCurrentUser(user) {
  sessionStorage.setItem('cbt_srt68_user', JSON.stringify(user));
}

function requireAuth(allowedRoles = []) {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'index.html';
    return null;
  }
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    showToast('Akses ditolak: Anda tidak memiliki hak akses ke modul ini.', 'error');
    setTimeout(() => {
      if (user.role === 'siswa') window.location.href = '4-ruang-ujian-peserta.html';
      else if (user.role === 'proktor') window.location.href = '5-pemantauan-proktor.html';
      else window.location.href = '1-manajemen-data-pengguna.html';
    }, 1000);
    return null;
  }
  return user;
}

function logoutUser() {
  showConfirmModal(
    'Konfirmasi Keluar Aplikasi',
    'Apakah Anda yakin ingin keluar dari sesi CBT SRT 68 Luwu Utara?',
    () => {
      sessionStorage.removeItem('cbt_srt68_user');
      showToast('Berhasil keluar. Mengalihkan ke halaman login...', 'info');
      setTimeout(() => { window.location.href = 'index.html'; }, 700);
    }
  );
}

// Toast Notification System (Tailwind + CSS)
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none';
    document.body.appendChild(container);
  }
  const colors = {
    success: 'bg-emerald-600 border-emerald-700 text-white',
    error: 'bg-rose-600 border-rose-700 text-white',
    warning: 'bg-amber-500 border-amber-600 text-white',
    info: 'bg-pink-600 border-pink-700 text-white'
  };
  const icons = {
    success: 'fa-circle-check',
    error: 'fa-circle-exclamation',
    warning: 'fa-triangle-exclamation',
    info: 'fa-circle-info'
  };
  const toast = document.createElement('div');
  toast.className = `toast-enter pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg ${colors[type] || colors.info}`;
  toast.innerHTML = `
    <i class="fa-solid ${icons[type] || icons.info} text-lg"></i>
    <span class="text-sm font-medium flex-1">${message}</span>
    <button onclick="this.parentElement.remove()" class="text-white/80 hover:text-white"><i class="fa-solid fa-xmark"></i></button>
  `;
  container.appendChild(toast);
  setTimeout(() => { if (toast.parentElement) toast.remove(); }, 3500);
}

// Custom Confirmation Modal (Delete / Logout)
function showConfirmModal(title, message, onConfirm) {
  const existing = document.getElementById('custom-confirm-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'custom-confirm-modal';
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-pink-100">
      <div class="flex items-center gap-3 text-pink-600 mb-3">
        <div class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
          <i class="fa-solid fa-triangle-exclamation text-lg"></i>
        </div>
        <h3 class="text-lg font-bold text-slate-800">${title}</h3>
      </div>
      <p class="text-sm text-slate-600 mb-6">${message}</p>
      <div class="flex justify-end gap-3">
        <button id="modal-cancel-btn" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium">Batal</button>
        <button id="modal-confirm-btn" class="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold shadow-sm">Ya, Lanjutkan</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('modal-cancel-btn').onclick = () => modal.remove();
  document.getElementById('modal-confirm-btn').onclick = () => {
    modal.remove();
    onConfirm();
  };
}

// Password Visibility Eye Toggle Helper
function togglePasswordField(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (icon) { icon.classList.remove('fa-eye'); icon.classList.add('fa-eye-slash'); }
  } else {
    input.type = 'password';
    if (icon) { icon.classList.remove('fa-eye-slash'); icon.classList.add('fa-eye'); }
  }
}

// Left-Hand Sidebar Renderer across all modules
function renderSidebar(activePage) {
  const user = getCurrentUser();
  if (!user) return;
  const sidebarEl = document.getElementById('app-sidebar');
  if (!sidebarEl) return;

  const avatarHtml = user.foto
    ? `<img src="${user.foto}" alt="Foto Profil" class="w-11 h-11 rounded-full object-cover border-2 border-pink-300">`
    : `<div class="w-11 h-11 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-lg border-2 border-pink-200">${user.nama.charAt(0)}</div>`;

  const menuItems = [
    { href: '1-manajemen-data-pengguna.html', icon: 'fa-users-gear', label: 'Data Kelas & Pengguna', roles: ['admin'] },
    { href: '2-bank-soal-digital.html', icon: 'fa-book-open-reader', label: 'Bank Soal Digital', roles: ['admin', 'guru'] },
    { href: '3-pengaturan-ujian-sesi.html', icon: 'fa-clock', label: 'Ruang & Sesi Ujian', roles: ['admin'] },
    { href: '5-pemantauan-proktor.html', icon: 'fa-desktop', label: 'Pemantauan Proktor', roles: ['admin', 'proktor'] },
    { href: '6-penilaian-rekap-walikelas.html', icon: 'fa-file-excel', label: 'Penilaian & Rekap Rapor', roles: ['admin', 'guru'] },
    { href: '7-pengaturan-akun.html', icon: 'fa-user-shield', label: 'Pengaturan Akun', roles: ['admin', 'guru', 'proktor'] }
  ];

  const filteredMenu = menuItems.filter(m => m.roles.includes(user.role));

  sidebarEl.innerHTML = `
    <div class="p-5 border-b border-pink-100 flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-600 to-rose-500 text-white flex items-center justify-center shadow-md">
        <i class="fa-solid fa-graduation-cap text-lg"></i>
      </div>
      <div>
        <h1 class="font-extrabold text-sm text-slate-800 leading-tight">CBT SRT 68</h1>
        <p class="text-[11px] font-medium text-pink-600">Luwu Utara • V.1.0</p>
        <div id="cloud-sync-badge" class="mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 inline-flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Cloud Aktif</div>
      </div>
    </div>

    <div class="p-4 mx-3 mt-4 rounded-2xl bg-pink-50/80 border border-pink-100 flex items-center gap-3">
      ${avatarHtml}
      <div class="overflow-hidden">
        <p class="text-xs font-bold text-slate-800 truncate">${user.nama}</p>
        <span class="inline-block mt-0.5 px-2 py-0.5 text-[10px] font-semibold uppercase rounded-full bg-pink-200/80 text-pink-800">${user.role}${user.isWaliKelas ? ' • Wali Kelas' : ''}</span>
      </div>
    </div>

    <nav class="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
      ${filteredMenu.map(item => `
        <a href="${item.href}" class="sidebar-link ${activePage === item.href ? 'active' : 'text-slate-600 hover:bg-pink-50 hover:text-pink-700'} flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all">
          <i class="fa-solid ${item.icon} w-5 text-center"></i>
          <span>${item.label}</span>
        </a>
      `).join('')}
    </nav>

    <div class="p-4 border-t border-pink-100 space-y-2">
      <button onclick="logoutUser()" class="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white text-sm font-semibold transition-all">
        <i class="fa-solid fa-right-from-bracket"></i>
        <span>Keluar Aplikasi</span>
      </button>
      <p class="text-[10px] text-center text-slate-400">&copy; 2026 SRT 68 Luwu Utara</p>
    </div>
  `;
}


// ============================================================================
// REAL-TIME CLOUD SYNC ENGINE (SUPABASE REST API) - AGAR SEMUA LAPTOP SAMA
// ============================================================================
const SUPABASE_STATE_ROW_ID = 'srt68_main_db';
let isSyncingFromCloud = false;

function isCloudEnabled() {
  return Boolean(
    window.SUPABASE_CONFIG &&
    window.SUPABASE_CONFIG.enabled &&
    window.SUPABASE_CONFIG.url &&
    window.SUPABASE_CONFIG.anonKey
  );
}

function getSupabaseHeaders() {
  return {
    'apikey': window.SUPABASE_CONFIG.anonKey,
    'Authorization': 'Bearer ' + window.SUPABASE_CONFIG.anonKey,
    'Content-Type': 'application/json',
    'Prefer': 'resolution=merge-duplicates,return=minimal'
  };
}

async function pullCloudDB(reloadUI = true) {
  if (!isCloudEnabled()) return false;
  try {
    const endpoint = `${window.SUPABASE_CONFIG.url}/rest/v1/cbt_global_state?id=eq.${SUPABASE_STATE_ROW_ID}&select=payload,updated_at`;
    const res = await fetch(endpoint, { headers: getSupabaseHeaders() });
    if (!res.ok) return false;
    const rows = await res.json();
    if (rows && rows.length > 0 && rows[0].payload) {
      const cloudStr = JSON.stringify(rows[0].payload);
      const localStr = localStorage.getItem(APP_STORAGE_KEY);
      if (cloudStr !== localStr) {
        localStorage.setItem(APP_STORAGE_KEY, cloudStr);
        if (reloadUI) {
          refreshCurrentPageUI();
        }
      }
      updateSyncBadge('online');
      return true;
    } else {
      // Seed initial DEFAULT_DB to Supabase if table is empty
      const currentLocal = getDB();
      await pushCloudDB(currentLocal);
      updateSyncBadge('online');
      return true;
    }
  } catch (err) {
    console.warn('Cloud pull gagal, menggunakan cache lokal:', err);
    updateSyncBadge('offline');
    return false;
  }
}

async function pushCloudDB(dbObj) {
  if (!isCloudEnabled()) return;
  try {
    updateSyncBadge('syncing');
    const endpoint = `${window.SUPABASE_CONFIG.url}/rest/v1/cbt_global_state`;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: getSupabaseHeaders(),
      body: JSON.stringify({
        id: SUPABASE_STATE_ROW_ID,
        payload: dbObj,
        updated_at: new Date().toISOString()
      })
    });
    if (res.ok) {
      updateSyncBadge('online');
    } else {
      updateSyncBadge('offline');
    }
  } catch (err) {
    console.warn('Cloud push gagal:', err);
    updateSyncBadge('offline');
  }
}

function refreshCurrentPageUI() {
  if (typeof renderAllTables === 'function') renderAllTables();
  if (typeof renderBankSoal === 'function') renderBankSoal();
  if (typeof renderRS === 'function') renderRS();
  if (typeof renderProktor === 'function') renderProktor();
  if (typeof renderPenilaian === 'function') renderPenilaian();
}

function updateSyncBadge(status) {
  const badge = document.getElementById('cloud-sync-badge');
  if (!badge) return;
  if (status === 'online') {
    badge.className = 'px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1.5';
    badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-500"></span> Cloud Sinkron';
  } else if (status === 'syncing') {
    badge.className = 'px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 flex items-center gap-1.5';
    badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span> Menyinkronkan...';
  } else {
    badge.className = 'px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 flex items-center gap-1.5';
    badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-rose-500"></span> Mode Lokal';
  }
}

// Jalankan sinkronisasi otomatis saat halaman dibuka dan setiap 8 detik
if (isCloudEnabled()) {
  window.addEventListener('DOMContentLoaded', () => {
    pullCloudDB(true);
    setInterval(() => {
      // Jangan timpa UI saat siswa sedang mengerjakan soal agar tidak mengganggu fokus
      if (typeof examActive !== 'undefined' && examActive) return;
      pullCloudDB(true);
    }, 8000);
  });
}

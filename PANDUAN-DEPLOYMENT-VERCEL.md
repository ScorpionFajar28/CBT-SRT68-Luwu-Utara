# Panduan Deployment CBT SRT 68 Luwu Utara V.1.0 (v22)
**Sekolah Rakyat Terintegrasi 68 Luwu Utara**

## 1. Struktur Paket File (v22)
- `index.html` — Portal Login ASAS (Admin, Guru/Wali Kelas, Proktor, Peserta Ujian dengan verifikasi token tersembunyi `*****` dan tombol intip sandi).
- `1-manajemen-data-pengguna.html` — Sub-menu responsif Data Kelas (`ID Rombel`), Data Guru (multi-select mapel & jenjang SD Rendah, SD Tinggi, SMP), Data Siswa (impor `.docx` & sinkron ID Rombel), serta ekspor spreadsheet.
- `2-bank-soal-digital.html` — Manajemen Bank Soal Pilihan Ganda & Uraian sesuai mata pelajaran yang diampu guru.
- `3-pengaturan-ujian-sesi.html` — Pengaturan Ruang Ujian, Sesi Ujian lintas kelas, dan pembaruan Token Aktif (khusus Admin).
- `4-ruang-ujian-peserta.html` — Ruang ujian peserta dengan mode layar penuh (`Fullscreen`) dan proteksi anti-curang 4x peringatan.
- `5-pemantauan-proktor.html` — Pemantauan status peserta real-time, pelanggaran tab, dan reset sesi peserta.
- `6-penilaian-rekap-walikelas.html` — Koreksi soal uraian oleh Guru Mapel dan Rekapitulasi Nilai Rapor otomatis untuk Wali Kelas berbasis `ID Rombel`.
- `7-pengaturan-akun.html` — Pengaturan akun mandiri (ubah kata sandi & unggah foto profil).
- `database/schema_supabase.sql` — Skema tabel PostgreSQL siap pakai di Supabase.

## 2. Langkah Deploy ke Vercel (Mendukung 100 Pengguna Konkuren)
1. Ekstrak file `CBT-SRT-68-Luwu-Utara-v22.zip` ke folder proyek Anda (atau unggah ke repositori GitHub).
2. Buat proyek baru di **Supabase** (region Singapore `ap-southeast-1`), jalankan isi `database/schema_supabase.sql` pada menu **SQL Editor**.
3. Masukkan `Project URL` dan `anon public key` dari Supabase ke dalam file `assets/js/supabase-config.js`.
4. Hubungkan repositori ke **Vercel** (Framework Preset: *Other*), lalu klik **Deploy**.

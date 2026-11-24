-- Skema Database PostgreSQL (Supabase) - CBT SRT 68 Luwu Utara V.1.0 (v22)
CREATE TABLE IF NOT EXISTS kelas_rombel (
  id_rombel VARCHAR(30) PRIMARY KEY,
  nama_kelas VARCHAR(100) NOT NULL,
  jenjang VARCHAR(30) NOT NULL CHECK (jenjang IN ('SD Rendah', 'SD Tinggi', 'SMP')),
  wali_kelas_id VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(50) PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  nama VARCHAR(150) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'guru', 'proktor', 'siswa')),
  is_wali_kelas BOOLEAN DEFAULT FALSE,
  wali_rombel VARCHAR(30) REFERENCES kelas_rombel(id_rombel) ON DELETE SET NULL,
  id_rombel VARCHAR(30) REFERENCES kelas_rombel(id_rombel) ON DELETE SET NULL,
  mapel_ampu JSONB DEFAULT '[]'::jsonb,
  jenjang_ampu JSONB DEFAULT '[]'::jsonb,
  ruang VARCHAR(100),
  sesi VARCHAR(50),
  status_ujian VARCHAR(30) DEFAULT 'Belum Mulai',
  pelanggaran INT DEFAULT 0,
  foto_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS mapel (
  kode VARCHAR(30) PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  jenjang VARCHAR(30) NOT NULL,
  aktif BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS bank_soal (
  id VARCHAR(50) PRIMARY KEY,
  kode_mapel VARCHAR(30) REFERENCES mapel(kode) ON DELETE CASCADE,
  jenjang VARCHAR(30) NOT NULL,
  tipe VARCHAR(20) NOT NULL CHECK (tipe IN ('PG', 'URAIAN')),
  pertanyaan TEXT NOT NULL,
  opsi JSONB,
  kunci TEXT NOT NULL,
  bobot INT DEFAULT 20
);

CREATE TABLE IF NOT EXISTS hasil_ujian (
  id VARCHAR(50) PRIMARY KEY,
  siswa_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE,
  kode_mapel VARCHAR(30) REFERENCES mapel(kode) ON DELETE CASCADE,
  jawaban JSONB DEFAULT '{}'::jsonb,
  skor_pg NUMERIC(5,2) DEFAULT 0,
  skor_uraian NUMERIC(5,2) DEFAULT 0,
  skor_total NUMERIC(5,2) DEFAULT 0,
  status_koreksi VARCHAR(40) DEFAULT 'Selesai',
  waktu_selesai TIMESTAMPTZ DEFAULT NOW()
);

// Konfigurasi Supabase untuk Sinkronisasi Real-Time (100+ Pengguna Konkuren di Vercel)
// Ganti URL dan ANON_KEY sesuai proyek Supabase Anda, atau biarkan kosong untuk Mode Lokal (LocalStorage).
window.SUPABASE_CONFIG = {
  url: "https://jbzaxrzrljzshhekjzsi.supabase.co", // Contoh: "https://xxxxxxxxxxxx.supabase.co"
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiemF4cnpybGp6c2hoZWtqenNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU0ODU2OTQsImV4cCI6MjExMTA2MTY5NH0.uAV2wf-9IdRcnvix-c8ipMkmXn3RtfRlJpUQNx86MzU", // Contoh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  enabled: false
};

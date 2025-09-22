const teman = [
  "Andi",
  "Budi",
  "Citra",
  "Dewi",
  "Eka",
  "Fajar",
  "Gilang",
  "Hana",
  "Indra",
  "Joko",
];

console.log("=== Data Awal ===");
console.log(teman);

// map() → Ubah semua nama menjadi huruf besar
const hurufBesar = teman.map((nama) => nama.toUpperCase());
console.log("\nmap() → Semua nama huruf besar:");
console.log(hurufBesar);

// filter() → Ambil nama yang panjangnya lebih dari 5 huruf
const namaPanjang = teman.filter((nama) => nama.length > 5);
console.log("\nfilter() → Nama dengan panjang lebih dari 5 huruf:");
console.log(namaPanjang);

// reduce() → Hitung total panjang semua nama
const totalPanjang = teman.reduce((total, nama) => total + nama.length, 0);
console.log("\nreduce() → Total panjang semua nama:");
console.log(totalPanjang);

// find() → Cari nama tertentu (misalnya huruf depan sama dengan 'D')
const cariNama = teman.find((nama) => nama.startsWith("D"));
console.log("\nfind() → Nama yang huruf depannya 'D':");
console.log(cariNama);

// some() → Cek apakah ada nama dengan panjang lebih dari 10 huruf
const adaNamaLebih10 = teman.some((nama) => nama.length > 10);
console.log("\nsome() → Apakah ada nama panjangnya > 10 huruf?");
console.log(adaNamaLebih10);

// every() → Cek apakah semua nama terdiri dari lebih dari 3 huruf
const semuaLebih3 = teman.every((nama) => nama.length > 3);
console.log("\nevery() → Apakah semua nama lebih dari 3 huruf?");
console.log(semuaLebih3);

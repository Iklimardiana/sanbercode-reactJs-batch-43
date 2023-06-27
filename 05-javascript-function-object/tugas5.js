// Soal 1 ( Membuat Function dengan return String )
console.log('--Soal Nomor 1--')
function cetakFunction(){
    return 'Hallo nama saya Iklima Mardiana';
}

console.log(cetakFunction());


console.log('\n--Soal Nomor 1--')
// Soal 2 ( Membuat Function dengan rumus penjumlahan didalamnya)
 function myFunction(a, b){
    return a+b;
 };

let angka1 = 20
let angka2 = 7

let output = myFunction(angka1, angka2);
console.log(output);


console.log('\n--Soal Nomor 3--');
// Soal 3 ( Mengubah dalam bentuk arrow function )
const Hello = () => {
    return "Hello"
}

console.log(Hello());


console.log('\n--Soal Nomor 4');
// soal 4 ( Memanggil key dalam sebuah object )
let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia"
}

console.log(obj.bahasa);


console.log('\n--Soal Nomor 5--');
// soal 5 ( mengubah array menjadi object )
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta);


console.log('\n--Soal Nomor 6--');
// soal 6( Membuat sebuah array of object dan melakukan filter )
let buah =[
    {nama: 'Nanas', warna: 'kuning', adaBijinya: false, harga: 9000},
    {nama: 'Jeruk', warna: 'Oranye', adaBijinya: true, harga: 8000},
    {nama: 'Semangka', warna: 'Hijau & Merah', adaBijinya: true, harga: 10000},
    {nama: 'Pisang', warna: 'kuning', adaBijinya: false, harga: 5000}
];

let arrayBuahFilter = buah.filter(function(buah){
    return buah.adaBijinya === false;
 })
 
 console.log(arrayBuahFilter);

 
 console.log('\n--Soal Nomor 7--');
//  Soal 7 ( Destructuring pada Object )
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }

 const {name, brand, year} = phone;
 console.log(phone);

 console.log(name, brand, year);
 
 
 console.log('\n--Soal Nomor 8--');
//  soal 8 ( Spred Operator pada Object )
let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
  let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  }
  
  let objOutput = {};
  objOutput = {...dataBukuTambahan, ...buku};

  console.log(objOutput); 

  //soal 9 ( Penggunaan Function dan Object )
  console.log('\n--Soal Nomor 9--');
  let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002
    }


    const functionObject = (param) => {
    return param
    }

    console.log(functionObject(mobil));

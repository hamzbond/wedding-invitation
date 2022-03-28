"use strict";

// Start read from json file
var myInit = {
    method: "GET",
    headers: {
        'Content-type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};
let myRequest = new Request("./js/data.json",myInit)

fetch(myRequest).then(function(resp) {
    return resp.json();
}).then(function(data) {

    // Get details from tanggal
    var tanggal = data.tanggal.split(' ')[0].split('/')
    var waktu = data.tanggal.split(' ')[1]
    let date = new Date(tanggal[2], tanggal[1]-1, tanggal[0])
    const dayname = date.toLocaleString('id-ID', { weekday: 'long' })
    const hari = tanggal[0]
    const bulan = date.toLocaleString('id-ID', { month: 'long' })
    const tahun = tanggal[2]    
    // console.log(tanggal, waktu)

    // Assign values to html
    document.title = "Undangan Pernikahan " + data.pria[0].nama + " dan " + data.wanita[0].nama
    const prianame = document.getElementsByClassName("prianame")
    for (let i=0; i<prianame.length; i++) {
        prianame[i].innerHTML = data.pria[0].nama;
    }
    const wanitaname = document.getElementsByClassName("wanitaname")
    for (let i=0; i<wanitaname.length; i++) {
        wanitaname[i].innerHTML = data.wanita[0].nama;
    }
    document.getElementById("priaig").innerHTML = data.pria[0].ig;
    document.getElementById("igpria").href = `https://www.instagram.com/${data.pria[0].ig}/`
    document.getElementById("wanitaig").innerHTML = data.wanita[0].ig;
    document.getElementById("igwanita").href = `https://www.instagram.com/${data.wanita[0].ig}/`
    document.getElementById("priafullname").innerHTML = data.pria[0].fullname;
    document.getElementById("wanitafullname").innerHTML = data.wanita[0].fullname;
    document.getElementById("akad").innerHTML = waktu.substring(0,5) + " WIB";
    document.getElementById("resepsi").innerHTML = data.resepsi;
    const daynames = document.getElementsByClassName("dayname")
    for (let i=0; i<daynames.length; i++) {
        daynames[i].innerHTML = dayname
    }
    const days = document.getElementsByClassName("day")
    for (let i=0; i<days.length; i++) {
        days[i].innerHTML = hari
        days[i].value = hari
    }
    const months = document.getElementsByClassName("month")
    for (let i=0; i<months.length; i++) {
        months[i].innerHTML = bulan
        months[i].value = tanggal[1]
    }
    const years = document.getElementsByClassName("year")
    for (let i=0; i<years.length; i++) {
        years[i].innerHTML = tahun
        years[i].value = tahun
    }
    document.getElementById("framepoint").href = data.map_point
    document.getElementById("mappoint").href = data.map_point
    const alamatnames = document.getElementsByClassName("alamatname")
    for (let i=0; i<alamatnames.length; i++) {
        alamatnames[i].innerHTML = data.alamat[0].name
    }
    const alamat1s = document.getElementsByClassName("alamat1")
    for (let i=0; i<alamat1s.length; i++) {
        alamat1s[i].innerHTML = data.alamat[0].jalan + " " + data.alamat[0].rtw
    }
    const alamat2s = document.getElementsByClassName("alamat2")
    for (let i=0; i<alamat2s.length; i++) {
        alamat2s[i].innerHTML = data.alamat[0].kec + " " + data.alamat[0].kota + " " + data.alamat[0].provinsi
    }
    document.getElementById("cityname").innerHTML = data.alamat[0].kota
    document.getElementById("wapria").href = `https://api.whatsapp.com/send?phone=${data.pria[0].phone}&text=Halo%20${data.pria[0].nama},%20saya%20akan%20datang%20di%20acara%20pernikahan&source=&data=`
    document.getElementById("wawanita").href = `https://api.whatsapp.com/send?phone=${data.wanita[0].phone}&text=Halo%20${data.wanita[0].nama},%20saya%20akan%20datang%20di%20acara%20pernikahan&source=&data=`
});
// End read from json file

// Start read from url param
const params = new URLSearchParams(document.location.search);
const tamu = params.get("to");
// Assign values to html
document.getElementById("to").innerHTML = tamu;
// End read from url param

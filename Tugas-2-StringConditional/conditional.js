console.log("if-else")

var nama ="John"
var peran = "guard"

if (nama=="" && peran==""){
    console.log("Nama harus diisi!")
}else{
    if(peran==""){
        console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
        console.log(`Terdapat tiga peran yaitu Penyihir, Guard, dan Werewolf`)
    }else{
        if(peran=='Penyihir'){
            console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
            console.log(`Halo ${peran} ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`)
        } else{
            if(peran=='Guard'){
                console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
                console.log(`Halo ${peran} ${nama}, kamu akan memmbantu melindungi temanmu dari serangan werewolf.`)
            }else{
                if(peran=='Werewolf'){
                    console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
                    console.log(`Halo ${peran} ${nama}, Kamu akan memakan mangsa setiap malam!`)
                }else{
                    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
                    console.log(`Terdapat tiga peran yaitu Penyihir, Guard, dan Werewolf`)
                }
            }
        }
    }
}

console.log("")
console.log("Switch Case")

var hari = 28; 
var bulan = 2; 
var tahun = 1940;

if (tahun<1900 || tahun >2200){
    console.log(`Input tahun dari 1900 - 2200`)
}else{
    if(tahun%4==0){
        if(bulan<1 || bulan>12){
            console.log(`Input bulan dari 1 - 12`)
        }else{
            switch(bulan){
                case 1: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Januari"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 2: {
                    if (hari<1 || hari>29){
                        console.log(`Input hari dari 1 - 29`)
                    }else{
                        tanggal = hari
                        bulan = "Februari"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 3: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Maret"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 4: {
                    if (hari<1 || hari>30){
                        console.log(`Input hari dari 1 - 30`)
                    }else{
                        tanggal = hari
                        bulan = "April"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 5: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Mei"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 6: {
                    if (hari<1 || hari>30){
                        console.log(`Input hari dari 1 - 30`)
                    }else{
                        tanggal = hari
                        bulan = "Juni"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 7: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Juli"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 8: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Agustus"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 9: {
                    if (hari<1 || hari>30){
                        console.log(`Input hari dari 1 - 30`)
                    }else{
                        tanggal = hari
                        bulan = "Septermber"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 10: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Oktober"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 11: {
                    if (hari<1 || hari>30){
                        console.log(`Input hari dari 1 - 30`)
                    }else{
                        tanggal = hari
                        bulan = "November"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 12: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Desember"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }   
            }
        }

    }else{
        if(bulan<1 || bulan>12){
            console.log(`Input bulan dari 1 - 12`)
        }else{
            switch(bulan){
                case 1: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Januari"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 2: {
                    if (hari<1 || hari>28){
                        console.log(`Input hari dari 1 - 28`)
                    }else{
                        tanggal = hari
                        bulan = "Februari"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 3: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Maret"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 4: {
                    if (hari<1 || hari>30){
                        console.log(`Input hari dari 1 - 30`)
                    }else{
                        tanggal = hari
                        bulan = "April"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 5: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Mei"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 6: {
                    if (hari<1 || hari>30){
                        console.log(`Input hari dari 1 - 30`)
                    }else{
                        tanggal = hari
                        bulan = "Juni"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 7: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Juli"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 8: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Agustus"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 9: {
                    if (hari<1 || hari>30){
                        console.log(`Input hari dari 1 - 30`)
                    }else{
                        tanggal = hari
                        bulan = "Septermber"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 10: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Oktober"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 11: {
                    if (hari<1 || hari>30){
                        console.log(`Input hari dari 1 - 30`)
                    }else{
                        tanggal = hari
                        bulan = "November"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                case 12: {
                    if (hari<1 || hari>31){
                        console.log(`Input hari dari 1 - 31`)
                    }else{
                        tanggal = hari
                        bulan = "Desember"
                        console.log(`${tanggal} ${bulan} ${tahun}`)
                    }
                    break
                }
                
            }

        }
    }
}

var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

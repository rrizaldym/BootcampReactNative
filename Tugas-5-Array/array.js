console.log(`Soal No. 1 (Range)`)

function range(startNum, finishNum){
    var Num = []
    if (startNum  == undefined || finishNum == undefined){
        return -1
    }else{
        if (startNum>finishNum){
            while(startNum>=finishNum){
                Num.push(startNum)
                startNum--
            }
        }else{
            while(startNum<=finishNum){
                Num.push(startNum)
                startNum++
            }
        }
    }
    return Num
}

console.log('a. ' + range(1, 10));
console.log('b. ' + range());
console.log('c. ' + range(11,18));
console.log('d. ' + range(54, 50));
console.log('e. ' + range());

console.log(`\nSoal No. 2 (Range with Step)`)
function rangeWithStep(startNum, finishNum, step){
    var Num = []
    if (startNum > finishNum){
        for(startNum; startNum >= finishNum; startNum-=step){
            Num.push(startNum)
        }
    }else{
        for(startNum; startNum <= finishNum; startNum+=step){
            Num.push(startNum)
        }
    }
    return Num
}

console.log('a. ' + rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log('b. ' + rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log('c. ' + rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log('d. ' + rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

console.log(`\nSoal No. 3 (Sum of Range)`)
function sum(startNum, finishNum, step){
    var Num = []
    var jumlah = 0
    if (startNum==undefined){
        return 0
    }else if(finishNum==undefined){
        return 1
    }else if(step==undefined){
        if(startNum<finishNum){
            for(startNum; startNum<=finishNum; startNum++){
                Num.push(startNum)
            }
        }else{
            while(startNum>=finishNum){
                Num.push(startNum)
                startNum--
            }
        }
    }else {
        if(startNum<finishNum){
            while(startNum<=finishNum){
                Num.push(startNum)
                startNum += step
            }
        }else{
            while(startNum>=finishNum){
                Num.push(startNum)
                startNum-= step
            }
        }
    }
    for(j=0;j<Num.length;j++){
        jumlah+= Num[j]
    }
    return jumlah
}

console.log('a. ' + sum(1,10)) // 55
console.log('b. ' + sum(5, 50, 2)) // 621
console.log('c. ' + sum(15,10)) // 75
console.log('d. ' + sum(20, 10, 2)) // 90
console.log('e. ' + sum(1)) // 1
console.log('f. ' + sum()) // 0 

console.log(`\nSoal No. 4 (Array Multidimensi)`)
function dataHandling(){
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ] 
    
    for(j=0;j<4;j++){
        for(k=0;k<4;k++){
            switch(k){
                case 0: console.log(`Nomo ID : ${input[j][k]}`);break
                case 1: console.log(`Nama Lengkap : ${input[j][k]}`);break
                case 2: console.log(`TTL : ${input[j][k]} ${input[j][k+1]}`);break
                default: console.log(`Hobi : ${input[j][k+1]}\n`);break
            }
        }
    }
    
}

dataHandling()

console.log(`\nSoal No. 5 (Balik Kata)`)
function balikKata(input){
    var arr=[]
    for (k=input.length-1;k>-1;k-- ){
        arr.push(input[k])
    }
    var balik=[]
    for(k=0; k<input.length;k++){
        balik+=arr[k]
    }
    return balik
}

console.log('a. ' + balikKata("Kasur Rusak")) // kasuR rusaK
console.log('b. ' + balikKata("SanberCode")) // edoCrebnaS
console.log('c. ' + balikKata("Haji Ijah")) // hajI ijaH
console.log('d. ' + balikKata("racecar")) // racecar
console.log('e. ' + balikKata("I am Sanbers")) // srebnaS ma I 


console.log(`\nSoal No. 6 (Metode Array)`)

function dataHandling2(data){
    data.splice(1,4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", 'Pria', 'SMA Internasional Metro')
    console.log(`a. ${data}`)

    var bulan = data[3].split('/')
    switch(bulan[1]){
        case '01': console.log(`b. Januari`); break
        case '02': console.log(`b. Februari`); break
        case '03': console.log(`b. Maret`); break
        case '04': console.log(`b. April`); break
        case '05': console.log(`b. Mei`); break
        case '06': console.log(`b. Juni`); break
        case '07': console.log(`b. Juli`); break
        case '08': console.log(`b. Austus`); break
        case '09': console.log(`b. September`); break
        case '10': console.log(`b. Oktober`); break
        case '11': console.log(`b. November`); break
        case '12': console.log(`b. Desember`); break
        default: break
    }

    console.log(`c. ${bulan.sort(function (value1, value2) { return value2 - value1 } )}`)
    console.log(`d. ${data[3].split('/').join('-')}`)
    var namaSlice = data[1].split('').slice(0,15).join('')
    console.log(`e. ${namaSlice}`)
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input)
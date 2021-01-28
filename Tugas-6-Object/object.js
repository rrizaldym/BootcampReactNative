console.log(`Soal No. 1 (Array to Object)`)

var now = new Date()
var thisYear = now.getFullYear() // 2020 (tahun sekarang)

function arrayToObject(inputArr){
    var obj = {}
    if(inputArr.length==0){
        console.log('oke kosong')
    }else{

        for (j=0;j<2;j++){
            for(k=0;k<4;k++){
                switch(k){
                    case 0:obj.firstName = inputArr[j][k];break
                    case 1: obj.lastName = inputArr[j][k];break
                    case 2: obj.gender = inputArr[j][k];break
                    default : {
                     if (inputArr[j][k]==undefined || inputArr[j][k]>thisYear){
                        obj.age = "Invalid Birth Year"
                        break
                     }else {
                        obj.age = thisYear - inputArr[j][k]
                        break
                     }
                    }
                }
            }
            console.log((j+1),'. ',inputArr[j][0],'',inputArr[j][1],': ',obj,"\n")
        }
    }
}
// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
arrayToObject([]) // ""

console.log(`\nSoal No. 2 (Shopping Time)`)

function shoppingTime(memberId, money) {
    var sale = {
        git : 1000,
        "Sepatu Stacattu" : 1500000,
        "Baju Zoro" : 500000,
        "Baju H&N" : 250000,
        "Sweater Uniklooh" : 175000,
        "Casing Handphone" : 50000
    }
    var obj={}
    if (memberId==undefined || memberId==''){
      return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else if (money<50000){
      return 'Mohon maaf, uang tidak cukup'
    }else{
        obj.memberId = memberId
        obj.money = money
        var listPurchased=[]
        switch(money!=0){
            case (money>sale["Sepatu Stacattu"]) : 
                money-=sale["Sepatu Stacattu"]
                listPurchased.push("Sepatu Stacattu")
            case (money>sale["Baju Zoro"]) :
                money-=sale["Baju Zoro"]
                listPurchased.push("Baju Zoro")
            case (money>sale["Baju H&N"]) :
                money-=sale["Baju H&N"]
                listPurchased.push("Baju H&N")
            case (money>sale["Sweater Uniklooh"]) :
                money-=sale["Sweater Uniklooh"]
                listPurchased.push("Sweater Uniklooh")
            case ((money>sale["Casing Handphone"])):
                money-=sale["Casing Handphone"]
                listPurchased.push("Casing Handphone")
        }
        obj.listPurchased = listPurchased
        obj.changeMoney = money
        return obj
    }
}
   
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

console.log(`\nSoal No. 3 (Naik Angkot)`)

function naikAngkot(listPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    arrPenumpang = []
    if (listPenumpang.length == 0){
        return listPenumpang
    }else{
        for(j=0;j<listPenumpang.length;j++){
            var obj = {}
            obj.penumpang = listPenumpang[j][0]
            obj.naikDari = listPenumpang[j][1]
            obj.tujuan = listPenumpang[j][2]
            for (i=0;i<=rute.length;i++){
                if (obj.naikDari===rute[i]){
                    var naikDari = i
                    break
                }
            }
            for (i=0;i<=rute.length;i++){
                if(obj.tujuan===rute[i]){
                    var tujuan = i
                    break
                }
            }
            var bayar = (tujuan-naikDari)*2000
            obj.bayar = bayar
            arrPenumpang.push(obj)
        }
        return arrPenumpang
    }
}
   

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
   
console.log(naikAngkot([])); //[]
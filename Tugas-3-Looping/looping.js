console.log('No. 1 Looping While')

var no1 = 0

console.log('LOOPING PERTAMA')
while (no1<20){
    no1+=2
    console.log(`${no1} - I love coding`)    
}

console.log('LOOPING KEDUA')
while (no1>0){
    console.log(`${no1} - I will become a mobile developer`)    
    no1-=2
}
console.log('')
console.log('No. 2 Looping menggunakan for')

for(var no2 = 1; no2 <= 20; no2 ++){
    if(no2%2 != 0 && no2%3 == 0){
        console.log(`${no2} - I Love Coding`)
    }else if(no2%2!=0) {
        console.log(`${no2} - Santai`)
    }else {
        console.log(`${no2} - Berkualitas`)
    }
}

console.log('')
console.log('No. 3 Membuat Persegi Panjang #')

for(var no3 = 1; no3 <=4; no3 ++){
    console.log('########')
}

console.log('')
console.log('No. 4 Membuat Tangga ')

var tangga = '#'

for(var no4 = '#'; no4.length <=7; no4 += tangga){
    console.log(no4)
}

console.log('')
console.log('No. 5 Membuat Papan Catur')

for(var no5 = 1; no5 <=8; no5 ++){
    if(no5%2==0){
        console.log('# # # # ')
    }else{
        console.log(' # # # #')
    }
}
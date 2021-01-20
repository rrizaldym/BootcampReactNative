var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
bacaBuku=(i, time)=>{
    if(i<books.length){
        readBooks(time, books[i], function(check){
            if (check){
                time=time-books[i].timeSpent
                i++
                return bacaBuku(i,time)
            }
        })
    }
}
//console.log(books.length)
bacaBuku(0,10000)

var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

bacaBuku=(i, time)=>{
    if(i<books.length){
        readBooksPromise(time, books[i])
            .then(function(fulfilled){
                console.log(fulfilled)
                time=time-books[i].timeSpent
                i++
                return bacaBuku(i, time)
            })
            .catch(function(error){
                console.log(error.message)
            })
    }
}

bacaBuku(0,10000)
// First program calculate the sum of numbers in an array

const arrayOfNumbers = [4,5,8,9,23,14,13];

const sum = arrayOfNumbers.reduce((total,number)=> total + number);

console.log("First program calculate the sum of numbers in an array => ",sum,"\n")


// Second program group books to author

const programmingBooks = [
    { 
        title:"Clean Code", 
        author:"Robert Cecil Martin"
    },
    { 
        title:"Code Complete", 
        author:"Steve McConnell"
    },
    { 
        title:"Refactoring",
        author:"Martin Fowler"
    },
    { 
        title:"The Clean Coder",
        author:"Robert Cecil Martin"
    },
    { 
        title:"Domain-Driven Design",
        author:"Eric Evans"
    },
    { 
        title:"Clean Architecture",
        author:"Robert Cecil Martin"
    },
]

const authors = programmingBooks.reduce((accumlation,book)=>{
    const author = book.author;
    if(accumlation[author] == null) accumlation[author] = [];
    accumlation[author].push(book.title)
    return accumlation
},{})

console.log("Second program group books to author => \n",authors,"\n")
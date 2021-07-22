const books = [
    {isbn: 9782850610455, 
    title: 'Zoocities',
    author: 'Joelle Zask', 
    rating: '3.5', 
    year: 2020},

    {isbn: 9780679720201, 
    title: 'The Stranger',
    author: 'Albert Camus', 
    rating: '4.3', 
    year: 1942},

    {isbn: 9780679720201, 
    title: 'The Stranger',
    author: 'Albert Camus', 
    rating: '4.3', 
    year: 1942},

    {isbn: 9780060530921,
    title: 'The Graveyard Book',
    author: 'Neil Gaiman',
    rating: 4,
    year: 2008},

    {isbn: 9780733426094,
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    rating: 5,
    year: 1605},

    {isbn: 9780733426094,
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    rating: 5,
    year: 1605},
    ]
    /* const authors = [
    {
        "name":"author 1",
        "gender":"M",
        "bio":"This is good author"
    },
    {
        "name":"author 2",
        "gender":"F",
        "bio":"Amazing author focussing on real life challenges"
    },
    {
        "name":"author 4",
        "gender":"M",
        "bio":"Writing kids books for over a decade"
    }    
]
*/
// Return book and author info for a given isbn number. Duplicates exist

function isbnSearch(){
    var i = 0;
     while (i < books.length){
            console.log(books[i].isbn,',',books[i].author,', ',books[i].title);
            i++;
    }
};

console.log(isbnSearch(books.isbn))
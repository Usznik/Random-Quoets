
function generate()
{
    var quotes = 
    {
        "Oscar Wilde" : "“Be yourself; everyone else is already taken.”",
        "Marilyn Monroe" : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        "Albert Einstein" : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "Frank Zappa" : "“So many books, so little time.”",
        "Marcus Tullius Cicero" : "“A room without books is like a body without a soul.”",
        "Dr.Seuss" : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        "Albert Camus" : "“Don\'t walk in front of me… I may not followDon\'t walk behind me… I may not lead Walk beside me… just be my friend”",
        "Oscar Wilde" : "“Always forgive your enemies; nothing annoys them so much.”",
        "Ralph Waldo Emerson" : "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        "Marilyn Monroe" : "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”"
    }
    var authors = Object.keys(quotes); //return object to array 
    var author =  authors[Math.floor(Math.random()*authors.length)]; //return author from array authors
    var quote = quotes[author] //return quote = author from our object
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("Author").innerHTML=author;
}
generate()  //call function with refresh website
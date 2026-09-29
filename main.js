/* Scenario:
You are tasked with designing a library management system.
The library lends out various types of items such as books, DVDs, and magazines. 
While all items share some common properties (e.g., title, id, isAvailable),
each type has unique properties and behaviors. 
For example:
● Books have an author and a genre.
● DVDs have a director and duration.
● Magazines have an issueNumber and publisher.
*/ 

/*Tasks
1. Step 1: Create a Base Class
    Define a class LibraryItem to represent shared properties
    (title, id, isAvailable) 
    and methods 
    (e.g., checkOut() and returnItem()).
2. Step 2: Extend the Base Class
    Create child classes Book, DVD, and Magazine that inherit from LibraryItem.
    Add unique properties and methods for each child class:
        Book: Add properties like author and genre.
        DVD: Add properties like director and duration.
        Magazine: Add properties like issueNumber and publisher.
3. Step 3: Instantiate Objects
    Create instances of each class and test the shared and unique methods.
4. Step 4: Test the Inheritance
    Use inherited methods like checkOut() and returnItem() to manage the availability of items.
    Test accessing and displaying unique properties of each child class
*/


class LibItem{
    constructor(title, id){
        this.title = title;
        this.id = id;
        this.isAvail = true;
    }
    printDetails(){
        console.log(`This is ${this.title}`)
    }
    checkOut(){
        if(!this.isAvail){
            console.log("Item already checked out!")
        }
        this.isAvail = false
    }
    returnItem(){
        if(this.isAvail){
            console.log("How are you returning this? Did you steal it?")
        }
        this.isAvail = true
    }
}
class Book extends LibItem{
    constructor(title, id, author, genre){
        super(title, id)
        this.author = author
        this.genre = genre
    }
    printDetails(){
        console.log(`This ${this.genre} book is ${this.title} by ${this.author} `)
    }
}
class DVD extends LibItem{
    constructor(title, id, dir, dur){
        super(title, id)
        this.dir = dir
        this.dur = dur
    }
    printDetails(){
        console.log(`This ${this.dur} minute movie is ${this.title} by ${this.dir} `)
    }
}
class Mag extends LibItem{
    constructor(title, id, issNum, pub){
        super(title, id)
        this.issNum = issNum
        this.pub = pub
    }
    printDetails(){
        console.log(`This is issue ${this.issNum} of ${this.title} magazine by ${this.pub} `)
    }
}

let bGame = new LibItem("Catan", 1)
let book = new Book("1984", 2, "George Orwell", "Fiction")
let dvd = new DVD("Hercules", 3, "Disney", 80)
let mag = new Mag("Times", 4, 7621487618746, "NYT")

for (item of [bGame, book, dvd, mag]){
    if (Math.random()>=0.5){item.checkOut()}
    item.printDetails()
}

console.log("testing")
class Iterators {
    iterateOverJson(myList: string[], data){
        data.forEach(book => {
            myList.push(book.isbn)
        })
        console.log(myList);
    }
}
export const Iterator = new Iterators();
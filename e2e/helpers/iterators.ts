class Iterators {
    iterateOverJson(myList: string[], data){
        data.forEach(book => {
            myList.push(book.isbn)
        })
    }
}
export const Iterator = new Iterators();
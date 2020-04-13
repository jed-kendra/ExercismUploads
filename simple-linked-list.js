//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


//This is the Element class. It is a link in our chain
//It is a single element in our list
export class Element {
  constructor(value) {
    this._value = value
    this._next = null
  }

  set next(newValue) {
    this._next = newValue
  }

  get next() {
    return this._next
  }


  get value() {
    return this._value
  }
}



export class List {

  constructor(values) {

    this._head = null
    this._length = 0

    if (Array.isArray(values)) {
      for (let value of values) {
        this.add(new Element(value))
      }
    }
  }
  add(nextElement) {
    // set the next element to the head of the next list
    nextElement.next = this._head

    // set the header to this new element
    this._head = nextElement

    // increment our length counter
    this._length++

  }

  get length() {
    return this._length

  }

  get head() {
    return this._head

  }

  toArray() {
    //initializing my return value to empty array
    let rtnValue = []
    let elmnt = this._head
    //do we have any elements
      while (elmnt !== null) {
        rtnValue.push(elmnt.value)
        elmnt = elmnt.next
      } 

    return rtnValue
  }

  reverse() {
    return new List(this.toArray())
  }

}


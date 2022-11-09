class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let node = this.head
        let count = 0
        while (node) {
            count++
            node = node.next
        }
        return count
    }

    getLast(){
        let lastNode = this.head
        while(lastNode.next){
            // ^^while loop will run as long as lastNode.next is truthy
            lastNode = lastNode.next
        }
        return lastNode
    }

    isEmpty(){
        return this.size() === 0
    }

}

let nodeA = new Node('A')  //create first node in Node class
let nodeB = new Node('B')

nodeA.next = nodeB

let list = new linkedList(nodeA) //this sets nodeA to be head in linkedList class

let nodeC = new Node('C')
nodeB.next = nodeC

// console.log(list.head.next.next.data)

let nodeE = new Node('E')
nodeC.next = nodeE

let nodeD = new Node('D')  //skipped D so enter it into C and E like this
nodeC.next = nodeD
nodeD.next = nodeE

// console.log(list)
// console.log(list.head.next.next.next)

let list2 = new linkedList()

console.log(list.size())  //5
console.log(list.getLast())
console.log(list.isEmpty())  //false
console.log(list2.isEmpty())  //true
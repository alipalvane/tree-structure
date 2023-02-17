// Create Tree Structure with Nodes (Combine two classes)
// ادغام تری با نود
class Node{
    constructor(value, parentNode = null){
        this.children = []
        this.value = value
        this.parent = parentNode
    }

    addNode(value){
        const node = new Node(value, this)
        this.children.push(node)
        return {node: node, index: this.children.length - 1}
    }

    removeNode(index){
        this.children.splice(index, 1)
    }
}

class Tree{
    constructor(rootValue){
        this.root = new Node(rootValue)
    }
}

const user = new Tree('root')

const userInfoData = user.root.addNode('userInfo')
const cartData = user.root.addNode('cart')

userInfoData.node.addNode('ali palvane')
cartData.node.addNode('book 1')

console.log(user) 
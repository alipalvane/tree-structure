// Binary Search Tree 
class Node {
  constructor(value) {
    this.value = value;
    this.left = null; //value of left  side is less
    this.right = null; //value of right side is more
  }

  add(value) {
    //اگر مقدار اولیه وجود نداشت
    if (this.value === null) {
      this.value = value;
      return;
    }

    if (this.value < value) {
      if (this.right) {
        this.right.add(value);
        return;
      }
      const newNode = new Node(value);
      this.right = newNode;
      return;
    }

    if (this.value > value) {
      if (this.left) {
        this.left.add(value);
        return;
      }
      const newNode = new Node(value);
      this.left = newNode;
      return;
    }
  }

  find(value) {
    if (this.value === value) {
      return this;
    }

    if (this.value < value && this.right) {
      return this.right.find(value);
    }

    if (this.value < value && this.left) {
      return this.left.find(value);
    }
  }
}

class Tree {
  constructor() {
    this.root = new Node(null);
  }

  add(value) {
    this.root.add(value);
  }

  find(value) {
    return this.root.find(value);
  }
}


const tree = new Tree()

tree.add(10)
tree.add(5)
tree.add(15)
tree.add(25)
tree.add(6)
tree.add(8)
tree.add(43)

console.log(tree)

console.log(tree.find(6))
console.log(tree.find(8))
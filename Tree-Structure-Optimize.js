// Optimize Code of Tree Structure
class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value) {
    const segments = value.split("/");

    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const node = new Node(segments[0], this);
      this.children.push(node);
      return { node: node, index: this.children.length - 1 };
    }

    const existingChildNode = this.children.find((item) => {
      return item.value === segments[0];
    });

    if (existingChildNode) {
      existingChildNode.addNode(segments.slice(1).join("/"));
    } else {
      const node = new Node(segments[0], this);
      node.addNode(segments.slice(1).join("/"));
      this.children.push(node);
      return { node: node, index: this.children.length - 1 };
    }
  }

  removeNode(value) {
    const segments = value.split("/");

    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const existingNodeIndex = this.children.findIndex((item) => {
        return item.value === segments[0];
      });

      if (existingNodeIndex < 0) {
        throw new Error("Could not find");
      }

      this.children.splice(existingNodeIndex, 1);
    }

    if (segments.length > 1) {
        const existingChildNode = this.children.find((item) => {
        return item.value === segments[0];
      });

      if(!existingChildNode){
        throw new Error("Could not find");
      }

      existingChildNode.removeNode(segments.slice(1).join('/'))
    }
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  add(path) {
    this.root.addNode(path);
  }

  remove(path) {
    this.root.removeNode(path);
  }
}

const user = new Tree("root");

user.add("/userInfo/username/AliPalvane");
user.add("/cart/book 1");
user.add("/cart/book 2");

user.remove("/cart/book 2");

console.log(user);

// 节点
class Node {
    constructor(element, parent) {
        this.element = element; // 存的数据
        this.parent = parent; // 父节点
        this.left = null; // 左子树
        this.right = null; // 右子树
    }
}

class BST {
    constructor(compare) {
        this.root = null;
        this.size = 0; // 节点个数
        this.compare = compare || this.compare;
    }
    compare(e1, e2) {
        return e1 - e2;
    }
    // 添加节点
    add(element) {
        // 如果根元素不存在
        if (this.root === null) {
            this.root = new Node(element, null);
            this.size++;
            return;
        } else {
            // 如果根元素存在，那么增加的就不是根节点，需要找到 parent
            let currentNode = this.root;
            // 当前比较的结果
            let compare = 0;
            // 先找到需要对比的 parent（当前父节点）
            let parent = null;
            while (currentNode) {
                parent = currentNode;
                compare = this.compare(element, currentNode.element);
                // 如果大于 0 找右树，小于 0 找左树
                if (compare > 0) {
                    currentNode = currentNode.right;
                } else if (compare < 0) {
                    currentNode = currentNode.left;
                } else {
                    // 如果比较后结果一样，由自己决定是否需要覆盖
                    currentNode.element = element; // 覆盖
                    return;
                }
            }
            // 找到了 parent，生成新节点
            let newNode = new Node(element, parent);
            if (compare > 0) {
                parent.right = newNode;
            } else {
                parent.left = newNode;
            }
        }
    }
    // 先序遍历
    perorderTraversal(visitor) {
        if (visitor == null) return;
        const traversal = (node) => {
            if (node === null) return;
            visitor.visit(node);
            traversal(node.left);
            traversal(node.right);
        };
        traversal(this.root);
    }
    // 中序遍历
    inorderTraversal(visitor) {
        if (visitor == null) return;
        const traversal = (node) => {
            if (node === null) return;
            traversal(node.left);
            visitor.visit(node);
            traversal(node.right);
        };
        traversal(this.root);
    }
    // 后序遍历
    postorderTraversal(visitor) {
        if (visitor == null) return;
        const traversal = (node) => {
            if (node === null) return;
            traversal(node.left);
            traversal(node.right);
            visitor.visit(node);
        };
        traversal(this.root);
    }
    // 反转二叉树
    invert(node) {
        if (node !== null) {
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
            this.invert(node.left);
            this.invert(node.right);
        }
        return node;
    }
}

let bst = new BST();

let arr = [10, 8, 19, 6, 15, 22, 20];

arr.forEach((element) => {
    bst.add(element);
});
console.dir(bst.invert(bst.root), { depth: 100 });

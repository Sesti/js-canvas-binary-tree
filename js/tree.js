import TreeNode from './node.js';

export default class BinaryTree {
    constructor(){
        this.root = null;
        this.elements = [];
    }
    insert(value){
        let newNode = new TreeNode(value);
        
        if(this.root === null)
            this.root = newNode;
        else
            this.insertNode(newNode, this.root);
    }   

    // Internal calls    
    insertNode(newNode, otherNode){

        if(newNode.value < otherNode.value){
            
            if(otherNode.leftChild === null)
                otherNode.leftChild = newNode;
            else
                this.insertNode(newNode, otherNode.leftChild);

        }else if(newNode.value > otherNode.value){

            if(otherNode.rightChild === null)
                otherNode.rightChild = newNode;
            else
                this.insertNode(newNode, otherNode.rightChild);
        }
    }
    computeHeight(node){
        
        if(node === null)
            return 0;

        let heightLeft = this.computeHeight(node.leftChild);
        let heightRight = this.computeHeight(node.rightChild);

        return Math.max(heightLeft, heightRight) + 1;

    }

    get height(){
        return this.computeHeight(this.root);
    }

    // Debug
    print(){
        console.log(this.root);
    } 
   
    
};
'use strict';
const Node = require ('../tree/tree.js').Node;
const BinaryTree = require ('../tree/tree.js').BinaryTree;

const treeIntersection = require ('./tree-intersection.js');

describe('Tree intersection', () => {
  it ('should return the intersection node values tree between two trees' , ()=>{
    let tree1 = new BinaryTree();
    let tree2 = new BinaryTree ();

    let n11 = new Node (150);

    let n12 = new Node (100);
    let n13 = new Node (160);
    let n14 = new Node (75);

    let n15 = new Node (125);
    let n16 = new Node (175);

    let n17 = new Node (250);
    let n18 = new Node (350);
    let n19 = new Node (200);

    let n20 = new Node (500);
    let n201 = new Node (300);


    tree1.root = n11;

    n11.right = n17;
    n11.left = n12;

    n12.right = n13;
    n12.left = n14;

    n13.right = n16;
    n13.left = n15;

    n17.right = n18;
    n17.left = n19;

    n18.right = n20;
    n18.left = n201;

    let n21 = new Node (42);

    let n22 = new Node (100);
    let n23 = new Node (160);
    let n24 = new Node (15);

    let n25 = new Node (125);
    let n26 = new Node (175);

    let n27 = new Node (600);
    let n28 = new Node (350);
    let n29 = new Node (200);

    let n30 = new Node (500);
    let n31 = new Node (4);

    tree2.root = n21;

    n21.right = n27;
    n21.left = n22;

    n22.right = n23;
    n22.left = n24;

    n23.right = n26;
    n23.left = n25;

    n27.right = n28;
    n27.left = n29;

    n28.right = n30;
    n28.left = n31;
    let tree3 = new BinaryTree ();
    let tree4 = new BinaryTree ();
    let tree5 = new BinaryTree ();
    let ntest = new Node (0);
    tree5.root = ntest;


    expect (treeIntersection ( tree1 , tree2)).toEqual ([100,160,125,175,200,350,500]);
    expect (treeIntersection ()).toEqual ('please enter trees');
    expect (treeIntersection (tree3,tree4)).toEqual ('please enter non empty trees');
    expect (treeIntersection (tree1,tree5)).toEqual ([]);
  });
});

#!/usr/bin/env node

class Node {

    constructor(value = null) {

        this.value = value;
        this.nextNode = null;

    }

}

class LinkedList {

    constructor() {

        this.head = null;
        this.tail = null;
        this.size = 0;

    }

    append(value) {

        let node = new Node(value);
        if (this.head === null) {

            this.head = node;
            this.tail = node;

        } else {

            this.tail.nextNode = node;
            this.tail = node;

        }

        this.size++;

    }

}

const l1 = new LinkedList();
l1.append(1);
l1.append(2);
l1.append(3);

console.log(l1);
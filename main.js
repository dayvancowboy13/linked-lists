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

    prepend(value) {

        let node = new Node(value);
        if (this.size === 0) {

            this.head = node;
            this.tail = node;

        } else {

            node.nextNode = this.head;
            this.head = node;

        }

        this.size++;

    }

    at(index) {
        // return the node at provided index

    }

    pop() {

        if (this.size !== 0) {
            // probably have to use the at() function
        }

    }

    get size() {

        return this.size;

    }

    get head() {

        return this.head;

    }

    get tail() {

        return this.tail;

    }

}

const l1 = new LinkedList();
l1.append(1);
l1.append(2);
l1.append(3);
l1.append(4);

console.log(l1);

l1.prepend(5);

console.log(l1);
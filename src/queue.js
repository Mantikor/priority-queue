const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap;
	}

	push(data, priority) {
		this.heap.push(data, priority);
	}

	shift() {

	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;

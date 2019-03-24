const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this._queue = new Array(maxSize);
	}

	push(data, priority) {
		this._queue[priority].push(data);
		return this._queue;
	}

	shift() {

	}

	size() {
		return this._queue.length;
	}

	isEmpty() {
		return this._queue.length === 0;
	}
}

module.exports = PriorityQueue;

function getElement(selection) {
	const element = document.querySelector(selection);
	// console.log(element);
	if (element) {
		return element;
	}
	throw new Error(
		`Please check "${selection}" selector, no such element exists"`
	);
}

function Counter(element, value) {
	// console.log(element, value);
	this.counter = element;
	this.value = value;
	// below selects element with .reset/.increase/.decrease class INSIDE the container that gets passed into the counter function as "element"
	this.resetBtn = element.querySelector('.reset');
	this.increaseBtn = element.querySelector('.increase');
	this.decreaseBtn = element.querySelector('.decrease');
	// console.log(this.resetBtn);

	this.valueDOM = element.querySelector('.value');
	this.valueDOM.textContent = this.value;

	// this.increase points to the increaseBtn, whereas the this passed in as an argument into increase.bind will refer to the Counter (this.increaseBtn will also refer to the Counter)
	// this.increaseBtn.addEventListener('click', this.increase.bind(this));

	// bind this to all function - so it doesn't refer to the button
	this.increase = this.increase.bind(this);
	this.decrease = this.decrease.bind(this);
	this.reset = this.reset.bind(this);

	this.increaseBtn.addEventListener('click', this.increase);
	this.decreaseBtn.addEventListener('click', this.decrease);
	this.resetBtn.addEventListener('click', this.reset);
}

Counter.prototype.increase = function () {
	// console.log(this);
	this.value++;
	this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
	this.value--;
	this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
	this.value = 0;
	this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

// getElement('.first-counter');
// getElement('.first-counters');

// firstCounter.increase();
// firstCounter.increase();
// firstCounter.decrease();

// secondCounter.reset();

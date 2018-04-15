class options {
	constructor(height, width, bg, fontSize, textAlign) {
			this.height = '600px',
			this.width = '800px',
			this.bg = 'purple',
			this.fontSize = '25px',
			this.textAlign = 'center'
	} 

	createDiv() {

		let div = document.createElement('div');

		div.innerHTML = "Good";

		div.style.cssText = 'height:${this.height}; width:$(this.width); background-color:$(this.bg); font-size:$(this.fontSize); textAlign:$(this.textAlign);' ;

		document.body.appendChild(div);
	}
}

let task = new options;

task.createDiv();










import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-td-block',
	templateUrl: './td-block.component.html',
	styleUrls: ['./td-block.component.css']
})
export class TdBlockComponent implements OnInit {
	constructor() {
		document.addEventListener('keyup', function(e: KeyboardEvent) {
			console.log('---key code is - ', e.keyCode);
		});
		var cells = document.getElementsByTagName('td');
		// cells[0].focus();
		document.getElementById('target').focus();
	}

	ngOnInit() {
	}

	onElementDblClick(event){
		console.log("dblclicked!!!");
		console.log("text ", event.target.innerText);
		console.log("ELEMENT ", event.target);
		console.log("ELEMENT ", event);
		var inp = document.createElement('input');
		inp.setAttribute('id', 'userInputText');
		inp.setAttribute('title', 'Enter your value');
		inp.addEventListener('keyup', function(e: KeyboardEvent) {
			console.log('Tab PRESSED!!!111');
			if (e.keyCode == 9) {
			console.log('Tab PRESSED!!!');
			var parent = event.target.parentNode;
			event.target.nextElementSibling.focus();
		}
		});
		event.srcElement.innerHTML = '';
		event.target.append(inp);
		// console.log("CHILD NODES ", event.srcElement.childNodes[0].innerText);
		// console.log("CHILD NODES2 ", event.srcElement.childNodes[0]);
	}

	onElementLostFocus(event){
		console.log("on lost focus---------------------------------------");
		console.log("EVENT - ", event)
		console.log("EVENT parent - ", event.target.parentNode);
		// var inp = event.srcElement.childNodes;
		console.log("input text", event.target.value);
		if(event.target.value != ''){
			var parent = event.target.parentNode;
			var val = event.target.value;
			parent.innerHTML = '';
			parent.innerText = val;
		}
	}

	onElementFocus(event) {		
		console.log('ON FOCUSSSSSSSSSSSSSSSSS');
	}

	onKeyPressed(event: KeyboardEvent){
		console.log('Tab PRESSED!!!111');
		if (event.keyCode === 32) {
			console.log('Tab PRESSED!!!');
			// var parent = event.target.parentNode;
			// parent.nextElementSibling.focus();
		}
	}
}

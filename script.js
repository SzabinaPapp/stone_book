function pageLoad() {
	
	let rootE = document.getElementById("root");
	
	let notes = [];
	
	notes.push({
		tag: "div",
		content: `
		1. Mindig úgy kezdjük a scriptünket, hogy létrehozzuk a load esemény hatására meghívandó függvényt. Majd a load esemény hatására meghívjuk:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
		function _load() {
			// console.log("működik)
		}
		window.addEventListener("load", _load);
		`
	});
	
	// console.log(notes);
	
	
	// megtanulni, hogyan lehet js-ből manipulálni a DOM-ot: mikor kell innerHTML-t, insertAdjecentHTML-t, createElement-et használni.
	
	notes.push({
		tag: "div",
		content: `
		2. InnerHTML-t akkor használunk, ha szöveget akarunk megjeleníteni úgy, hogy felülírjuk az eredeti html tartalmat:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
		let content = element.innerHTML;
		element.innerHTML = htmlString;
		`
	});
	
	notes.push({
		tag: "div",
		content: `
		3. InsertAdjecentHTML-t akkor használunk, ha plusz tartalmat akarunk megjeleníteni az eredeti html tartalom megtartása mellett. Ehhez meg kell adnunk a helyet is: "beforebegin", "afterbegin", "beforeend", "afterend" valamelyikével, pl:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
		rootE.insertAdjacentHTML("beforeend", myObject.key9("Pass"));
		`
	});
	
	notes.push({
		tag: "div",
		content: `
			4. A createElement metódus a HTML dokumentumban létrehozza a tagName által megadott HTML elemet, vagy egy HTMLUnkownElement-et abban az esetben, ha a tagName nem ismert. A tagName meghatározza a létrehozandó elem típusát (pl. "button", "input" stb). pl:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
			let element = document.createElement("button");
		`
	});
	
	// megjegyezni a különböző írásjelek, zárójelek jelentését, pl {}-objektum, []-tömb, ``-sortörés stb.
	
	notes.push({
		tag: "div",
		content: `
			5. Az operátorok helyes használata, mi mit jelöl, pl.: {objektum}, [tömb], ()-ebben adhatjuk meg pl. a függvény bemeneti értékeit; $ és {} közé tudunk változót beilleszteni, pl:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
		let myObject = {
			key1: "This is a text.",
			key2: 15,
			key3: false,
			key4: ["alma", "cseresznye", "citrom"],
			key5: function() {
				console.log("This is a function")
			},
			key7: function () {
				return "This is an another function";
			},
			key8: function (param1, param2) {
				// console.log(param1);
				for (let index = 0; index < param2.length; index++) {
					console.log(param2[index]);	
				}
			}
		};
		`
	});
	
	// kirakni, nem elhagyni a megfelelő írásjeleket, pl s ; a sorok végéről;
	
	// változót mindig let-tel hozunk létre
	
	notes.push({
		tag: "div",
		content: `
			6. Változót mindig let-tel hozunk létre. Változóban elmenthetünk: számot, szöveget, html elemet és akár függvényt is:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
			let aNumber = 1; 
			let aText = "This is a text"; 
			let theRoot = document.getElementById("root"); 
			let aFunction = function (){
			}; 
		`
	});
	
	// Feltételek
	
	notes.push({
		tag: "div",
		content: `
			7. Feltételek: if és else:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
			function _change_color(){
				let btn = document.getElementById("change-color");
				if (btn.classList.contains("redColor")) {
					btn.classList.remove("redColor");
				}
				else {
					btn.classList.add("redColor");
				}
			}
		`
	});
	
	// For ciklus
	
	notes.push({
		tag: "div",
		content: `
			8. A for ciklussal általában megszámolunk valamit, vagy számokat léptetünk. Módszer egy értéktartomány bejárására. A zárójelek között adjuk meg, hogy hogyan működjön a ciklus, a kapcsos zárójelek között pedig, hogy milyen parancs hajtódjon végre. A zárójelek közé 3 paramétert kell megadnunk. Az első paraméterben definiáljuk a ciklus változót és annak értékét, ami 0.
			A második paraméterben megadjuk a feltételt.
			A harmadik paraméterben pedig megadjuk, hogy minden egyes iteráció után az “i” változó értéke növekedjen eggyel. Ezzel a példával 10-szer íratjuk ki a szöveget:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
			for (i=0; i<10; i++) { 
				document.write("Szeretek programozni!"); 
			}
		`
	});
	
	// Click eseményfigyelő használata
	
	notes.push({
		tag: "div",
		content: `
			9. A click eseményre eseményfigyelő használata javasolt:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
		function clickEvent(){
			//ez is műkodik, ha a css-ben le van kezelve a #nav #open elemeken a clicked class name
			//document.getElementById("open").classList.toggle("clicked");
			//document.getElementById("nav").classList.toggle("clicked");
	
			document.querySelector("body").classList.toggle("clicked");
		}
	
		document.getElementById("open").addEventListener("click", clickEvent);
		`
	});
	
	// Tömbben lévő számok összeadása
	
	notes.push({
		tag: "div",
		content: `
			10. Tömbben lévő számok összeadásához a következő függvényt alkalmazhatjuk:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
		let numbers = [1, 5.2, 4, 0, -1];
			function sum(numbers) {
				"use strict";
				if (numbers.length === 0) {
					return 0;
				} else {
					return.numbers.reduce(function (a, b) {
						return a+b;
					} 0);
				}
			}
		`
	});
	
	// két adott érték közötti számok összeadása
	
	notes.push({
		tag: "div",
		content: `
			11. ha adott két érték (pl: a és b) a közötte lévő számokat a következő képen lehet összeadni:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
		function sumBetween(a,b) {
			let sum = 0;
			let start = a;
			let stop = b;
			if ( b < a ) {
				 start = b;
				 stop = a;
			}
			for(let i=start;i<=stop;i++) {
			 sum = sum + i;
			}
			return sum;
		}
		`
	});
	
	// tömbhöz másik tömb értékeit hozzáadni, majd az értékeket abc sorrendben visszaadni
	
	notes.push({
		tag: "div",
		content: `
			12. adott tömbhöz másik tömb értékeit hozzáadni, majd sorrendben visszaadni:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
		function addValuesToArray(array, values) {
			for(let i = 0; i<values.length; i++) {
				 array.unshift(values[i]);
			}
			return array.sort();
	 } 
		`
	});


	
	// számok összeadása és stringként való visszaadása
	
	notes.push({
		tag: "div",
		content: `
			11. Ha az a és b értéke string-ként van megadva, akkor először parseInt-tel számmá kell alakítanunk, kiszámolni az összegét, majd return-nel visszaadni a sum értékét, de toStringként:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
			function sumStr(a,b) {
				
				if (a.length === 0) {
					a = 0;
				} 
			
				if (b.length === 0) {
					b = 0;
				} 
  
				let sum = parseInt(a) + parseInt(b);
			
				return sum.toString();
			}
		`
	});

	
	// html-ben mikor érdemes div-eket használni, és mikor nem. Pl ha az konkrétan article, akkor használjuk az article tag-et; a table-t kerüljük. Beszéldes class és id neveket adni.
	
	// autocomplete használata
	
	
	// css-ben fontos, hogy a különböző tag-ek elé tegyük ki a megfelelő jelet: .div, #id 
	
	// responsivitásra figyelés
	
	// *, *::before, *::after használata
	
	// animációk készítése css segítségével, a különböző properties-ekkel mit tudunk létrehozni
	
	notes.push({
		tag: "div",
		content: `
			11. Ha animációt hozunk létre, akkor kell hozzá keyframes is. Ha azt akarjuk, hogy pl a szöveg a semmiből tűmjön elő, az opacitit 0-ra kell beállítani, és a animation-fill-mode: forwards-ot be kell állítani, hogy az animáció végén a szöveg ott is maradjon, ne tűnjön el.:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
		animation-name: text;
		animation-duration: 2s;
		animation-delay: 1s;
		opacity: 0;
		animation-fill-mode: forwards;

		@keyframes text {
			from {top: 70%; left: 50%; opacity: 0;}
			to {top: 81%; left: 50%; opacity: 1;}
		}
		`
	});
	
	// középre helyezés
	
	notes.push({
		tag: "div",
		content: `
			12. Ha középre akarunk helyezni egy elemet, több   módszerrel lehet, az egyik pl. ez:
		`
	});
	
	notes.push({
		tag: "code",
		content: `
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		`
	});



	for (note of notes) {
			rootE.insertAdjacentHTML("beforeend", `
			<${note.tag}>${note.content}</${note.tag}>
			`)
		};
	}
	
	window.addEventListener("load", pageLoad);
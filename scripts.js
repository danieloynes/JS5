//Oppgave 1
/*
const fruktInput = document.getElementById('frukt-input');
const leggTilKnapp = document.getElementById('legg-til-knapp');
const fruktListe = document.getElementById('frukt-liste');
let fruktliste = [];

leggTilKnapp.addEventListener('click', () => {
  const frukt = fruktInput.value.trim();
  if (frukt === '') return;
  fruktliste.push(frukt);
  fruktInput.value = '';
  oppdaterListe();
});

function oppdaterListe() {
  fruktListe.innerHTML = '';
  fruktliste.forEach((frukt, index) => {
    const listeElement = document.createElement('li');
    listeElement.textContent = frukt;
    const slettKnapp = document.createElement('button');
    slettKnapp.textContent = 'Slett';
    slettKnapp.addEventListener('click', () => {
      fruktliste.splice(index, 1);
      oppdaterListe();
    });
    listeElement.appendChild(slettKnapp);
    fruktListe.appendChild(listeElement);
  });
}
*/

//Oppgave 2
/*
const minTallInput = document.getElementById('min-tall');
const maxTallInput = document.getElementById('max-tall');
const genererKnapp = document.getElementById('generer-knapp');
const tilfeldigTallElement = document.getElementById('tilfeldig-tall');
const tallListe = document.getElementById('tall-liste');
let talliste = [];

genererKnapp.addEventListener('click', () => {
  const minTall = parseInt(minTallInput.value);
  const maxTall = parseInt(maxTallInput.value);

  if (isNaN(minTall) || isNaN(maxTall) || minTall >= maxTall) return;

  const tilfeldigTall = Math.floor(Math.random() * (maxTall - minTall + 1)) + minTall;
  talliste.push(tilfeldigTall);
  tilfeldigTallElement.textContent = `Tilfeldig tall: ${tilfeldigTall}`;
  tallListe.innerHTML = talliste.map(tall => `<li>${tall}</li>`).join('');
});
*/

//Oppgave 3
/*
const listeInput = document.getElementById('liste');
const tellKnapp = document.getElementById('tell-knapp');
const resultatDiv = document.getElementById('resultat');

tellKnapp.addEventListener('click', () => {
  const liste = listeInput.value.split(',').map(element => element.trim());
  const forekomster = {};

  liste.forEach(element => forekomster[element] = (forekomster[element] || 0) + 1);

  const resultatListe = Object.keys(forekomster).map(element => `${element}: ${forekomster[element]}`);
  resultatDiv.innerHTML = resultatListe.join('<br>');
});
*/

//Oppgave 4
/*
const fargerInput = document.getElementById('farger');
const lagreKnapp = document.getElementById('lagre-knapp');
const fargerListe = document.getElementById('farger-liste');
let farger = [];

lagreKnapp.addEventListener('click', () => {
  farger = fargerInput.value.split(',').map(farge => farge.trim());
  fargerInput.value = '';

  farger.forEach(farge => {
    const listeItem = document.createElement('li');
    listeItem.textContent = farge;
    listeItem.addEventListener('click', () => document.body.style.backgroundColor = farge);
    fargerListe.appendChild(listeItem);
  });
});
*/

//Oppgave 5
/*
    const bildeKnapp = document.getElementById('vis-bilde-knapp');
    const bildeElement = document.getElementById('bilde');

    const bilder = [
      'https://i.redd.it/vk2vuihmf6s61.jpg',
      'https://i1.sndcdn.com/artworks-ooGEYCL4wuDB5Bje-71E8NA-t500x500.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5srJEfH7AfUGsHfZyaUrtWZKCn0ARBsKQhXEpc3dTxopIR0zRM3r5bf-8rK64H5xN5i8&usqp=CAU',
      'https://preview.redd.it/30nm66po8smd1.png?width=1080&crop=smart&auto=webp&s=5267cd4c25c9e168669e4d9af3a1125023eac279',
      'https://i.pinimg.com/originals/a4/8b/df/a48bdf112c602a124e415775958d4327.jpg'
    ];

    bildeKnapp.addEventListener('click', () => {
      const tilfeldigIndex = Math.floor(Math.random() * bilder.length);
      const tilfeldigBilde = bilder[tilfeldigIndex];
      bildeElement.src = tilfeldigBilde;
    });
*/

//Oppgave 6
/*
function generateNumbers() {
    const container = document.getElementById('number-container');
    container.innerHTML = ''; // Clear previous numbers
    for (let i = 0; i <= 10; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.textContent = i;
        numberDiv.className = (i % 2 === 0) ? 'even' : 'odd';
        container.appendChild(numberDiv);
    }
}
*/
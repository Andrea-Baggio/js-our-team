/*
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

const eleContainer = document.querySelector('.container');

const objMembers = [
    membro1 = {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        picture: 'img/wayne-barnett-founder-ceo.jpg'
    },
    membro2 = {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        picture: 'img/angela-caroll-chief-editor.jpg'
    },
    membro3 = {
        name: 'Walter Gordon',
        job: 'Office Manager',
        picture: 'img/walter-gordon-office-manager.jpg'
    },
    membro4 = {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    membro5 = {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    membro6 = {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    },
];

// eleContainer.innerHTML += objMembers[1].name + ', ';
// eleContainer.innerHTML += objMembers[1].job;

const eleCard = document.querySelector('.cards');

for (let i = 0; i < objMembers.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = objMembers[i].picture;
	eleCard.append(eleImg);

    console.log(objMembers[i]);
}

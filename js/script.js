const eleContainer = document.querySelector('.container');
const objMembers = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        picture: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        picture: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        picture: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    },
    {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    }, {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    }, {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    }, {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    }, {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    }, {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    }, {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    }, {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    }, {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    }, {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    }, {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    }, {
        name: 'Angela Lopez',
        job: 'Media Manager',
        picture: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        picture: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        picture: 'img/barbara-ramos-graphic-designer.jpg'
    },
];


const eleCards = document.querySelector('.cards');
for (let i = 0; i < objMembers.length; i++) {
	const eleImg = document.createElement('img');
	const eleCard = document.createElement('div');
	const eleP = document.createElement('p');

    eleCard.classList.add('card-container')
	eleImg.src = objMembers[i].picture;
    eleP.innerHTML += objMembers[i].name + ' ' + objMembers[i].job;

	eleCard.append(eleImg);
	eleCard.append(eleP);
	eleCards.append(eleCard);
}


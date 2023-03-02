const persons = [{
    id: 0,
    name: 'Mark Wough',
    imgSrc: 'assets/person-portraits/5.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor
                                    incididut labore Ui / Ux , print template.`,
    contacts: [{ label: "Facebook", ref: '' }, { label: "Dribble", ref: '' }, { label: "Behance", ref: '' }, { label: "Twitter", ref: '' }]
}, {
    id: 1,
    name: 'Eva Shou',
    imgSrc: 'assets/person-portraits/1.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor
                                    incididut labore Ui / Ux , print template.`,
    contacts: [{ label: "Facebook", ref: '' }, { label: "Twitter", ref: '' }]
}, {
    id: 2,
    name: 'Lan Haris',
    imgSrc: 'assets/person-portraits/3.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor
                                    incididut labore Ui / Ux , print template.`,
    contacts: [{ label: "Facebook", ref: '' }, { label: "Twitter", ref: '' }]
}, {
    id: 3,
    name: 'Jhon Wu',
    imgSrc: 'assets/person-portraits/2.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor
                                    incididut labore Ui / Ux , print template.`,
    contacts: [{ label: "Facebook", ref: '' }]
}, {
    id: 4,
    name: 'Lee Gerim',
    imgSrc: 'assets/person-portraits/4.png',
    desc: `Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor
                                    incididut labore Ui / Ux , print template.`,
    contacts: [{ label: "Dribble", ref: '' }, { label: "Behance", ref: '' }, { label: "Twitter", ref: '' }]
}]
var globalAnimation = false;

function navigateTo(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    document.querySelector(`#${target.id}:is(.active)`).classList.remove('active');
    target.classList.add('active');

}

function setPersons(id) {
    const otherPersonsDiv = document.querySelector('.persons-row');
    while (otherPersonsDiv.firstChild) {
        otherPersonsDiv.removeChild(otherPersonsDiv.firstChild);
    }
    const activePerson = document.getElementById('active-person');

    const nameElement = activePerson.children[0];
    const descElement = activePerson.children[1];
    const contactsElement = activePerson.children[2];

    while (contactsElement.firstChild) {
        contactsElement.removeChild(contactsElement.firstChild);
    }

    imageProfile = document.querySelector('.person-image').children[0];
    console.log(imageProfile);
    otherPersons = [];

    persons.forEach(value => {

        if (value.id === id) {
            nameElement.innerHTML = value.name;
            descElement.innerHTML = value.desc;
            imageProfile.src = value.imgSrc;
            value.contacts.forEach(el => {
                const contactLink = document.createElement('a');
                contactLink.innerHTML = el.label;
                contactLink.href = el.ref;
                contactsElement.append(contactLink);
            })
        } else {
            otherPersons.push({ name: value.name, id: value.id, imgSrc: value.imgSrc })
        }
    })
    otherPersons.forEach(value => {
        const linkPerson = document.createElement('a');
        linkPerson.classList.add('link-bio');
        const imgPerson = document.createElement('img');
        imgPerson.src = value.imgSrc;
        const nameDiv = document.createElement('div');
        nameDiv.classList.add('person-name');
        nameDiv.innerHTML = value.name;
        linkPerson.append(imgPerson, nameDiv);
        linkPerson.addEventListener('click', () => {
            setPersons(value.id)
        });
        otherPersonsDiv.append(linkPerson);
    })

}

function init() {
    const switchLabel = document.querySelector('.switch-label');
    if (window.pageYOffset <= 32) {
        switchLabel.classList.remove('hidden');
    }
    document.addEventListener("scroll", (event) => {
        if (window.scrollY <= 32 && switchLabel.classList.contains('hidden')) {

            switchLabel.classList.remove('hidden');
        }
        if (window.scrollY > 32 && !switchLabel.classList.contains('hidden')) {
            switchLabel.classList.add('hidden');
        }
    })
}

function toggleAnimation() {
    const toggleCheckBox = document.querySelector('#toggle-animation');
    if (toggleCheckBox.checked) {
        globalAnimation = true;
    } else {
        globalAnimation = false;
    }
}
setPersons(0);

init();

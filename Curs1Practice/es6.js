// Se dau urmatoarele obiecte:

const film = {
    name: 'Arriba abajo',
    year: 2019,
    director: 'Fernandinho Navas'
}

const filmDetails = {
    oscarNomination: true,
    rating: 8.9
}

// 1. Folosind OBJECT DESTRUCURING si TEMPLATE LITERALS, mai intai extrageti numele
// si anul din obiectul "film", apoi construiti un mesaj de forma "Filmul {numeFilm}
// a aparul in anul {anFilm}"

const {name, year} = film;

console.log(`Filmul '${name}' a aparut in anul ${year}`);


// 2. Folosind SPREAD OPERATOR, creati un nou obiect, care sa contina toate cheile
// si valorile din primul obiect, dar si toate cheile si valorile din cel de-al doilea

const fullFilm = {...film, ...filmDetails};
console.log(fullFilm);
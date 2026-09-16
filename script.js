const syntymapaiva = new Date(2004, 3, 20);
const tanaan = new Date();

let ika = tanaan.getFullYear() - syntymapaiva.getFullYear();

const syntymapaivaTanaVuonna = new Date(
    tanaan.getFullYear(),
    syntymapaiva.getMonth(),
    syntymapaiva.getDate()
);

if (tanaan < syntymapaivaTanaVuonna) {
    ika--;
}

document.getElementById("ika").textContent = ika;

document.getElementById("vuosi").textContent =
    tanaan.getFullYear();
// Mobile menu toggle
const navToggle = document.getElementById('navtoggle');
const navToggleClose = document.getElementById('navToggleClose');
const navLinks = document.getElementsByClassName('nav-link');

function navToggles() {
    console.log("Hi");
  const nav = document.getElementById('nav');
  nav.classList.toggle('nav-on');
}

navToggle.addEventListener('click', navToggles);
navToggleClose.addEventListener('click', navToggles);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', navToggles);
}

// Featured speakers
const cardData = [
    {
      name: 'Ben Joshua Porras',
      image: 'images/speaker_1.png',
      title: 'MSc, Nanobiology Laboratory',
      details: 'Metabolic Profiling of Blood Plasma: A Pilot Study for Biomarker Discovery of EGFR-TKI Response in Filipino NSCLC Patients',
    },
    {
    name: 'Fides Zaulda',
    image: 'images/speaker_2.png',
    title: 'Research Fellow, Department of Science and Technology',
    details: 'Development of virus vectors and CRISPR tools for plant biotechnology',
    },
    {
    name: 'Erica Espano',
    image: 'images/speaker_3.png',
    title: 'Research Professor, Korea University - Sejong Campus',
    details: 'Chelerythrine: a potential anti-Zika virus agent',
    },
    {
    name: 'Adria Lao',
    image: 'images/speaker_4.png',
    title: 'PhD, Functional Genomics Laboratory',
    details: 'Genes and Genomics of Insecticide Resistance in <em>Aedes</em> Mosquitoes',
    },
    {
    name: 'Dave Laurence Juntilla',
    image: 'images/speaker_5.png',
    title: 'MSc, Nanobiology Laboratory',
    details: 'Metabolomic profiling of non-small cell lung cancer cell lines and discovery of metabolite markers for EGFR tyrosine kinase inhibitor resistance',
    },
    {
    name: 'Kirill Alexandrov',
    image: 'images/speaker_6.png',
    title: 'Professor from CSIRO-QUT, Queensland University of Technology',
    details: 'Towards real-time information processing systems based on artificial allosteric proteins',
    },
  ];
  
  const postContainer = document.querySelector('.speaker-items');
  
  const postMethods = () => {
    cardData.forEach((postData) => {
      const postElement = document.createElement('div');
      postElement.classList.add('speaker-item');
      postElement.innerHTML = `
      <div class="speaker-image"><img src="${postData.image}" alt="${postData.name}"></div>
          <div class="speaker-details">
            <h3>${postData.name}</h3>
            <h4>${postData.title}</h4>
            <p>${postData.details}</p>
          </div>
    `;
      postContainer.appendChild(postElement);
    });
  };

  postMethods();
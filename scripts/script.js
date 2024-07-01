
// const phone = document.querySelector('#phone');

// const phoneInput = window.intlTelInput(phone, {
//     initialCountry: "auto",
//     geoIpLookup: function (success, failure) {
//         fetch('https://ipinfo.io/json', { headers: { 'Accept': 'application/json' } })
//             .then(response => response.json())
//             .then(json => success(json.country))
//             .catch(() => success('us'));
//     },
//     utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.0.0/js/utils.js",
//     // autoInsertDialCode: false,
//     // nationalMode: true,
//     formatOnDisplay: true,
// });

const graphData = [
    {
        id: 1,
        img: './images/Graph.png',
        title: 'Title 1',
        text: 'Lorem ipsum dolor sit amet consectetur. Eu id enim sit ut at eu. Ipsum vitae fermentum eu non tempor adipiscing.'
    },
    {
        id: 2,
        img: './images/Graph.png',
        title: '$7M+ выплачивается инвесторам',
        text: 'Lorem ipsum dolor sit amet consectetur. Eu id enim sit ut at eu. Ipsum vitae fermentum eu non tempor adipiscing fusce quam odio. Ut libero dolor dui faucibus nisl mauris. Ac proin suscipit bibendum enim id id non viverra quis. Nec lorem gravida morbi mi.'
    },
    {
        id: 3,
        img: './images/Graph.png',
        title: 'Title 3',
        text: 'Lorem ipsum dolor sit amet consectetur. Eu id enim sit ut at eu. Ipsum vitae fermentum eu non tempor adipiscing fusce quam odio. Ut libero dolor dui faucibus nisl mauris. Ac proin suscipit bibendum enim.'
    },
    {
        id: 4,
        img: './images/Graph.png',
        title: 'Title 4',
        text: 'Lorem ipsum dolor sit amet consectetur. Eu id enim sit ut at eu. Ipsum vitae fermentum eu non tempor adipiscing fusce quam odio. Ut libero dolor dui faucibus nisl mauris.'
    },
];

const cards = document.querySelectorAll('.section.graphs .cardBox .card');
// const infoTitle = document.querySelector('.container.graph .title');
// const infoText = document.querySelector('.container.graph .text');
// const infoPic = document.querySelector('.container.graph img');

function updateGraphContent(id) {
    const graph = graphData.find(item => item.id === id);
    if (graph) {
        document.getElementById("graphImg").src = graph.img;
        document.getElementById("graphTitle").textContent = graph.title;
        document.getElementById("graphText").textContent = graph.text;
    }
}

cards.forEach((card, index) => {
    card.addEventListener("click", function () {
        cards.forEach(c => c.classList.remove("active"));
        this.classList.add("active");
        updateGraphContent(index + 1);
    });
});
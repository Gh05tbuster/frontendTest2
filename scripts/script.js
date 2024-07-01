document.addEventListener("DOMContentLoaded", function () {
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

    function updateButtonClasses() {
        const buttons = document.querySelectorAll('.cardBox .btn');
        if (window.innerWidth < 1443) {
            buttons.forEach(button => {
                button.classList.remove('lg');
                button.classList.add('md');
            });
        } else {
            buttons.forEach(button => {
                button.classList.remove('md');
                button.classList.add('lg');
            });
        }

        if (window.innerWidth < 744) {
            buttons.forEach(button => {
                button.classList.remove('md');
                button.classList.add('sm');
            });
        } else {
            buttons.forEach(button => {
                button.classList.remove('sm');
                button.classList.add('md');
            });
        }

        const headingButton = document.querySelector('.section.heading .btn');
        const footerButton = document.querySelector('.footer .btn');
        if (window.innerWidth < 744) {
            headingButton.classList.remove('lg');
            headingButton.classList.add('md');
            footerButton.classList.remove('lg');
            footerButton.classList.add('md');
        } else {
            headingButton.classList.remove('md');
            headingButton.classList.add('lg');
            footerButton.classList.remove('md');
            footerButton.classList.add('lg');
        }
    }

    window.addEventListener('load', updateButtonClasses);
    window.addEventListener('resize', updateButtonClasses);

    const form = document.getElementById('form1');
    const submitButton = document.getElementById('submit');
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');


    const name = document.querySelector('input[name="name"]');
    const surname = document.querySelector('input[name="surname"]');
    const phone = document.querySelector('input[name="phone"]');
    const email = document.querySelector('input[name="email"]');

    function validateName() {
        const regex = /^[a-zA-ZÀ-ÿА-Яа-я\s]+$/;
        const check = regex.test(name.value) ? 1 : 0;
        return check;
    }

    function validateSurname() {
        const regex = /^[a-zA-ZÀ-ÿА-Яа-я\s]+$/;
        const check = regex.test(surname.value) ? 1 : 0;
        return check;
    }

    function validatePhone() {
        const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        const check = regex.test(phone.value) ? 1 : 0;
    }

    function validateEmail() {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const check = regex.test(email.value) ? 1 : 0;
        return check;
    }

    function validateAll() {
        const valid = [];
        valid.push(validateName());
        valid.push(validateSurname());
        valid.push(validatePhone());
        valid.push(validateEmail());

        return valid.every((el) => el !== 0);
    }

    function validateForm() {
        let allFieldsFilled = validateAll();
        let allCheckboxesChecked = true;
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                allCheckboxesChecked = false;
            }
        });

        if (allFieldsFilled && allCheckboxesChecked) {
            submitButton.classList.remove('disabled');
            submitButton.classList.add('green');
        } else {
            submitButton.classList.add('disabled');
            submitButton.classList.remove('green');
        }
    }

    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', validateForm);
    });

    form.addEventListener('submit', (event) => {
        if (submitButton.classList.contains('disabled')) {
            event.preventDefault();
        }
    });

    validateForm();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
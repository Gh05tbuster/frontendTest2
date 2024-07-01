const phone = document.querySelector('#phone');

const phoneInput = window.intlTelInput(phone, {
    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
        fetch('https://ipinfo.io/json', { headers: { 'Accept': 'application/json' } })
            .then(response => response.json())
            .then(data => success(data.country))
            .catch(() => success('us'));
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.0.0/js/utils.js",
});

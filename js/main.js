let xhr = new XMLHttpRequest(); //создали пустой запрос
xhr.open('GET', 'https://restcountries.com/v3.1/all'); //тип запроса и абсолютный путь

xhr.send() //отправили

xhr.onload = function () {
    console.log(JSON.parse(xhr.response))
}

//new
let res = fetch('https://restcountries.com/v3.1/all')
    .then(result => {
        return result.json()
    })
    .then(data => {
        tbody = document.querySelector('tbody')
        // console.log(data);
        data.forEach(item => {
            // console.log(item);
            tbody.innerHTML += `
            <tr>
                <td>${item.cca2}</td>
                <td>
                <img src="${item.flags.png}" class="img" width: 100; height: 80>
                </td>
                <td>${item.name.official}</td>
                <td>${item.capital}</td>
                <td>${item.population}</td>
            </tr>
            `
        })
    })
    .catch(err => console.log(err))

const link = 'http://api.weatherstack.com/current?access_key=85b462640d787b8d2f2c131a2efe14b1';

const store = {
    city: 'London',
}

const fetchData = async () => {
    const result = await fetch(`${link}&query=${store.city}`);
    const data = await result.json();

    console.log(data);
}

fetchData();
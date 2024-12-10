//<  ████████████████████████████████████  LOADER

document.addEventListener("DOMContentLoaded", function () {
    // Your code here

    document.body.style.backgroundColor = 'green';

    //>  ████████████████████████████████████  CHILDREN








    //>  ████████████████████████████████████  GENERAL FUNCTIONS

    function getBrightRandomRGB() {
        const rrr = r(86, 255);
        const ggg = r(86, 255);
        const bbb = r(86, 255);
        const rgbColor = `rgb(${rrr}, ${ggg}, ${bbb})`;
        return rgbColor;
    }


    let pictures = ["/img/ashutterstock_2260187227.jpg", "/img/ashutterstock_2274444143.jpg", "/img/ashutterstock_2290464509.jpg", "/img/ashutterstock_2308412739.jpg", "/img/ashutterstock_2325872667.jpg", "/img/ashutterstock_2402783767.jpg", "/img/shutterstock_2260187227.jpg", "/img/shutterstock_2274444143.jpg", "/img/shutterstock_2290464509.jpg", "/img/shutterstock_2308412739.jpg", "/img/ashutterstock_497267167.jpg", "/img/shutterstock_2402783767.jpg", "/img/ashutterstock_497764618.jpg", "/img/shutterstock_2402783767.jpg",]

    function getRandomImg() {
        let randomPicture = pictures[r(pictures.length)];
        console.log(randomPicture);
        return randomPicture;
    }




    //_ ████████████████████████████████████  DATA STRUCTURES 

    //_ ████████████████████████████████████  DATA STRUCTURES 




    //>  ████████████████████████████████████  FUNCTIONS


    console.log('About to fetch a rainbow');

    async function catchRainbow() {
        const response = await fetch(getRandomImg());
        const blob = await response.blob();
        document.getElementById('manly').src = URL.createObjectURL(blob);


    }



    //>  ████████████████████████████████████  GENERAL PROGRAM

    document.body.style.backgroundColor = getBrightRandomRGB();

    catchRainbow().then(response => {
        console.log('yay');
    })
        .catch(error => {
            console.error(error);
        });


    async function getData() {
        const xS = [];
        const yS = [];
        const response = await fetch('/csv/ZonAnn.Ts+dSST.csv');
        const data = await response.text();

        const table = data.split('\n').slice(1);

        table.forEach(row => {
            const columns = row.split(',');
            const year = columns[0];
            xS.push(year);
            console.log(year);
            const temp = columns[1];
            yS.push(temp);
            // console.log(year, temp);

        });
        return { xS, yS };

    }





    async function makeChart() {
        const data = await getData();
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.xS,
                datasets: [{
                    label: 'Global Average Temperature',
                    data: data.yS,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)'],
                    borderWidth: 6
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    };

    makeChart();


    //>  ████████████████████████████████████  EVENTS

});











// console.log(document.documentElement);

//< ████████████████████████████████████  MISC




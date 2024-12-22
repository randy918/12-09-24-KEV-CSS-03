
document.addEventListener("DOMContentLoaded", function () {
    // Your code here

    document.body.style.backgroundColor = 'green';

    //>  ████████████████████████████████████  CHILDREN






    //>  ███████████████ OPEN WEATHER API d1a7fcdb2d6f38c6b216b37322444de9

    //>  ████████████████████████████████████  BRIGHT BACKGROUND

    function getBrightRandomRGB() {
        const rrr = r(86, 255);
        const ggg = r(86, 255);
        const bbb = r(86, 255);
        const rgbColor = `rgb(${rrr}, ${ggg}, ${bbb})`;
        return rgbColor;
    }

    document.body.style.backgroundColor = getBrightRandomRGB();

    //_ ████████████████████████████████████  GLOBAL VARIABLES

    let currentColor = "";

    //_ ████████████████████████████████████  RGB <--> HSL CONVERT FUNCTIONS

    function rgbToHsl(rgbString) {
        if (!rgbString.startsWith('rgb')) return null;

        const rgbValues = rgbString.match(/\d+/g);
        let rRgb = parseInt(rgbValues[0]) / 255;
        let gRgb = parseInt(rgbValues[1]) / 255;
        let bRgb = parseInt(rgbValues[2]) / 255;

        let maxRgb = Math.max(rRgb, gRgb, bRgb), minRgb = Math.min(rRgb, gRgb, bRgb);

        let hRgb, sRgb, lRgb = (maxRgb + minRgb) / 2;

        console.log(hRgb, sRgb, lRgb);

        if (maxRgb == minRgb) {
            hRgb = sRgb = 0;
        } else {
            let dRgb = maxRgb - minRgb;
            sRgb = lRgb > 0.5 ? dRgb / (2 - maxRgb - minRgb) : dRgb / (maxRgb + minRgb);
            switch (maxRgb) {
                case rRgb: hRgb = (gRgb - bRgb) / dRgb + (gRgb < bRgb ? 6 : 0); break;
                case gRgb: hRgb = (bRgb - rRgb) / dRgb + 2; break;
                case bRgb: hRgb = (rRgb - gRgb) / dRgb + 4; break;
            }
            hRgb /= 6;
        }

        hRgb = Math.round(hRgb * 360);
        sRgb = Math.round(sRgb * 100);
        lRgb = Math.round(lRgb * 100);
        console.log(hRgb, sRgb, lRgb);

        return { hRgb, sRgb, lRgb };
    }

    //_ ████████████████████████████████████  HSL <--> RGB CONVERT FUNCTIONS


    function hslToRgb(hRgb, sRgb, lRgb) {

        sRgb /= 100;
        lRgb /= 100;

        let cRgb = (1 - Math.abs(2 * lRgb - 1)) * sRgb;
        let xRgb = cRgb * (1 - Math.abs((hRgb / 60) % 2 - 1));
        let mRgb = lRgb - cRgb / 2;
        let rRgb = 0, gRgb = 0, bRgb = 0;

        if (0 <= hRgb && hRgb < 60) {
            rRgb = cRgb; gRgb = xRgb; bRgb = 0;
        } else if (60 <= hRgb && hRgb < 120) {
            rRgb = xRgb; gRgb = cRgb; bRgb = 0;
        } else if (120 <= hRgb && hRgb < 180) {
            rRgb = 0; gRgb = cRgb; bRgb = xRgb;
        } else if (180 <= hRgb && hRgb < 240) {
            rRgb = 0; gRgb = xRgb; bRgb = cRgb;
        } else if (240 <= hRgb && hRgb < 300) {
            rRgb = xRgb; gRgb = 0; bRgb = cRgb;
        } else if (300 <= hRgb && hRgb < 360) {
            rRgb = cRgb; gRgb = 0; bRgb = xRgb;
        };

        rRgb = Math.round((rRgb + mRgb) * 255);
        gRgb = Math.round((gRgb + mRgb) * 255);
        bRgb = Math.round((bRgb + mRgb) * 255);

        return `rgb(${rRgb}, ${gRgb}, ${bRgb})`;

    }

    //_ ████████████████████████████████████  GET CURRENT RGB FROM HSL

    function randomHeaderColor() {

        const header = document.getElementById('header');
        if (header) {
            const computedStyle = window.getComputedStyle(header);
            const currentColor = computedStyle.backgroundColor;
            console.log(header);
            console.log(currentColor);
            const hslRgb = rgbToHsl(currentColor);
            if (hslRgb) {

                const newHue = Math.floor(Math.random() * 360);
                const newColor = hslToRgb(newHue, hslRgb.sRgb, hslRgb.lRgb);
                header.style.backgroundColor = newColor;

            }
        } else {
            console.error("Header element not found");

            // return currentColor;
        }
    }


    //_ ████████████████████████████████████  GET CURRENT RGB FROM HSL



   
    randomHeaderColor();


    //>  ████████████████████████████████████  GENERAL PROGRAM



    //?  ████████████████████████████████████  ASYNC AWAIT














    //>  ████████████████████████████████████  GENERAL PROGRAM










    // randomHeaderColor();


    //   document.addEventListener('DOMContentLoaded', randomHeaderColor);


    

})





// console.log(document.documentElement);

//< ████████████████████████████████████  MISC




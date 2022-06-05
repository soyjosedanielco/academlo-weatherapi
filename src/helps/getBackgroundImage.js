import few_clouds from './img/few_clouds.jpg'
import scattered_clouds from './img/scattered_clouds.jpg'
import rain from './img/rain.jpg'
import thunderstorm from './img/thunderstorm.jpg'
import snow from './img/snow.jpg'
import mist from './img/mist.jpg'
import clear_sky from './img/clear_sky.jpg'

function getBackgroundImage(description) {
    let backgroundImage = "";

    if (description === 'few clouds') {
        backgroundImage = few_clouds;
    } else if(description === ('scattered clouds' || 'broken clouds')) {
        backgroundImage = scattered_clouds;
    } else if(description === ('shower rain' || 'rain')) {
        backgroundImage = rain;
    } else if(description === ('overcast clouds')) {
        backgroundImage = rain; 
    } else if(description === 'thunderstorm') {
        backgroundImage = thunderstorm;
    } else if(description === 'snow') {
        backgroundImage = snow;
    } else if(description === 'mist') {
        backgroundImage = mist;
    } else {
        backgroundImage = clear_sky
    }

    return backgroundImage;
}

export default getBackgroundImage
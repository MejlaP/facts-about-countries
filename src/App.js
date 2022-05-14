import { countries } from './countries';
import React from 'react'
import ReactDOM from 'react-dom'

const headline = 'Fakta o státech';
const subtitle = 'Klikněte na vlajku státu pro získání náhodné informace o něm'

const background = <img className='background'
  alt='europe'
  src='https://cdn.pixabay.com/photo/2018/05/08/13/56/globe-3383088_960_720.jpg' />

let flags = []

// zahrnuje elem. h1, h2, p s jednotl. faktem, a pole s vlajkami
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{headline}</h1>
        <h2>{subtitle}</h2>
        {background}
        {/*<p> elem. pro zobrazeni informace*/}
        <p id='information'></p>
        {/*do divu vlozi pole s vlajkami*/}
        <div className='countries'>
          {flags}
        </div>
      </div>
    )
  }
}

// prochazeni countries objektem, kazda zeme(vlajka) dostane atribut a pushne se do flags
// posledni atribut onClick - event listener ktery zavola fci viewInformation
for (const country in countries) {
  flags.push(
    <img
      key={country}
      className='country'
      alt={country}
      src={countries[country].flag}
      ariaLabel={country}
      role='button'
      onClick={viewInformation}
    />
  )
}

// funkce event listener
function viewInformation(event) {
  // ziskani nazvu z atributu alt img elementu
  const choosenCountry = event.target.alt
  // z objektu countries vybere zvol.zemi
  const choosenCountryInfo = countries[choosenCountry]
  // vygeneruje nahodny index z podpole data
  const randomCountryIndex = Math.floor(Math.random() * choosenCountryInfo.data.length)
  // pouzije nahodny index pro pristup k prvku v poli data
  const countryData = choosenCountryInfo.data[randomCountryIndex]
  //vezme <p> kam vlozi udaj s faktem
  document.getElementById('information').innerHTML = countryData
}

/*renderuje countryInformation*/
ReactDOM.render(<App />, document.getElementById('app'))
export {App as default}
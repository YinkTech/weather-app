export const designs = () => {
    let container = document.querySelector('.content');

    const searchCont =  document.createElement("div");
    searchCont.classList.add("contSearch");
    container.appendChild(searchCont);

    const form = document.createElement('form');
    form.setAttribute('id', 'form');
    form.setAttribute("onsubmit", "event.preventDefault()");
    form.setAttribute("method", "post");
    form.classList.add("form");
    form.setAttribute("action", "");
    searchCont.append(form);
    
    const label = document.createElement("label");
    label.classList.add("label");
    label.innerHTML = 'All Cities and Counties Weather Forecast';
    form.append(label);

    const search = document.createElement("input");
    search.setAttribute('type', 'search');
    search.setAttribute('name', 'search');
    search.setAttribute('autofocus', 'true');
    search.setAttribute('placeholder', 'Search Your City');
    search.setAttribute('id', 'search');
    search.classList.add('search');
    form.append(search);


    const dataBox = document.createElement("div");
    dataBox.classList.add('dataBox');
    container.appendChild(dataBox);
    
    const dataTitle = document.createElement("h2");
    dataTitle.innerHTML = 'Weather Today in '
    dataTitle.classList.add('dataTitle');
    dataBox.append(dataTitle);

    // const altImage = document.createElement("img");
    // altImage.src = ('https://www.animatedimages.org/data/media/278/animated-sun-image-0839.gif');
    // altImage.setAttribute('alt', 'animated-sun-image');
    // altImage.classList.add('altImage');
    // dataBox.append(altImage);

    const temperature = document.createElement("h1");
    temperature.classList.add("tempe");
    temperature.setAttribute('id', 'temper');

    dataBox.append(temperature);


    const tempesub = document.createElement("h5");
    tempesub.classList.add("tempesub");
    tempesub.innerHTML = ('Feels Like');
    dataBox.append(tempesub);

    const humBox = document.createElement("div");
    humBox.classList.add("humCont");
    dataBox.append(humBox);

    const presBox = document.createElement("div");
    presBox.classList.add("humCont");
    dataBox.append(presBox);

    const windBox = document.createElement("div");
    windBox.classList.add("humCont");
    dataBox.append(windBox);

    const contBox = document.createElement("div");
    contBox.classList.add("humCont");
    dataBox.append(contBox);

    
    const hum = document.createElement("span");
    hum.innerHTML = ("Humidy")
    humBox.append(hum);

    const humValue = document.createElement("span");
    humValue.classList.add('humValue');
    humBox.append(humValue);

    const pres = document.createElement("span");
    pres.innerHTML = ("Pressure");
    presBox.append(pres);

    const presValue = document.createElement("span");
    presValue.classList.add('presValue');
    presBox.append(presValue);

    const wind = document.createElement("span");
    wind.innerHTML = ("Wind")
    windBox.append(wind);

    const windValue = document.createElement("span");
    windValue.classList.add('windValue');
    windBox.append(windValue);

    const cont = document.createElement("span");
    cont.innerHTML = ("Country")
    contBox.append(cont);

    const contValue = document.createElement("span");
    contValue.classList.add('contValue');
    contBox.append(contValue);



    
}
import { elements } from './base';


export const renderPageHeader = (areaName) => {

  const markup = `
  <div class="divdark" id="header_image_and_text">
    <img id='home' class='autowidth' src='${areaName}.jpg'/>
    <p class='inevidence'>${areaName}</p>
  </div>
  `;
  elements.mainPageHeader.insertAdjacentHTML('beforeend', markup);

};

export const renderItem = (item, cssClass) => {
  //<div class="${cssClass}" id="${item.id}">
  const markup = `
  <div class="${cssClass}" id="archive">
      <p class="trek_button inevidence"><a href="#trek__${item.id}">${item.title}</a></p>
    </div>
  `;
  elements.treksList.insertAdjacentHTML('beforeend', markup);
};

export const clear = () => {
  elements.treksList.innerHTML = '';
};

import { elements } from './base';


export const renderPageHeader = () => {

  const markup = `
    <div class="divdark" id="header_image_and_text">
      <img id='home' class='autowidth' src='${elements.mainPageImg}'/>
      <p class='inevidence'>${elements.mainPageTitle}</p>
      <p class='italic normalmarginbottom'>${elements.mainPageMotto}</p>
    </div>
  `;
  elements.mainPageHeader.insertAdjacentHTML('beforeend', markup);

};

export const renderItem = (item, cssClass) => {

  const markup = `
    <div class="${cssClass}" id="archive">
      <p class="area_button inevidence"><a href="#area__${item}">${item}</a></p>
    </div>
  `;
  elements.areasList.insertAdjacentHTML('beforeend', markup);
};

export const clear = () => {
  elements.mainPageHeader.innerHTML = '';
  elements.areasList.innerHTML = '';
};

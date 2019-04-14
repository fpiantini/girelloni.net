import { elements } from './base';


export const renderPageHeader = (item) => {

  console.log(`renderPageHeader ${item.title}`)
  const markup = `
  <div class="divdark" id="header_image_and_text">
    <p class='inevidence'>${item.title}</p>
  </div>
  `;
  elements.mainPageHeader.insertAdjacentHTML('beforeend', markup);

};

export const renderItem = (item) => {
  
  const markup = `
    <div id="${item.id}__details">
      <p class="trek_details">TO BE COMPLETED. Trek ID = ${item.id}</p>
    </div>
  `;
  elements.trekElement.insertAdjacentHTML('beforeend', markup);
};

export const clear = () => {
  elements.trekElement.innerHTML = '';
};

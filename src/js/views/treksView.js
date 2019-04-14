import { elements } from './base';

export const renderItem = (item, cssClass) => {
  const markup = `
    <div class="${cssClass}" id="${item.id}">
      <p class="trek_button inevidence"><a href="#trek__${item.id}">${item.title}</a></p>
    </div>
  `;
  elements.treksList.insertAdjacentHTML('beforeend', markup);
};

export const clear = () => {
  elements.treksList.innerHTML = '';
};

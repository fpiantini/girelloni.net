import { elements } from './base';

export const renderItem = (item) => {
  const markup = `
    <div id="${item.id}__details">
      <p class="trek_details">TO BE COMPLETED. Trek ID = ${item}</p>
    </div>
  `;
  elements.trekElement.insertAdjacentHTML('beforeend', markup);
};

export const clear = () => {
  elements.trekElement.innerHTML = '';
};

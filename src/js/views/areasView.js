import { elements } from './base';

export const renderItem = (item, cssClass) => {
  const markup = `
    <div class="${cssClass}" id="archive">
      <p class="area_button inevidence"><a href="#${item}">${item}</a></p>
    </div>
  `;
  elements.areasList.insertAdjacentHTML('beforeend', markup);
};

export const clear = () => {
  elements.areasList.innerHTML = '';
};

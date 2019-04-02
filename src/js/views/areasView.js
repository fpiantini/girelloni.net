import { elements } from './base';

export const renderItem = (item, cssClass) => {
  const markup = `
    <div class="${cssClass}" id="archive">
      <p class="inevidence"><a href="./${item.page}">${item.name}</a></p>
    </div>
  `;
  elements.areasList.insertAdjacentHTML('beforeend', markup);
};



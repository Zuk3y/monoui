import { components } from './components-data';

export function countAllComponents() {
  let total = 0;
  components.forEach(category => {
    category.items.forEach(item => {
      if (item.data && Array.isArray(item.data)) {
        total += item.data.length;
      }
    });
  });
  return total;
}

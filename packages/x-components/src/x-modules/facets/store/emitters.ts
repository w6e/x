import { createStoreEmitters } from '../../../store';
import { areFiltersDifferent } from '../utils';
import { facetsXStoreModule } from './module';

/**
 * {@link StoreEmitters} For the facets module.
 *
 * @internal
 */
export const facetsEmitters = createStoreEmitters(facetsXStoreModule, {
  SelectedFiltersChanged: {
    selector: (_, getters) => getters.selectedFilters,
    filter: areFiltersDifferent
  }
});

import PropTypes from 'prop-types';
import { FilterContext } from './stateUtils';
import './filtersSelected.scss';

function FiltersSelected({ type }) {
  const context = React.useContext(FilterContext);
  const selections = context.stateSelectionsFor(type);

  const onDiscard = selection => {
    context.updateSelection({
      ...selection,
      isSelected: false,
    });
  }

  return (
    <div className="rscfilter-selections">
      {
        selections.map(selection => (
          <div
            key={selection.name}
            className="rscfilter-selections__item badge rounded-pill bg-secondary"
          >
            { selection.label }
            {/* eslint-disable */}
            <span
              className="rscfilter-selections__item-discard"
              onClick={() => onDiscard(selection)}
              role="button"
            />
            {/* eslint-enable */}
          </div>
        ))
      }      
    </div>
  );
}

FiltersSelected.propTypes = {
  type: PropTypes.string,
};

export default FiltersSelected;

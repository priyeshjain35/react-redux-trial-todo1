import React from "react";
import { VISIBILITY_FILTERS } from "../../../constant";
import { connect } from 'react-redux';
import { setFilter } from '../../../redux/actions';

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        const activeTab = (currentFilter === activeFilter) ? 'active-span' : '';
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={`filter ${activeTab}`}
            onClick={() => setFilter(currentFilter) /** waiting for setFilter handler*/}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter}
}

export default connect(mapStateToProps, {setFilter})(VisibilityFilters);

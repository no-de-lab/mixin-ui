import React from 'react';
import PropTypes from 'prop-types';
import styles from './DirectoryFilter.module.scss';

export default function DirectoryFilter({
  filterTitle,
  changeFilterTitle,
  filters,
}) {
  return (
    <div className={styles.filters}>
      {filters?.map((data) => (
        <button
          key={data.title}
          type="button"
          className={
            data?.title === filterTitle
              ? styles.filters__filterOn
              : styles.filters__filterOff
          }
          onClick={changeFilterTitle?.(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}

DirectoryFilter.propTypes = {
  filterTitle: PropTypes.bool.isRequired,
  changeFilterTitle: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
};

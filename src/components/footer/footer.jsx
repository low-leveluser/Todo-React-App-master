import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

const Footer = ({ leftItems, onFilterChange, deleteCompleted }) => {
  
    const buttons = Footer.buttons.map(({ name, label }) => {
      return (
        <li key={name}>
          <button key={name} onClick={() => onFilterChange(name)}>
            {label}
          </button>
        </li>
      );
    });
    return (
      <footer className="footer">
        <span className="todo-count">{leftItems} items left</span>
        <ul className="filters">{buttons}</ul>
        <button className="clear-completed" onClick={() => deleteCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  }

Footer.buttons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'completed', label: 'Completed' },
];
Footer.defaultProps = {
  leftItems: 0,
  onFilterChange: 'all',
  deleteCompleted: () => {},
};
Footer.propTypes = {
  leftItems: PropTypes.number,
  onFilterChange: PropTypes.func,
  deleteCompleted: PropTypes.func,
};

export default Footer
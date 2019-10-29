import React from 'react';
import PropTypes from 'prop-types';

function techItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type='button'>Remover</button>
    </li>
  )
}

techItem.defaultProps = {
  tech: 'Oculto',
}

techItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default techItem;
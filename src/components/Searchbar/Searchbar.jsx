import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.module';

const Searchbar = ({ onSubmit }) => {
  const [inputData, setInputData] = useState('');

  const onChangeInput = e => {
    setInputData(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputData);
    setInputData('');
  };

  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch size={25} />
        </SearchFormButton>
        <SearchFormInput
          name="inputData"
          value={inputData}
          onChange={onChangeInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarWrapper>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
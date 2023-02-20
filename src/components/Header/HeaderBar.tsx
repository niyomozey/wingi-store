import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import rootReducer from '../../store/RootReducer/rootReducer';
import { setSearchTerm } from '../../store/filters/filterAction';

interface Props extends PropsFromRedux { }

export type RootState = ReturnType<typeof rootReducer>;

const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mb-4 pt-10 flex flex-row items-center">
      <label htmlFor="searchTerm" className="mr-8 block text-gray-700 font-bold mb-2">
        Search
      </label>
      <input
        type="text"
        id="searchTerm"
        className="shadow relative w-4/5 appearance-none border rounded py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  searchTerm: state.filters.searchTerm,
});

const connector = connect(mapStateToProps, { setSearchTerm });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SearchBar);

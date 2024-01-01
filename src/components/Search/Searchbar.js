import { Component } from 'react';
import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';
import { IoIosSearch } from 'react-icons/io';
import toast from 'react-hot-toast';

export class Searchbar extends Component {
  state = {
    searchImage: '',
  };
  searchValueChange = event => {
    this.setState({ searchImage: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchImage.trim() === '') {
      toast.error('Please enter a query in the search field.');
      return;
    }
    this.props.onSubmit(this.state.searchImage);
  };
  render() {
    const { searchImage } = this.state;
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <IoIosSearch size="25" />
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.searchValueChange}
            name="searchImage"
            value={searchImage}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}
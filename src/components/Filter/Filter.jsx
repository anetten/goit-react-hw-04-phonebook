import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    const { handleChangeFilter, filterValue } = this.props;

    return (
      <div>
        <p>Find contacts by name</p>

        <input
          type="text"
          name="keyword"
          onChange={handleChangeFilter}
          value={filterValue}
        />
      </div>
    );
  }
}

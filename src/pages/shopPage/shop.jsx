import React, { Component } from "react";

import ShopData from "./shopData";

import PreviewCollection from "../../components/preview__collection/preview_collection";

export default class shopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop__page">
        {collections.map(({ id, ...otheCollectionProps }) => (
          <PreviewCollection key={id} {...otheCollectionProps} />
        ))}
      </div>
    );
  }
}

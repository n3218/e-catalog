import React from "react"

import "./collection-preview.styles.scss"
import CollectionItem from "../collection-item/collection-item.component"
import { Link } from "react-router-dom"

const CollectionPreview = ({ title, items, history }) => (
  <div className="collection">
    <Link to={`/shop/${title.toLowerCase()}`}>
      <h1 className="title">{title.toUpperCase()}</h1>
    </Link>
    <div className="items-container">
      {items
        .filter((item, i) => i < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)

export default CollectionPreview

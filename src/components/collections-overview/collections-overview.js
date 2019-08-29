import React from 'react';
import './collections-overview.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect"
import CollectionPreview from "../collection-preview/collection-preview"
import {selectCollections} from "../../redux/shop/shop.selectors"

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            Object.keys(collections).map((key) => (
                <CollectionPreview key={collections[key].id} {...collections[key]}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);
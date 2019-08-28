import React from 'react';
import './shop-data.scss'
import CollectionPreview from "../../components/collection-preview/collection-preview"

import {connect} from "react-redux"
import {selectCollections} from "../../redux/shop/shop.selectors"
import {createStructuredSelector} from "reselect"
import {selectDirectorySection} from "../../redux/directory/directory.selectors"

const ShopPage = ({collections}) => (
    <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>

)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);
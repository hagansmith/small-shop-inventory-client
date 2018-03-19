import React from 'react'
import { Popup, Image } from 'semantic-ui-react'

const ProductPopup = () => (
  <Popup
    trigger={<Image className="itemImage"/>}
    content='More info about this product'
    on='hover'
  />
)

export default ProductPopup
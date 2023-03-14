

import './product-item.styles.scss'

const ProductItem = ({product}) => {
  return (

    <div className='product'>
        <img src={product.imageUrl}
            className='backgroundImage'
            alt='snowflake'
        />
        <div className='categoryBody'>
            <h2>{product.name}</h2>
            
        
        </div>
    </div>
     
  );
}

export default ProductItem;

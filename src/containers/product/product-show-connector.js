import { connect } from 'react-redux';

import ProductShow from '../../components/product/show';
import Actions from '../../actions';
import ProductsAPI from '../../apis/products';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    displayLoader: state.displayLoader
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductFromAPI: (productId) => {
      dispatch (Actions.displayLoader());

      ProductsAPI.getItem(productId).then((response) => {
        let fetchedProduct = JSON.parse(response.text);
        dispatch (Actions.addProduct(fetchedProduct));
        dispatch (Actions.hideLoader());
      });
    }
  };
};

const ProductShowConnector = connect(mapStateToProps, mapDispatchToProps)(ProductShow);

export default ProductShowConnector;
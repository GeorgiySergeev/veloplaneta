import wooCommerce from './woocommerce'

export default async function getOneProduct(productId) {
  try {
    const product = await wooCommerce.get(`products/${productId}`);
    console.log(product);
    return product.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
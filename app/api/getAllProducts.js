import wooCommerce from './woocommerce.js';

export default async function getAllProducts(page = 1, perPage = 12) {
  try {
    const res = await wooCommerce.get('products', {
      per_page: perPage,
      page: page,
      status: 'publish',
      orderby: 'date',
      order: 'desc'
    });

    console.log('API Response:', {
      page,
      totalPages: res.headers['x-wp-totalpages'],
      totalProducts: res.headers['x-wp-total'],
      productsCount: res.data.length
    });

    return {
      products: res.data,
      totalProducts: parseInt(res.headers['x-wp-total'] || '0', 10),
      totalPages: parseInt(res.headers['x-wp-totalpages'] || '1', 10),
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      products: [],
      totalProducts: 0,
      totalPages: 1,
    };
  }
}


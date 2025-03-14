import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

 const wooCommerce = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WOOCOMMERCE_LOCAL_URL,
  consumerKey: process.env.NEXT_PUBLIC_WOOCOMMERCE_LOCAL_KEY,
  consumerSecret: process.env.NEXT_PUBLIC_WOOCOMMERCE_LOCAL_SECRET,
  version: 'wc/v3',
});

export default wooCommerce
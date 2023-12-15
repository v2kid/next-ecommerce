// import { defineLocale } from '.';

console.log('Loaded FR');

export default {
  hello: 'Bonjour',
  welcome: 'Bonjour {name}!',
  contact : ' liên hệ với chúng tôi ',
  phone : 'Số điện thoại',
  location : 'Địa chỉ công ty',
  brand : 'Tên thương hiệu',
  cart : 'Thêm vào giỏ hàng',
  home : 'Trang Chu',
  service : 'Dich Vu',
   blog : 'Bai Viet',
  product : 'San Pham',
  contactus : 'Lien He',
  'about.you': 'Bonjour {name}! Vous avez {age} ans',
  'scope.test': 'Un scope',
  'scope.more.test': 'Un scope',
  'scope.more.param': 'Un scope avec un {param}',
  'scope.more.and.more.test': 'Un scope',
  'scope.more.stars#one': '1 étoile sur GitHub',
  'scope.more.stars#other': '{count} étoiles sur GitHub',
  // 'missing.translation.in.fr': '',
  'cows#one': 'Une vache',
  'cows#other': '{count} vaches',
} as const;
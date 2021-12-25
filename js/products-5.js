var products_5=[
    'Simethycon 100%', 'Sodium Alzinet', 'Sodium Benzoate (Navichem)', 'Sodium Benzoate (Ganesh/ Navichem)', 'Sodium  Bi Carbonate', 'Sodium Chloride', 'Sodium Citrate', 'Sodium Hydroxide (Caustic Soda)', 'Sodium Meta Bi Sulphate', 'Sodium Sachhrine', 'Sodium Sulphate', 'Sorbic Acid', 'Sorbitol 70%', 'Soya Lacethine', 'Soya Protein', 'Stable Bleaching Powder', 'Starch (Riddi Siddi / Siddhi Vinayak /Tirupati)', 'Steric Acid (Flakes & Beats)', 'Talcum Powder', 'Thaymol', 'Titanium Dioxide', 'Tri Calcium Phosphate', 'Triethanolamine', 'Tween-80', 'Vitamins (All)', 'Whey Protein', 'Xanthan Gum', 'Zinc Oxide', 'Zinc Sulphate (Hepta / Mono)'
];

var products_5_images=[
    'https://5.imimg.com/data5/SELLER/Default/2020/9/NT/LC/MY/3080986/simethicone-simethicone-100-ip-bp-usp--500x500.jpeg',
    'https://5.imimg.com/data5/CI/IH/OC/SELLER-1123283/sodium-alginate-printing-gum-500x500.jpg',
    'https://image.made-in-china.com/202f0j00oCqYwPFJwukv/Sodium-Benzoate.jpg',
    'https://4.imimg.com/data4/AJ/IV/MY-1235568/tapioca-starch-250x250.jpg',
    'https://5.imimg.com/data5/EN/QS/MY-2200288/sodium-bicarbonate-500x500.jpg',
    'https://5.imimg.com/data5/QF/ZY/JV/SELLER-23466807/sodium-chloride-500x500.jpg',
    'https://cdn.shopify.com/s/files/1/1035/1721/articles/Sodium-Citrate_1250x.jpg?v=1598820386',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/SodiumHydroxide.jpg/220px-SodiumHydroxide.jpg',
    'https://4.imimg.com/data4/CE/PS/MY-664967/sodium-meta-bisulphate-smbs-500x500.jpg',
    'https://5.imimg.com/data5/FH/XQ/MW/SELLER-401855/sodium-saccharin-500x500.jpg',
    'https://5.imimg.com/data5/YJ/JY/MY-2499305/sodium-sulphate-250x250.jpg',
    'https://image.made-in-china.com/202f0j00iMBYGsCJkpby/Food-Preservative-Sorbic-Acid-110-44-1-for-Sale.jpg',
    'https://image.made-in-china.com/202f0j00NFEQDULIYegj/Food-Sweetener-Additives-Sorbitol-Syrup-Liquid.jpg',
    'https://5.imimg.com/data5/OA/OB/GT/SELLER-4967563/soya-lecithin-500x500.jpg',
    'https://5.imimg.com/data5/OQ/YK/KU/SELLER-629528/soya-protein-isolate-500x500.jpg',
    'https://4.imimg.com/data4/WR/HS/ANDROID-13065770/product-500x500.jpeg',
    'https://www.exilva.com/hubfs/shutterstock_1634703307.jpg',
    'https://cdn.shopify.com/s/files/1/0274/5001/articles/ing-coconuts_73c281f7-bb19-423b-9e9d-d6104cdf671f_1000x.jpg?v=1596555887',
    'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/323525_2200-1200x628.jpg',
    'https://5.imimg.com/data5/NW/EJ/HU/SELLER-2024819/thaymol-crystal-500x500.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a5/Titanium%28IV%29_oxide.jpg',
    'https://5.imimg.com/data5/AJ/DM/DF/SELLER-2024819/tri-calcium-phosphate-bp-usp-500x500.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sample_of_Triethanolamine.jpg/140px-Sample_of_Triethanolamine.jpg',
    'https://5.imimg.com/data5/VS/EZ/XJ/SELLER-2275346/tween-80-500x500.jpeg',
    'https://post.healthline.com/wp-content/uploads/2020/01/vitamins-pills-bottle-732x549-thumbnail.jpg',
    'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients.com/news/markets-and-trends/sports-nutrition-brands-charged-crazy-whey-protein-prices-due-to-low-supply/12686890-1-eng-GB/Sports-nutrition-brands-charged-crazy-whey-protein-prices-due-to-low-supply.jpg',
    'https://post.healthline.com/wp-content/uploads/2020/09/AN238-White-Powder-Wood-Bowl-732x549-thumb.jpg',
    'https://d12oja0ew7x0i8.cloudfront.net/images/Article_Images/ImageForArticle_5818(1).jpg',
    'https://4.imimg.com/data4/CE/XO/MY-2272826/zinc-sulphate-crystal-500x500.jpg'
]




for (i=0;i<29;i++){
    document.getElementsByClassName('card')[i].getElementsByTagName('h5')[0].innerHTML=products_5[i];
    document.getElementsByClassName('card')[i].getElementsByTagName('img')[0].src=products_5_images[i];
}
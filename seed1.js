const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce-data")
.then(()=>{console.log("DB Conneted!!!")})
.catch((err)=>{console.log(err);})




  const products = [
    {
      category: "Men",
      image: "https://images.meesho.com/images/products/366116937/pfyyc_400.webp",
      name: "Fancy Men Shirt",
      color: "Gray",
      selling_price: 899,
      price: 2499,
      discount: "64%",
      description: "Elevate your style with this sleek and modern outfit. Perfect for a night out or a formal event, this gray ensemble exudes sophistication and charm. The slim-fit design and premium fabric ensure a comfortable and stylish wear."
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-3-2.jpg",
      name: "LAXERIC",
      color: "White",
      selling_price: 1199,
      price: 3299,
      discount: "64%",
      description: "Timeless and elegant, this white outfit is a must-have for any fashion-conscious man. Its classic design ensures it will never go out of style. The crisp white shirt and fitted trousers create a sharp, put-together look that's perfect for formal events or business meetings."
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-4-1.jpg",
      name: "ALLEN SOLLY",
      color: "Olive",
      selling_price: 799,
      price: 1999,
      discount: "60%",
      description: "Get ready to take your athletic style to the next level with this olive green outfit. Perfect for a casual day out or a sporty event, the comfortable fit and breathable fabric ensure you stay cool and confident all day long."
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-5-1.jpg",
      name: "INDO PRIMO",
      color: "Green",
      selling_price: 699,
      price: 1499,
      discount: "53%",
      description: "Stay comfortable and stylish with this green outfit. Ideal for a relaxed day out or a casual gathering, the soft fabric and relaxed fit ensure you feel at ease all day long."
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-6-1.jpg",
      name: "PETER ENGLAND",
      color: "Black",
      selling_price: 1299,
      price: 2999,
      discount: "57%",
      description: "Make a statement with this sleek black outfit. Perfect for a formal event or a business meeting, the slim-fit design and premium fabric ensure a sharp, professional look that's sure to impress."
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-1-1.jpg",
      name: "MAJESTIC MAN",
      color: "Red",
      selling_price: 1099,
      price: 2199,
      discount: "50%",
      description: "Add a pop of color to your wardrobe with this bold red outfit. Perfect for a casual day out or a night on the town, the comfortable fit and vibrant color ensure you stand out from the crowd."
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-8-1.jpg",
      name: "LYMIO",
      color: "Black",
      selling_price: 1499,
      price: 3299,
      discount: "54%",
      description: "Elevate your formal style with this sleek black outfit. Perfect for a black-tie event or a wedding, the slim-fit design and premium fabric ensure a sharp, sophisticated look that's sure to impress."
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-2-1.jpg",
      name: "LEVI 'S",
      color: "White",
      selling_price: 899,
      price: 1999,
      discount: "55%",
      description: "Get ready to take your athletic style to the next level with this white outfit. Perfect for a casual day out or a sporty event, the comfortable fit and breathable fabric ensure you stay cool and confident all day long."
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25985726/2023/11/22/0ec2a742-3102-4963-bf27-aa5e983b10321700639910753DRESSARBlueFloralFitFlareDress1.jpg",
      name: "FROAK SUIT",
      color: "Red",
      selling_price: 599,
      price: 1299,
      discount: "54%",
      description: "Add a touch of glamour to your wardrobe with this stunning red dress. Perfect for a night out or a special occasion, the fitted design and vibrant color ensure you turn heads."
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16697006/2022/1/5/4672c4bf-8fe1-4523-91f4-ac08301573251641392147135KALINIWomenMaroonWovenDesign1.jpg",
      name: "FANCY SARRIES",
      color: "Olive",
      selling_price: 699,
      price: 1499,
      discount: "53%",
      description: "Bring a touch of elegance to your wardrobe with this beautiful olive green dress. Perfect for a formal event or a special occasion, the intricate floral design and comfortable fit ensure you feel confident and stylish."
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18969034/2022/7/4/9f433358-e001-432b-aa2f-5400075dc0e81656957693012LehengaCholi1.jpg",
      name: "CROP TOP",
      color: "Black",
      selling_price: 799,
      price: 1999,
      discount: "60%",
      description: "Stay comfortable and stylish with this black lehenga choli. Perfect for a casual day out or a traditional event, the soft fabric and relaxed fit ensure you feel at ease all day long."
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20498352/2022/10/22/3424a72e-8518-4853-aa99-e48a0e1205841666419466834KALINIWomenPistaGreenStraightKurtawithTrouserDupatta1.jpg",
      name: "SUIT",
      color: "Olive",
      selling_price: 899,
      price: 2499,
      discount: "64%",
      description: "Add a touch of glamour to your wardrobe with this stunning olive green kurta. Perfect for a formal event or a special occasion, the intricate design and comfortable fit ensure you turn heads."
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23770720/2023/7/5/2b16926f-e626-410f-a74d-72e1968185db1688561455843-HERENOW-Women-Dupatta-1211688561455517-3.jpg",
      name: "FANCY SUIT",
      color: "Red",
      selling_price: 749,
      price: 1799,
      discount: "58%",
      description: "Bring a touch of sunshine to your wardrobe with this vibrant red dupatta. Perfect for a casual day out or a traditional event, the soft fabric and relaxed fit ensure you feel confident and stylish."
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21817328/2023/2/2/5230e83a-97dd-4b3a-8b70-3f2b14345b271675348806754LehengaCholi1.jpg",
      name: "LACHA",
      color: "Green",
      selling_price: 1199,
      price: 2299,
      discount: "48%",
      description: "Add a touch of whimsy to your wardrobe with this beautiful green lehenga choli. Perfect for a formal event or a special occasion, the intricate design and comfortable fit ensure you feel confident and stylish."
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17932828/2022/4/19/f0d9f625-1607-4f50-8ab3-b67def6879771650366503600SLSilkLandWomenBlueSarees1.jpg",
      name: "PURPLR SARRIES",
      color: "Gray",
      selling_price: 999,
      price: 2199,
      discount: "55%",
      description: "Add a touch of elegance to your wardrobe with this stunning gray saree. Perfect for a formal event or a special occasion, the intricate design and comfortable fabric ensure you feel confident and stylish."
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21787816/2023/1/31/4f9ab2b8-30f2-4689-81c6-8aa913a7c4021675183061781LehengaCholi1.jpg",
      name: "GEORGETTE LEHENGA",
      color: "Black",
      selling_price: 1299,
      price: 2999,
      discount: "57%",
      description: "Make a statement with this stunning black lehenga choli. Perfect for a formal event or a special occasion, the intricate design and comfortable fabric ensure you feel confident and stylish."
    },
    {
      category: "Electronics",
      image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/51-1.png",
      name: "HEADPHONE",
      color: "White",
      selling_price: 2999,
      price: 3999,
      discount: "25%",
      description: "Experience the latest technology with this sleek and powerful smartphone. With a high-resolution camera and advanced processor, this phone is perfect for anyone looking for a premium mobile experience."
    },
    {
      category: "Electronics",
      image: "http://themes.pixelstrap.com/bigboost/assets/images/electronics/pro/3.jpg",
      name: "4K ACTION CAMERA",
      color: "Gray",
      selling_price: 4499,
      price: 5999,
      discount: "25%",
      description: "Elevate your entertainment experience with this stunning ultra HD smart TV. With crystal-clear picture quality and advanced features, this TV is perfect for anyone looking for a premium viewing experience."
    },
    {
      category: "Electronics",
      image: "http://themes.pixelstrap.com/bigboost/assets/images/electronics/pro/20.jpg",
      name: "SMARTPHONE X",
      color: "Olive",
      selling_price: 3999,
      price: 5999,
      discount: "33%",
      description: "Immerse yourself in sound with these premium headphones. With advanced noise-cancellation technology and comfortable design, these headphones are perfect for anyone looking for a high-quality audio experience."
    },
    {
      category: "Electronics",
      image: "http://themes.pixelstrap.com/bigboost/assets/images/electronics/pro/29.jpg",
      name: "SAMSUNG GALAXY A53 5G",
      color: "Gray",
      selling_price: 4999,
      price: 6999,
      discount: "28%",
      description: "Take your productivity to the next level with this powerful laptop. With a fast processor, ample storage, and advanced features, this laptop is perfect for anyone looking for a premium computing experience."
    },
    {
      category: "Electronics",
      image: "https://images.meesho.com/images/products/106199803/yqhmm_400.webp",
      name: "FABUL0US IRON",
      color: "Red",
      selling_price: 1499,
      price: 2499,
      discount: "40%",
      description: "Charge your devices wirelessly with this convenient charging pad. Perfect for anyone looking for a hassle-free charging experience."
    },
    {
      category: "Electronics",
      image: "https://images.meesho.com/images/products/397328969/xzhrw_400.webp",
      name: "FASHIONABLE LIGHT BUBLS",
      color: "Black",
      selling_price: 3499,
      price: 4999,
      discount: "30%",
      description: "Capture life's moments in stunning 4K resolution with this action camera. Perfect for anyone looking for a high-quality camera for outdoor activities."
    },
    {
      category: "Electronics",
      image: "https://images.meesho.com/images/products/421339918/e5vxt_400.webp",
      name: "ELECTRIC KETTLES",
     color: "Gray",
      selling_price: 3499,
      price: 4599,
      discount: "30%",
      description: "Take your gaming experience to the next level with this powerful gaming console. With advanced graphics and fast performance, this console is perfect for anyone looking for a premium gaming experience."
    },
    {
      category: "Electronics",
      image: "https://images.meesho.com/images/products/423669145/g3vwo_400.webp",
      name: "SMART WATCH PRO",
      color: "Black",
      selling_price: 6999,
      price: 9999,
      discount: "30%",
      description: "Stay connected and track your fitness goals with this advanced smartwatch. With a sleek design and advanced features, this watch is perfect for anyone looking for a premium wearable device."
    },
    {
      category: "Shoes",
      image: "https://images.meesho.com/images/products/407066687/jtid1_400.webp",
      name: "AIR SHOES",
      color: "Olive",
      selling_price: 1299,
      price: 2499,
      discount: "48%",
      description: "Stay comfortable and stylish with these olive green shoes. Perfect for a casual day out or a walk in the city, the comfortable design and durable material ensure you feel confident and stylish."
    },
    {
      category: "Shoes",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-1.jpg",
      name: "FANCY SANADAL",
      color: "White",
      selling_price: 1499,
      price: 2999,
      discount: "50%",
      description: "Take your running game to the next level with these white shoes. With advanced cushioning and breathable material, these shoes are perfect for anyone looking for a high-quality running experience."
    },
    {
      category: "Shoes",
      image: "https://images.meesho.com/images/products/341813650/b0yal_400.webp",
      name: "WOMEN SLIPPER",
      color: "Red",
      selling_price: 1799,
      price: 3499,
      discount: "49%",
      description: "Conquer the trails with these red hiking shoes. With advanced traction and waterproof material, these shoes are perfect for anyone looking for a high-quality hiking experience."
    },
    {
      category: "Shoes",
      image: "https://images.meesho.com/images/products/208818610/9w0ia_400.webp",
      name: "RED TAPE",
      color: "Green",
      selling_price: 1599,
      price: 2999,
      discount: "47%",
      description: "Stay active and stylish with these green athletic shoes. With advanced cushioning and breathable material, these shoes are perfect for anyone looking for a high-quality athletic experience."
    },
    {
      category: "Shoes",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-9.jpg",
      name: "SPARX SHOES",
      color: "Olive",
      selling_price: 1399,
      price: 2699,
      discount: "48%",
      description: "Make a statement with these olive green fashion shoes. Perfect for a formal event or a night out, the sleek design and comfortable material ensure you feel confident and stylish."
    },
    {
      category: "Shoes",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-2.jpg",
      name: "STYLISH SANDAL",
      color: "Red",
      selling_price: 1199,
      price: 2299,
      discount: "48%",
      description: "Stay stylish and comfortable with these red sneakers. Perfect for a casual day out or a relaxed evening, the comfortable design and durable material ensure you feel confident and stylish."
    },
    {
      category: "Shoes",
      image: "https://images.meesho.com/images/products/196163405/e9dup_400.webp",
      name: "LEATHER FORMAL SHOES",
      color: "Gray",
      selling_price: 1899,
      price: 3499,
      discount: "46%",
      description: "Elevate your formal style with these gray formal shoes. Perfect for a formal event or a special occasion, the sleek design and comfortable material ensure you feel confident and stylish."
    },
    {
      category: "Shoes",
      image: "https://images.meesho.com/images/products/417420831/lo6bu_400.webp",
      name: "MEDIWALK",
      color: "Olive",
      selling_price: 1299,
      price: 2499,
      discount: "48%",
      description: "Add a touch of sophistication to your casual style with these olive green shoes. Perfect for a relaxed day out or a casual evening, the comfortable design and durable material ensure you feel confident and stylish."
    }
]

// Now, price and selling_price in each product are of type number
console.log(products);

seedDb();

async function seedDb(){
  await Product.insertMany(products)
  .then(()=>{
    console.log('Product Seeded');
  })
}
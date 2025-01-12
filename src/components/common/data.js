import image1 from "../../assets/heroSectionImage/1.png";
import image2 from "../../assets/heroSectionImage/2.png";
import image3 from "../../assets/heroSectionImage/3.png";
import image4 from "../../assets/heroSectionImage/4.png";
import image5 from "../../assets/heroSectionImage/5.png";
import image6 from "../../assets/heroSectionImage/6.png";
import avarter1 from "../../assets/heroSectionImage/avater1.jpeg";
import avarter2 from "../../assets/heroSectionImage/avater2.jpeg";
import avarter3 from "../../assets/heroSectionImage/avater3.jpeg";
import avarter4 from "../../assets/heroSectionImage/avater4.jpeg";
import avarter5 from "../../assets/heroSectionImage/avater5.jpeg";
import avarter6 from "../../assets/heroSectionImage/avater6.jpeg";
import coffeeMenuImg1 from "../../assets/CoffeeMenuImage/1.jpeg";
import coffeeMenuImg2 from "../../assets/CoffeeMenuImage/2.jpeg";
import coffeeMenuImg3 from "../../assets/CoffeeMenuImage/3.jpeg";
import coffeeMenuImg4 from "../../assets/CoffeeMenuImage/4.jpeg";
import recipe1 from "../../assets/RecipeImage/1coffe.png";
import recipe2 from "../../assets/RecipeImage/2coffe.png";
import recipe3 from "../../assets/RecipeImage/3coffe.png";
import recipe4 from "../../assets/RecipeImage/4coffe.jpg";
import recipe5 from "../../assets/RecipeImage/5coffe.jpg";
import allImg1 from "../../assets/MenuImage/1.jpeg";
import allImg2 from "../../assets/MenuImage/2.jpeg";
import allImg3 from "../../assets/MenuImage/3.jpeg";
import allImg4 from "../../assets/MenuImage/4.jpeg";
import allImg5 from "../../assets/MenuImage/5.jpeg";
import burgerImg1 from "../../assets/MenuImage/burger1.jpeg";
import burgerImg2 from "../../assets/MenuImage/burger2.jpeg";
import burgerImg3 from "../../assets/MenuImage/burger3.jpeg";
import burgerImg4 from "../../assets/MenuImage/burger4.jpeg";
import burgerImg5 from "../../assets/MenuImage/burger5.jpeg";
import bakery1 from "../../assets/MenuImage/bakery.jpg";
import bakery3 from "../../assets/MenuImage/bakery3.jpg";
import barekry2 from "../../assets/MenuImage/barekry2.jpg";
import cookies from "../../assets/MenuImage/cookies.jpg";
import cookies2 from "../../assets/MenuImage/cookies2.jpg";
import cookies3 from "../../assets/MenuImage/cookies3.jpg";
import dinner1 from "../../assets/MenuImage/dinner1.jpg";
import dinner2 from "../../assets/MenuImage/dinner2.jpg";
import dinner3 from "../../assets/MenuImage/dinner3.jpg";
import hotchocolet from "../../assets/MenuImage/hotchocolet.jpg";
import lemonate1 from "../../assets/MenuImage/lemonate1.jpg";
import milkshake from "../../assets/MenuImage/milkshake.jpg";
import lemonate3 from "../../assets/MenuImage/lemonate3.jpg";
import lemonate2 from "../../assets/MenuImage/lemonate2.jpg";
import pizza1 from "../../assets/MenuImage/pizza1.png";
import pizza2 from "../../assets/MenuImage/pizza2.png";
import pizza3 from "../../assets/MenuImage/pizza3.png";
import img1 from "../../assets/ProductImage/1.png";
import img2 from "../../assets/ProductImage/2.png";
import img3 from "../../assets/ProductImage/3.png";
import img4 from "../../assets/ProductImage/4.png";
import img5 from "../../assets/ProductImage/5.png";
import img6 from "../../assets/ProductImage/6.png";
import img7 from "../../assets/ProductImage/7.png";
import img8 from "../../assets/ProductImage/8.png";
import img9 from "../../assets/ProductImage/9.png";
import img10 from "../../assets/ProductImage/10.png";
import img11 from "../../assets/ProductImage/11.png";
import img12 from "../../assets/ProductImage/12.png";
import img13 from "../../assets/ProductImage/13.png";
import img14 from "../../assets/ProductImage/14.png";
import img15 from "../../assets/ProductImage/15.png";
import img16 from "../../assets/ProductImage/16.png";
import img17 from "../../assets/ProductImage/17.png";
import img18 from "../../assets/ProductImage/18.png";
import img19 from "../../assets/ProductImage/19.png";
import img20 from "../../assets/ProductImage/20.png";
import img21 from "../../assets/ProductImage/21.png";
import img22 from "../../assets/ProductImage/22.png";
import img23 from "../../assets/ProductImage/23.png";
import img24 from "../../assets/ProductImage/24.png";
import img25 from "../../assets/ProductImage/25.png";
import img26 from "../../assets/ProductImage/26.png";
export const navMenus = [
  {
    menu_name: "Home",
    link: "/",
  },

  {
    menu_name: "Pages",
    submenu: [
      {
        menu_name: "About Us",
        link: "/about",
      },
      {
        menu_name: "Our Products",
        link: "/product",
      },
      {
        menu_name: "Our Menu",
        link: "/menu",
      },
      {
        menu_name: "Blogs",
        link: "/blog",
      },
    ],
  },
  {
    menu_name: "Menu",
    submenu: [
      {
        menu_name: "Coffee",
        link: "/coffee",
      },
      {
        menu_name: "Drinks",
        link: "/drinks",
      },
      {
        menu_name: "Burger & Pizza",
        link: "/burger-pizza",
      },
      {
        menu_name: "Dinner",
        link: "/dinner",
      },
      {
        menu_name: "Bakery & Cookies",
        link: "/bakery-cookies",
      },
    ],
  },
  {
    menu_name: "Contact Us",
    link: "/contact",
  },
];

export const heroData = [
  {
    id: 1,
    welcome: "WELCOME TO OUR",
    headline: " coffeELive",
    sub_head: "Elevating Your Coffee Experience",
    para: "coffeELive embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey.",
    main_img: image1,
    avarter_img: [
      {
        id: 1,
        img: avarter1,
      },
      {
        id: 2,
        img: avarter2,
      },
      {
        id: 3,
        img: avarter3,
      },
    ],
  },
  {
    id: 2,
    welcome: "WELCOME TO OUR",
    headline: " coffeELive",
    sub_head: "Fresh Coffee, Fresh Start",
    para: "At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.",
    main_img: image2,
    avarter_img: [
      {
        id: 1,
        img: avarter4,
      },
      {
        id: 2,
        img: avarter5,
      },
      {
        id: 3,
        img: avarter6,
      },
    ],
  },
  {
    id: 3,
    welcome: "WELCOME TO OUR",
    headline: " coffeELive",
    sub_head: "Savor the Coffee Taste",
    para: "Memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.",
    main_img: image3,
    avarter_img: [
      {
        id: 1,
        img: avarter1,
      },
      {
        id: 2,
        img: avarter3,
      },
      {
        id: 3,
        img: avarter5,
      },
    ],
  },
  {
    id: 4,
    welcome: "WELCOME TO OUR",
    headline: " coffeELive",
    sub_head: "Your Perfect Coffee Break Awaits",
    para: "Commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating.",
    main_img: image4,
    avarter_img: [
      {
        id: 1,
        img: avarter2,
      },
      {
        id: 2,
        img: avarter4,
      },
      {
        id: 3,
        img: avarter6,
      },
    ],
  },
  {
    id: 5,
    welcome: "WELCOME TO OUR",
    headline: "coffeELive",
    sub_head: "A Journey Through Coffee Flavors",
    para: "Sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.",
    main_img: image5,
    avarter_img: [
      {
        id: 1,
        img: avarter2,
      },
      {
        id: 2,
        img: avarter3,
      },
      {
        id: 3,
        img: avarter4,
      },
    ],
  },
  {
    id: 6,
    welcome: "WELCOME TO OUR",
    headline: " coffeELive",
    sub_head: "Elevating Your Coffee Experience",
    para: "coffeELive embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride.",
    main_img: image6,
    avarter_img: [
      {
        id: 1,
        img: avarter5,
      },
      {
        id: 2,
        img: avarter6,
      },
      {
        id: 3,
        img: avarter1,
      },
    ],
  },
];

export const aboutData = [
  {
    id: 1,
    name: "Our Opening Hours",
    name2: "Mon - Sat: 07:00 - 18:00",
    name3: "Only Sun: 09:00 - 14:00",
  },
  {
    id: 2,
    name: "Our Live Location",
    name2: "848 A 28TH ST, Brooklyn",
    name3: "New York, UK",
  },
  {
    id: 3,
    name: "Book A Table Now",
    name2: "+1 318-254-6849",
    name3: "+1 452-754-6579",
  },
];

export const aboutMenuData = [
  {
    id: 1,
    number: "20+",
    title: "Years Experience",
  },
  {
    id: 2,
    number: "100+",
    title: "Master Chefs",
  },
  {
    id: 3,
    number: "30+",
    title: "Achievements",
  },
];

export const coffeeMenuData = [
  {
    id: 1,
    title: "Double Espresso x2",
    para: "There are many variations of passages Lorem Ipsum form",
    img: coffeeMenuImg1,
    rate: 10,
  },
  {
    id: 2,
    title: "Hazelnut Heaven Latte",
    para: "There are many variations of passages Lorem Ipsum form",
    img: coffeeMenuImg2,
    rate: 12,
  },
  {
    id: 3,
    title: "Salted Caramel Cold Brew",
    para: "There are many variations of passages Lorem Ipsum form",
    img: coffeeMenuImg3,
    rate: 9,
  },
  {
    id: 4,
    title: "Coconut Cream Delight (Summer)",
    para: "There are many variations of passages Lorem Ipsum form",
    img: coffeeMenuImg4,
    rate: 15,
  },
];

export const RecipeData = [
  {
    id: 1,
    img: recipe1,
    title: "Pita bread or wraps",
    text: "Toppings: tomatoes, tahini sauce, etc.",
  },
  {
    id: 2,
    img: recipe3,
    title: "Crispy Chicken Burger",
    text: "Ingredients: tomato sauce, chicken, latus etc.",
  },
  {
    id: 3,
    img: recipe2,
    title: "Pepperoni Pizza",
    text: "Toppings: tomato sauce, pepperoni etc.",
  },
  {
    id: 4,
    img: recipe4,
    title: "Pepperoni Pizza",
    text: "Toppings: tomato sauce, pepperoni etc.",
  },
  {
    id: 5,
    img: recipe5,
    title: "Pepperoni Pizza",
    text: "Toppings: tomato sauce, pepperoni etc.",
  },
];

export const images = [
  {
    id: 1,
    src: allImg1,
    original: allImg1,
    width: 424,
    height: 348,
    radius: 24,
    caption: "CatCat",
  },
  {
    id: 2,
    src: allImg2,
    original: allImg2,
    width: 872,
    category: "Drinks",
    height: 348,
    radius: 24,
    caption: "Black Coffee",
  },
  {
    id: 3,
    src: allImg3,
    original: allImg3,
    width: 312,
    radius: 24,
    height: 348,
    caption: "Custered Cake",
  },
  {
    id: 21,
    src: hotchocolet,
    original: hotchocolet,
    width: 424,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "Hot Chocolate",
  },
  {
    id: 4,
    src: allImg4,
    original: allImg4,
    width: 536,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "MilkShake",
  },
  {
    id: 6,
    src: burgerImg1,
    original: burgerImg1,
    width: 424,
    height: 348,
    category: "Burger",
    radius: 24,
    caption: "Berry Burger",
  },
  {
    id: 5,
    src: allImg5,
    original: allImg5,
    width: 424,
    radius: 24,
    height: 348,
    caption: "Donats",
  },
  {
    id: 25,
    src: lemonate2,
    original: lemonate2,
    width: 424,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "Watermelon Juice",
  },
  {
    id: 7,
    src: burgerImg2,
    original: burgerImg2,
    category: "Burger",
    width: 872,
    height: 348,
    radius: 24,
    caption: "Beaf Burger",
  },
  {
    id: 15,
    src: cookies,
    original: cookies,
    width: 424,
    radius: 24,
    category: "Cookies",
    height: 348,
    caption: "Strobery Cookies",
  },
  {
    id: 24,
    src: lemonate3,
    original: lemonate3,
    width: 312,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "Lemonate",
  },
  {
    id: 9,
    src: burgerImg3,
    original: burgerImg3,
    width: 536,
    category: "Burger",
    radius: 24,
    height: 348,
    caption: "Chicken Chap Burger",
  },
  {
    id: 10,
    src: burgerImg4,
    original: burgerImg4,
    width: 424,
    category: "Burger",
    radius: 24,
    height: 348,
    caption: "Spicy Burger",
  },
  {
    id: 12,
    src: bakery1,
    original: bakery1,
    width: 872,
    category: "Bakery",
    height: 348,
    radius: 24,
    caption: "Cookies",
  },
  {
    id: 22,
    src: lemonate1,
    original: lemonate1,
    width: 424,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "Lemon Juice",
  },
  {
    id: 11,
    src: burgerImg5,
    original: burgerImg5,
    width: 312,
    category: "Burger",
    height: 348,
    radius: 24,
    caption: "Fried Chichen Burger",
  },
  {
    id: 14,
    src: barekry2,
    original: barekry2,
    width: 424,
    category: "Bakery",
    radius: 24,
    height: 348,
    caption: "Kunafa",
  },
  {
    id: 13,
    src: bakery3,
    original: bakery3,
    width: 536,
    category: "Bakery",
    radius: 24,
    height: 348,
    caption: "Bread",
  },
  {
    id: 19,
    src: dinner2,
    original: dinner2,
    width: 872,
    category: "Dinner",
    radius: 24,
    height: 348,
    caption: "Nudools",
  },
  {
    id: 18,
    src: dinner1,
    original: dinner1,
    width: 424,
    category: "Dinner",
    radius: 24,
    height: 348,
    caption: "Fish Fry",
  },
  {
    id: 20,
    src: dinner3,
    category: "Dinner",
    original: dinner3,
    width: 424,
    radius: 24,
    height: 348,
    caption: "Cookies with sugar",
  },
  {
    id: 26,
    src: pizza1,
    original: pizza1,
    width: 872,
    category: "Pizza",
    radius: 24,
    height: 348,
    caption: "Veg Pizza",
  },
  {
    id: 16,
    src: cookies2,
    original: cookies2,
    width: 424,
    category: "Cookies",
    radius: 24,
    height: 348,
    caption: "Cream Bread",
  },
  {
    id: 23,
    src: milkshake,
    original: milkshake,
    width: 424,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "Banana Shake",
  },

  {
    id: 27,
    src: pizza2,
    original: pizza2,
    width: 424,
    category: "Pizza",
    radius: 24,
    height: 348,
    caption: "Paparony Pizza",
  },
  {
    id: 28,
    src: coffeeMenuImg1,
    original: coffeeMenuImg1,
    width: 424,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "Hot Coffee",
  },
  {
    id: 32,
    src: pizza3,
    original: pizza3,
    width: 424,
    category: "Pizza",
    radius: 24,
    height: 348,
    caption: "Chicken Pizza",
  },
  {
    id: 17,
    src: cookies3,
    original: cookies3,
    width: 424,
    category: "Cookies",
    radius: 24,
    height: 348,
    caption: "Cookies",
  },
];

export const allProducts = [
  {
    id: 1,
    title: "Espresso Roast",
    description:
      "Experience the rich, bold flavors of our Espresso Roast, meticulously crafted to deliver an intense coffee experience. Each sip offers deep, complex notes with a smooth, velvety finish that lingers pleasantly on the palate. Perfect for those who enjoy their coffee strong and robust, this blend is ideal for espresso lovers. Whether enjoyed as a shot or in a latte, it's a must-have for coffee aficionados.",
    image: img16,
    weight: "500g",
    flavor: "Rich & Bold",
    makingCountry: "Italy",
    rating: 4.8,
    reviews: 125,
    price: 15.99,
    stock: 25,
    isNew: true,
  },
  {
    id: 2,
    title: "Colombian Coffee",
    description:
      "Sourced from the lush coffee farms of Colombia, this single-origin coffee boasts a perfectly balanced flavor profile. With bright citrusy notes and a smooth, nutty finish, it's an excellent choice for both casual drinkers and coffee connoisseurs. Brew it in your favorite method to enjoy its rich aroma and unique taste. This versatile coffee is a staple for your morning routine or afternoon pick-me-up.",
    image: img17,
    weight: "1kg",
    flavor: "Balanced & Citrusy",
    makingCountry: "Colombia",
    rating: 4.5,
    reviews: 98,
    price: 18.49,
    stock: 50,
    isNew: false,
  },
  {
    id: 3,
    title: "French Vanilla",
    description:
      "Indulge in the creamy and sweet flavors of French Vanilla coffee, a delightful treat for your senses. This blend combines premium coffee beans with the smooth essence of vanilla to create a rich and aromatic brew. Perfect for those who prefer a sweeter, more dessert-like coffee experience, it pairs beautifully with pastries and cookies. Elevate your coffee time with this flavorful and luxurious blend.",
    image: img18,
    weight: "250g",
    flavor: "Sweet & Creamy",
    makingCountry: "France",
    rating: 4.7,
    reviews: 64,
    price: 12.99,
    stock: 35,
    isNew: true,
  },
  {
    id: 4,
    title: "Kenyan AA Coffee",
    description:
      "Our Kenyan AA Coffee is a testament to the world-class quality of African coffee. Renowned for its bright acidity and vibrant flavor, this coffee features fruity undertones of berry and citrus. Grown at high altitudes in Kenya, it delivers a clean and crisp taste with a full-bodied texture. Enjoy a cup that reflects the rich heritage of Kenyan coffee, perfect for a refined and invigorating experience.",
    image: img19,
    weight: "750g",
    flavor: "Fruity & Vibrant",
    makingCountry: "Kenya",
    rating: 4.9,
    reviews: 142,
    price: 22.99,
    stock: 20,
    isNew: false,
  },
  {
    id: 5,
    title: "Hazelnut Blend",
    description:
      "Delight in the nutty and aromatic flavors of our Hazelnut Blend, a coffee that feels like a warm embrace. The subtle sweetness of hazelnuts complements the rich coffee base, creating a harmonious blend that's both comforting and satisfying. Ideal for cozy mornings or leisurely afternoons, this coffee pairs perfectly with a splash of cream or your favorite milk alternative. Treat yourself to its irresistible charm.",
    image: img5,
    weight: "500g",
    flavor: "Nutty & Sweet",
    makingCountry: "United States",
    rating: 4.6,
    reviews: 89,
    price: 16.99,
    stock: 15,
    isNew: true,
  },
  {
    id: 6,
    title: "Sumatra Mandheling",
    description:
      "Known for its unique flavor profile, Sumatra Mandheling offers a rich, earthy taste with a smooth, velvety body. This coffee originates from the tropical highlands of Indonesia, where it is carefully cultivated and processed. The result is a low-acid coffee with deep, complex notes of chocolate and spice. Perfect for those who enjoy bold, full-bodied coffee, this is a blend that stands out in every cup.",
    image: img21,
    weight: "1kg",
    flavor: "Earthy & Smooth",
    makingCountry: "Indonesia",
    rating: 4.7,
    reviews: 120,
    price: 19.99,
    stock: 40,
    isNew: false,
  },
  {
    id: 7,
    title: "Mocha Java",
    description:
      "Enjoy the rich and historic blend of Mocha Java, combining the bold flavors of Yemeni coffee with the smooth, chocolaty notes of Javanese beans. This traditional mix offers a harmonious balance of earthy and sweet tones, creating a well-rounded cup that's perfect for any coffee lover.",
    image: img7,
    weight: "500g",
    flavor: "Earthy & Chocolaty",
    makingCountry: "Yemen & Indonesia",
    rating: 4.6,
    reviews: 115,
    price: 17.99,
    stock: 30,
    isNew: false,
  },
  {
    id: 8,
    title: "Ethiopian Yirgacheffe",
    description:
      "Dive into the floral and citrusy flavors of Ethiopian Yirgacheffe, a coffee that epitomizes the vibrant and unique taste of African beans. Grown in the highlands of Ethiopia, this coffee offers a bright, tea-like body with notes of jasmine and bergamot.",
    image: img8,
    weight: "750g",
    flavor: "Floral & Citrusy",
    makingCountry: "Ethiopia",
    rating: 4.8,
    reviews: 132,
    price: 21.99,
    stock: 22,
    isNew: true,
  },
  {
    id: 9,
    title: "Caramel Macchiato Blend",
    description:
      "Satisfy your sweet cravings with our Caramel Macchiato Blend. Infused with the creamy richness of caramel, this blend creates a perfect harmony of sweetness and bold coffee flavor. It's a dessert-like indulgence for coffee enthusiasts.",
    image: img9,
    weight: "500g",
    flavor: "Sweet & Creamy",
    makingCountry: "United States",
    rating: 4.7,
    reviews: 89,
    price: 15.49,
    stock: 18,
    isNew: true,
  },
  {
    id: 10,
    title: "Guatemalan Antigua",
    description:
      "Renowned for its smooth, velvety texture and vibrant acidity, Guatemalan Antigua coffee offers a rich and complex flavor profile. With notes of chocolate, citrus, and a hint of spice, this coffee is perfect for those seeking a bold and refined cup.",
    image: img10,
    weight: "1kg",
    flavor: "Chocolaty & Spicy",
    makingCountry: "Guatemala",
    rating: 4.8,
    reviews: 104,
    price: 19.49,
    stock: 26,
    isNew: false,
  },
  {
    id: 11,
    title: "Cinnamon Swirl",
    description:
      "Indulge in the comforting flavors of Cinnamon Swirl coffee. This blend combines the warm, spicy notes of cinnamon with a smooth, rich coffee base, making it the perfect brew for cozy mornings and festive occasions.",
    image: img11,
    weight: "500g",
    flavor: "Warm & Spicy",
    makingCountry: "United States",
    rating: 4.5,
    reviews: 73,
    price: 14.99,
    stock: 20,
    isNew: true,
  },
  {
    id: 12,
    title: "Costa Rican Tarrazu",
    description:
      "Grown in the lush mountains of Costa Rica, this single-origin coffee offers a vibrant, clean flavor profile. With bright citrus notes and a smooth, nutty finish, Costa Rican Tarrazu is a must-try for coffee lovers seeking a balanced and refined cup.",
    image: img12,
    weight: "1kg",
    flavor: "Bright & Nutty",
    makingCountry: "Costa Rica",
    rating: 4.9,
    reviews: 140,
    price: 20.99,
    stock: 32,
    isNew: false,
  },
  {
    id: 13,
    title: "Irish Cream Coffee",
    description:
      "Add a touch of indulgence to your coffee time with our Irish Cream Coffee blend. Featuring creamy, sweet, and slightly boozy flavors, this blend is perfect for a sophisticated treat or special occasion.",
    image: img13,
    weight: "250g",
    flavor: "Creamy & Sweet",
    makingCountry: "Ireland",
    rating: 4.6,
    reviews: 56,
    price: 13.99,
    stock: 16,
    isNew: true,
  },
  {
    id: 14,
    title: "Brazilian Santos",
    description:
      "Known for its smooth and mild flavor, Brazilian Santos coffee features low acidity and nutty, chocolatey notes. It's an excellent everyday coffee, perfect for brewing with any method.",
    image: img14,
    weight: "1kg",
    flavor: "Nutty & Chocolaty",
    makingCountry: "Brazil",
    rating: 4.5,
    reviews: 110,
    price: 18.99,
    stock: 48,
    isNew: false,
  },
  {
    id: 15,
    title: "Vanilla Almond",
    description:
      "A harmonious blend of vanilla and almond flavors, this coffee is perfect for those who enjoy a touch of sweetness with a nutty twist. Its aromatic profile makes it an excellent choice for pairing with desserts.",
    image: img15,
    weight: "500g",
    flavor: "Sweet & Nutty",
    makingCountry: "United States",
    rating: 4.7,
    reviews: 95,
    price: 16.99,
    stock: 28,
    isNew: true,
  },
];

import img1 from "../../assets/heroSectionImage/1.png";
import img2 from "../../assets/heroSectionImage/2.png";
import img3 from "../../assets/heroSectionImage/3.png";
import img4 from "../../assets/heroSectionImage/4.png";
import img5 from "../../assets/heroSectionImage/5.png";
import img6 from "../../assets/heroSectionImage/6.png";
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
    headline: " Unlocklive",
    sub_head: "Elevating Your Coffee Experience",
    para: "Unlocklive embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey.",
    main_img: img1,
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
    headline: " Unlocklive",
    sub_head: "Fresh Coffee, Fresh Start",
    para: "At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.",
    main_img: img2,
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
    headline: " Unlocklive",
    sub_head: "Savor the Coffee Taste",
    para: "Memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.",
    main_img: img3,
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
    headline: " Unlocklive",
    sub_head: "Your Perfect Coffee Break Awaits",
    para: "Commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating.",
    main_img: img4,
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
    headline: "Unlocklive",
    sub_head: "A Journey Through Coffee Flavors",
    para: "Sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.",
    main_img: img5,
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
    headline: " Unlocklive",
    sub_head: "Elevating Your Coffee Experience",
    para: "Unlocklive embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride.",
    main_img: img6,
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
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 2,
    src: allImg2,
    original: allImg2,
    width: 872,
    category: "Drinks",
    height: 348,
    radius: 24,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    id: 3,
    src: allImg3,
    original: allImg3,
    width: 312,
    radius: 24,
    height: 348,
    caption: "Color Pencils (Jeshu John - designerspics.com)",
  },
  {
    id: 21,
    src: hotchocolet,
    original: hotchocolet,
    width: 424,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
  {
    id: 4,
    src: allImg4,
    original: allImg4,
    width: 536,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
  {
    id: 6,
    src: burgerImg1,
    original: burgerImg1,
    width: 424,
    height: 348,
    category: "Burger",
    radius: 24,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 5,
    src: allImg5,
    original: allImg5,
    width: 424,
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },

  {
    id: 25,
    src: lemonate2,
    original: lemonate2,
    width: 424,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
  {
    id: 7,
    src: burgerImg2,
    original: burgerImg2,
    category: "Burger",
    // width: 424,
    // height: 348,
    width: 872,
    height: 348,
    radius: 24,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    id: 15,
    src: cookies,
    original: cookies,
    width: 424,
    radius: 24,
    category: "Cookies",
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },

  {
    id: 24,
    src: lemonate3,
    original: lemonate3,
    width: 312,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
  {
    id: 9,
    src: burgerImg3,
    original: burgerImg3,
    width: 536,
    category: "Burger",
    radius: 24,
    height: 348,
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
  {
    id: 10,
    src: burgerImg4,
    original: burgerImg4,
    width: 424,
    category: "Burger",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },

  {
    id: 12,
    src: bakery1,
    original: bakery1,
    width: 872,
    category: "Bakery",
    height: 348,
    radius: 24,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    id: 22,
    src: lemonate1,
    original: lemonate1,
    width: 424,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
  {
    id: 11,
    src: burgerImg5,
    original: burgerImg5,

    width: 312,
    category: "Burger",
    height: 348,
    radius: 24,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },

  {
    id: 14,
    src: barekry2,
    original: barekry2,
    width: 424,
    category: "Bakery",
    radius: 24,
    height: 348,
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
  {
    id: 13,
    src: bakery3,
    original: bakery3,
    width: 536,
    category: "Bakery",
    radius: 24,
    height: 348,
    caption: "Color Pencils (Jeshu John - designerspics.com)",
  },

  {
    id: 19,
    src: dinner2,
    original: dinner2,
    width: 872,
    category: "Dinner",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
  {
    id: 18,
    src: dinner1,
    original: dinner1,
    width: 424,
    category: "Dinner",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
  {
    id: 20,
    src: dinner3,
    category: "Dinner",
    original: dinner3,
    width: 424,
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
  {
    id: 26,
    src: pizza1,
    original: pizza1,
    width: 872,

    category: "Pizza",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
  {
    id: 16,
    src: cookies2,
    original: cookies2,
    width: 424,
    category: "Cookies",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
  {
    id: 23,
    src: milkshake,
    original: milkshake,
    width: 424,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },

  {
    id: 27,
    src: pizza2,
    original: pizza2,
    width: 424,
    category: "Pizza",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
  {
    id: 28,
    src: coffeeMenuImg1,
    original: coffeeMenuImg1,
    width: 424,
    category: "Drinks",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
  {
    id: 32,
    src: pizza3,
    original: pizza3,
    width: 424,
    category: "Pizza",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
  {
    id: 17,
    src: cookies3,
    original: cookies3,
    width: 424,
    category: "Cookies",
    radius: 24,
    height: 348,
    caption: "37H (gratispgraphy.com)",
  },
];

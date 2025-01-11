import React from "react";
import SectionHeaderText from "../../components/common/SectionHeaderText";
import imgExpresso from "../../assets/ProductImage/expresso.png";
import imgceo from "../../assets/AboutSectionImage/ceo.png";
import img3 from "../../assets/AboutSectionImage/3.jpg";
import img4 from "../../assets/AboutSectionImage/4.jpg";
import img5 from "../../assets/AboutSectionImage/5.jpg";

const Products = () => {
  const allProducts = [
    {
      id: 1,
      title: "Espresso Roast",
      description:
        "Experience the rich, bold flavors of our Espresso Roast, meticulously crafted to deliver an intense coffee experience. Each sip offers deep, complex notes with a smooth, velvety finish that lingers pleasantly on the palate. Perfect for those who enjoy their coffee strong and robust, this blend is ideal for espresso lovers. Whether enjoyed as a shot or in a latte, it's a must-have for coffee aficionados.",
      image: imgExpresso,
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
      weight: "1kg",
      flavor: "Earthy & Smooth",
      makingCountry: "Indonesia",
      rating: 4.7,
      reviews: 120,
      price: 19.99,
      stock: 40,
      isNew: false,
    },
  ];

  return (
    <div>
      <div className="w-[390px] lg:w-[1360px] mx-auto mb-[100px] lg:mb-[175px] grid grid-cols-5 gap-14">
        <div className="mt-20 col-span-4 border">
          <div className="flex justify-center lg:justify-normal items-center gap-[10px]">
            <div className="h-[3px] w-[50px] bg-gradient-to-l from-[#86371C]"></div>
            <h2
              className="text-[16px] text-[#86371C]"
              style={{
                fontFamily: "Lemonada, cursive",
              }}>
              Our Products
            </h2>{" "}
            <div className="h-[3px] w-[50px] bg-gradient-to-r from-[#86371C] lg:hidden"></div>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-12">
            {allProducts?.map((e, i) => {
              return (
                <div className="border border-[#86371c]">
                  <img src={e?.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-20 border border-red-500">hi</div>
      </div>
    </div>
  );
};

export default Products;

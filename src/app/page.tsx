"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/42322/tea-tea-time-person-summer-42322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Enjoy a delightful outdoor tea party with iced tea, cupcakes, and floral decor in a serene setting." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/6937411/pexels-photo-6937411.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two chefs in a restaurant kitchen with baked goods, smiling and holding a rolling pin." },
  { "id": "product-image", "url": "https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of assorted donuts with colorful icing and sprinkles, showcasing sweet indulgence." }
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bakery"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroSplit
            title="Freshly Baked Delights"
            description="Experience the taste of home with our delicious range of baked products."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url || "/public/images/placeholder.webp"}
            buttons={[
              { text: "See Products", href: "products" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <TextAbout
            title="Baking with Passion and Love"
            buttons={[
              { text: "Our Story", href: "about" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <ProductCardThree
            products={[
              { id: "1", name: "Sourdough Bread", price: "$5.00", imageSrc: assetMap.find(a => a.id === "product-image")?.url || "/public/images/placeholder.webp" },
              { id: "2", name: "Chocolate Croissant", price: "$2.50", imageSrc: assetMap.find(a => a.id === "product-image")?.url || "/public/images/placeholder.webp" },
              { id: "3", name: "Blueberry Muffin", price: "$3.00", imageSrc: assetMap.find(a => a.id === "product-image")?.url || "/public/images/placeholder.webp" }
            ]}
            title="Our Products"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactSplit
            tag="Newsletter"
            title="Stay Updated!"
            description="Subscribe to receive the latest news and updates."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url || "/public/images/placeholder.webp"}
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterBaseReveal
            columns={[
              {
                title: "Company",
                items: [
                  { label: "About Us", href: "about" },
                  { label: "Contact", href: "contact" }
                ]
              },
              {
                title: "Help",
                items: [
                  { label: "Privacy Policy", href: "" },
                  { label: "Terms & Conditions", href: "" }
                ]
              }
            ]}
            copyrightText="© 2025 | Bakery"
            logoSrc="/brand/logo.svg"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

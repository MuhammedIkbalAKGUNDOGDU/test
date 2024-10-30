import React, { useEffect, useState } from "react";
import logo from "../assets/gardenlogo.png";
import bannerleft from "../assets/deneme.jpeg";
import SpecialMenu from "./specialmenus";

const garden = () => {
  const [isMenuFixed, setIsMenuFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuFixed(window.scrollY > 900);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gotoEmail = () => {
    const email = "naccar2458@gmail.com";
    const subject = "Şikayet / Öneri";
    const body = "Öneri kısmı...";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  window.addEventListener("scroll", function () {
    const menu = document.getElementById("menu");
    const scrollY = window.scrollY;

    if (scrollY > 200) {
      // 200px kaydırma sonrası sabitle
      menu.classList.add("fixed");
    } else {
      menu.classList.remove("fixed");
    }
  });

  {
    /*<img src={imageUrl} alt="Dish" className="menu-image" />*/
  }
  const izgaralar = [
    {
      name: "Izgara Köfte",
      price: 350,
      description: "",
    },
    {
      name: "Izgara Sucuk",
      price: 350,
      description: "",
    },
    {
      name: "Kuzu Pirzola",
      price: 600,
      description: "",
    },
    {
      name: "Antrikot",
      price: 600,
      description: "",
    },
    {
      name: "Izgara Kanat",
      price: 270,
      description: "",
    },
    {
      name: "Izgara İncik",
      price: 270,
      description: "",
    },
  ];
  {
    /*<img src={imageUrl} alt="Dish" className="menu-image" />*/
  }
  const tavalar = [
    {
      name: "Menemen",
      price: 160,
      description: "",
    },
    {
      name: "Sahanda Yumurta",
      price: 160,
      description: "",
    },
    {
      name: "Sucuklu Yumurta",
      price: 200,
      description: "",
    },
    {
      name: "Serpme Kahvaltı",
      price: 450,
      description: "Tek kişilik",
    },
  ];
  {
    /*<img src={imageUrl} alt="Dish" className="menu-image" />*/
  }
  const atistirmaliklar = [
    {
      name: "Patates Tabağı",
      price: 125,
      description: "",
    },
    {
      name: "Çerez Tabağı",
      price: 200,
      description: "",
    },
    {
      name: "Meyve Tabağı",
      price: 250,
      description: "",
    },
    {
      name: "Otto Çıtır Tabağı",
      price: 225,
      description: "",
    },
  ];

  const tatlilar = [
    { name: "Tiramisu", price: 160, description: "" },
    { name: "Limonlu Cheesecake", price: 160, description: "" },
    { name: "Frambuazlı Pasta", price: 160, description: "" },
    { name: "Orman Meyveli Pasta", price: 160, description: "" },
    { name: "Fırın Sütlaç", price: 160, description: "" },
    { name: "Sansebastian", price: 190, description: "" },
    { name: "Otto Special Pasta", price: 190, description: "" },
  ];

  const sogukIcecekler = [
    { name: "Su", price: 23, description: "" },
    { name: "Kola Turka", price: 75, description: "" },
    { name: "Çamlıca Portakal", price: 75, description: "" },
    { name: "Çamlıca Gazoz", price: 75, description: "" },
    { name: "Didi", price: 75, description: "" },
    { name: "Vişne Suyu", price: 75, description: "" },
    { name: "Şeftali Suyu", price: 75, description: "" },
    { name: "Karışık Meyve Suyu", price: 75, description: "" },
    { name: "Ayran", price: 60, description: "" },
    { name: "Soda", price: 45, description: "" },
    { name: "Elmalı Soda", price: 50, description: "" },
    { name: "Limonlu Soda", price: 50, description: "" },
    { name: "Churchill", price: 50, description: "" },
    { name: "Redbull", price: 125, description: "" },
  ];

  const premiumNargileler = [
    { name: "Freezone", price: 390, description: "" },
    { name: "Social Smoke", price: 480, description: "" },
  ];

  const naturalNargileler = [
    { name: "Full Natural Nargile", price: 1100, description: "" },
    { name: "Otto Natural Nargile", price: 650, description: "" },
  ];

  const ottoKlasikNargile = [
    { name: "Otto Klasik Nargile", price: 300, description: "" },
    { name: "Kafa", price: 180, description: "" },
    { name: "Buz", price: 60, description: "" },
  ];

  const darkSerisi = [
    { name: "Bonche", price: 600, description: "" },
    { name: "Kraken", price: 600, description: "" },
    { name: "Tangiers", price: 550, description: "" },
    { name: "Brusko", price: 550, description: "" },
    { name: "Spectrum", price: 550, description: "" },
    { name: "Musthave", price: 550, description: "" },
    { name: "Satyr", price: 550, description: "" },
    { name: "Buta", price: 550, description: "" },
    { name: "Doza", price: 550, description: "" },
    { name: "Aircraft", price: 550, description: "" },
    { name: "Mattpear", price: 550, description: "" },
    { name: "Jam", price: 550, description: "" },
    { name: "Duft", price: 550, description: "" },
    { name: "Darkside", price: 550, description: "" },
    { name: "Revosh", price: 550, description: "" },
    { name: "Paco", price: 550, description: "" },
  ];

  const ottoSpecialNargile = [
    { name: "Şikayetsiz", price: 325, description: "" },
    { name: "Boğaz Sefası", price: 325, description: "" },
    { name: "Şımarık", price: 325, description: "" },
    { name: "Otto Special", price: 325, description: "" },
    { name: "Blueberry", price: 325, description: "" },
    { name: "Fresh Mix", price: 325, description: "" },
    { name: "Mint Cream", price: 325, description: "" },
    { name: "Cici Bebe", price: 325, description: "" },
    { name: "Petibör", price: 325, description: "" },
    { name: "Çift Elma Special", price: 325, description: "" },
  ];

  const ottoIceTeaSerisi = [
    { name: "Jibiar", price: 350, description: "" },
    { name: "Adalya", price: 350, description: "" },
  ];

  const ottoNSerisi = [
    { name: "Çift Elma", price: 325, description: "" },
    { name: "Şeftali", price: 325, description: "" },
    { name: "Cappuccino", price: 325, description: "" },
    { name: "Vişne", price: 325, description: "" },
  ];

  const sicakIcecekler = [
    { name: "Demleme Çay", price: 28, description: "" },
    { name: "Fincan Çay", price: 55, description: "" },
    { name: "Fincan Bitki Çayı", price: 95, description: "" },
    { name: "Sıcak Çikolata", price: 95, description: "" },
    { name: "Salep", price: 95, description: "" },
    { name: "Çikolatalı Salep", price: 110, description: "" },
    { name: "Küçük Demlik", price: 300, description: "" },
    { name: "Büyük Demlik", price: 550, description: "" },
  ];

  const sicakKahveler = [
    { name: "Türk Kahvesi", price: 70, description: "" },
    { name: "Espresso", price: 70, description: "" },
    { name: "Damla Sakızlı Türk Kahvesi", price: 80, description: "" },
    { name: "Menengiç Kahvesi", price: 80, description: "" },
    { name: "Osmanlı Kahvesi", price: 80, description: "" },
    { name: "Nescafe", price: 80, description: "" },
    { name: "Filtre Kahve", price: 90, description: "" },
    { name: "Americano", price: 95, description: "" },
    { name: "Double Espresso", price: 95, description: "" },
    { name: "Chai Tea Latte", price: 110, description: "" },
    { name: "Flat White", price: 110, description: "" },
    { name: "Cappuccino", price: 110, description: "" },
    { name: "Macchiato", price: 110, description: "" },
    { name: "Cafe Latte", price: 110, description: "" },
    { name: "Cafe Mocha", price: 110, description: "" },
    { name: "Cafe White Mocha", price: 110, description: "" },
  ];

  const sogukKahveler = [
    { name: "Ice Filtre Kahve", price: 110, description: "" },
    { name: "Ice Americano", price: 110, description: "" },
    { name: "Ice Chai Tea Latte", price: 125, description: "" },
    { name: "Ice Latte", price: 125, description: "" },
    { name: "Ice Caramel Latte", price: 125, description: "" },
    { name: "Ice Macchiato", price: 125, description: "" },
    { name: "Ice Mocha", price: 125, description: "" },
    { name: "Ice White Mocha", price: 125, description: "" },
    { name: "Cold Brew", price: 125, description: "" },
    { name: "Cortado", price: 125, description: "" },
  ];

  const frappuccinoCesitleri = [
    { name: "Çikolatalı Frappuccino", price: 160, description: "" },
    { name: "Karamel Frappuccino", price: 160, description: "" },
    { name: "Vanilya Frappuccino", price: 160, description: "" },
  ];

  const limonatalar = [
    { name: "Sade Limonata", price: 85, description: "" },
    { name: "Karpuz Limonata", price: 95, description: "" },
    { name: "Mango Limonata", price: 95, description: "" },
    { name: "Nane Limonata", price: 95, description: "" },
    { name: "Çilek Limonata", price: 95, description: "" },
    { name: "Şeftali Limonata", price: 95, description: "" },
  ];

  const bubbleTeaCesitleri = [
    { name: "Ananas", price: 150, description: "" },
    { name: "Çilek", price: 150, description: "" },
    { name: "Hibiscus", price: 150, description: "" },
    { name: "Kahve", price: 150, description: "" },
  ];

  const smoothieCesitleri = [
    { name: "Kırmızı Orman Meyveleri", price: 150, description: "" },
    { name: "Mango", price: 150, description: "" },
    { name: "Şeftali", price: 150, description: "" },
    { name: "Çilek", price: 150, description: "" },
    { name: "Karpuz", price: 150, description: "" },
    { name: "Kivi", price: 150, description: "" },
    { name: "Muz", price: 150, description: "" },
  ];

  const milkshakeCesitleri = [
    { name: "Çilek", price: 150, description: "" },
    { name: "Vanilya", price: 150, description: "" },
    { name: "Karamel", price: 150, description: "" },
    { name: "Çikolata", price: 150, description: "" },
    { name: "Muz", price: 150, description: "" },
    { name: "Oreo", price: 150, description: "" },
  ];

  const frozenCesitleri = [
    { name: "Mango", price: 135, description: "" },
    { name: "Çilek", price: 135, description: "" },
    { name: "Karpuz", price: 135, description: "" },
    { name: "Kavun", price: 135, description: "" },
    { name: "Limon", price: 135, description: "" },
    { name: "Kivi", price: 135, description: "" },
    { name: "Şeftali", price: 135, description: "" },
    { name: "Orman Meyveli", price: 135, description: "" },
    { name: "Otto Special", price: 150, description: "" },
  ];

  const kokteyller = [
    { name: "Mojito", price: 170, description: "" },
    { name: "Tropikal", price: 170, description: "" },
    { name: "Big Boss", price: 170, description: "" },
    { name: "Pinacolada", price: 170, description: "" },
    { name: "Pineapple", price: 170, description: "" },
    { name: "Sprite Blossom", price: 190, description: "" },
    { name: "Otto Special Kokteyl", price: 190, description: "" },
  ];

  return (
    <div className="cafeContainer">
      <div className="cafe-header">
        <img className="img-2" src={logo} alt="" />
        <div className="inner-header-garden">
          <a href="https://ytshisha.com" className="sisha-shop">
            Otto Shisha Shop{" "}
          </a>

          <a className="telanchor" href="tel:+905393412716">
            İletişim
          </a>
        </div>
      </div>
      <div className="cafe-banner">
        <div className="hero-section">
          <div className="content">
            <img className="logo-1" src={logo} alt="" />
            <h1 className="heading">OTTOMANIA</h1>
            <p className="description">Nargilede Yeni Bir Dünya</p>
          </div>
        </div>
      </div>
      <div className="cvv">
        <div>Fiyatlarımıza KDV dahildir</div>
        <div> Son Fiyat Güncellemesi (28/10/2024)</div>
      </div>
      <div className="about-section">
        <h2 className="section-title">Menü</h2>
      </div>

      <div className={isMenuFixed ? "fixed" : "fix-menu"}>
        <div>
          <a href="/ottomania-garden#nargile"> Nargileler</a>
        </div>
        <div>
          <a href="/ottomania-garden#sicak"> Sıcak İçecekler</a>
        </div>
        <div>
          <a href="/ottomania-garden#soguk"> Soğuk içecekler</a>
        </div>
        <div>
          <a href="/ottomania-garden#kokteyl"> Alkolsüz kokteyller</a>
        </div>
        <div>
          <a href="/ottomania-garden#izgara"> Izgaralar</a>
        </div>
        <div>
          <a href="/ottomania-garden#tava"> Tavalar</a>
        </div>
        <div>
          <a href="/ottomania-garden#tatli"> Tatlılar</a>
        </div>
      </div>
      <div id="izgara"></div>
      <SpecialMenu
        title="Izgaralar"
        imageUrl={bannerleft}
        dishes={izgaralar}
      ></SpecialMenu>
      <div id="tava"></div>

      <SpecialMenu
        title="Tavalar"
        imageUrl={bannerleft}
        dishes={tavalar}
      ></SpecialMenu>

      <SpecialMenu
        title="Atıştırmalıklar"
        imageUrl={bannerleft}
        dishes={atistirmaliklar}
      ></SpecialMenu>
      <div id="tatli"></div>
      <SpecialMenu
        title="Tatlılar"
        imageUrl={bannerleft}
        dishes={tatlilar}
      ></SpecialMenu>
      <div id="sicak"></div>

      <SpecialMenu
        title="Sıcak İçecekler"
        imageUrl={bannerleft}
        dishes={sicakIcecekler}
      ></SpecialMenu>

      <SpecialMenu
        title="Sıcak Kahveler"
        imageUrl={sicakKahveler}
        dishes={ottoNSerisi}
      ></SpecialMenu>
      <div id="soguk"></div>

      <SpecialMenu
        title="Soğuk İçecekler"
        imageUrl={bannerleft}
        dishes={sogukIcecekler}
      ></SpecialMenu>
      <SpecialMenu
        title="Soğuk Kahveler"
        imageUrl={sogukKahveler}
        dishes={ottoIceTeaSerisi}
      ></SpecialMenu>

      <SpecialMenu
        title="Frappuccino Çeşitleri"
        imageUrl={bannerleft}
        dishes={frappuccinoCesitleri}
      ></SpecialMenu>

      <SpecialMenu
        title="Limonatalar"
        imageUrl={bannerleft}
        dishes={limonatalar}
      ></SpecialMenu>

      <SpecialMenu
        title="BubbleTea Çeşitleri"
        imageUrl={bannerleft}
        dishes={bubbleTeaCesitleri}
      ></SpecialMenu>

      <SpecialMenu
        title="Smothie Çeşitleri"
        imageUrl={sicakKahveler}
        dishes={smoothieCesitleri}
      ></SpecialMenu>
      <SpecialMenu
        title="Milkshae Çeşitleri"
        imageUrl={sogukKahveler}
        dishes={milkshakeCesitleri}
      ></SpecialMenu>

      <SpecialMenu
        title="Frozen Çeşitleri"
        imageUrl={bannerleft}
        dishes={frozenCesitleri}
      ></SpecialMenu>
      <div id="kokteyl"></div>

      <SpecialMenu
        title="Kokteyller"
        imageUrl={bannerleft}
        dishes={kokteyller}
      ></SpecialMenu>
      <SpecialMenu
        title="Premium Nargileler"
        imageUrl={bannerleft}
        dishes={premiumNargileler}
      ></SpecialMenu>

      <SpecialMenu
        title="Natural Nargileler"
        imageUrl={bannerleft}
        dishes={naturalNargileler}
      ></SpecialMenu>

      <SpecialMenu
        title="OTTO Klasik Nargile"
        imageUrl={bannerleft}
        dishes={ottoKlasikNargile}
      ></SpecialMenu>

      <SpecialMenu
        title="Dark Serisi"
        imageUrl={bannerleft}
        dishes={darkSerisi}
      ></SpecialMenu>

      <SpecialMenu
        title="OTTO Special Nargileler"
        imageUrl={bannerleft}
        dishes={ottoSpecialNargile}
      ></SpecialMenu>

      <SpecialMenu
        title="OTTO Ice Tea Nargileler"
        imageUrl={bannerleft}
        dishes={ottoIceTeaSerisi}
      ></SpecialMenu>

      <SpecialMenu
        title="OTTO N Serisi"
        imageUrl={bannerleft}
        dishes={ottoNSerisi}
      ></SpecialMenu>

      <div className="oneri">
        <div onClick={gotoEmail} className="oneri-btn">
          Şikayet/Öneri
        </div>
      </div>
      
    </div>
  );
};

export default garden;

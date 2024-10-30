import React, { useEffect, useState } from "react";
import logo from "../assets/cafe.png";
import bannerleft from "../assets/deneme.jpeg";
import SpecialMenu from "./specialmenus";

const cafe = () => {
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
  const sicakIcecekler = [
    { name: "Demleme Çay", price: 28, description: "" },
    { name: "Fincan Çay", price: 55, description: "" },
    { name: "Fincan Bitki Çayı", price: 95, description: "" },
    { name: "Sıcak Çikolata", price: 95, description: "" },
    { name: "Salep", price: 95, description: "" },
    { name: "Çikolatalı Salep", price: 110, description: "" },
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

  const limonatalar = [
    { name: "Sade Limonata", price: 85, description: "" },
    { name: "Karpuz Limonata", price: 95, description: "" },
    { name: "Mango Limonata", price: 95, description: "" },
    { name: "Nane Limonata", price: 95, description: "" },
    { name: "Çilek Limonata", price: 95, description: "" },
    { name: "Şeftali Limonata", price: 95, description: "" },
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

  const sogukKahveler = [
    { name: "Ice Filtre Kahve", price: 110, description: "" },
    { name: "Ice Americano", price: 110, description: "" },
    { name: "Ice Latte", price: 125, description: "" },
    { name: "Ice Caramel Latte", price: 125, description: "" },
    { name: "Ice Macchiato", price: 125, description: "" },
    { name: "Ice Mocha", price: 125, description: "" },
    { name: "Ice White Mocha", price: 125, description: "" },
    { name: "Cold Brew", price: 125, description: "" },
    { name: "Cortado", price: 125, description: "" },
    { name: "Ice Chai Tea Latte", price: 125, description: "" },
  ];

  const frappuccinos = [
    { name: "Çikolatalı Frappuccino", price: 160, description: "" },
    { name: "Karamel Frappuccino", price: 160, description: "" },
    { name: "Vanilya Frappuccino", price: 160, description: "" },
  ];

  const smoothies = [
    { name: "Kırmızı Orman Meyveleri", price: 150, description: "" },
    { name: "Mango", price: 150, description: "" },
    { name: "Şeftali", price: 150, description: "" },
    { name: "Çilek", price: 150, description: "" },
    { name: "Karpuz", price: 150, description: "" },
    { name: "Kivi", price: 150, description: "" },
    { name: "Muz", price: 150, description: "" },
  ];

  const milkshakes = [
    { name: "Çilek", price: 150, description: "" },
    { name: "Vanilya", price: 150, description: "" },
    { name: "Karamel", price: 150, description: "" },
    { name: "Çikolata", price: 150, description: "" },
    { name: "Muz", price: 150, description: "" },
    { name: "Oreo", price: 160, description: "" },
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

  const bubbleTea = [
    { name: "Ananas", price: 150, description: "" },
    { name: "Çilek", price: 150, description: "" },
    { name: "Hibiscus", price: 150, description: "" },
    { name: "Kahve", price: 150, description: "" },
  ];

  const kokteyller = [
    { name: "Mojito", price: 170, description: "" },
    { name: "Tropikal", price: 170, description: "" },
    { name: "Big Boss", price: 170, description: "" },
    { name: "Pina Colada", price: 170, description: "" },
    { name: "Pineapple", price: 170, description: "" },
    { name: "Sprite Blossom", price: 190, description: "" },
    { name: "Otto Special Kokteyl", price: 190, description: "" },
  ];

  const atistirmaliklar = [
    { name: "Çerez Tabağı", price: 200, description: "" },
    { name: "Meyve Tabağı", price: 250, description: "" },
    { name: "Otto Çıtır Tabağı", price: 225, description: "" },
    { name: "Patates Tabağı", price: 125, description: "" },
  ];

  const tostlar = [
    { name: "Kaşarlı Tost", price: 120, description: "" },
    { name: "Akdeniz Tost", price: 120, description: "" },
    { name: "Karışık Tost", price: 130, description: "" },
  ];

  const burgerler = [
    { name: "Chicken Burger", price: 250, description: "" },
    { name: "Hamburger", price: 270, description: "" },
    { name: "Cheese Burger", price: 280, description: "" },
    { name: "Double Cheese Burger", price: 360, description: "" },
    { name: "Otto Special Burger", price: 380, description: "" },
  ];

  const tavukYemekleri = [
    { name: "Ballı Susamlı Tavuk", price: 270, description: "" },
    { name: "Barbekü Soslu Tavuk", price: 270, description: "" },
    { name: "Chili Soslu Tavuk", price: 270, description: "" },
    { name: "Köri Soslu Tavuk", price: 270, description: "" },
    { name: "Kremalı Mantarlı Tavuk", price: 270, description: "" },
    { name: "Soya Soslu Tavuk", price: 270, description: "" },
    { name: "Otto Special Tavuk", price: 290, description: "" },
  ];

  const izgaralar = [
    { name: "Izgara Köfte", price: 350, description: "" },
    { name: "Izgara Tavuk", price: 270, description: "" },
  ];

  const makarnalar = [
    { name: "Fesleğenli Kremalı Mantarlı", price: 240, description: "" },
    { name: "Fettuccini Alfredo", price: 240, description: "" },
    { name: "Penne Arrabiata", price: 240, description: "" },
    { name: "Pesto Soslu", price: 240, description: "" },
  ];

  const salatalar = [
    { name: "Mevsim Salata", price: 200, description: "" },
    { name: "Peynirli Salata", price: 225, description: "" },
    { name: "Tavuklu Salata", price: 250, description: "" },
    { name: "Ton Balıklı Salata", price: 270, description: "" },
  ];

  const tatlilar = [
    { name: "Tiramisu", price: 160, description: "" },
    { name: "Limonlu Cheesecake", price: 160, description: "" },
    { name: "Frambuazlı Pasta", price: 160, description: "" },
    { name: "Orman Meyveli Pasta", price: 160, description: "" },
    { name: "Sansebastian", price: 190, description: "" },
    { name: "Otto Special Pasta", price: 190, description: "" },
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
    { name: "Dozaj", price: 550, description: "" },
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
    { name: "Sımarık", price: 325, description: "" },
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

  return (
    <div className="cafeContainer">
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
          <a href="/ottomania-cafe#nargile"> Nargileler</a>
        </div>
        <div>
          <a href="/ottomania-cafe#sicak"> Sıcak İçecekler</a>
        </div>
        <div>
          <a href="/ottomania-cafe#soguk"> Soğuk içecekler</a>
        </div>

        <div>
          <a href="/ottomania-cafe#izgara"> Izgaralar</a>
        </div>
        <div>
          <a href="/ottomania-cafe#salata"> Salatalar</a>
        </div>
        <div>
          <a href="/ottomania-cafe#tost"> Tostlar </a>
        </div>
        <div>
          <a href="/ottomania-cafe#tatli"> Tatlılar</a>
        </div>
        <div>
          <a href="/ottomania-cafe#kokteyl"> Alkolsüz kokteyller</a>
        </div>
      </div>

      <div id="sicak"></div>
      <SpecialMenu
        title="Sıcak İçecekler"
        imageUrl={bannerleft}
        dishes={sicakIcecekler}
      ></SpecialMenu>
      <SpecialMenu
        title="Sıcak Kahveler"
        imageUrl={bannerleft}
        dishes={sicakKahveler}
      ></SpecialMenu>
      <div id="soguk"></div>

      <SpecialMenu
        title="Limonatalar"
        imageUrl={bannerleft}
        dishes={limonatalar}
      ></SpecialMenu>
      <SpecialMenu
        title="Soğuk İçecekler"
        imageUrl={bannerleft}
        dishes={sogukIcecekler}
      ></SpecialMenu>
      <SpecialMenu
        title="Soğuk Kahveler"
        imageUrl={bannerleft}
        dishes={sogukKahveler}
      ></SpecialMenu>
      <SpecialMenu
        title="Frappuccino Çeşitleri"
        imageUrl={bannerleft}
        dishes={frappuccinos}
      ></SpecialMenu>
      <SpecialMenu
        title="Smothie Çeşitleri"
        imageUrl={bannerleft}
        dishes={smoothies}
      ></SpecialMenu>
      <SpecialMenu
        title="Milkshake Çeşitleri"
        imageUrl={bannerleft}
        dishes={milkshakes}
      ></SpecialMenu>
      <SpecialMenu
        title="Frozen Çeşitleri"
        imageUrl={bannerleft}
        dishes={frozenCesitleri}
      ></SpecialMenu>
      <SpecialMenu
        title="Bubble Tea Çeşitleri"
        imageUrl={bannerleft}
        dishes={bubbleTea}
      ></SpecialMenu>
      <div id="kokteyl"></div>

      <SpecialMenu
        title="Kokteyller"
        imageUrl={bannerleft}
        dishes={kokteyller}
      ></SpecialMenu>
      <div id="tost"></div>

      <SpecialMenu
        title="Atıştırmalıklar"
        imageUrl={bannerleft}
        dishes={atistirmaliklar}
      ></SpecialMenu>
      <SpecialMenu
        title="Tostlar"
        imageUrl={bannerleft}
        dishes={tostlar}
      ></SpecialMenu>
      <SpecialMenu
        title="Burgerler"
        imageUrl={bannerleft}
        dishes={burgerler}
      ></SpecialMenu>
      <SpecialMenu
        title="Tabuk Yemekleri"
        imageUrl={bannerleft}
        dishes={tavukYemekleri}
      ></SpecialMenu>
      <div id="izgara"></div>

      <SpecialMenu
        title="Izgaralar"
        imageUrl={bannerleft}
        dishes={izgaralar}
      ></SpecialMenu>
      <SpecialMenu
        title="Makarnalar"
        imageUrl={bannerleft}
        dishes={makarnalar}
      ></SpecialMenu>
      <div id="salata"></div>

      <SpecialMenu
        title="Salatalar"
        imageUrl={bannerleft}
        dishes={salatalar}
      ></SpecialMenu>
      <div id="tatli"></div>

      <SpecialMenu
        title="Tatlılar"
        imageUrl={bannerleft}
        dishes={tatlilar}
      ></SpecialMenu>
      <div id="nargile"></div>

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
        title="OTTO Special Nargile"
        imageUrl={bannerleft}
        dishes={ottoSpecialNargile}
      ></SpecialMenu>
      <SpecialMenu
        title="OTTO Ice Tea Serisi"
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

export default cafe;

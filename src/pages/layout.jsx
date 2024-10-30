import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Layout = () => {
  const navigate = useNavigate();

  // Sayfa yönlendirme fonksiyonları
  const goToCafe = () => navigate("/ottomania-cafe");
  const goToGarden = () => navigate("/ottomania-garden");

  return (
    <div className="yonlendirme">
      <div onClick={goToCafe} className="button1">Ottomania Cafe & Nargile</div>
      <div onClick={goToGarden} className="button1">Ottomania Garden</div>
    </div>
  );
};

export default Layout;

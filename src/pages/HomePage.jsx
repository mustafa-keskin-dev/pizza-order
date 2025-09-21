import React from "react";

const HomePage = ({ goToForm }) => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ color: "#292929" }}>Teknolojik Yemekler</h1>
      <p style={{ color: "#5F5F5F", fontSize: "18px" }}>
        En lezzetli pizzalar bir tık uzağınızda!
      </p>
      <button
        style={{
          backgroundColor: "#FDC913",
          border: "none",
          padding: "15px 30px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
          marginTop: "20px"
        }}
        onClick={goToForm}
      >
        Sipariş Ver
      </button>
    </div>
  );
};

export default HomePage;

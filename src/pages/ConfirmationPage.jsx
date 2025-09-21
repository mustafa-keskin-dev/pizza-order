import React from "react";

const ConfirmationPage = ({ order }) => {
  if (!order) return <h2>Sipariş bilgisi bulunamadı!</h2>;

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Sipariş Onayı</h2>
      <p>İsim: {order.isim}</p>
      <p>Boyut: {order.boyut}</p>
      <p>Malzemeler: {order.malzemeler.join(", ")}</p>
      <p>Notlar: {order.notlar}</p>
      <p>Sipariş ID: {order.id}</p>
      <p>Tarih: {order.createdAt}</p>
    </div>
  );
};

export default ConfirmationPage;

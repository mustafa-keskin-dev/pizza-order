import React, { useState } from "react";
import axios from "axios";

const OrderForm = ({ goToConfirmation }) => {
  const [isim, setIsim] = useState("");
  const [boyut, setBoyut] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [notlar, setNotlar] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMalzemeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setMalzemeler([...malzemeler, value]);
    } else {
      setMalzemeler(malzemeler.filter((m) => m !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isim.length < 3 || boyut === "" || malzemeler.length < 4) {
      alert("Lütfen tüm alanları doğru doldurun (malzeme en az 4 seçilmeli)");
      return;
    }

    const payload = { isim, boyut, malzemeler, notlar };
    setLoading(true);

    try {
      const response = await axios.post("https://reqres.in/api/pizza", payload);
      console.log("Sunucudan gelen cevap:", response.data);
      goToConfirmation(response.data); // Confirmation sayfasına veri gönder
    } catch (error) {
      alert("Sipariş gönderilemedi! İnternet bağlantınızı kontrol edin.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Pizza Sipariş Formu</h2>

      <label>
        İsim:
        <input type="text" value={isim} onChange={(e) => setIsim(e.target.value)} />
      </label>

      <fieldset>
        <legend>Pizza Boyutu:</legend>
        {["Küçük", "Orta", "Büyük"].map((b) => (
          <label key={b}>
            <input type="radio" name="boyut" value={b} onChange={(e) => setBoyut(e.target.value)} />
            {b}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Malzemeler (min 4):</legend>
        {["Peynir", "Sucuk", "Mantar", "Zeytin", "Biber", "Soğan"].map((m) => (
          <label key={m}>
            <input type="checkbox" value={m} checked={malzemeler.includes(m)} onChange={handleMalzemeChange} />
            {m}
          </label>
        ))}
      </fieldset>

      <label>
        Notlar:
        <textarea value={notlar} onChange={(e) => setNotlar(e.target.value)} />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Gönderiliyor..." : "Sipariş Ver"}
      </button>
    </form>
  );
};

export default OrderForm;

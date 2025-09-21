import { useState } from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import OrderForm from "./pages/OrderForm";

function App() {
  const [page, setPage] = useState("home");
  const [orderData, setOrderData] = useState(null);

  const goToForm = () => {
    setPage("form");
  };

  const goToConfirmation = (data) => {
    console.log("Confirmation için veri:", data);
    setOrderData(data);
    setPage("confirmation");
  };

  return (
    <div>
      {page === "home" && <HomePage goToForm={goToForm} />}
      {page === "form" && <OrderForm goToConfirmation={goToConfirmation} />}
      {page === "confirmation" && <h2>Sipariş Onayı buraya gelecek</h2>}
    </div>
  );
}

export default App;

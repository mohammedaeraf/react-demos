import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      setError("Address is required");
      return;
    }
    setError(null);
    localStorage.setItem("orderAddress", address);
    navigate("/order");
  };

  return (
    <div className="container mt-4">
      <h3>Enter Delivery Address</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control mb-3"
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
        />
        <button className="btn btn-success" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
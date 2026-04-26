import { useState } from "react";
import locationIcon from "../assets/mdi--location.svg";

function SearchBar() {
  const [address, setAddress] = useState("");

  return (
    <form className="searchbar" onSubmit={(event) => event.preventDefault()}>
      <label className="search-input">
        <img src={locationIcon} alt="" />
        <input
          type="text"
          placeholder="Enter a delivery address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          aria-label="Delivery address"
        />
      </label>
      <button type="submit">
        {address.trim().length > 0 ? "Find Meals" : "Order Now"}
      </button>
    </form>
  );
}

export default SearchBar;

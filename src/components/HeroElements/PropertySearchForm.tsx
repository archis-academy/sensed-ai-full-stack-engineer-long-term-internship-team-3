import { useState } from "react";
import "./PropertySearchForm.scss";
import { FiSearch, FiSliders } from "react-icons/fi";

const PropertySearchForm = () => {
  const [activeTab, setActiveTab] = useState<"sale" | "rent">("sale");

  return (
    <aside className="property-form">
      {/* 🔹 Tab Navigation */}
      <nav className="property-form__tabs" role="tablist" aria-label="Property Type">
        <button
          className={`property-form__tab ${activeTab === "sale" ? "active" : ""}`}
          onClick={() => setActiveTab("sale")}
          aria-selected={activeTab === "sale"}
          role="tab"
        >
          For Sale
        </button>
        <button
          className={`property-form__tab ${activeTab === "rent" ? "active" : ""}`}
          onClick={() => setActiveTab("rent")}
          aria-selected={activeTab === "rent"}
          role="tab"
        >
          For Rent
        </button>
      </nav>

      {/* 🔹 Form Content */}
      <form className="property-form__content" role="tabpanel">
        <input
          type="text"
          placeholder="New York, San Francisco, etc"
          className="property-form__input"
        />

        <select className="property-form__select">
          <option>Select Property Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Office</option>
        </select>

        <select className="property-form__select">
          <option>Select Rooms</option>
          <option>1 Room</option>
          <option>2 Rooms</option>
          <option>3+ Rooms</option>
        </select>

        <a href="#" className="property-form__advanced">
          <FiSliders /> Advance Search
        </a>

        <button type="submit" className="property-form__submit">
          <FiSearch /> Search
        </button>
      </form>
    </aside>
  );
};

export default PropertySearchForm;

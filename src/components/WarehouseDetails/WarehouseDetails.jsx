import "./WarehouseDetails.scss";
import arrowBackIcon from "../../assets/icons/arrow-back-24px.svg";
import whiteEditIcon from "../../assets/icons/edit-white-24px.svg";
import chevronIcon from "../../assets/icons/chevron-right-24px.svg";
import deleteIcon from "../../assets/icons/delete-outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehouseDetails({
  warehouseDetails: {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  },
  inventoriesData,
}) {
  return (
    <section className="warehouse-details">
      <div className="warehouse-details__top-container">
        <img
          className="warehouse-details__arrow-icon"
          src={arrowBackIcon}
          alt="arrow back icon"
        />
        <h1 className="warehouse-details__title">{warehouse_name}</h1>
        <div className="warehouse-details__icon-container">
          <img
            className="warehouse-details__edit-icon warehouse-details__edit-icon--white"
            src={whiteEditIcon}
            alt="white edit icon"
          />
        </div>
      </div>
      <div className="warehouse-details__contact-info">
        <div className="warehouse-details__section">
          <h4 className="warehouse-details__section-title">
            Warehouse Address:
          </h4>
          <p className="warehouse-details__address">{`${address}, ${city}, ${country}`}</p>
        </div>
        <div className="warehouse-details__bottom-container">
          <div className="warehouse-details__section">
            <h4 className="warehouse-details__section-title">Contact Name:</h4>
            <p className="warehouse-details__contact-name">{contact_name}</p>
            <p className="warehouse-details__contact-position">
              {contact_position}
            </p>
          </div>
          <div className="warehouse-details__section">
            <h4 className="warehouse-details__section-title">
              Contact Information:
            </h4>
            <p className="warehouse-details__contact-phone">{contact_phone}</p>
            <p className="warehouse-details__contact-email">{contact_email}</p>
          </div>
        </div>
      </div>
      <ul className="warehouse-details__items">
        {inventoriesData.map(
          ({ id, item_name, category, status, quantity }) => (
            <li key={id} className="warehouse-details__item">
              <div className="warehouse-details__info">
                <div className="warehouse-details__section">
                  <h4 className="warehouse-details__section-title">
                    Inventory Item
                  </h4>
                  <div className="warehouse-details__inventory-container">
                    <p className="warehouse-details__inventory-name">
                      {item_name}
                    </p>
                    <img
                      className="warehouse-details__inventory-icon"
                      src={chevronIcon}
                      alt="chevron icon"
                    />
                  </div>
                </div>
                <div className="warehouse-details__section">
                  <h4 className="warehouse-details__section-title">Status</h4>
                  <p className="warehouse-details__inventory-status">
                    {status}
                  </p>
                </div>
                <div className="warehouse-details__section">
                  <h4 className="warehouse-details__section-title">Category</h4>
                  <p className="warehouse-details__inventory-category">
                    {category}
                  </p>
                </div>
                <div className="warehouse-details__section">
                  <h4 className="warehouse-details__section-title">Qty</h4>
                  <p className="warehouse-details__inventory-quantity">
                    {quantity}
                  </p>
                </div>
              </div>
              <div className="warehouse-details__actions">
                <img
                  className="warehouse-details__delete-icon"
                  src={deleteIcon}
                  alt="delete icon"
                />
                <img
                  className="warehouse-details__edit-icon"
                  src={editIcon}
                  alt="edit icon"
                />
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default WarehouseDetails;

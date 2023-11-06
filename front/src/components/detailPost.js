import React, { useEffect, useState } from "react";
import { dateFormat, fetchData, urls } from "../utils/utils";

function DetailPost(props) {
  const { selectedPost, handleSelectedPost, handleChange } = props;
  const [data, setData] = useState(null);
  const [newData, setNewdata] = useState(null);
  const [dataSended, setDataSended] = useState(null);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(urls.urlDetail + selectedPost, null, setData, setError);
    setError(null);
  }, [selectedPost, setError, edit]);

  useEffect(() => {
    if (dataSended !== null) {
      setEdit(false);
      setError(null);
      handleChange();
    }
    // eslint-disable-next-line
  }, [dataSended, setError]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewdata({ ...newData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newData),
    };
    fetchData(
      urls.urlUpdate + selectedPost + "/",
      config,
      setDataSended,
      setError,
    );
    handleSelectedPost(selectedPost);
  };

  return (
    <div className="detail">
      <h2>Plus d'informations</h2>
      <form onSubmit={handleSubmit}>
        <div className="info flex">
          {data && (
            <>
              <p>
                <span>Titre</span>
                {edit ? (
                  <>
                    <input
                      type="text"
                      name="title"
                      value={newData.title}
                      onChange={handleInputChange}
                    ></input>
                    {error && error.hasOwnProperty("title") && (
                      <span className="error">*{error.title}</span>
                    )}
                  </>
                ) : (
                  <span>{data.title}</span>
                )}
              </p>

              <p>
                <span>Adresse</span>
                {edit ? (
                  <>
                    <input
                      type="text"
                      name="address"
                      value={newData.address}
                      onChange={handleInputChange}
                    ></input>
                    {error && error.hasOwnProperty("address") && (
                      <span className="error">*{error.address}</span>
                    )}
                  </>
                ) : (
                  <span>{data.address}</span>
                )}
              </p>

              <p>
                <span>Type de bien</span>
                {edit ? (
                  <>
                    <select
                      name="realty_type"
                      value={newData.realty_type}
                      onChange={handleInputChange}
                    >
                      <option value="">--Please choose an option--</option>
                      <option value="office">Office</option>
                      <option value="land plot">Land plot</option>
                      <option value="warehouse">Warehouse</option>
                      <option value="retail">Retail</option>
                      <option value="coworking">Coworking</option>
                    </select>
                    {error && error.hasOwnProperty("realty_type") && (
                      <span className="error">*{error.realty_type}</span>
                    )}
                  </>
                ) : (
                  <span>{data.realty_type}</span>
                )}
              </p>

              <p>
                <span>Transaction</span>
                {edit ? (
                  <>
                    <select
                      name="transaction_type"
                      value={newData.transaction_type}
                      onChange={handleInputChange}
                    >
                      <option value="">--Please choose an option--</option>
                      <option value="rental">Rental</option>
                      <option value="sale">Sale</option>
                    </select>
                    {error && error.hasOwnProperty("transaction_type") && (
                      <span className="error">*{error.transaction_type}</span>
                    )}
                  </>
                ) : (
                  <span>{data.transaction_type}</span>
                )}
              </p>

              <div className="detail_date">
                {edit ? (
                  <>
                    <input
                      type="date"
                      name="publication_date"
                      value={dateFormat(newData.publication_date, true)}
                      onChange={handleInputChange}
                    ></input>
                    {error && error.hasOwnProperty("publication_date") && (
                      <span className="error">*{error.publication_date}</span>
                    )}
                  </>
                ) : (
                  <span>Le {dateFormat(data.publication_date)}</span>
                )}
              </div>
            </>
          )}
        </div>
        {edit && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "30%",
              margin: "auto",
            }}
          >
            <button className="edit_btn" onClick={() => setEdit(false)}>
              <span className="material-symbols-outlined">cancel</span>
            </button>
            <button className="edit_btn" type="submit">
              <span className="material-symbols-outlined">check_circle</span>
            </button>
          </div>
        )}
      </form>
      {!edit && (
        <button
          className="edit_btn"
          onClick={() => {
            setEdit(!edit);
            setNewdata(data);
          }}
        >
          <span className="material-symbols-outlined">edit</span>
        </button>
      )}
    </div>
  );
}

export default DetailPost;

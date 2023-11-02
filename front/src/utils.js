export const urls = {
  urlCreate: "http://127.0.0.1:8000/api/realestate-create/",
  urlList: "http://127.0.0.1:8000/api/realestate-list",
  urlDetail: `http://127.0.0.1:8000/api/realestate-detail/`,
  urlUpdate: `http://127.0.0.1:8000/api/realestate-update/`,
  urlDelete: `http://127.0.0.1:8000/api/realestate-delete/`,
};

export const dateFormat = (date) => {
  const monthNames = [
    "jan",
    "fév",
    "mar",
    "avr",
    "mai",
    "juin",
    "juil",
    "août",
    "sep",
    "oct",
    "nov",
    "déc",
  ];
  const newDate = new Date(date);
  // Fonction pour formater la date
  const day = newDate.getDate();
  const month = monthNames[newDate.getMonth()];
  const year = newDate.getFullYear();

  return `${day} ${month} ${year}`;
};

export const fetchData = (url, config, setData) => {
  fetch(url, config)
    .then((response) => response.json())
    .then((data) => {
      if (setData) {
        setData(data);
      }
    })
    .catch(function (error) {
      console.log("ERROR:", error);
    });
};

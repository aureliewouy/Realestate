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
  const day = newDate.getDate();
  const month = monthNames[newDate.getMonth()];
  const year = newDate.getFullYear();

  return `${day} ${month} ${year}`;
};

export const fetchData = async (url, config, setData, setError) => {
  await fetch(url, config)
    .then(async (response) => {
      if (response.status >= 400) {
        return response.json().then((err) => {
          throw err;
        });
      }
      return response.json();
    })
    .then(
      (data) => {
        if (setData) {
          setData(data);
        }
      },
      async (err) => {
        setError(err.error);
      },
    );
};

export const sortData = (data, element, sortDirection) => {
  return data.slice().sort((a, b) => {
    if (element === "publication_date") {
      const dateA = new Date(a[element]).getTime();
      const dateB = new Date(b[element]).getTime();
      return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
    } else {
      return sortDirection === "asc"
        ? a[element].localeCompare(b[element])
        : b[element].localeCompare(a[element]);
    }
  });
};

export const filterData = (data, name, value) => {
  return data.slice().filter((e) => e[name] === value);
};

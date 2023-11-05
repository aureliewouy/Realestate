import {
  dateFormat,
  fetchData,
  filterData,
  sortData,
  urls,
} from "./utils/utils";

const data = [
  {
    id: 1,
    title: "Spacious Warehouse",
    address: "Industrial Area",
    transaction_type: "sale",
    realty_type: "warehouse",
    publication_date: "2023-10-30T08:15:00.123456Z",
  },
  {
    id: 2,
    title: "Modern Retail Store",
    address: "Shopping Mallie",
    transaction_type: "sale",
    realty_type: "retail",
    publication_date: "2023-10-25T14:30:30.987654Z",
  },
  {
    id: 3,
    title: "Cozy Office Suite",
    address: "Financial District",
    transaction_type: "rental",
    realty_type: "office",
    publication_date: "2023-10-22T17:45:15.789012Z",
  },
];
it("sortData test", () => {
  const sortedDataAsc = sortData(data, "title", "asc");
  const sortedDataDesc = sortData(data, "title", "desc");
  expect(sortedDataAsc).toEqual([
    {
      id: 3,
      title: "Cozy Office Suite",
      address: "Financial District",
      transaction_type: "rental",
      realty_type: "office",
      publication_date: "2023-10-22T17:45:15.789012Z",
    },
    {
      id: 2,
      title: "Modern Retail Store",
      address: "Shopping Mallie",
      transaction_type: "sale",
      realty_type: "retail",
      publication_date: "2023-10-25T14:30:30.987654Z",
    },
    {
      id: 1,
      title: "Spacious Warehouse",
      address: "Industrial Area",
      transaction_type: "sale",
      realty_type: "warehouse",
      publication_date: "2023-10-30T08:15:00.123456Z",
    },
  ]);
  expect(sortedDataDesc).toEqual([
    {
      id: 1,
      title: "Spacious Warehouse",
      address: "Industrial Area",
      transaction_type: "sale",
      realty_type: "warehouse",
      publication_date: "2023-10-30T08:15:00.123456Z",
    },
    {
      id: 2,
      title: "Modern Retail Store",
      address: "Shopping Mallie",
      transaction_type: "sale",
      realty_type: "retail",
      publication_date: "2023-10-25T14:30:30.987654Z",
    },
    {
      id: 3,
      title: "Cozy Office Suite",
      address: "Financial District",
      transaction_type: "rental",
      realty_type: "office",
      publication_date: "2023-10-22T17:45:15.789012Z",
    },
  ]);
});
it("filterData test", () => {
  const filteredData = filterData(data, "transaction_type", "rental");

  expect(filteredData).toEqual([
    {
      id: 3,
      title: "Cozy Office Suite",
      address: "Financial District",
      transaction_type: "rental",
      realty_type: "office",
      publication_date: "2023-10-22T17:45:15.789012Z",
    },
  ]);
});

it("dateFormat test", () => {
  const date = new Date("2023-10-22T17:45:15.789012Z");
  const formattedDate = dateFormat(date);
  expect(formattedDate).toBe("22 oct 2023");
});

it("fetchData test", async () => {
  const fetch = jest.fn(() => Promise.resolve({ json: () => data }));
  global.fetch = fetch;
  const setData = jest.fn();
  const setError = jest.fn();

  const url = urls.urlList;
  await fetchData(url, {}, setData, setError);

  expect(fetch).toHaveBeenCalledWith(url, config);
  expect(setData).toHaveBeenCalledWith(data);
  expect(setError).not.toHaveBeenCalled();
});

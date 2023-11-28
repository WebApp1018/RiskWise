import React, { useState, useEffect, useRef } from "react";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../../service/ProductService";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

const Product = () => {
  // const [showSidebar, setShowSidebar] = useState(true);
  const [products, setProducts] = useState([]);
  const dt = useRef(null);
  const [expandedRows, setExpandedRows] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState();
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [inventoryStatus] = useState(["INSTOCK", "LOWSTOCK", "OUTOFSTOCK"]);
  const [categories] = useState([
    { name: "Accessories" },
    { name: "Fitness" },
    { name: "Clothing" },
    { name: "Electronics" },
  ]);

  const categoryItemTemplate = (option) => {
    return (
      // <div className="flex align-items-center gap-2">
      //     <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" />
      <span>{option.name}</span>
      // </div>
    );
  };

  useEffect(() => {
    ProductService.getProductsWithOrdersSmall().then((data) => {
      setProducts(data);
      setLoading(false);
      clearFilter();
    });
  }, []);

  const storeBodyTemplate = (rowData) => {
    return (
      <div className="flex items-center gap-2">
        <img
          alt="flag"
          src={`/images/flag/${rowData.store.code.toLowerCase()}.png`}
          style={{ width: "23px", height: "15px" }}
        />
        <span>{rowData.store.name}</span>
      </div>
    );
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const clearFilter = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      code: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      "store.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      price: { value: null, matchMode: FilterMatchMode.EQUALS },
      category: { value: null, matchMode: FilterMatchMode.IN },
      rating: { value: null, matchMode: FilterMatchMode.EQUALS },
      inventoryStatus: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    setGlobalFilterValue("");
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const onRowExpand = (event) => {};

  const onRowCollapse = (event) => {};

  const expandAll = () => {
    let _expandedRows = {};

    products.forEach((p) => (_expandedRows[`${p.id}`] = true));

    setExpandedRows(_expandedRows);
  };

  const collapseAll = () => {
    setExpandedRows(null);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <div className="flex items-center">
        <img
          src={`/images/${rowData.image}`}
          alt={rowData.image}
          width="34px"
          className="shadow-4"
        />
        <span className="ml-4">{rowData.name}</span>
      </div>
    );
  };

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  };

  const ratingBodyTemplate = (rowData) => {
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {Array.from({ length: rowData.rating }).map((_, i) => (
            <svg
              key={i}
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <span className="ml-1 text-gray-500 dark:text-gray-400">
          {rowData.rating}.0
        </span>
      </div>
    );
  };

  const statusRowFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={inventoryStatus}
        onChange={(e) => options.filterApplyCallback(e.value, options.index)}
        itemTemplate={statusBodyTemplate}
        placeholder="Select One"
        style={{ width: "12rem" }}
      />
    );
  };

  const categoryRowFilterTemplate = (options) => {
    return (
      <MultiSelect
        value={options.value}
        options={categories}
        itemTemplate={categoryItemTemplate}
        onChange={(e) => options.filterApplyCallback(e.value)}
        optionLabel="name"
        placeholder="Any"
        maxSelectedLabels={1}
        style={{ width: "12rem" }}
      />
    );
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <span className="bg-[#dbeafe] text-[#1e40af] text-xs font-medium px-2 py-0.5 rounded dark:bg-[#1e3a8a] dark:text-[##93c5fd]">
        {typeof rowData === "string" ? rowData : rowData.inventoryStatus}
      </span>
    );
  };

  const allowExpansion = (rowData) => {
    return true;
  };

  const rowExpansionTemplate = (data) => {
    return (
      <div className="p-3">
        <div className="flex items-center justify-start gap-2">
          <div className="bg-gray-50 rounded-lg w-1/4 flex items-center justify-center py-1">
            <img src="/images/imac-front-image.png" width="130px" alt="" />
          </div>
          <div className="bg-gray-50 rounded-lg w-1/4 flex items-center justify-center py-1">
            <img src="/images/imac-front-image.png" width="130px" alt="" />
          </div>
          <div className="bg-gray-50 rounded-lg w-1/4 flex items-center justify-center py-1">
            <img src="/images/imac-front-image.png" width="130px" alt="" />
          </div>
          <div className="bg-gray-50 rounded-lg w-1/4 flex items-center justify-center py-1">
            <img src="/images/imac-front-image.png" width="130px" alt="" />
          </div>
        </div>
        <div className="mt-5">
          <div>Details</div>
          <div className="text-gray-500">
            Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
            processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
            Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
            Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
          </div>
        </div>
        <div className="flex items-center mt-5 gap-2">
          <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] focus:ring-4 focus:ring-[#bfdbfe] dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] focus:outline-none dark:focus:ring-[#1e40af]">
            Edit
          </button>
          <button className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Preview
          </button>
        </div>
      </div>
    );
  };

  const header = (
    <div className="">
      <div className="flex flex-wrap justify-between items-center gap-2 font-normal">
        <div>
          <span className="text-gray-500">All Products:</span>
          <span className="mr-5"> 123456 </span>
          <span className="text-gray-500">Total sales:</span>
          <span> $88.4k</span>
        </div>
        <div>
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Keyword Search"
                value={globalFilterValue}
                onChange={onGlobalFilterChange}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] focus:ring-4 focus:ring-[#bfdbfe] dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] focus:outline-none dark:focus:ring-[#1e40af]">
          + Add new product
        </button>
        <div className="flex justify-center gap-2">
          <button
            onClick={expandAll}
            className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Collapse All
          </button>
          <button
            onClick={clearFilter}
            className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Clear Filter
          </button>
          <button
            className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={exportCSV}
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );

  return (
    // <div>
    //   {/* <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    //   <Sidebar showSidebar={showSidebar} /> */}
    // </div>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <div className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="px-4 lg:flex-row lg:space-x-4">
              <DataTable
                dataKey="id"
                ref={dt}
                value={products}
                selectionMode={rowClick ? null : "checkbox"}
                selection={selectedProducts}
                onSelectionChange={(e) => setSelectedProducts(e.value)}
                filters={filters}
                paginator
                rows={5}
                expandedRows={expandedRows}
                onRowToggle={(e) => setExpandedRows(e.data)}
                onRowExpand={onRowExpand}
                onRowCollapse={onRowCollapse}
                rowExpansionTemplate={rowExpansionTemplate}
                emptyMessage="No products found."
                header={header}
                loading={loading}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                pt={{
                  header: "bg-white border-y-0",
                  paginator: "bg-red-100",
                }}
              >
                <Column
                  expander={allowExpansion}
                  style={{ width: "2rem" }}
                  exportable={false}
                />
                <Column
                  selectionMode="multiple"
                  headerStyle={{ width: "2rem" }}
                  exportable={false}
                ></Column>
                <Column
                  field="name"
                  header="Product"
                  filter
                  filterField="name"
                  filterPlaceholder="Search by name"
                  filterMenuStyle={{
                    boxShadow:
                      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                  }}
                  showFilterMatchModes={false}
                  body={imageBodyTemplate}
                />
                <Column
                  field="code"
                  header="Sku"
                  filter
                  filterField="code"
                  filterPlaceholder="Search by code"
                  filterMenuStyle={{
                    boxShadow:
                      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                  }}
                  showFilterMatchModes={false}
                  sortable
                />
                <Column
                  field="store.name"
                  header="Store"
                  filterField="store.name"
                  style={{ minWidth: "12rem" }}
                  body={storeBodyTemplate}
                  filter
                  filterPlaceholder="Search by store"
                  showFilterMatchModes={false}
                  sortable
                />
                <Column
                  field="price"
                  filter
                  filterField="price"
                  filterMenuStyle={{
                    boxShadow:
                      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                  }}
                  dataType="numeric"
                  header="Price"
                  sortable
                  body={priceBodyTemplate}
                />
                <Column
                  field="category.name"
                  header="Category"
                  sortable
                  filter
                  filterField="category"
                  filterElement={categoryRowFilterTemplate}
                  filterMenuStyle={{
                    boxShadow:
                      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                  }}
                  showFilterMatchModes={false}
                />
                <Column
                  field="rating"
                  header="Reviews"
                  // filter
                  // filterField="rating"
                  dataType="numeric"
                  sortable
                  body={ratingBodyTemplate}
                  style={{ width: "100px" }}
                />
                <Column
                  field="inventoryStatus"
                  header="Status"
                  filter
                  filterElement={statusRowFilterTemplate}
                  filterMenuStyle={{
                    boxShadow:
                      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                  }}
                  showFilterMatchModes={false}
                  sortable
                  body={statusBodyTemplate}
                />
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </PrimeReactProvider>
  );
};

export default Product;

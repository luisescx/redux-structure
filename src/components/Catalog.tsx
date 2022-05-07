import React, { useEffect, useState } from "react";
import api from "../services/api";
import { IProduct } from "../store/modules/cart/types";
import CatalogItem from "./CatalogItem";

const Catalog = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main style={{ marginBottom: 32 }}>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <CatalogItem product={product} key={product.id} />
      ))}
    </main>
  );
};

export default Catalog;

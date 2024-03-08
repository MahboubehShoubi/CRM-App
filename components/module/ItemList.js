import FormInput from "./FormInput";
function ItemList({ form, setForm }) {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { productName: "", price: "", qty: "" }],
    })
  };

  const changHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({
      ...form,
      products: newProducts,
    });
  };

  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({
      ...form,
      products: newProducts,
    });
    console.log(products);
  };

  return (
    <div className="item-list">
      <p>Items List</p>
      {products.map((product, index) => (
        <div key={index} className="form-input__list">
          <FormInput
            name="productName"
            label="Product Name"
            type="text"
            value={product.productName}
            onChange={(e) => changHandler(e, index)}
          />
          <div>
            <FormInput
              name="price"
              label="Price"
              type="text"
              value={product.price}
              onChange={(e) => changHandler(e, index)}
            />
            <FormInput
              name="qty"
              label="Qty"
              type="number"
              value={product.qty}
              onChange={(e) => changHandler(e, index)}
            />
          </div>
          <button onClick={() => deleteHandler(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;

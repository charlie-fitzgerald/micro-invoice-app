import { useState } from "react";

export default function InvoiceForm() {
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");

  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);

  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (!itemName.trim()) return;

    setItems((prev) => [
      ...prev,
      {
        name: itemName,
        description: itemDescription,
        quantity: itemQuantity,
        price: itemPrice,
      },
    ]);

    setItemName("");
    setItemDescription("");
    setItemQuantity(1);
    setItemPrice(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const invoiceData = {
      customerName,
      customerAddress,
      invoiceDate,
      items,
    };

    console.log("Invoice data:", invoiceData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto px-4 py-8 space-y-8"
    >
      {/* Customer Info */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="customerName" className="mb-1 font-medium">
              Customer Name
            </label>
            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="customerAddress" className="mb-1 font-medium">
              Customer Address
            </label>
            <input
              id="customerAddress"
              type="text"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="invoiceDate" className="mb-1 font-medium">
              Invoice Date
            </label>
            <input
              id="invoiceDate"
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
      </div>

      {/* Line Items */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Add Line Item</h2>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="itemName" className="mb-1 font-medium">
              Item Name
            </label>
            <input
              id="itemName"
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="itemDescription" className="mb-1 font-medium">
              Item Description
            </label>
            <input
              id="itemDescription"
              type="text"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="itemQuantity" className="mb-1 font-medium">
                Quantity
              </label>
              <input
                id="itemQuantity"
                type="number"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(Number(e.target.value))}
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="itemPrice" className="mb-1 font-medium">
                Price
              </label>
              <input
                id="itemPrice"
                type="number"
                value={itemPrice}
                onChange={(e) => setItemPrice(Number(e.target.value))}
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddItem}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
          >
            Add Item
          </button>
        </div>
      </div>

      {/* List of Items */}
      {items.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Line Items</h2>
          <ul className="space-y-2">
            {items.map((item, idx) => (
              <li key={idx} className="border p-3 rounded bg-gray-50">
                <div className="flex justify-between font-medium">
                  <span>{item.name}</span>
                  <span>
                    {item.quantity} × ${item.price.toFixed(2)}
                  </span>
                </div>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Submit */}
      <div className="text-right">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition cursor-pointer"
        >
          Submit Invoice
        </button>
      </div>
    </form>
  );
}

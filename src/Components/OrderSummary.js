import React from "react";

const OrderSummary = ({ orderDetails }) => {
  const { orderItems, orderId, totalPrice } = orderDetails;
  console.log(orderItems, orderId, totalPrice);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <p className="text-lg text-center font-medium mb-6">
        Ordered On: <span className="text-gray-700">{orderId}</span>
      </p>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border-b">Title</th>
              <th className="text-left px-4 py-2 border-b">Price</th>
              <th className="text-left px-4 py-2 border-b">Quantity</th>
              <th className="text-left px-4 py-2 border-b">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b truncate">{item.title}</td>
                <td className="px-4 py-2 border-b">₹ {item.price}</td>
                <td className="px-4 py-2 border-b">{item.quantity}</td>
                <td className="px-4 py-2 border-b">
                  ₹ {item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan="3"
                className="px-4 py-2 text-right font-bold border-t"
              >
                Grand Total:
              </td>
              <td className="px-4 py-2 border-t font-bold">₹ {totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default OrderSummary;

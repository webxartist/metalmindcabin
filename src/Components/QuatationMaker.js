"use client";

import { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaFilePdf, FaTrash, FaPlus } from "react-icons/fa";

/*
========================================
FULL HYDRATION + LAB() SAFE QUOTATION MAKER
========================================
FIXES:
1. SSR safe
2. Hydration mismatch fixed
3. html2canvas lab() color error fixed
4. Dynamic imports for jspdf/html2canvas
5. WhatsApp send functionality
========================================
*/

const defaultItems = [{ name: "Portable Office Cabin", qty: 1, price: 120000 }];

export default function ProfessionalQuotationMaker() {
  const invoiceRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const [quotationNo, setQuotationNo] = useState("");
  const [today, setToday] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [items, setItems] = useState(defaultItems);

  useEffect(() => {
    setMounted(true);
    setQuotationNo(`MMC-${Date.now().toString().slice(-6)}`);
    setToday(new Date().toLocaleDateString("en-IN"));
  }, []);

  if (!mounted) return null;

  const handleCustomerChange = (e) =>
    setCustomer({ ...customer, [e.target.name]: e.target.value });

  const handleItemChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = field === "name" ? value : Number(value) || 0;
    setItems(updated);
  };

  const addItem = () => setItems([...items, { name: "", qty: 1, price: 0 }]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  const subtotal = items.reduce((acc, item) => acc + item.qty * item.price, 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  // ========================
  // DOWNLOAD PDF
  // ========================
  const downloadPDF = async () => {
    const html2canvas = (await import("html2canvas")).default;
    const { jsPDF } = await import("jspdf");

    const input = invoiceRef.current;

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      onclone: (clonedDoc) => {
        clonedDoc.querySelectorAll("*").forEach((el) => {
          const style = window.getComputedStyle(el);
          if (style.backgroundColor.includes("lab"))
            el.style.backgroundColor = "#ffffff";
          if (style.color.includes("lab")) el.style.color = "#1E3A8A";
        });
      },
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = 210;
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`${customer.name || "quotation"}-quotation.pdf`);
  };

  // ========================
  // SEND WHATSAPP
  // ========================
  const sendWhatsApp = () => {
    const itemList = items
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} - Qty:${item.qty} x ₹${item.price}`,
      )
      .join("\n");

    const message = `Hello Metal Mind Cabin,

Quotation Request:

Client: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}

Items:
${itemList}

Subtotal: ₹${subtotal}
GST: ₹${gst.toFixed(2)}
Total: ₹${total.toFixed(2)}

Please confirm this quotation.`;

    window.open(
      `https://wa.me/919321715392?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="bg-[#F5E6D3] min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* FORM SECTION */}
        <div className="bg-white shadow-2xl rounded-3xl p-8 mb-10">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-8 text-center">
            Professional Quotation Maker
          </h2>

          {/* CUSTOMER */}
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <input
              type="text"
              name="name"
              placeholder="Client Name"
              value={customer.name}
              onChange={handleCustomerChange}
              className="border border-gray-300 text-[#1E3A8A] px-4 py-3 rounded-lg bg-white"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={customer.phone}
              onChange={handleCustomerChange}
              className="border border-gray-300 text-[#1E3A8A] px-4 py-3 rounded-lg bg-white"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={customer.address}
              onChange={handleCustomerChange}
              className="border border-gray-300 text-[#1E3A8A] px-4 py-3 rounded-lg bg-white"
            />
          </div>

          {/* ITEMS */}
          <div className="space-y-4 mb-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="grid md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-xl"
              >
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    handleItemChange(index, "name", e.target.value)
                  }
                  placeholder="Product Name"
                  className="border px-4 py-3 rounded-lg text-[#1E3A8A]"
                />
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) =>
                    handleItemChange(index, "qty", e.target.value)
                  }
                  className="border px-4 py-3 rounded-lg text-[#1E3A8A]"
                />
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    handleItemChange(index, "price", e.target.value)
                  }
                  className="border px-4 py-3 rounded-lg text-[#1E3A8A]"
                />
                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-500 text-white rounded-lg flex items-center justify-center gap-2"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={addItem}
            className="bg-[#1E3A8A] text-white px-5 py-3 rounded-lg flex items-center gap-2"
          >
            <FaPlus /> Add Item
          </button>
        </div>

        {/* PDF AREA */}
        <div
          ref={invoiceRef}
          className="bg-white rounded-3xl shadow-2xl p-10 text-[#1E3A8A]"
        >
          {/* HEADER */}
          <div className="flex justify-between items-start border-b pb-6 mb-6">
            <div className="flex items-center gap-4">
              <img
                src="/logoo.png"
                alt="logo"
                className="h-20 w-auto object-contain"
              />
              <div>
                <h1 className="text-3xl font-bold">Metal Mind Cabin</h1>
                <p className="text-sm text-gray-600">
                  Premium Portable Cabin Manufacturer
                </p>
              </div>
            </div>
            <div className="text-right text-sm">
              <p>
                <b>Quotation No:</b> {quotationNo}
              </p>
              <p>
                <b>Date:</b> {today}
              </p>
            </div>
          </div>

          {/* CLIENT */}
          <div className="mb-8 text-sm">
            <p>
              <b>Client Name:</b> {customer.name}
            </p>
            <p>
              <b>Phone:</b> {customer.phone}
            </p>
            <p>
              <b>Address:</b> {customer.address}
            </p>
          </div>

          {/* TABLE */}
          <table className="w-full border border-collapse mb-8">
            <thead>
              <tr style={{ backgroundColor: "#1E3A8A", color: "#ffffff" }}>
                <th className="border p-3 text-left">Item</th>
                <th className="border p-3">Qty</th>
                <th className="border p-3">Price</th>
                <th className="border p-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td className="border p-3">{item.name}</td>
                  <td className="border p-3 text-center">{item.qty}</td>
                  <td className="border p-3 text-center">₹{item.price}</td>
                  <td className="border p-3 text-center">
                    ₹{item.qty * item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* TOTAL */}
          <div className="ml-auto max-w-sm space-y-3 text-lg">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>GST 18%:</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-2xl font-bold border-t pt-3">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-10 pt-6 border-t text-sm text-gray-600">
            <p>GST No: 27BNNPK5442H1ZQ</p>
            <p>Phone: +91 9321715392</p>
            <p>Email: metalmindcabin@gmail.com</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <button
            onClick={downloadPDF}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold"
          >
            <FaFilePdf />
            Download PDF
          </button>

          <button
            onClick={sendWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold"
          >
            <FaWhatsapp />
            Send WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

import { use, useState } from "react";

// CHILD COMPONENT FOR MODAL
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg w-70 h-96">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}

// PARENT CLASS
export default function Shoplist() {
  const [isOpen, setIsOpen] = useState(false);

  const imageSrc =
    "https://logos-world.net/wp-content/uploads/2023/01/Shopee-Logo-2015.png";

  const [shopItem, setShopItem] = useState([
    {
      id: 1,
      img: "https://i5.walmartimages.com/seo/Great-Value-Hydrate-Alkaline-Water-33-8-fl-oz-Bottle_905d23b6-4ec1-4f54-8b2d-6af4dee76c00.16590c5fe05b21f5de337e6c1fd08c25.jpeg",
      Product: " AlkalineWater",
      Description: "This water is so good and afordable ",
      price: "$2",
      status: false,
    },
    {
      id: 2,
      img: "https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2026/09/16/e2196e05-5ded-4db4-c115-efd39930450e.png",
      Product: " Iphone 18 Pro Max 100TB",
      Description: "Apple Products ",
      price: "$1200",
      status: false,
    },
    {
      id: 3,
      img: "https://tse3.mm.bing.net/th/id/OIP.Ui5MMLH8ENXFqZsdwXcKHAAAAA?r=0&w=272&h=561&rs=1&pid=ImgDetMain&o=7&rm=3",
      Product: "JBL SPEAKER ",
      Description: "Affordable Speaker",
      price: "$400",
      status: false,
    },
    {
      id: 4,
      img: "https://tse3.mm.bing.net/th/id/OIP.Ui5MMLH8ENXFqZsdwXcKHAAAAA?r=0&w=272&h=561&rs=1&pid=ImgDetMain&o=7&rm=3",
      Product: "JBL SPEAKER ",
      Description: "Affordable Speaker",
      price: "$400",
      status: false,
    },
  ]);

  return (
    <div className="bg-orange-600 w-screen h-screen flex flex-col">
      {/* Header */}
      <header className="flex flex-col items-center justify-center bg-white h-36 shadow-md">
        <img src={imageSrc} alt="Logo" className="w-56 h-32 rounded-md" />
      </header>

      {/* Main content */}
      <div className="h-3/4 px-14 py-6">
        <div className=" h-full flex flex-col justify-center items-center">
          {/* Item container */}
          <div className="bg-white flex flex-col justify-start h-5/6 w-3/4 rounded-2xl shadow-xl overflow-hidden ">
            {/* Title + Add button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
              <h2 className="text-2xl font-bold text-gray-700">
                🛒 Shop Items
              </h2>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold"
              >
                + Add Item
              </button>
            </div>

            {/* Table */}
            <div className="overflow-y-auto h-[400px]">
              <table className="table-fixed w-full border-collapse">
                <thead className="bg-orange-500 text-white sticky top-0 ">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">
                      PRODUCT
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      DESCRIPTION
                    </th>
                    <th className="border border-gray-300 px-4 py-2">PRICE</th>
                    <th className="border border-gray-300 px-4 py-2">STATUS</th>
                    <th className="border border-gray-300 px-4 py-2">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {shopItem.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-100 even:bg-gray-50 transition"
                    >
                      <td className="border border-gray-300 px-4 py-2 font-medium ">
                        <div className="flex items-center gap-3">
                          <img className="w-14 w-14" src={item.img} alt="" />
                          {item.Product}
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-600">
                        {item.Description}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-800">
                        {item.price}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.status ? (
                          <span className="text-green-600 font-semibold">
                            Available
                          </span>
                        ) : (
                          <span className="text-red-600 font-semibold">
                            Not Available
                          </span>
                        )}
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-center">
                        <div className="flex items-center justify-center gap-4">
                          <label className="flex items-center gap-2">
                            <input
                              className="w-5 h-5 accent-green-600"
                              type="checkbox"
                            />
                            <span>Status</span>
                          </label>

                          <button className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition font-semibold">
                            Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className=" w-full h-16 flex items-center px-4 flex flex-col justify-center ">
          <div>
            <h1 className="text-orange-700 text-lg font-bold text">
              ADD NEW PRODUCTS
            </h1>
          </div>
         
        </div><div className=" w-full h-16 flex items-center px-6 gap-4">
  <label className="text-black font-semibold">PRODUCT NAME:</label>
  <input 
    className="h-8 px-2 rounded border 4px border-gray-300 flex-1 " 
    type="text" 
  />
</div>

<div className="w-full h-16 flex items-center px-6 gap-4">
  <label className="text-black font-semibold">PRODUCT DESCRIPTION:</label>
  <input 
    className="h-8 px-2 rounded border border-gray-300 flex-1" 
    type="text" 
  />
</div>

<div className=" w-full h-16 flex items-center px-6 gap-4">
  <label className="text-black font-semibold">PRICE:</label>
  <input 
    className="h-8 px-2 rounded border border-gray-300 flex-1" 
    type="text" 
  />
</div>

 <div className="w-full flex items-center justify-center">
  <button className="bg-green-600 w-28 h-12 rounded-lg">ADD ITEM</button>
 </div>

      </Modal>
    </div>
  );
}

import {useState } from "react";

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
function Deletebtn(props) {
  return (
    <button
      onClick={props.del}
      className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition font-semibold"
    >
      DELETE
    </button>
  );
}

// function ProdUp(){
//   return()
// }

// PARENT CLASS
export default function Shoplist() {
  const [isOpen, setIsOpen] = useState(false);
  const [deletebtn, setDeleteBtn] = useState(false);
  
  const [newid ,setnewId] = useState(5);



  const imageSrc =
    "https://logos-world.net/wp-content/uploads/2023/01/Shopee-Logo-2015.png";

  const [shopItem, setShopItem] = useState([
    {
      id: 1,
      quantity: 1,
      img: "https://i5.walmartimages.com/seo/Great-Value-Hydrate-Alkaline-Water-33-8-fl-oz-Bottle_905d23b6-4ec1-4f54-8b2d-6af4dee76c00.16590c5fe05b21f5de337e6c1fd08c25.jpeg",
      Product: " AlkalineWater",
      Description: "This water is so good and afordable ",
      price: "2",
      status: false,
    },
    {
      id: 2,
      quantity: 1,
      img: "https://hamrobazaar.blr1.cdn.digitaloceanspaces.com/User/Posts/2026/09/16/e2196e05-5ded-4db4-c115-efd39930450e.png",
      Product: " Iphone 18 Pro Max 100TB",
      Description: "Apple Products ",
      price: "1200",
      status: false,
    },
    {
      id: 3,
      quantity: 1,
      img: "https://tse3.mm.bing.net/th/id/OIP.Ui5MMLH8ENXFqZsdwXcKHAAAAA?r=0&w=272&h=561&rs=1&pid=ImgDetMain&o=7&rm=3",
      Product: "JBL SPEAKER ",
      Description: "Affordable Speaker",
      price: "400",
      status: false,
    },
    {
      id: 4,
      quantity: 1,
      img: "https://tse3.mm.bing.net/th/id/OIP.Ui5MMLH8ENXFqZsdwXcKHAAAAA?r=0&w=272&h=561&rs=1&pid=ImgDetMain&o=7&rm=3",
      Product: "JBL SPEAKER ",
      Description: "Affordable Speaker",
      price: "400",
      status: false,
    },
  ]);

      const total = shopItem.reduce(
      (acc, curr)=>  acc + curr.price * curr.quantity,
      0
    )

  const handleDelete = (id) => {
    setShopItem(shopItem.filter((item) => item.id !== id));
  };

  const handleProductIncrement = (id) => {
    setShopItem(
      shopItem.map((item) => {
        const convertedPrice = Number(item.price);
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      }),
    );
  };

  const handleProductDecrement = (id) => {
    setShopItem(
      shopItem.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      }),
    );
  };

  const toggle = (id) => {
    setShopItem(
      shopItem.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item,
      ),
    );
  };

  

   const [newprodName , setnewprodName] = useState("");
   const [newprodDescrip , setnewprodDescrip] = useState("");
   const [newprodPrice , newnewprodPrice] = useState("");


  const newShopitems = [
   {
      id: newid,
      quantity: 1,
      img: "",
      Product: newprodName,
      Description: newprodDescrip ,
      price: newprodPrice,
      status: false,
   }

  ];

   const addnewitemprod = (id)=>{
    setShopItem([...shopItem , ...newShopitems]);
     setnewId(newid + 1)
    setnewprodName("")
    setnewprodDescrip("")
    newnewprodPrice("");
   }

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
              <h1>TOTAL ALL ITEM : $ {total} </h1>
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

                      <td className="border border-gray-300   text-gray-800 ">
                        <div className=" flex items-center justify-between p-3 rounded-md shadow-sm">
                          {/* Price */}
                          <div className="w-1/3 text-center font-semibold text-gray-900">
                          
                           ${item.price * item.quantity} 
                          </div>

                          {/* Quantity */}
                          <div className="w-1/3 text-center">
                            <span className=" text-xs text-gray-600">
                              Quantity
                            </span>
                            <span className="text-sm font-bold">
                              {item.quantity}
                            </span>
                          </div>

                          {/* Controls */}
                          <div className="w-1/3 flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleProductIncrement(item.id)}
                              className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                            >
                              +
                            </button>
                            <div>
                              <h1>{item.quantity}</h1>
                            </div>
                            <button
                              onClick={() => handleProductDecrement(item.id)}
                              className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                            >
                              −
                            </button>
                          </div>
                        </div>
                      </td>

                      <td className="border border-gray-300 px-4 py-2">
                        {item.status ? (
                          <span className="text-green-600 ">AVAILABLE</span>
                        ) : (
                          <span className="text-red-700 ">NOT AVAILABLE X</span>
                        )}
                      </td>
                      <td className="border border-gray-300 px-4 py-4 text-center">
                        <div className="flex items-center justify-center gap-4">
                          <label className="flex items-center gap-2">
                            <input
                              onClick={() => toggle(item.id)}
                              checked={item.status}
                              className="w-5 h-5 accent-green-600"
                              type="checkbox"
                            />
                            <span>Status</span>
                          </label>

                          <Deletebtn del={() => handleDelete(item.id)} />
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
        </div>
        <div className="space-y-4 p-6 bg-white rounded-lg shadow-md">
          {/* Product Name */}
          <div className="flex items-center gap-4">
            <label className="w-40 text-gray-700 font-medium">
              Product Name:
            </label>
            <input
            value={newprodName}
            onChange={(event) => setnewprodName(event.target.value) }
              className="flex-1 h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
            />
          </div>

          {/* Product Description */}
          <div className="flex items-center gap-4">
            <label className="w-40 text-gray-700 font-medium">
              Description:
            </label>
            <input
            value={newprodDescrip}
            onChange={(event)=> setnewprodDescrip(event.target.value)}
              className="flex-1 h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
            />
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <label className="w-40 text-gray-700 font-medium">Price:</label>
            <input
            
            value={newprodPrice}
            onChange={(event)=> newnewprodPrice(event.target.value)}
              className="flex-1 h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
           
            onClick={addnewitemprod}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition">
              Add Item
            </button>
          </div>
        </div>
      </Modal>
    
      
    </div>
  );
}

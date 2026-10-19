import { useCallback, useMemo, useRef, useState } from "react";

export default function SearchBox() {
  const [list, setTasklist] = useState([
    { id: 1, taskname: "coding" },
    { id: 2, taskname: "Eating" },
    { id: 3, taskname: "Gaming" },
  ]);

  const [newlist, setnewList] = useState("");
  const [search, setSearch] = useState("");
  const newId = useRef(4);

  const Addlist = useCallback(() => {
    const newarraylist = { id: newId.current, taskname: newlist };

    setTasklist([...list, newarraylist]);
    setnewList("");
    newId.current ++ 
  },[newlist,list]);

  const searchedList = useMemo(() => {
    return list.filter((li) =>
      li.taskname.toLowerCase().includes(search.toLowerCase()),
    );  
  }, [search, list]);

  return (
    <div className="min-h-screen bg-gray-950 p-8 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold">SearchBox</h1>

        {/* Search */}
        <div className="mb-6">
          <label className="mb-2 block text-sm text-gray-400">Search</label>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search items..."
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Add */}
        <div className="mb-8 flex gap-3">
          <input
            value={newlist}
            onChange={(e) => setnewList(e.target.value)}
            type="text"
            placeholder="Enter item name..."
            className="flex-1 rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 outline-none focus:border-blue-500"
          />
          <button
            onClick={() => Addlist()}
            className="rounded-lg bg-blue-600 px-6 font-medium hover:bg-blue-500"
          >
            + Add
          </button>
        </div>

        {/* List */}
        <div className="rounded-lg border border-gray-800 bg-gray-900 p-5">
          <h2 className="mb-4 text-lg font-semibold">Your List</h2>

          {searchedList.map((li) => (
            <div key={li.id} className="space-y-3">
              <div className="rounded-md border border-gray-800 p-4">
                <h1>{li.taskname}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

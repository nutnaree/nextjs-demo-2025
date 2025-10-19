import { Input } from "reactstrap";

export default function ProductFormComponent() {
  return (
    <div className="bg-blue-100 py-10 rounded-lg px-4">
      <form className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-end">
        <div className="flex flex-col w-full md:w-1/3">
          <label className="text-sm font-medium mb-1">Product Name</label>
          <Input className="block w-full p-2" required />
        </div>
        <div className="flex flex-col w-full md:w-1/3">
          <label className="text-sm font-medium mb-1">Price</label>
          <Input type="number" className="block w-full p-2" required />
        </div>
        <div className="flex gap-2 mt-0 md:mt-4"></div>
      </form>
    </div>
  );
}

import { Button, Input, InputGroup } from "reactstrap";
import { FaSearch, FaPlus } from "react-icons/fa";

export default function FormComponent() {
  return (
    <div className="bg-blue-50 py-6 px-4 rounded-lg">
      <form
        className="flex flex-col sm:flex-row justify-center items-center gap-3"
      >
        <InputGroup className="max-w-md">
          <Input
            placeholder="Search products"
          />
        </InputGroup>

        <div className="flex gap-2">
          <Button
            color="primary"
            size="sm"
            type="submit"
            className="flex! items-center gap-1"
          >
            <FaSearch />
            Search
          </Button>

          <Button
            color="success"
            size="sm"
            type="button"
            className="flex! items-center gap-1"
          >
            <FaPlus />
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const GiphySearch = ({ setGiphyEndPoint, setGiphySearchHistory }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setGiphyEndPoint(data.value);
    setGiphySearchHistory((prev) => [...prev, data.value]);
  };

  const searchBackground = {
    backgroundColor: "#8B5CF6",
    maxWidth: "700px",
    borderRadius: "10px",
  };

  return (
    <div style={searchBackground} className="p-4 mx-auto my-5">
      <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className="mb-3" size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg" className="fw-bolder fs-3">
            #
          </InputGroup.Text>
          {errors.value && (
            <span className="text-danger">This field is required</span>
          )}
          <FormControl
            className="fw-bolder fs-3"
            defaultValue="trending"
            {...register("value", { required: true })}
          />
          <Button variant="warning" type="submit" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default GiphySearch;

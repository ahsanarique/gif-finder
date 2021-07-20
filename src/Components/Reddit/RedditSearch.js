import React from "react";
import { useForm } from "react-hook-form";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const RedditSearch = ({
  setRedditEndPoint,
  setRedditData,
  setRedditSearchHistory,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const searchBackground = {
    backgroundColor: "#ff4500",
    maxWidth: "700px",
    borderRadius: "10px",
  };

  const onSubmit = (data) => {
    setRedditData([]);
    setRedditEndPoint(data.value);
    setRedditSearchHistory((prev) => [...prev, data.value]);
  };

  return (
    <div style={searchBackground} className="p-4 mx-auto my-5">
      <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className="mb-3" size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg" className="fw-bolder fs-3">
            #
          </InputGroup.Text>

          <FormControl
            className="fw-bolder fs-3"
            placeholder={errors.value ? "This field is required" : ""}
            defaultValue="gifs"
            {...register("value", { required: true })}
          />
          <Button variant="dark" type="submit" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default RedditSearch;

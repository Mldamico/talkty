import axios from "axios";
import { useState } from "react";
import { ValidationError } from "./ValidationError";

export default function TestErrors() {
  const baseUrl = "http://localhost:5000/api/";
  const [errors, setErrors] = useState(null);
  function handleNotFound() {
    axios
      .get(baseUrl + "buggy/not-found")
      .catch((err) => console.log(err.response));
  }

  function handleBadRequest() {
    axios
      .get(baseUrl + "buggy/bad-request")
      .catch((err) => console.log(err.response));
  }

  function handleServerError() {
    axios
      .get(baseUrl + "buggy/server-error")
      .catch((err) => console.log(err.response));
  }

  function handleUnauthorised() {
    axios
      .get(baseUrl + "buggy/unauthorised")
      .catch((err) => console.log(err.response));
  }

  function handleBadGuid() {
    axios
      .get(baseUrl + "activities/notaguid")
      .catch((err) => console.log(err.response));
  }

  function handleValidationError() {
    axios.post(baseUrl + "activities", {}).catch((err) => setErrors(err));
  }

  return (
    <>
      <h1 className="mb-4 text-3xl">Test Error component</h1>
      <div className="flex justify-between flex-grow p-3 bg-white rounded-md shadow-md">
        <button
          className="flex-grow border-2 border-r border-blue-500 "
          onClick={handleNotFound}
        >
          Not Found
        </button>
        <button
          className="flex-grow border-2 border-blue-500 border-x "
          onClick={handleBadRequest}
        >
          Bad Request
        </button>
        <button
          className="flex-grow border-2 border-blue-500 border-x "
          onClick={handleValidationError}
        >
          Validation Error
        </button>

        <button
          className="flex-grow border-2 border-blue-500 border-x "
          onClick={handleServerError}
        >
          Server Error
        </button>
        <button
          className="flex-grow border-2 border-blue-500 border-x "
          onClick={handleUnauthorised}
        >
          Unauthorised
        </button>
        <button
          className="flex-grow border-2 border-l border-blue-500 "
          onClick={handleBadGuid}
        >
          Bad Guid
        </button>
      </div>
      {errors && <ValidationError errors={errors} />}
    </>
  );
}

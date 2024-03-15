function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);

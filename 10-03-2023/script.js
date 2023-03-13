const printString = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 1000);
  });
  return promise;
};

const getResponse = async (name) => {
  try {
    let data = await printString();
    //   let res = await data.json();
    console.log(data);
  } catch (err) {
    console.log("eee");
  }
};

getResponse();

// create a dropdown which will show all the country names (.then/async and await)
// on select of the country try to print population of that country (aync and await)
// create a async function which accepts the country parameter

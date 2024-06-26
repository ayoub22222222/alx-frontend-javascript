export default function (success) {
  return new Promise((resolve, reject) => {
    const resp = {
      status: 200,
      body: 'Success',
    };

    if (success === true) {
      resolve(resp);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
} 


export default async function parse(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    // console.log(req);
    req.on('data', (data) => (body += data.toString()));
    req.on('end', () => {
      // console.log('BODY', body);
      if (body != '') {
        resolve(JSON.parse(body));
      } else {
        resolve();
      }
    });
    req.on('error', reject);
  });
}

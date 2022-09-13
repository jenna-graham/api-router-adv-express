export default async function parse(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    console.log(req);
    req.on('data', (data) => (body += data));
    req.on('end', () => {
      resolve(JSON.parse(body));
    });
    req.on('error', reject);
  });
}

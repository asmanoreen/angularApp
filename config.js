require('dotenv').config();
const env = process.env.NODE_ENV; // 'dev' or 'test'
const dev = {
 app: {
   port: 3000
 },
 db: {
   host: 'localhost',
   port:  27017,
   name:'riderapp'
 }
};
const test = {
 app: {
   port: 5000
 },
 db: {
   host: 'localhost',
   port:  27017,
   name: 'riderapp'
 }
};
const config={
  dev,
  test
};
switch (env) {
    case "dev":
        module.exports = config[env];
        break;
    case "test":
        module.exports = config[env];
        break;
    default:
        console.log("not set");
}

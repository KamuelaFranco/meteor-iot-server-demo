// Allow CORS from all domains to /incoming
WebApp.connectHandlers.use("/incoming", function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});
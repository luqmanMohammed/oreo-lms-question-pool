const axios = require("axios");
const { RST, TOKEN_INTROSPECT_URI } = process.env;

const authenticateToken = async (req, res, next, roles) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const introspect = await axios({
        url: TOKEN_INTROSPECT_URI,
        method: "POST",
        data: { token },
        headers: {
          authorization: `Bearer ${RST}`
        }
      });
      const { active, role } = introspect.data;
      if (active) {
        if (roles.includes(role)) {
          next();
        } else return res.status(403).send("Insufficient Access");
      } else return res.status(401).send("Inactive Token");
    } catch (e) {
      return res.status(500).send("System Error. Contact Support");
    }
  } else return res.status(401).send("Invalid Token");
};

module.exports.admin_auth = (req, res, next) =>
  authenticateToken(req, res, next, ["admin"]);
module.exports.moderator_auth = (req, res, next) =>
  authenticateToken(req, res, next, ["admin", "moderator", "resource_server"]);
module.exports.student_auth = (req, res, next) =>
  authenticateToken(req, res, next, ["admin", "moderator", "student"]);

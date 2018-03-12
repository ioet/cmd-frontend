var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions = {}

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt")
jwtOptions.secretOrKey = 'secret_key';

passport.use(new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    //console.log('payload received', jwt_payload);
    next(null, { user: "correcto" });
  })
)
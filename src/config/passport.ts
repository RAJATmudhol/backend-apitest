// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import dotenv from "dotenv";
// import { v4 as uuidv4 } from "uuid";
// import App from "../models/App";

// dotenv.config();

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       callbackURL: "/api/auth/google/callback",
//     },
//     async (_accessToken, _refreshToken, profile, done) => {
//       try {
//         const email = profile.emails?.[0].value;
//         const name = profile.displayName;

//         if (!email) return done(null, false);

//         // Check if app exists already
//         let app = await App.findOne({ where: { ownerEmail: email } });

//         if (!app) {
//           // Create new app with generated API key
//           app = await App.create({
//             name,
//             ownerEmail: email,
//             apiKey: uuidv4(),
//             status: "active",
//           });
//         }

//         return done(null, app);
//       } catch (error) {
//         done(error, null);
//       }
//     }
//   )
// );

// passport.serializeUser((app: any, done) => done(null, app.id));

// passport.deserializeUser(async (id: string, done) => {
//   const app = await App.findByPk(id);
//   done(null, app);
// });

// export default passport;

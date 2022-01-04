module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2020bbe1ac639763dc2f6f3fc00f2304'),
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_CONN_STRING: 'mongodb+srv://hurbatushka:04IShG1virJDxlqq@ferrumauto.janxhae.mongodb.net',
    DB_NAME: 'ferrumauto',
    SERVICE_COLLECTION: 'Service',
    MAIL_ADR: 'hurbatushka@mail.ru',
    MAIL_PSWD: 'UUpE-ts3r2Ij',
  },
  experimental: {
    clientComponents: true,
  },
};

module.exports = nextConfig;

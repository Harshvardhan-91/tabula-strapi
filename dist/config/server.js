"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('PUBLIC_URL'),
    app: {
        keys: env.array('APP_KEYS'),
    },
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', 'your-default-secret-here'),
        },
    },
});

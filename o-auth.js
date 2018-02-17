var int_encoder = require('int-encoder');
var crypto = require('crypto');
var ENCRYPTION_KEY = "xyz123";

// Helper methods
int_encoder.alphabet();
var oAuth = {};

function encrypt_string(string) {
    var cipher = crypto.createCipher('aes-256-cbc', ENCRYPTION_KEY);
    var crypted = cipher.update(string, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return int_encoder.encode(crypted, 16);
}

function decrypt_string(string) {
    key = int_encoder.decode(string, 16);
    var decipher = crypto.createDecipher('aes-256-cbc', ENCRYPTION_KEY);
    var dec = decipher.update(key, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

function random(max) {
    return Math.floor((Math.random() * max) + 1);
}

oAuth.generate_randomized_user_code = function(username) {
    return encrypt_string(username + ":" + random(100));
};

function decrypt_randomized_user_code(user_code) {
    var user_random = decrypt_string(user_code);
    return user_random.split(":")[0];
}

oAuth.generate_auth_code_for_user = function(username) {
    return this.generate_randomized_user_code(username);
};

module.exports = oAuth;
'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db, cb) {
    db.createTable('cars', {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        header: 'string',
        link: 'string',
        site_id: 'smallint',
        created_at: 'timestamp',
        updated_at: 'timestamp',
    }, cb);
};

exports.down = function (db, cb) {
    db.dropTable('cars', cb);
};

exports._meta = {
    "version": 1
};

/*module.exports = {
 CHAR: 'char',
 STRING: 'string',
 TEXT: 'text',
 SMALLINT: 'smallint',
 BIGINT: 'bigint',
 INTEGER: 'int',
 SMALL_INTEGER: 'smallint',
 BIG_INTEGER: 'bigint',
 REAL: 'real',
 DATE: 'date',
 DATE_TIME: 'datetime',
 TIME: 'time',
 BLOB: 'blob',
 TIMESTAMP: 'timestamp',
 BINARY: 'binary',
 BOOLEAN: 'boolean',
 DECIMAL: 'decimal'
 };*/
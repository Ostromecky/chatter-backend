import { Db } from 'mongodb';

module.exports = {
  async up(db: Db) {
    await db.collection('users').insertOne({
      email: 'foo@bar.baz',
      password: 'example-password',
    });
  },
};

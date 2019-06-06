db.createUser(
    {
        user: "muuvy",
        pwd: "muuvy",
        roles: [
            {
                role: "readWrite",
                db: "muuvy"
            }
        ]
    }
);

db = db.getSiblingDB('muuvy');

db.foo.insert({
    "key": "value"
});
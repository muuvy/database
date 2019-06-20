db.createUser({
    user: "muuvy",
    pwd: "muuvy",
    mechanism: "SCRAM-SHA-1",
    roles: [{
            role: "readWrite",
            db: "muuvy"
        },
        "dbAdmin"
    ]
});

db = db.getSiblingDB('muuvy');

db.foo.insert({
    "key": "value"
});
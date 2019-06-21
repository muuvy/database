db.createUser({
    user: "muuvy",
    pwd: "muuvy",
    roles: [{
            role: "readWrite",
            db: "muuvy"
        },
        "dbAdmin"
    ]
});
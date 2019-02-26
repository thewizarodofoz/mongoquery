function $and(queries, item, isMatch) {
    for (let query of queries) {
        if (!isMatch(query, item)) {
            return false;
        }
    }

    return true;
}

function $or(queries, item, isMatch) {
    for (let query of queries) {
        if (isMatch(query, item)) {
            return true;
        }
    }

    return false;
}

function $nor(queries, item, isMatch) {
    for (let query of queries) {
        if (isMatch(query, item)) {
            return false;
        }
    }

    return true;
}

module.exports = {
    $and,
    $or,
    $nor,
};
const checkMillionDollarIdea = (req, res, next) => {
    const numWeeks = req.body.numWeeks
    const weeklyRevenue = req.body.weeklyRevenue
    const totalMoney = Number(numWeeks) * Number(weeklyRevenue);

    if (numWeeks && weeklyRevenue && totalMoney >= 1000000) {
        next();
    } else {
        res.status(400).send();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;

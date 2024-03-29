const User = require('../models/User');

module.exports = {
    async store(req, res){
        // return res.json(req.body);
        const {email} = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }

};
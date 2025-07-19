export const createSubscription = async (req,res,next) => {
    try {
        const sunscrtiption = await Subscription.create( docs: {
            ... req.body,
            user: req.user._id,
        });

        res.status(201).json({ success: true, data: subscription});
    } catch (error) {
        next(error);
    }
}

export const getUserSubscriptions = async (req, res, next) => {
    try {
        if(req.user.id !== req.params.id) {
            const error = new Error('Unauthorised access');
            error.statusCode = 401;
            throw error;
        }

        const subscriptions = await Subscription.find(filter: {user: req.params.id});
        res.status(200).json({ success: true, data: subscriptions });
    } catch(error) {
        next(error);
    }
}
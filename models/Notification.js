import mongoose from 'mongoose'



var notificationSchema = new mongoose.Schema({
	username: String,
	campgroundId: String,
	isRead: { type: Boolean, default: false }
});

module.exports = mongoose.model("Notification", notificationSchema);
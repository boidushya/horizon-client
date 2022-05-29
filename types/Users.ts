import Clubs from "./Clubs";
import EventReg from "./EventReg";

interface Users {
	_id?: string;
	username?: string;
	name: string;
	type: string;
	secretPassword: string;
	titleInClubs?: Array<{ club: Clubs; title: string }>;
	email: string;
	studentId?: string;
	eventsConducted?: Array<{
		answerOfQuestions: { ques: string; answer: string };
		event: string;
	}>;
	college: string;
	clubs?: Array<Clubs>; //All clubs enrolled in
	notificationOn?: Array<Clubs>; //All clubs whose notif is turned on
	events?: Array<{
		answerOfQuestions: { ques: string; answer: string };
		event: string;
	}>; //All clubs entolled in
	password?: string;
}

export interface RegisteredUser {
	_id: string;
	answerOfQuestions: Array<{ ques: string; answer: string; _id: string }>;
	user: { name: string; email: string; studentId: string };
}

export default Users;

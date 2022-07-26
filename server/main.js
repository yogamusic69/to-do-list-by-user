import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';
import { Accounts } from 'meteor/accounts-base';

const insertTask = (taskText, user) =>
  TasksCollection.insert({
    text: taskText,
    userId: user._id,
    createdAt: new Date(),
  });

const USER1 = 'user1';
const PWD1 = 'pwd1';

const USER2 = 'user2';
const PWD2 = 'pwd2';



Meteor.startup(() => {

  if (!Accounts.findUserByUsername(USER1)) {
    Accounts.createUser({
      username: USER1,
      password: PWD1,
    });
  }

  if (!Accounts.findUserByUsername(USER2)) {
    Accounts.createUser({
      username: USER2,
      password: PWD2,
    });
  }

  const user1 = Accounts.findUserByUsername(USER1);
  const user2 = Accounts.findUserByUsername(USER2);

  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(taskText => insertTask(taskText, user))
  }
});
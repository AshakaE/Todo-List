import * as event from './events';
import project from './project';

const newProject = new project('Other');

event.loadAddTask();
event.submitTask(newProject);
import * as event from './events';
import * as utils from './utility';
import Project from './project';
import Todo from './todo';

const newProject = new Project('Other');
utils.showMainList(Project);
utils.showProject(newProject);
event.showProjects();

event.loadAddProject();
event.loadAddTask();
event.submitTask();
event.submitProject();
event.saveTask();
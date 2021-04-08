import * as event from './events';
import * as utils from './utility';
import Project from './project';

const newProject = new Project('Other');
utils.showMainList(Project);

event.loadAddProject();
event.loadAddTask();
event.submitTask();
event.submitProject();
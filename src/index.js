import * as event from './events';
import * as utils from './utility';
import Project from './project';

event.setInititalData();
console.log(Project.mainList);

utils.showMainList(Project);
event.showProjects();

event.loadAddProject();
event.loadAddTask();
event.submitTask();
event.submitProject();
event.saveTask();

import * as event from './events';
import * as utils from './utility';
import Project from './project';

const newProject = new Project('Other');
const ad = new Project('ccccr');
const efef = new Project('vvvr');
const dazda = new Project('bbbr');
utils.showMainList(Project);


event.loadAddTask();
event.submitTask(newProject);
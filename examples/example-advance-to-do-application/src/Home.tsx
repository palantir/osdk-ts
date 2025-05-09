
import { useCallback, useState } from "react";
import { Header } from "./components/Header";
import css from "./Home.module.css";
import Layout from "./Layout";
import { IProject } from "./dataServices/useProjects";
import { TaskList } from "./components/TaskList";
import { ITask } from "./dataServices/useTasks";
import { TaskDetails } from "./components/TaskDetails";

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<IProject | undefined>(undefined);
  const [selectedTask, setSelectedTask] = useState<ITask | undefined>(undefined);

  const onSelectedProject = useCallback((project: IProject) => {
    setSelectedProject(project);
  } , []);
  const onSelectedTask = useCallback((task: ITask) => {
    setSelectedTask(task);
  }, []);

  return (
    <Layout>
      <div>
        <Header onProjectSelect={onSelectedProject}/>
        <div className={css.container}>
          <div className={css.tasksList}>
            {selectedProject && 
              <div className={css.taskContainer}>
                <TaskList selectedProject={selectedProject} onSelectedTask={onSelectedTask}/>
                {selectedTask && <TaskDetails task={selectedTask}/>}
              </div>
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

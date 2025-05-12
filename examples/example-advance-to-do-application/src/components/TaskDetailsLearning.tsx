import { useMemo } from "react";
import { ITask } from "../dataServices/useTasks";
import { UserField } from "./userField";
import useLearningTask, { SupportedMediaType } from "../dataServices/useLearningTask";
import css from "./TaskDetailsLearning.module.css";

const MediaTypeComponentMap: Record<SupportedMediaType, React.FC<{ mediaUrl: string }>> = {
    [SupportedMediaType.PDF]: ({ mediaUrl }: { mediaUrl: string }) => <iframe src={mediaUrl} width="100%" height="600px" title="PDF Document Viewer"></iframe>,
    [SupportedMediaType.LINK]: ({ mediaUrl }: { mediaUrl: string }) => (
        <a href={mediaUrl} target="_blank" rel="noopener noreferrer">
            {mediaUrl}
        </a>
    ),
    [SupportedMediaType.IMAGE]: ({ mediaUrl }: { mediaUrl: string }) => <img src={mediaUrl} alt="Media content" className={css.mediaField} />,
    [SupportedMediaType.VIDEO]: ({ mediaUrl }: { mediaUrl: string }) => (
        <video src={mediaUrl} controls className={css.mediaField}>
            <track kind="captions" src="" label="English captions" />
        </video>
    ),
    [SupportedMediaType.NONE]: () => <span>No media available</span>,
};

interface ITaskDetailsLearningProps {
    task: ITask;
}

// eslint-disable-next-line react/prop-types
export const TaskDetailsLearning: React.FC<ITaskDetailsLearningProps> = ({ task }) => {
    const { learningTask, isLoading, metadata } = useLearningTask(task);

    const renderMediaContent = useMemo(() => {
        if (!learningTask?.mediaUrl) return null;
        const MediaComponent = MediaTypeComponentMap[learningTask.mediaType];
        return MediaComponent ? <MediaComponent mediaUrl={learningTask?.mediaUrl} /> : null;
    }, [learningTask?.mediaUrl, learningTask?.mediaType]);

    if (isLoading || !learningTask || !metadata) {
        return <div>Loading...</div>;
    }

    console.log(learningTask.mediaUrl);

    return (
        <div className={css.taskCard}>
            <h2>{metadata.displayName}</h2>
            <span>{metadata.description}</span>
            <h3>{learningTask.osdkLearningTask.title}</h3>
            <div className={css.field}>
                <strong>{metadata?.properties.description.displayName} </strong>
                <span>{learningTask.osdkLearningTask.description}</span>
            </div>
            <div className={css.field}>
                <strong>{metadata?.properties.status.displayName} </strong>
                <span>{learningTask.osdkLearningTask.status}</span>
            </div>
            <div className={css.field}>
                <strong>{metadata?.properties.startDate.displayName} </strong>
                <span>{learningTask.osdkLearningTask.startDate}</span>
            </div>
            <div className={css.field}>
                <strong>{metadata?.properties.dueDate.displayName} </strong>
                <span>{learningTask.osdkLearningTask.dueDate}</span>
            </div>
            <div className={css.field}>
                <strong>{metadata?.properties.assignedTo.displayName} </strong>
                <UserField user={learningTask.assignedTo} />
            </div>
            <div className={css.field}>
                <strong>{metadata?.properties.createdBy.displayName} </strong>
                <UserField user={learningTask.createdBy} />
            </div>
            <div className={css.field}>
                {renderMediaContent}
            </div>
        </div>
    );
};
import { useEffect, useMemo } from "react";
import { EventType } from "../userAnalytics/userAnalyticsTypes";
import useAnalytics from "../userAnalytics/useAnalytics";
import { ITask } from "../dataServices/useTasks";
import { UserField } from "./userField";
import useLearningTask, { MediaType } from "../dataServices/useLearningTask";
import css from "./TaskDetailsLearning.module.css";

const MediaTypeComponentMap: Record<MediaType, React.FC<{ mediaUrl: string }>> = {
    [MediaType.PDF]: ({ mediaUrl }: { mediaUrl: string }) => <iframe src={mediaUrl} width="100%" height="600px"></iframe>,
    [MediaType.LINK]: ({ mediaUrl }: { mediaUrl: string }) => (
        <a href={mediaUrl} target="_blank" rel="noopener noreferrer">
            {mediaUrl}
        </a>
    ),
    [MediaType.IMAGE]: ({ mediaUrl }: { mediaUrl: string }) => <img src={mediaUrl} alt="Media content" className={css.mediaField} />,
    [MediaType.VIDEO]: ({ mediaUrl }: { mediaUrl: string }) => <video src={mediaUrl} controls className={css.mediaField} />,
    [MediaType.NONE]: () => <span>No media available</span>,
};

export const TaskDetailsLearning: React.FC<{ task: ITask }> = ({ task }) => {
    const { logEvent } = useAnalytics();
    const { learningTask, isLoading, metadata } = useLearningTask(task);

    useEffect(() => {
        logEvent(EventType.LearningTaskViewed, `Task ${learningTask?.osdkLearningTask.$primaryKey} viewed`);
    }, [learningTask?.osdkLearningTask.$primaryKey, logEvent]);

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
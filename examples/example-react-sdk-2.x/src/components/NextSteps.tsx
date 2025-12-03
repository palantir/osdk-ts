import React from "react";
import css from "./NextSteps.module.css";

const STEPS: INextStep[] = [
  {
    icon: "tag",
    title: "Deploy your application",
    subtitle:
      "Generate a new tag version of your repository to deploy a new version of your application.",
  },
];

function NextSteps(): React.ReactElement {
  return (
    <div className={css.nextSteps}>
      <h5 className={css.nextStepsHeader}>Next steps</h5>
      {STEPS.map((step) => (
        <NextStep
          key={step.title}
          icon={step.icon}
          title={step.title}
          subtitle={step.subtitle}
        />
      ))}
    </div>
  );
}

interface INextStep {
  icon: string;
  title: string;
  subtitle: string;
}

function NextStep({
  icon,
  title,
  subtitle,
}: INextStep): React.ReactElement<INextStep> {
  return (
    <div className={css.nextStep}>
      <img src={`/${icon}.svg`} className={css.icon} alt={icon} />
      <div className={css.nextStepContent}>
        <h6 className={css.title}>{title}</h6>
        <div className={css.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

export default NextSteps;

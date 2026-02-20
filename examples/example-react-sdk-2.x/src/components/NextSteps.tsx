import tag from "/tag.svg";

import React from "react";
import css from "./NextSteps.module.css";

const STEPS: INextStep[] = [
  {
    icon: tag,
    title: "Deploy your application",
    subtitle: (
      <span>
        To deploy a new version of your application, tag a new version of your
        repository or use the command line to run{" "}
        <code className={css.code}>npx @osdk/cli@latest site deploy</code>.{" "}
        <a
          className={css.learnMore}
          href="https://www.npmjs.com/package/@osdk/cli"
          target="_blank"
          rel="noreferrer"
        >
          Learn more.
        </a>
      </span>
    ),
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
  subtitle: React.ReactElement;
}

function NextStep({
  icon,
  title,
  subtitle,
}: INextStep): React.ReactElement {
  return (
    <div className={css.nextStep}>
      <img src={icon} className={css.icon} alt="Next step icon" />
      <div className={css.nextStepContent}>
        <h6 className={css.title}>{title}</h6>
        <div className={css.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
}

export default NextSteps;

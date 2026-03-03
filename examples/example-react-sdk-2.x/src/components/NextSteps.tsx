import { Code, H5, H6, Icon, Link, Text } from "@blueprintjs/core";
import { type IconName } from "@blueprintjs/icons";
import React from "react";
import css from "./NextSteps.module.css";

const STEPS: INextStep[] = [
  {
    icon: "tag",
    title: "Deploy your application",
    subtitle: (
      <span>
        To deploy a new version of your application, tag a new version of your
        repository or use the command line to run{" "}
        <Code>npx @osdk/cli@latest site deploy</Code>.{" "}
        <Link
          href="https://www.npmjs.com/package/@osdk/cli"
          target="_blank"
          rel="noreferrer"
        >
          Learn more.
        </Link>
      </span>
    ),
  },
];

function NextSteps(): React.ReactElement {
  return (
    <div className={css.nextSteps}>
      <H5 className={css.nextStepsHeader}>Next steps</H5>
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
  icon: IconName;
  title: string;
  subtitle: React.ReactElement;
}

function NextStep({ icon, title, subtitle }: INextStep): React.ReactElement {
  return (
    <div className={css.nextStep}>
      <div className={css.icon}>
        <Icon icon={icon} aria-label={icon} />
      </div>
      <div className={css.nextStepContent}>
        <H6 className={css.title}>{title}</H6>
        <Text className={css.subtitle}>{subtitle}</Text>
      </div>
    </div>
  );
}

export default NextSteps;

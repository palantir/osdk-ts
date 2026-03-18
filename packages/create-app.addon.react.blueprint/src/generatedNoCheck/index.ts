export const files: Map<string, {type: 'base64', body: string} | {type: 'raw', body: string}> = new Map([
["src/Home.module.css", {
  "type": "base64",
  "body": "LmhvbWUgewogIGRpc3BsYXk6IGZsZXg7CiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICBnYXA6IGNhbGModmFyKC0tYnAtc3VyZmFjZS1zcGFjaW5nKSAqIDE1KTsKICBtYXgtd2lkdGg6IDgwMHB4OwogIHdpZHRoOiAxMDAlOwp9Cg=="
}],
["src/components/Header.module.css", {
  "type": "base64",
  "body": "LmhlYWRlckNvbnRhaW5lciB7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgZ2FwOiBjYWxjKHZhcigtLWJwLXN1cmZhY2Utc3BhY2luZykgKiAxMCk7Cn0KCi5oZWFkZXIgewogIG1hcmdpbjogMDsKICB0ZXh0LWFsaWduOiBjZW50ZXI7Cn0KCi5sb2dvcyB7CiAgZGlzcGxheTogZmxleDsKICBnYXA6IGNhbGModmFyKC0tYnAtc3VyZmFjZS1zcGFjaW5nKSAqIDgpOwp9CgoubG9nbyB7CiAgaGVpZ2h0OiA0OHB4OwogIHRyYW5zaXRpb246IGZpbHRlciAzMDBtczsKICB3aWxsLWNoYW5nZTogZmlsdGVyOwp9CgoubG9nbzpob3ZlciB7CiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMmVtICM2NDZjZmZhYSk7Cn0K"
}],
["src/components/Header.tsx", { type: "raw",  body: `import palantir from "/palantir.svg";
import react from "/react.svg";

import { H2, Link } from "@blueprintjs/core";
import React from "react";
import css from "./Header.module.css";

function Header(): React.ReactElement {
  return (
    <header className={css.headerContainer}>
      <div className={css.logos}>
        <Link
          href="https://www.palantir.com/docs/foundry/ontology-sdk/overview/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={palantir} className={css.logo} alt="Palantir logo" />
        </Link>
        <Link href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={react} className={css.logo} alt="React logo" />
        </Link>
      </div>
      <H2 className={css.header}>Build your React application with Foundry!</H2>
    </header>
  );
}

export default Header;
`}],
["src/components/NextSteps.module.css", {
  "type": "base64",
  "body": "Lm5leHRTdGVwcyB7CiAgZGlzcGxheTogZmxleDsKICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogIGdhcDogY2FsYyh2YXIoLS1icC1zdXJmYWNlLXNwYWNpbmcpICogNCk7Cn0KCi5uZXh0U3RlcHNIZWFkZXIgewogIGFsaWduLXNlbGY6IGJhc2VsaW5lOwogIGZvbnQtd2VpZ2h0OiA2MDA7CiAgbWFyZ2luOiAwOwp9CgoubmV4dFN0ZXAgewogIGJvcmRlcjogMXB4IHNvbGlkICMxMTE0MTgyNjsKICBib3JkZXItcmFkaXVzOiB2YXIoLS1icC1zdXJmYWNlLWJvcmRlci1yYWRpdXMpOwogIGRpc3BsYXk6IGZsZXg7CiAgZ2FwOiBjYWxjKHZhcigtLWJwLXN1cmZhY2Utc3BhY2luZykgKiAzKTsKICBwYWRkaW5nOiBjYWxjKHZhcigtLWJwLXN1cmZhY2Utc3BhY2luZykgKiA0KTsKfQoKLm5leHRTdGVwQ29udGVudCB7CiAgZGlzcGxheTogZmxleDsKICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogIGdhcDogdmFyKC0tYnAtc3VyZmFjZS1zcGFjaW5nKTsKICB0ZXh0LWFsaWduOiBsZWZ0Owp9CgoudGl0bGUgewogIGZvbnQtd2VpZ2h0OiA2MDA7CiAgbWFyZ2luOiAwOwp9Cgouc3VidGl0bGUgewogIGNvbG9yOiB2YXIoLS1icC10eXBvZ3JhcGh5LWNvbG9yLW11dGVkKTsKfQoKLmljb24gewogIGJhY2tncm91bmQtY29sb3I6IG9rbGNoKGZyb20gdmFyKC0tYnAtcGFsZXR0ZS1ncmF5LTMpIGwgYyBoIC8gMTUlKTsKICBib3JkZXI6IDFweCBzb2xpZCBva2xjaChmcm9tIHZhcigtLWJwLXBhbGV0dGUtYmxhY2spIGwgYyBoIC8gMTAlKTsKICBib3JkZXItcmFkaXVzOiAzMHB4OwogIGNvbG9yOiB2YXIoLS1icC10eXBvZ3JhcGh5LWNvbG9yLW11dGVkKTsKICBoZWlnaHQ6IDM0cHg7CiAgcGFkZGluZzogY2FsYyh2YXIoLS1icC1zdXJmYWNlLXNwYWNpbmcpICogMik7Cn0K"
}],
["src/components/NextSteps.tsx.hbs", { type: "raw",  body: `import { Code, H5, H6, Icon, Link, Text } from "@blueprintjs/core";
import { type IconName } from "@blueprintjs/icons";
import React from "react";
import css from "./NextSteps.module.css";

const STEPS: INextStep[] = [
  {{^if osdkPackage}}
  {
    icon: "cube",
    title: "Configure your Ontology and Platform SDKs",
    subtitle: (
      <span>
        Use the Ontology SDK to interact with your Ontology and the Platform SDK
        to access Foundry APIs. Configure your SDKs from the{" "}
        <strong>Ontology SDK</strong> and <strong>Platform SDK</strong> tabs in
        Developer Console.
      </span>
    ),
  },
  {{/if}}
  {{^if applicationUrl}}
  {
    icon: "cloud",
    title: "Request a subdomain to host your application with Foundry",
    subtitle: (
      <span>
        Register a subdomain for your website on the{" "}
        <strong>Website hosting</strong> tab in Developer Console. Then, add
        this subdomain to your redirect URLs on the{" "}
        <strong>OAuth & scopes</strong> tab and update your{" "}
        <Code>.env.production</Code> file.
      </span>
    ),
  },
  {{/if}}
  {
    icon: "rocket-slant",
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
`}],
["src/components/Osdk.module.osdk.css", {
  "type": "base64",
  "body": "Lm9zZGsgewogIGFsaWduLXNlbGY6IGJhc2VsaW5lOwogIGRpc3BsYXk6IGZsZXg7CiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogIHdpZHRoOiA4MDBweDsKfQo="
}],
["src/components/Osdk.tsx.osdk.hbs", { type: "raw",  body: `import { Button, Icon, Tag } from "@blueprintjs/core";
import React from "react";
import css from "./Osdk.module.css";

const DOCUMENTATION_URL =
  "{{foundryUrl}}/workspace/developer-console/app/{{application}}/docs/guide/loading-data?language=typescript";

function Osdk(): React.ReactElement {
  return (
    <div className={css.osdk}>
      <div>
        <span>OSDK: </span>
        <Tag minimal={true}>{{osdkPackage}}</Tag>
      </div>
      <Button
        onClick={() => window.open(DOCUMENTATION_URL, "_blank", "noreferrer")}
        variant="minimal"
        icon={<Icon icon="book" aria-label="Book icon"></Icon>}
      >
        View documentation
      </Button>
    </div>
  );
}

export default Osdk;
`}],
["src/index.css", {
  "type": "base64",
  "body": "LyogQmx1ZXByaW50SlMgKi8KQGltcG9ydCAibm9ybWFsaXplLmNzcyI7CkBpbXBvcnQgIkBibHVlcHJpbnRqcy9jb3JlL2xpYi9jc3MvYmx1ZXByaW50LmNzcyI7CkBpbXBvcnQgIkBibHVlcHJpbnRqcy9pY29ucy9saWIvY3NzL2JsdWVwcmludC1pY29ucy5jc3MiOwoKOnJvb3QgewogIGZvbnQtZmFtaWx5OgogICAgIlNvdXJjZSBTYW5zIFBybyIsIHN5c3RlbS11aSwgQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOwogIGZvbnQtc3ludGhlc2lzOiBub25lOwogIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7CiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7CiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsKfQoKI3Jvb3QtY29udGFpbmVyIHsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIGRpc3BsYXk6IGZsZXg7CiAgZmxleDogMTsKfQoKI3Jvb3QgewogIG1hcmdpbjogMCBhdXRvOwogIG1heC13aWR0aDogMTI4MHB4OwogIHBhZGRpbmc6IGNhbGModmFyKC0tYnAtc3VyZmFjZS1zcGFjaW5nKSAqIDgpOwp9Cgpib2R5IHsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgbWFyZ2luOiAwOwogIG1pbi1oZWlnaHQ6IDEwMHZoOwp9Cg=="
}],
]);
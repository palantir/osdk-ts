import{j as r}from"./iframe-BdKsMQww.js";import{O as b}from"./object-table-BkuIvgs3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BwdCGXZG.js";import{u as g}from"./useOsdkClient-DZdPds6c.js";import"./preload-helper-MlpURx7u.js";import"./Table-COLO6x9d.js";import"./index-DKUuG3z9.js";import"./Dialog-BZinWXyV.js";import"./cross-DNiGESUx.js";import"./svgIconContainer-BnCWnnko.js";import"./useBaseUiId-DO0eFKXX.js";import"./InternalBackdrop-DjojD6Rk.js";import"./composite-BNox4Mzc.js";import"./index-EXOzxBPi.js";import"./index-DYRORlje.js";import"./index-DhxjQLte.js";import"./useEventCallback--olNvQB0.js";import"./SkeletonBar-MNZpFCNa.js";import"./LoadingCell-x5JMX0sy.js";import"./ColumnConfigDialog-C4xdKt-Z.js";import"./DraggableList-DXLCT-Tu.js";import"./search-PSF1rGs2.js";import"./Input-D7CFUCMW.js";import"./useControlled-7KbTYIa_.js";import"./Button-CcSyVXzr.js";import"./small-cross-BxFuyZcX.js";import"./ActionButton-DsqqImyB.js";import"./Checkbox-C7TXRP0z.js";import"./useValueChanged-D6y7mlr9.js";import"./CollapsiblePanel-DCh2QXjz.js";import"./MultiColumnSortDialog-B3qpBvBx.js";import"./MenuTrigger-I9hrZ2IK.js";import"./CompositeItem-e2FL5qAU.js";import"./ToolbarRootContext-CdO1SR-V.js";import"./getDisabledMountTransitionStyles-TgKlIubu.js";import"./getPseudoElementBounds-D4Wbrwbn.js";import"./chevron-down-Bw8Fchsf.js";import"./index-BbdEClvW.js";import"./error-Nv9n4Hjz.js";import"./BaseCbacBanner-C4MJE6CF.js";import"./makeExternalStore-BoNEUCBG.js";import"./Tooltip-BTAbXJfa.js";import"./PopoverPopup-B2wOVFFv.js";import"./debounce-BNPeqOUu.js";import"./tick-B_ziR0EA.js";import"./DropdownField-B3O32GOa.js";import"./isEqual-DRWZbCfX.js";import"./withOsdkMetrics-C12liwOp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};

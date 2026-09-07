import{j as r}from"./iframe-BRcSfazb.js";import{O as b}from"./object-table-CveJ5maX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-2HiteEGp.js";import{u as g}from"./useOsdkClient-B3E6OW-I.js";import"./preload-helper-BThzV-GG.js";import"./Table-DBKYzQPw.js";import"./index-DySxQINm.js";import"./Dialog-BfW2k7mq.js";import"./cross-CzKOFjwP.js";import"./svgIconContainer-DFKBkWeR.js";import"./useBaseUiId-BZvlmCQ4.js";import"./InternalBackdrop-CPNW_N8S.js";import"./composite-AJQkq8yV.js";import"./index-Bj7tQvH9.js";import"./index-C16WPibF.js";import"./index-Cvqq4wj-.js";import"./useEventCallback-yfWQdhbU.js";import"./SkeletonBar-CBiF5c3x.js";import"./LoadingCell-V9JYgXpH.js";import"./ColumnConfigDialog-8s7pSmnr.js";import"./DraggableList-_03NYpNz.js";import"./search-BmQN2RwS.js";import"./Input-Dlwmy4kD.js";import"./useControlled-DVF1OsTI.js";import"./isEqual-CoVSWq5v.js";import"./isObject-CPVVSD5k.js";import"./Button-B_Mp1Nhv.js";import"./ActionButton-CAEW5VU9.js";import"./Checkbox-Bp57gTcy.js";import"./useValueChanged-Cf_8cs-A.js";import"./CollapsiblePanel-G_UPH1_-.js";import"./MultiColumnSortDialog-TN06HLk6.js";import"./MenuTrigger-mo6qcJt4.js";import"./CompositeItem-BZBUwPb5.js";import"./ToolbarRootContext-nXfAGVO2.js";import"./getDisabledMountTransitionStyles-CvYowRBO.js";import"./getPseudoElementBounds-CpVepoIM.js";import"./chevron-down-g3mf6yyW.js";import"./index-C7jMOB_Z.js";import"./error-CmdKI6uR.js";import"./BaseCbacBanner-VAO8jA4f.js";import"./makeExternalStore-B5f_GCis.js";import"./Tooltip-C0DB0uEe.js";import"./PopoverPopup-C_mRv8Tw.js";import"./toNumber-BrTFY869.js";import"./tick-D9nOZ42t.js";import"./DropdownField-BfzIcpjx.js";import"./withOsdkMetrics-jypHlMPF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

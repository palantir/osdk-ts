import{j as r}from"./iframe-DnXG6ria.js";import{O as b}from"./object-table-KFsg62x-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Jj9Fb50o.js";import{u as g}from"./useOsdkClient-BYVbAAl7.js";import"./preload-helper-DdcgdAiM.js";import"./Table-CQJ4vgR6.js";import"./index-DxGDEKEE.js";import"./Dialog-CNCtnPRX.js";import"./cross-DGHgZ4N6.js";import"./svgIconContainer-ChS4vANK.js";import"./useBaseUiId-SDlMWfrq.js";import"./InternalBackdrop-BQ-7_gxa.js";import"./composite-BEEpir5s.js";import"./index-DxHtJywa.js";import"./index-BqFzb3S3.js";import"./index-BzoiIP9u.js";import"./useEventCallback-DjluW_k9.js";import"./SkeletonBar-Dwni2nXR.js";import"./LoadingCell-Bn_yeQJc.js";import"./ColumnConfigDialog-DlSyRhLb.js";import"./DraggableList-CbZ-0Bi-.js";import"./search-CeZhHxk0.js";import"./Input-Bl1_npZH.js";import"./useControlled-r9d6OnMX.js";import"./isEqual-gAaIwKbo.js";import"./isObject-A2Q3YumP.js";import"./Button-cT8XGKmn.js";import"./ActionButton-w_6XSUcW.js";import"./Checkbox-CD6f-efu.js";import"./useValueChanged-DPra_eNP.js";import"./CollapsiblePanel-BiYr8rym.js";import"./MultiColumnSortDialog-CEZrlD_o.js";import"./MenuTrigger-CWLeW0Na.js";import"./CompositeItem-CIThtc7F.js";import"./ToolbarRootContext-Z4gE_V_n.js";import"./getDisabledMountTransitionStyles-9qXvSGVO.js";import"./getPseudoElementBounds-BZ3Q47XE.js";import"./chevron-down-DxHRdvtD.js";import"./index-CYr1UXPi.js";import"./error-BVlgT8A_.js";import"./BaseCbacBanner-CRDypnj8.js";import"./makeExternalStore-DUeGYV2j.js";import"./Tooltip-D-bOi1It.js";import"./PopoverPopup-_C67I76H.js";import"./toNumber-BGtg9XJ9.js";import"./tick-DafkJj6Q.js";import"./DropdownField-BmAVXTfo.js";import"./withOsdkMetrics-k-U64tRw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

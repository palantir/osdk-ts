import{j as r}from"./iframe-C3GSLy5o.js";import{O as b}from"./object-table-C4RtD8RL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DrPOGPqV.js";import{u as g}from"./useOsdkClient-C6Bijc8m.js";import"./preload-helper-D1pMQ95h.js";import"./Table-CkKtRkcj.js";import"./index-BqbG7XLm.js";import"./Dialog-QyPTSiVh.js";import"./cross-dj-R22cu.js";import"./svgIconContainer-F6eoLrGz.js";import"./useBaseUiId-BAyO3Mf6.js";import"./InternalBackdrop-Dum2xeez.js";import"./composite-BVI_0hxc.js";import"./index-BwMTOFIg.js";import"./index-DXO-Swuq.js";import"./index-CZROecO1.js";import"./useEventCallback-BJ1Px1w8.js";import"./SkeletonBar-CVOuSg9f.js";import"./LoadingCell-FBheXDIZ.js";import"./ColumnConfigDialog-B7wNvZn4.js";import"./DraggableList-Bt8Io2mn.js";import"./search-DVQaImB8.js";import"./Input-C6r5AvcX.js";import"./useControlled-Byp-7XUM.js";import"./Button-BYai770H.js";import"./small-cross-DrCyLNki.js";import"./ActionButton-DhwSIxab.js";import"./Checkbox-s9kARS31.js";import"./useValueChanged-CnNP0I2h.js";import"./CollapsiblePanel-BqBPvrl-.js";import"./MultiColumnSortDialog-BpbO_ybu.js";import"./MenuTrigger-C0ONJiNd.js";import"./CompositeItem-BdOQd8fF.js";import"./ToolbarRootContext-DHSDX_M4.js";import"./getDisabledMountTransitionStyles-CmNfXk7f.js";import"./getPseudoElementBounds-DXbT67tB.js";import"./chevron-down-CZCskiqb.js";import"./index-bCW6YcNg.js";import"./error-73rgwKrP.js";import"./BaseCbacBanner-CSAoPOE1.js";import"./makeExternalStore-BkjVxrjL.js";import"./Tooltip-BESMOsqJ.js";import"./isObject-VV2I263M.js";import"./debounce-BTUnznPP.js";import"./tick-J5BevPob.js";import"./DropdownField-M-86bao8.js";import"./isEqual-C87bStg5.js";import"./_baseIsEqual-DQRLufDU.js";import"./withOsdkMetrics-BcmXRm6y.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};

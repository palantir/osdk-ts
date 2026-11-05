import{j as r}from"./iframe-BPE8geBj.js";import{O as b}from"./object-table-BUSbSmjJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ChbaIzLt.js";import{u as g}from"./useOsdkClient-BdzCkRzQ.js";import"./preload-helper-fxHDaWWz.js";import"./Table-BEgmw1vD.js";import"./index-BSCIcc2m.js";import"./Dialog-BDaN3rPU.js";import"./cross-BmJ5axqh.js";import"./svgIconContainer-Ch3CgPVe.js";import"./useBaseUiId-S4ycFjYQ.js";import"./InternalBackdrop-Dj4dXGlo.js";import"./composite-CvIKG9hN.js";import"./index-BOd13PhS.js";import"./index-D5QkM80p.js";import"./index-NexOwd4z.js";import"./useEventCallback-BGn_PaqW.js";import"./SkeletonBar-D2dwSU1W.js";import"./LoadingCell-D_WdiVbu.js";import"./ColumnConfigDialog-vVtlFWXW.js";import"./DraggableList-CSB3L_Q1.js";import"./search-D5bB9k-q.js";import"./Input-RElBojM0.js";import"./useControlled-C86FBi_K.js";import"./Button-DB75dhIR.js";import"./small-cross-BIQb8x3u.js";import"./ActionButton-BhhH_yCm.js";import"./Checkbox-BW3oz--1.js";import"./useValueChanged-CvoSBU76.js";import"./CollapsiblePanel-Dsa02cUE.js";import"./MultiColumnSortDialog-BpXI002I.js";import"./MenuTrigger-Dr4S107K.js";import"./CompositeItem-DoL9OBNh.js";import"./ToolbarRootContext-Cyb9Wm9w.js";import"./getDisabledMountTransitionStyles-BiO89QFU.js";import"./getPseudoElementBounds-bxwDp6fo.js";import"./chevron-down-CqglXqG-.js";import"./index-Da6xMdfJ.js";import"./error-BXvIUBOQ.js";import"./BaseCbacBanner-Bkw0yDve.js";import"./makeExternalStore-Bb0lbQEV.js";import"./Tooltip-CXKx2My9.js";import"./isObject-CIH_inO5.js";import"./debounce-CqZnwFp7.js";import"./tick-BSHV8J2-.js";import"./DropdownField-D2YaoN7_.js";import"./isEqual-CHAxf8OA.js";import"./_baseIsEqual-B-Mt0Kfj.js";import"./withOsdkMetrics-BtOTCRxI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

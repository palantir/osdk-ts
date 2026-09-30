import{j as r}from"./iframe-mIKFVahX.js";import{O as b}from"./object-table-hPMOmqJR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CaxnGVcn.js";import{u as g}from"./useOsdkClient-Dtz0cA44.js";import"./preload-helper-DQmtxJ1O.js";import"./Table-Brx6eFBd.js";import"./index-eiO_d1ck.js";import"./Dialog-BSESTF6k.js";import"./cross-UeuWwKaz.js";import"./svgIconContainer-CQHualxO.js";import"./useBaseUiId-CgEi7PVt.js";import"./InternalBackdrop-Cdrrn7aO.js";import"./composite-D6bfVeDu.js";import"./index-Dr8o4W-0.js";import"./index-CRsq_c05.js";import"./index-Pl8i-n3y.js";import"./useEventCallback-ByOT_zkS.js";import"./SkeletonBar-Uz0c5MYh.js";import"./LoadingCell-DXFzSvcB.js";import"./ColumnConfigDialog-lI0l1iiB.js";import"./DraggableList-CdQWcTkz.js";import"./search-BUcn5JQ5.js";import"./Input-C9PDTVtY.js";import"./useControlled-XyEjnDFJ.js";import"./Button-D5NXSYW3.js";import"./small-cross-CuoPPjey.js";import"./ActionButton-D0IxPZVx.js";import"./Checkbox-CxqJmRtZ.js";import"./useValueChanged-BD4JYKkh.js";import"./CollapsiblePanel--mOZhS6t.js";import"./MultiColumnSortDialog-CO8YBk6o.js";import"./MenuTrigger-Cs75RSzs.js";import"./CompositeItem-CiILW6_Z.js";import"./ToolbarRootContext-xG4QpLCn.js";import"./getDisabledMountTransitionStyles-BBJk5-bd.js";import"./getPseudoElementBounds-BHyVtr05.js";import"./chevron-down-BpXaL00s.js";import"./index-ug1vsAFu.js";import"./error-Jm4hVuYR.js";import"./BaseCbacBanner-C-c4cvyr.js";import"./makeExternalStore-BtEilyBA.js";import"./Tooltip-DaMgYhHZ.js";import"./PopoverPopup-DVmf3a0F.js";import"./debounce-ahFHSZsE.js";import"./tick-D0ywqUCl.js";import"./DropdownField-DRer5ayG.js";import"./isEqual-k-eFjD6c.js";import"./withOsdkMetrics-f8AFQ5tL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

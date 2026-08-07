import{j as r}from"./iframe-C4-lP8MT.js";import{O as b}from"./object-table-q7iifnDS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dn7Igo9L.js";import{u as g}from"./useOsdkClient-BHP9oIf7.js";import"./preload-helper-CLU8VynA.js";import"./Table-Bh3nxQAR.js";import"./index-BPrqSg8L.js";import"./Dialog-HuTkQ0Yv.js";import"./cross-C5IhJG8w.js";import"./svgIconContainer-C35V9iJM.js";import"./useBaseUiId-BA37nhWP.js";import"./InternalBackdrop-Czrv2a3X.js";import"./composite-C3w6zzv8.js";import"./index-Durq-W9B.js";import"./index-0ek5BBKP.js";import"./index-DnBDnb42.js";import"./useEventCallback-B-ZzyaSM.js";import"./SkeletonBar-BzAjKV_r.js";import"./LoadingCell-CAckMhZq.js";import"./ColumnConfigDialog-DlcSbtq3.js";import"./DraggableList-CKn1w3jR.js";import"./search-DXJOhDBp.js";import"./Input-Cq_NK47B.js";import"./useControlled-BXZQNRVM.js";import"./isEqual-CyH4xiTJ.js";import"./isObject-OdYax4RL.js";import"./Button-HQnEKdTM.js";import"./ActionButton-DPjyIH8b.js";import"./Checkbox-CIlmLHbe.js";import"./useValueChanged-BqdWWPTB.js";import"./CollapsiblePanel-Bn6kNsx8.js";import"./MultiColumnSortDialog-DYkl2iU7.js";import"./MenuTrigger-CY__s7GI.js";import"./CompositeItem-jotECSdG.js";import"./ToolbarRootContext-D7LXR6yD.js";import"./getDisabledMountTransitionStyles-BVfGpSsZ.js";import"./getPseudoElementBounds-BOMJwAxf.js";import"./chevron-down-DN58DXsa.js";import"./index-C2Jw7BZY.js";import"./error-sldn-yGv.js";import"./BaseCbacBanner-ifqN0fs5.js";import"./makeExternalStore-MEf7s0X9.js";import"./Tooltip-DUNzpEu4.js";import"./PopoverPopup-CeDc1J2y.js";import"./toNumber-BPSz6AWD.js";import"./tick-DuzzvOOG.js";import"./DropdownField-BcvP-9_S.js";import"./withOsdkMetrics-DpO8t0Tu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

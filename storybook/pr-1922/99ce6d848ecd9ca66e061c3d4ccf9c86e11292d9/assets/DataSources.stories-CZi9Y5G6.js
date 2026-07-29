import{j as r}from"./iframe-Cit8dWXp.js";import{O as b}from"./object-table-CLprNm-d.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CNHAzsu3.js";import{u as g}from"./useOsdkClient-stsJawmz.js";import"./preload-helper-CCWrzc8D.js";import"./Table-BVpt2fUo.js";import"./index-DjKRvWyY.js";import"./Dialog-Be2F3-FV.js";import"./cross-gQNsGHqK.js";import"./svgIconContainer-CnhTjGYI.js";import"./useBaseUiId-DYvasBbv.js";import"./InternalBackdrop-CHY-7UBX.js";import"./composite-BgoZwE_5.js";import"./index-keZnzdM5.js";import"./index-BWFrdUWl.js";import"./index-BVRufQb7.js";import"./useEventCallback-C9HAZCRG.js";import"./SkeletonBar-u4-76qTo.js";import"./LoadingCell-nBjE1ndy.js";import"./ColumnConfigDialog-BWi2X-eS.js";import"./DraggableList-D2uNEbk7.js";import"./search-BOSFG60z.js";import"./Input-D4pO2QO0.js";import"./useControlled-D1zi4BZe.js";import"./isEqual-CFsLy166.js";import"./isObject-DIwas83d.js";import"./Button-Dq2cEP2I.js";import"./ActionButton-4Aw8VsKu.js";import"./Checkbox-DHQAVcVh.js";import"./useValueChanged-nr9Fn3vC.js";import"./CollapsiblePanel-ChQIa99W.js";import"./MultiColumnSortDialog-C2OT4-v6.js";import"./MenuTrigger-uIFIt69N.js";import"./CompositeItem-BbrpyRMV.js";import"./ToolbarRootContext-N4iCvs8E.js";import"./getDisabledMountTransitionStyles-Cs5mf5KU.js";import"./getPseudoElementBounds-BK_ei7WU.js";import"./chevron-down-grDpNC0P.js";import"./index-DTPUrDLg.js";import"./error-CsqJDmzd.js";import"./BaseCbacBanner-BlBv9MrF.js";import"./makeExternalStore-DCWmOVk3.js";import"./Tooltip-DG1w5Z16.js";import"./PopoverPopup-BuX_5jbW.js";import"./toNumber-D-wCb8lw.js";import"./tick-Cn-ugVOT.js";import"./DropdownField-X_4V0sjX.js";import"./withOsdkMetrics-DjoWeLgm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

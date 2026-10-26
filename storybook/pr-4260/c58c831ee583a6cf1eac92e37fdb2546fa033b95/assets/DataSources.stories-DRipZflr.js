import{j as r}from"./iframe-BC4WuJqp.js";import{O as b}from"./object-table-oOquejpx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DqpUxJ1m.js";import{u as g}from"./useOsdkClient-BzNLqqlE.js";import"./preload-helper-BAlIbckl.js";import"./Table-154Fyxjs.js";import"./index-B64lxDBz.js";import"./Dialog-k0Ije6H7.js";import"./cross-6e8uCbEq.js";import"./svgIconContainer-CtvZ0OgY.js";import"./useBaseUiId-BVMrMyXc.js";import"./InternalBackdrop-BZc_LEAU.js";import"./composite-DeP2Ikxo.js";import"./index-BUFQlA2h.js";import"./index-eKZRvGXM.js";import"./index-BhHb9YgN.js";import"./useEventCallback-Ds74rybS.js";import"./SkeletonBar-DqiJ0KmM.js";import"./LoadingCell-ClF_w2Fd.js";import"./ColumnConfigDialog-vjRm2gUc.js";import"./DraggableList-CzeeMf1J.js";import"./search-CZ3TYav-.js";import"./Input-CzEl6QGc.js";import"./useControlled-Bs5VhBCJ.js";import"./Button-DHdZg685.js";import"./small-cross-CZLtYA5e.js";import"./ActionButton-C8vwMbni.js";import"./Checkbox-B3I0XikT.js";import"./useValueChanged-CxYsqBM1.js";import"./CollapsiblePanel-BoiujEbx.js";import"./MultiColumnSortDialog-Bsaqrv5P.js";import"./MenuTrigger-CD0FBspH.js";import"./CompositeItem-B3C6p1hy.js";import"./ToolbarRootContext-c4Ndu606.js";import"./getDisabledMountTransitionStyles-Dtsx70hN.js";import"./getPseudoElementBounds-D1ccQnN_.js";import"./chevron-down-Cl_Af1LQ.js";import"./index-Cd4zCzRN.js";import"./error-GVs8VSV-.js";import"./BaseCbacBanner-DVAbPDy9.js";import"./makeExternalStore-DmNapAQ9.js";import"./Tooltip-vRgEuTXd.js";import"./PopoverPopup-ULbHIXSs.js";import"./debounce-iB-UnFsI.js";import"./tick-vowPK7v2.js";import"./DropdownField-BQyQM-0q.js";import"./isEqual-3vsRtdOf.js";import"./withOsdkMetrics-D1wQc1Iv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

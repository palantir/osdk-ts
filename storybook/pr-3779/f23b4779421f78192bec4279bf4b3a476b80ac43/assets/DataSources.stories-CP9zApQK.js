import{j as r}from"./iframe-BAGpRzfr.js";import{O as b}from"./object-table-CqU5kZAu.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DqFVmka6.js";import{u as g}from"./useOsdkClient-DBaDAOAn.js";import"./preload-helper-Corf789j.js";import"./Table-CVoZnPC3.js";import"./index-Ga7CUyAH.js";import"./Dialog-v_BWNC40.js";import"./cross-CB_xYTlG.js";import"./svgIconContainer-sR-3_vAH.js";import"./useBaseUiId-D8Vsok84.js";import"./InternalBackdrop-CsXznWYg.js";import"./composite-sMcVC9eI.js";import"./index-DxphW_No.js";import"./index-BStldZKH.js";import"./index-B8zqjF6f.js";import"./useEventCallback-CN3xEPfj.js";import"./SkeletonBar-ry2J50tn.js";import"./LoadingCell-B_Ni_uW1.js";import"./ColumnConfigDialog-B_FC0Vsr.js";import"./DraggableList-Co8wUlcQ.js";import"./search-Cim2wrYi.js";import"./Input-CkPyvI53.js";import"./useControlled-DQLWPkxR.js";import"./isEqual-lxxQSSAF.js";import"./isObject-Aecr_3gI.js";import"./Button-B1tJprBL.js";import"./ActionButton-B67UkNc-.js";import"./Checkbox-B-ORbkA4.js";import"./useValueChanged-CRXfWOv_.js";import"./CollapsiblePanel-T8rH8p23.js";import"./MultiColumnSortDialog-BlYuvWVv.js";import"./MenuTrigger-CR4GKjR5.js";import"./CompositeItem-R8h4HgYz.js";import"./ToolbarRootContext-BadKTZpQ.js";import"./getDisabledMountTransitionStyles-DzNx5AQ3.js";import"./getPseudoElementBounds-CA6Nf5Lc.js";import"./chevron-down-CPue3q8s.js";import"./index-BlZ0oTgw.js";import"./error-Cx7q6m8o.js";import"./BaseCbacBanner-DqWX9lKa.js";import"./makeExternalStore-DHV-TvQm.js";import"./Tooltip-spHLb7Fa.js";import"./PopoverPopup-eQZY-6cr.js";import"./toNumber-EdrbkC3p.js";import"./tick-CNjS5V3e.js";import"./DropdownField-59XRT8Mk.js";import"./withOsdkMetrics-DboyezXq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

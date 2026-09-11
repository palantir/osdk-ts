import{j as r}from"./iframe-uvdRxhm4.js";import{O as b}from"./object-table-YhtUStHb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BBHEqEzu.js";import{u as g}from"./useOsdkClient-Bnqq9tvc.js";import"./preload-helper-ByxB1amM.js";import"./Table-vm8xu-PB.js";import"./index-Co_pmQht.js";import"./Dialog-XwGMrHpI.js";import"./cross-CVk2zvc8.js";import"./svgIconContainer-BrEtjUlS.js";import"./useBaseUiId-BxI9rYKQ.js";import"./InternalBackdrop-C6QFY2GA.js";import"./composite-BG1x_r8M.js";import"./index-lOYDDVZK.js";import"./index-3i2S2NsZ.js";import"./index-DTOiGnqw.js";import"./useEventCallback-DXlTwTX-.js";import"./SkeletonBar-BeFEtzbz.js";import"./LoadingCell-By-abxKM.js";import"./ColumnConfigDialog-D5s3A6Au.js";import"./DraggableList-BGMk2AQC.js";import"./search-C_3VgOnT.js";import"./Input-DsPKjuvY.js";import"./useControlled-BumCnOkf.js";import"./Button-Bo9SA5iL.js";import"./small-cross-Ducb2njs.js";import"./ActionButton-C-rT9f5F.js";import"./Checkbox-CE4hiEyB.js";import"./useValueChanged-VS0IrIAr.js";import"./CollapsiblePanel-BnrWUQOr.js";import"./MultiColumnSortDialog-DofKpjRN.js";import"./MenuTrigger-e--GdtbV.js";import"./CompositeItem-B-Ruk_4Z.js";import"./ToolbarRootContext-BdEFWnMH.js";import"./getDisabledMountTransitionStyles-CICtbxTC.js";import"./getPseudoElementBounds-CN21HRRj.js";import"./chevron-down-S5HS9Wt5.js";import"./index-BZDxYY65.js";import"./error-coR5DdC1.js";import"./BaseCbacBanner-DpGzGhEj.js";import"./makeExternalStore-BamzP3ZM.js";import"./Tooltip-BS__xmI7.js";import"./PopoverPopup-CYPwIDjx.js";import"./debounce-CnVQWIJt.js";import"./tick-Bt4QaKZ2.js";import"./DropdownField-B9p3-g28.js";import"./isEqual-CfnJRls-.js";import"./withOsdkMetrics-BYNBs9jS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

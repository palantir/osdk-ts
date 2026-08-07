import{j as r}from"./iframe-C-Y1wjJM.js";import{O as b}from"./object-table-Bx1crVHY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CiUxZCo9.js";import{u as g}from"./useOsdkClient-iiSC6jpx.js";import"./preload-helper-b8tFyS_a.js";import"./Table-Bs_L9rAH.js";import"./index-palz5mvc.js";import"./Dialog-BQTFYCzy.js";import"./cross-jR8r3tka.js";import"./svgIconContainer-W7Zl3wV8.js";import"./useBaseUiId-CxDbvFq6.js";import"./InternalBackdrop-CpOky5e4.js";import"./composite-Cckq2u_r.js";import"./index-DKGXCLet.js";import"./index-C8gKOTgg.js";import"./index-DXnvpcJM.js";import"./useEventCallback-OK9Rben9.js";import"./SkeletonBar-BCZp7KCG.js";import"./LoadingCell-CIQYPwGZ.js";import"./ColumnConfigDialog-CKIq9CIu.js";import"./DraggableList-DPDslf4c.js";import"./search-DvmlRYay.js";import"./Input-m5wtd4u0.js";import"./useControlled-DwK6H2wz.js";import"./small-cross-DyaK5Iv6.js";import"./Button-DH9ybcSz.js";import"./ActionButton-Dge8xgOI.js";import"./Checkbox-Ca1WqOlC.js";import"./useValueChanged-OVehMJjp.js";import"./CollapsiblePanel-ficPLDYv.js";import"./MultiColumnSortDialog-CuAkxUhM.js";import"./MenuTrigger-DXU17Ywv.js";import"./CompositeItem-Uzh8PcHE.js";import"./ToolbarRootContext-BChtM849.js";import"./getDisabledMountTransitionStyles-D-PPI8Oc.js";import"./getPseudoElementBounds-CNui0wgJ.js";import"./chevron-down-BLSDTvXr.js";import"./index-CtCSipxk.js";import"./error-CD-IqKVS.js";import"./BaseCbacBanner-CCTpoFcl.js";import"./makeExternalStore-C-qCxaZl.js";import"./Tooltip-BMZxSNr-.js";import"./PopoverPopup-CiuIO-4c.js";import"./Combobox-BBgoyRWg.js";import"./tick-BY4Wojmn.js";import"./DropdownField-BDm2jd-y.js";import"./withOsdkMetrics-Dst4AoKO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};

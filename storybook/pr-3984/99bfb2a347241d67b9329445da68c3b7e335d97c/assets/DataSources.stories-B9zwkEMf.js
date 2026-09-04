import{j as r}from"./iframe-DOTdPJBy.js";import{O as b}from"./object-table-Cvktbl7a.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-COsVaEUr.js";import{u as g}from"./useOsdkClient-C681iYsL.js";import"./preload-helper-CORjxHe2.js";import"./Table-DRpmr99j.js";import"./index-7LsoLiQC.js";import"./Dialog-CV1LYgzP.js";import"./cross-m4Jtx501.js";import"./svgIconContainer-6XMQleNK.js";import"./useBaseUiId-CSa0UWdd.js";import"./InternalBackdrop-DNHBzMyX.js";import"./composite-DBLj_rqs.js";import"./index-DrAqVeQj.js";import"./index-DoVR9M-q.js";import"./index-DVc1s_km.js";import"./useEventCallback-DMJOBNH7.js";import"./SkeletonBar-C0cOwVEs.js";import"./LoadingCell-BOm33Zz_.js";import"./ColumnConfigDialog-CNXMHO4a.js";import"./DraggableList-GVkWro8x.js";import"./search-CQ447Er6.js";import"./Input-Bzm_LY5N.js";import"./useControlled-CEuBm35N.js";import"./Button-HfXhKbNv.js";import"./small-cross-ByN_OFW-.js";import"./ActionButton-Dl69JNtr.js";import"./Checkbox-CNBACtYZ.js";import"./useValueChanged-FqMJibv1.js";import"./CollapsiblePanel-BYNhB3x2.js";import"./MultiColumnSortDialog-D8qTQ-HE.js";import"./MenuTrigger-DjxBECOg.js";import"./CompositeItem-fENznLjR.js";import"./ToolbarRootContext-BMXrmtsD.js";import"./getDisabledMountTransitionStyles-BG-emIK6.js";import"./getPseudoElementBounds-Dx1WL7QY.js";import"./chevron-down-D9Jqe_yM.js";import"./index-YCEALnwo.js";import"./error-1dsahiX9.js";import"./BaseCbacBanner-C_qv5zih.js";import"./makeExternalStore-DXS9zRtb.js";import"./Tooltip-C72PQQIW.js";import"./PopoverPopup-DH-ybkjn.js";import"./debounce-CioZWleO.js";import"./tick-BFLKO0JY.js";import"./DropdownField-CCEf2ECL.js";import"./isEqual-C5BEqgHK.js";import"./withOsdkMetrics-w09EOhg9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

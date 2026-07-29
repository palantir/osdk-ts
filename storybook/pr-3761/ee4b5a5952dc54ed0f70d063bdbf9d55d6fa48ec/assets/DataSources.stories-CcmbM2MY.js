import{j as r}from"./iframe-CIbSoI7M.js";import{O as b}from"./object-table-CdpOGEYD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BeX_3CYS.js";import{u as g}from"./useOsdkClient-fg_a0RqO.js";import"./preload-helper-DmH6FFG8.js";import"./Table-CL0AHU_v.js";import"./index-APCVJEW3.js";import"./Dialog-BDcSUddr.js";import"./cross-B4Gn6Z-M.js";import"./svgIconContainer-DcLu3MTp.js";import"./useBaseUiId-Bmq7BhRQ.js";import"./InternalBackdrop-BjgtFig0.js";import"./composite-CpNiXj_M.js";import"./index-CboshYjZ.js";import"./index-B_6MzMjy.js";import"./index-C3xT3GfP.js";import"./useEventCallback-BffX7Oxm.js";import"./SkeletonBar-C4i3ReRr.js";import"./LoadingCell-BIds3c2z.js";import"./ColumnConfigDialog-SXzUSwu7.js";import"./DraggableList-BHXP4rV_.js";import"./search-BkI_TfyS.js";import"./Input-BML0uaTR.js";import"./useControlled-B_hgmZPj.js";import"./isEqual-qGRkFMs-.js";import"./isObject-CjXE3_P0.js";import"./Button-B5W8gulZ.js";import"./ActionButton-BJZ859-j.js";import"./Checkbox-DOaIFBWt.js";import"./useValueChanged-BIcWN65t.js";import"./CollapsiblePanel-DUJM-fFs.js";import"./MultiColumnSortDialog-B7lgY-v3.js";import"./MenuTrigger-vAioYqMC.js";import"./CompositeItem-DObahPUf.js";import"./ToolbarRootContext-CxR7GEiJ.js";import"./getDisabledMountTransitionStyles-DYmaRG6n.js";import"./getPseudoElementBounds-BWWJ6sub.js";import"./chevron-down-C9wqxvOA.js";import"./index-CmzWklHf.js";import"./error-BMaUhajR.js";import"./BaseCbacBanner-BZNb6prg.js";import"./makeExternalStore-Db2RDoef.js";import"./Tooltip-Bm5iAyY8.js";import"./PopoverPopup-CYc0fInH.js";import"./toNumber-ClgHQQIk.js";import"./tick-BQndWl-G.js";import"./DropdownField-DYYRN_9K.js";import"./withOsdkMetrics-CgEO4G4q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

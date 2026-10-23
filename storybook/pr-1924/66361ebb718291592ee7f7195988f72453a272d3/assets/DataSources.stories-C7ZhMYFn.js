import{j as r}from"./iframe-ue9bX3Iv.js";import{O as b}from"./object-table-KCp5vh9P.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BqOOEpUL.js";import{u as g}from"./useOsdkClient-nZ1mPAY3.js";import"./preload-helper-C3Wvffv1.js";import"./Table-D0BTKDV8.js";import"./index-IcNnhROh.js";import"./Dialog-NaWY0jNp.js";import"./cross-U1hVGtzD.js";import"./svgIconContainer-BZgEOtnq.js";import"./useBaseUiId-cGzETZoK.js";import"./InternalBackdrop-Ceyi0BuR.js";import"./composite-BhWJUn6b.js";import"./index-DPlEBhdl.js";import"./index-5SMiFPmq.js";import"./index-Cy72BvTv.js";import"./useEventCallback-BH9nt9-5.js";import"./SkeletonBar-CC6lvuY_.js";import"./LoadingCell-CTnp4K_r.js";import"./ColumnConfigDialog-D_g6csXz.js";import"./DraggableList-DegT0gSb.js";import"./search-Bid3yFjL.js";import"./Input-CRAGtCFZ.js";import"./useControlled-yUsh7HNb.js";import"./Button-C0tazeAS.js";import"./small-cross-MncGjMz9.js";import"./ActionButton-D10j_WSJ.js";import"./Checkbox-CdvIj1p1.js";import"./useValueChanged-CKuEXHBa.js";import"./CollapsiblePanel-BJsJTyii.js";import"./MultiColumnSortDialog-Bond2QVr.js";import"./MenuTrigger-Bv5RRTT5.js";import"./CompositeItem-IO3qOv2K.js";import"./ToolbarRootContext-C5ppRaBq.js";import"./getDisabledMountTransitionStyles-CPFTS2y4.js";import"./getPseudoElementBounds-Vjgoy1VG.js";import"./chevron-down-97bKRBG5.js";import"./index-BXYXQLwX.js";import"./error-Bv66Pch2.js";import"./BaseCbacBanner-DZrAsfYB.js";import"./makeExternalStore-DCh8aI2s.js";import"./Tooltip-CMtE3LQx.js";import"./PopoverPopup-Bxk_FVO9.js";import"./debounce-BCtPQVA_.js";import"./tick-DxPhMwVy.js";import"./DropdownField-B5Tdlyhu.js";import"./isEqual-f521m5zt.js";import"./withOsdkMetrics-DwrnzR-_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

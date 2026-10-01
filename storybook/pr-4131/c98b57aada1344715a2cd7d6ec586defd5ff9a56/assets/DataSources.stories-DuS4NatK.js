import{j as r}from"./iframe-BTVQ2MDu.js";import{O as b}from"./object-table-DVHeKRvV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cd7tPliN.js";import{u as g}from"./useOsdkClient-BUwzSBMN.js";import"./preload-helper-V8IN1a25.js";import"./Table-B8coxLT6.js";import"./index-De5UO2WD.js";import"./Dialog-CkCx041K.js";import"./cross-CiaqJ3Ct.js";import"./svgIconContainer-Z92KrpXF.js";import"./useBaseUiId-ageCLcwt.js";import"./InternalBackdrop-BVNbfTuG.js";import"./composite-j0A6Y-jy.js";import"./index-BQEu1zYD.js";import"./index-kvy3rFgR.js";import"./index-DjK2k_yv.js";import"./useEventCallback-D0vGqTKV.js";import"./SkeletonBar-DArXiFWj.js";import"./LoadingCell-B8bw26Hi.js";import"./ColumnConfigDialog-DRajYg12.js";import"./DraggableList-D0dDLjdf.js";import"./search-DG5bPe3Q.js";import"./Input-BfcaF7JW.js";import"./useControlled-BNBhFfAy.js";import"./Button-Ca-Rehkm.js";import"./small-cross-B4ROqysh.js";import"./ActionButton-B99TtfNQ.js";import"./Checkbox-BDKA0ajc.js";import"./useValueChanged-CdtMTrsN.js";import"./CollapsiblePanel-D03MnXQO.js";import"./MultiColumnSortDialog-D1Q8iyV4.js";import"./MenuTrigger-Ceua_S9s.js";import"./CompositeItem-BYdhC28O.js";import"./ToolbarRootContext-BKviL8sB.js";import"./getDisabledMountTransitionStyles-CTuqZlD-.js";import"./getPseudoElementBounds-CbDHbaqF.js";import"./chevron-down-B2iYughc.js";import"./index-DHPYKUwx.js";import"./error-B4_XiTjG.js";import"./BaseCbacBanner-DQ6y3_rq.js";import"./makeExternalStore-CteyryqD.js";import"./Tooltip-SOy8OEMI.js";import"./PopoverPopup-BDUoftIx.js";import"./debounce-BaTeW3Mf.js";import"./tick-C7MyDvxF.js";import"./DropdownField-DzdFfboE.js";import"./isEqual-VOjDnJLS.js";import"./withOsdkMetrics-sKDJTdCS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

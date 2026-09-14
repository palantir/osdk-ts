import{j as r}from"./iframe-DLHR6L4Z.js";import{O as b}from"./object-table-DrbkPQ4n.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BoKmJnCt.js";import{u as g}from"./useOsdkClient-Ds4SzcYA.js";import"./preload-helper-Dx-zoqBZ.js";import"./Table-CFQwFyGq.js";import"./index-Ci6l6bLg.js";import"./Dialog-CMihgMQO.js";import"./cross-Dr9ey-no.js";import"./svgIconContainer-OFY1tmQv.js";import"./useBaseUiId-1yQPi4Ok.js";import"./InternalBackdrop-B_WdIFN7.js";import"./composite-DufSPfDq.js";import"./index-Cty81kva.js";import"./index-qvggJvKY.js";import"./index-BCQmOQno.js";import"./useEventCallback-WBP10YPW.js";import"./SkeletonBar-f-fkDeaw.js";import"./LoadingCell-DqrkyBlj.js";import"./ColumnConfigDialog-CZFlYxhK.js";import"./DraggableList-DJ0O4QG2.js";import"./search-BKzV_clV.js";import"./Input-DPBWJEz5.js";import"./useControlled-CyfyjGCX.js";import"./Button-Bfsbp0Vn.js";import"./small-cross-Coj1hZH_.js";import"./ActionButton-JQl4ud6K.js";import"./Checkbox-BKXlVChy.js";import"./useValueChanged-BoDeFmnt.js";import"./CollapsiblePanel-VYcA49X-.js";import"./MultiColumnSortDialog-BUws_Xs7.js";import"./MenuTrigger-DXpBlSqF.js";import"./CompositeItem-Uc_jxWPR.js";import"./ToolbarRootContext-huk_G4xt.js";import"./getDisabledMountTransitionStyles-C88-mCuq.js";import"./getPseudoElementBounds-C4j2UgFA.js";import"./chevron-down-CLyH651g.js";import"./index-DPyGU-iS.js";import"./error-CPzqX2rB.js";import"./BaseCbacBanner-BMeh3izb.js";import"./makeExternalStore-CGlrcfR1.js";import"./Tooltip-BYsQTzV_.js";import"./PopoverPopup-CUUPXvJN.js";import"./debounce-Cco9EZf3.js";import"./tick-Dtw1ESRh.js";import"./DropdownField-D6WaBAb7.js";import"./isEqual-D_1wsBc-.js";import"./withOsdkMetrics-s0w2F5xR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-CVjWJMmF.js";import{O as b}from"./object-table-D4ooF-A_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DU4cTN0_.js";import{u as g}from"./useOsdkClient-DnVFgevD.js";import"./preload-helper-DW9TanSD.js";import"./Table-NZffx37x.js";import"./index-DkPpZQEy.js";import"./Dialog-CWfQdoBZ.js";import"./cross-Dl2vOulJ.js";import"./svgIconContainer-DkRHhgAa.js";import"./useBaseUiId-OuEDX3TX.js";import"./InternalBackdrop-CR34Ewfm.js";import"./composite-BCNmB505.js";import"./index-D4WXG5sY.js";import"./index-w6zbUUyx.js";import"./index-Dm_Ge5uT.js";import"./useEventCallback-B5YEIz9O.js";import"./SkeletonBar-DX1RNCoe.js";import"./LoadingCell-D4-E-UQj.js";import"./ColumnConfigDialog-YTFZCCrW.js";import"./DraggableList-BbL5yczo.js";import"./search-Cenk5EYj.js";import"./Input-Bt-eNbkA.js";import"./useControlled-Cb41SkUR.js";import"./Button-Dhayy-gQ.js";import"./small-cross-BYy4lIdj.js";import"./ActionButton-Bz2nLLis.js";import"./Checkbox-DsL8lHse.js";import"./useValueChanged-BLqQhLSX.js";import"./CollapsiblePanel-CCmgcfNX.js";import"./MultiColumnSortDialog-BMJWLvKA.js";import"./MenuTrigger-CqCLQ8GU.js";import"./CompositeItem-U33_rWfO.js";import"./ToolbarRootContext-n7CVeFta.js";import"./getDisabledMountTransitionStyles-CbAAbmOX.js";import"./getPseudoElementBounds-BQFi3yBI.js";import"./chevron-down-CJH6CLnR.js";import"./index-gTNpBnbn.js";import"./error-w9z2sjwy.js";import"./BaseCbacBanner-DPcBpAnp.js";import"./makeExternalStore-CpmQogqA.js";import"./Tooltip-BhxZaxYf.js";import"./PopoverPopup-B9Qp2Kpx.js";import"./debounce-D8r16Qwg.js";import"./tick-B-ooZKr2.js";import"./DropdownField-CifY0DIK.js";import"./isEqual-ijbEh8nu.js";import"./withOsdkMetrics-D-WikLGs.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

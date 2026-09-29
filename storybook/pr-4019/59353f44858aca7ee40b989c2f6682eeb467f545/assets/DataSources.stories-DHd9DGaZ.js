import{j as r}from"./iframe-C0TXowYh.js";import{O as b}from"./object-table-CgEVeuv7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-R6CrXCTo.js";import{u as g}from"./useOsdkClient-Dik0BEfs.js";import"./preload-helper-DxTxvmk8.js";import"./Table-DJG_r3Xk.js";import"./index-Cu2rgIRW.js";import"./Dialog-vTWvQ72w.js";import"./cross-BfvUUSFN.js";import"./svgIconContainer-C2fAWGrt.js";import"./useBaseUiId-CxGokxTP.js";import"./InternalBackdrop-BG3n3cO9.js";import"./composite-CXmgh9Nc.js";import"./index-u3QGRCwO.js";import"./index-C6Y-pof4.js";import"./index-BU6mBswW.js";import"./useEventCallback-DkQiwOiq.js";import"./SkeletonBar-D0XWEPXE.js";import"./LoadingCell-BIGgOebX.js";import"./ColumnConfigDialog-DmC6LqPv.js";import"./DraggableList-mYeO1b8W.js";import"./search-6re8IEAF.js";import"./Input-8EnzzSA0.js";import"./useControlled-BFSHGlV3.js";import"./Button-D_dg1W6z.js";import"./small-cross-Bc8Y0COB.js";import"./ActionButton-CtkWJ4rU.js";import"./Checkbox-B-Meopae.js";import"./useValueChanged-HDLvanC4.js";import"./CollapsiblePanel-D9qfjPFi.js";import"./MultiColumnSortDialog-BHXvxwMe.js";import"./MenuTrigger-DMgWfOwE.js";import"./CompositeItem-KxsL0x_o.js";import"./ToolbarRootContext-CE5VkmEX.js";import"./getDisabledMountTransitionStyles-D_Zo5NjY.js";import"./getPseudoElementBounds-WqJcoAVH.js";import"./chevron-down-D7WH3ySY.js";import"./index-DWDyv98l.js";import"./error-Z4OH-yWW.js";import"./BaseCbacBanner-6omcgI-g.js";import"./makeExternalStore-C_tJozdQ.js";import"./Tooltip-P9jbmoIC.js";import"./PopoverPopup-CuAJ2y9v.js";import"./debounce-DMyrgWDf.js";import"./tick-Bc8vz4AB.js";import"./DropdownField-09zuyy2T.js";import"./isEqual-DaFfWolB.js";import"./withOsdkMetrics-BPzAvbiW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

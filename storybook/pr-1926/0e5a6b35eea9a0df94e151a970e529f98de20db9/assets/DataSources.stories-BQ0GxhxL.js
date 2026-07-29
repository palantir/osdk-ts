import{j as r}from"./iframe-DfMJukgY.js";import{O as b}from"./object-table-BGVgMj3D.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D09rkmKJ.js";import{u as g}from"./useOsdkClient-Cf5OJdy4.js";import"./preload-helper-VM-F0jx2.js";import"./Table-DANrk4m7.js";import"./index-CPmt2jve.js";import"./Dialog-CqzlSyLJ.js";import"./cross-DYuJCEl9.js";import"./svgIconContainer-DOEgYA3V.js";import"./useBaseUiId-DEFBImN0.js";import"./InternalBackdrop-D4RPPLx_.js";import"./composite-CO4J4kUw.js";import"./index-D0ss7BNT.js";import"./index-CW41f0V0.js";import"./index-Db7WZf1E.js";import"./useEventCallback-CujKQvED.js";import"./SkeletonBar-BY4TD8HF.js";import"./LoadingCell-DpyN_r9D.js";import"./ColumnConfigDialog-BbQkq11f.js";import"./DraggableList-Cv-CVLCz.js";import"./search-sPR_XQ25.js";import"./Input-C8qN6Kyh.js";import"./useControlled-BaQpmrJ7.js";import"./isEqual-Bzy2vlTm.js";import"./isObject-Q-eHHqLR.js";import"./Button-BYYvi8LO.js";import"./ActionButton-Sl5oWaUu.js";import"./Checkbox-BSRaElv6.js";import"./useValueChanged-DhDTq9ye.js";import"./CollapsiblePanel-D_F8a2n7.js";import"./MultiColumnSortDialog-O0na_EYa.js";import"./MenuTrigger-E-bh9wZc.js";import"./CompositeItem-UgjKpAcn.js";import"./ToolbarRootContext-DxF5vhJk.js";import"./getDisabledMountTransitionStyles-DLVZIwtO.js";import"./getPseudoElementBounds-DR4xds7o.js";import"./chevron-down-aEfEfwVB.js";import"./index-CDG-_gWn.js";import"./error-D29g4pKw.js";import"./BaseCbacBanner-DcyNCAS7.js";import"./makeExternalStore-BxrSdo9F.js";import"./Tooltip-BS1jmae1.js";import"./PopoverPopup-DRGNXVKJ.js";import"./toNumber-B4Xju4pa.js";import"./tick-S0-Nortf.js";import"./DropdownField-Dvb1-ruW.js";import"./withOsdkMetrics-D3FygStw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

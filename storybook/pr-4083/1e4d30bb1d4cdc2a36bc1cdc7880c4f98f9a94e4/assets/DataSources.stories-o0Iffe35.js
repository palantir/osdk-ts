import{j as r}from"./iframe-Cuknj9ph.js";import{O as b}from"./object-table-B2ghSWFR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dh5diuaJ.js";import{u as g}from"./useOsdkClient-CB7r24bA.js";import"./preload-helper-DA49r888.js";import"./Table-24VKP0uk.js";import"./index-DUVMLmA5.js";import"./Dialog-jgyVThR1.js";import"./cross-9NrnDCFm.js";import"./svgIconContainer-Bxolnsq9.js";import"./useBaseUiId-ksC6H-yy.js";import"./InternalBackdrop-CBDaXKFL.js";import"./composite-CUDt05Vv.js";import"./index-B7AWjemI.js";import"./index-BPGm0MAa.js";import"./index-I722fGzW.js";import"./useEventCallback-BzkQL_AG.js";import"./SkeletonBar-BbxNu6H8.js";import"./LoadingCell-CDPlzg1b.js";import"./ColumnConfigDialog-CZyIFPTb.js";import"./DraggableList-BCAJmaDs.js";import"./search-BJhgCNFy.js";import"./Input-BEJtrH8a.js";import"./useControlled-D1P2IuRq.js";import"./Button-fi3zZM83.js";import"./small-cross-CInH2-yh.js";import"./ActionButton-DhNYUSlb.js";import"./Checkbox-DSUd8a7Y.js";import"./useValueChanged-BljXNw8x.js";import"./CollapsiblePanel-C2GTiw59.js";import"./MultiColumnSortDialog-BKIS72x4.js";import"./MenuTrigger-C8JhPNog.js";import"./CompositeItem-CyTGoO_U.js";import"./ToolbarRootContext-BMS0iTVE.js";import"./getDisabledMountTransitionStyles-BYU-ducs.js";import"./getPseudoElementBounds-BDhodCIt.js";import"./chevron-down-DYalT47P.js";import"./index-C1B0s3j1.js";import"./error-CYI1ELi7.js";import"./BaseCbacBanner-DQQ-tpgC.js";import"./makeExternalStore-VBmH-lGu.js";import"./Tooltip-DHjKu8cE.js";import"./PopoverPopup-ZZbgTqgr.js";import"./debounce-BbAyHLdF.js";import"./tick-D_CF6UIY.js";import"./DropdownField-CJScNr2p.js";import"./isEqual-CLLsedGk.js";import"./withOsdkMetrics-BEbRkfCK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-DKy1AV9s.js";import{O as b}from"./object-table-B9HBiAT2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CK6hhbJY.js";import{u as g}from"./useOsdkClient-BTgiLzGJ.js";import"./preload-helper-BQnNVSqD.js";import"./Table-CgA0pJZo.js";import"./index-Du9AgFeI.js";import"./Dialog-CzH2sOkG.js";import"./cross-DWvNM6aD.js";import"./svgIconContainer-CmdDPKdW.js";import"./useBaseUiId-DXR-gGQN.js";import"./InternalBackdrop-Hx_fAg69.js";import"./composite-DIA_5bjb.js";import"./index-DYHGdsLl.js";import"./index-WeJ_Lope.js";import"./index-_0GvayOq.js";import"./useEventCallback-Dr0GHl4b.js";import"./SkeletonBar-5tg7WMK9.js";import"./LoadingCell-BRyArc3C.js";import"./ColumnConfigDialog-DIDxiY08.js";import"./DraggableList-CQBonzRI.js";import"./search-CoqdhJoi.js";import"./Input-ClkjPeCn.js";import"./useControlled-BeCa4j1K.js";import"./Button-CT75AnP8.js";import"./small-cross-B73khPHd.js";import"./ActionButton-Ch5xzSjH.js";import"./Checkbox-yfgCXt3G.js";import"./useValueChanged-Dzc4R6hM.js";import"./CollapsiblePanel-XdZ5rNxN.js";import"./MultiColumnSortDialog-Be3EoEW-.js";import"./MenuTrigger-DEiICrj5.js";import"./CompositeItem-D1YEdKX1.js";import"./ToolbarRootContext-B96YkNbH.js";import"./getDisabledMountTransitionStyles-DMo4BEvH.js";import"./getPseudoElementBounds-8aym6eDS.js";import"./chevron-down-BgiHHBSL.js";import"./index-DUh9Rd_7.js";import"./error-B2JG09GC.js";import"./BaseCbacBanner-DaWThKyM.js";import"./makeExternalStore-O-ViDFSd.js";import"./Tooltip-STNIv-wy.js";import"./PopoverPopup-Bt_JvPjL.js";import"./debounce-De_uQl3O.js";import"./tick-CPA85Yzm.js";import"./DropdownField-CoeAa-lS.js";import"./isEqual-DGhgqELw.js";import"./withOsdkMetrics-DmspcQnU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

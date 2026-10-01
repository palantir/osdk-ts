import{j as r}from"./iframe-CPvF6ZzM.js";import{O as b}from"./object-table-CWIzO1zP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C0tMjnrQ.js";import{u as g}from"./useOsdkClient-DPiAHwl7.js";import"./preload-helper-BI1t_NCm.js";import"./Table-bSpLxoee.js";import"./index-DfPxhOot.js";import"./Dialog-CcEQU90q.js";import"./cross-CmlX3m4X.js";import"./svgIconContainer-DKpS56Vd.js";import"./useBaseUiId-XltkNyEi.js";import"./InternalBackdrop-BcLn-51b.js";import"./composite-BWoYEjdT.js";import"./index-lsySavSd.js";import"./index-MWDzLIPR.js";import"./index-DcKmVIZM.js";import"./useEventCallback-BWX8o1CN.js";import"./SkeletonBar-BMdJeUof.js";import"./LoadingCell-CJmD9ke6.js";import"./ColumnConfigDialog-D3LttmNB.js";import"./DraggableList-m0jqdBM8.js";import"./search-BLNtYnra.js";import"./Input-Bc7_Uhxn.js";import"./useControlled-C9Dlz_cg.js";import"./Button-BOq8HNJy.js";import"./small-cross-B4RneZ3b.js";import"./ActionButton-DhYCkBu4.js";import"./Checkbox-C7eHtJoH.js";import"./useValueChanged-CWss0hf4.js";import"./CollapsiblePanel-BK_rHvoK.js";import"./MultiColumnSortDialog-C1G0U_eA.js";import"./MenuTrigger-DNDIxPcR.js";import"./CompositeItem-Hn04YYBd.js";import"./ToolbarRootContext-CXaq262I.js";import"./getDisabledMountTransitionStyles-BjJuktUq.js";import"./getPseudoElementBounds-6eTBtUcp.js";import"./chevron-down-eYoSNu4v.js";import"./index-DlqK99lM.js";import"./error-B87OsGL8.js";import"./BaseCbacBanner-VtmLPxLN.js";import"./makeExternalStore-S4D4bUbQ.js";import"./Tooltip-DCy2r5z4.js";import"./PopoverPopup-BxWvq6sk.js";import"./debounce-6I_M5ZGg.js";import"./tick-FC2fYi94.js";import"./DropdownField-B4l5M5yD.js";import"./isEqual-BsdyxzNC.js";import"./withOsdkMetrics-BRD3Y2PF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

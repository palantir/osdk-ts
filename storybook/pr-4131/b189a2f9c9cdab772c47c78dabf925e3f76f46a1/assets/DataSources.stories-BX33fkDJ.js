import{j as r}from"./iframe-t8tzCNQG.js";import{O as b}from"./object-table-F4Md9RQV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DJf3OJXR.js";import{u as g}from"./useOsdkClient-DVOxrQDN.js";import"./preload-helper-DgmnFE1F.js";import"./Table-5fTxY2Uw.js";import"./index-B2ZMYIpf.js";import"./Dialog-DwJBNRCE.js";import"./cross-BlbUaBXV.js";import"./svgIconContainer-BMtFokv3.js";import"./useBaseUiId-5tpyF_oD.js";import"./InternalBackdrop-DRHhQcWa.js";import"./composite-CtIsJulR.js";import"./index-D86oorM3.js";import"./index-BUDOFPoc.js";import"./index-CPjyfk9f.js";import"./useEventCallback-Du7sw565.js";import"./SkeletonBar-Ctmv_DKB.js";import"./LoadingCell-CQBVoYwx.js";import"./ColumnConfigDialog-C8NYwuqH.js";import"./DraggableList-BEbzCFki.js";import"./search-CeoT8iOL.js";import"./Input-hnDJE6Oy.js";import"./useControlled-C3Y23C1t.js";import"./Button-DJ3cf7JH.js";import"./small-cross-bmT9fHJd.js";import"./ActionButton-DYfkYb1s.js";import"./Checkbox-DLp5SnEW.js";import"./useValueChanged-iJtQDgJE.js";import"./CollapsiblePanel-CLzEHlgM.js";import"./MultiColumnSortDialog-CHFWNES-.js";import"./MenuTrigger-86GtgIEW.js";import"./CompositeItem-BgkQkbdd.js";import"./ToolbarRootContext-HtRVgU8t.js";import"./getDisabledMountTransitionStyles-d1tAtN98.js";import"./getPseudoElementBounds-D5yioJI0.js";import"./chevron-down-Dw7pUuxv.js";import"./index-BP5-XTdL.js";import"./error-ByvTRN4V.js";import"./BaseCbacBanner-DIfT9Iki.js";import"./makeExternalStore-tE7kFU6z.js";import"./Tooltip-QQ-ZZ6je.js";import"./PopoverPopup-BK-uWVpQ.js";import"./debounce-DlkfzBW4.js";import"./tick-Bh48FDPD.js";import"./DropdownField-Di9jrMNs.js";import"./isEqual-Dhgy7epr.js";import"./withOsdkMetrics-D05rZYt3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-DcZIbII1.js";import{O as b}from"./object-table-DLeGe8ZQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-PNFg_iPx.js";import{u as g}from"./useOsdkClient-BlHc1QH0.js";import"./preload-helper-CtJBcs4m.js";import"./Table-BWSDeoBK.js";import"./index-CknXFCuG.js";import"./Dialog-COig6MDV.js";import"./cross-B7rc_3vM.js";import"./svgIconContainer-CCPtMkY_.js";import"./useBaseUiId-Bwnxqilm.js";import"./InternalBackdrop-vtxyY5fQ.js";import"./composite-im6S2sQa.js";import"./index-Dkeo5kI9.js";import"./index-B9y2Cfx6.js";import"./index-DPboZthR.js";import"./useEventCallback-DUdSVzSq.js";import"./SkeletonBar-CGLWA7k6.js";import"./LoadingCell-BOgRlDnX.js";import"./ColumnConfigDialog-BHw8jkAc.js";import"./DraggableList-PY47Xjpq.js";import"./search-ByPzgBRT.js";import"./Input-DgnbxA8W.js";import"./useControlled-CtuIn0tc.js";import"./Button-fbYfSW4g.js";import"./small-cross-BNLYCYQq.js";import"./ActionButton-Bt_c9QVn.js";import"./Checkbox-oOA2jJzU.js";import"./useValueChanged-BCgCGkWP.js";import"./CollapsiblePanel-CJKXn1Jt.js";import"./MultiColumnSortDialog-CExlz1v8.js";import"./MenuTrigger-DOR0ot29.js";import"./CompositeItem-0HlJZQq8.js";import"./ToolbarRootContext-DW70chtw.js";import"./getDisabledMountTransitionStyles-BRHOOZl_.js";import"./getPseudoElementBounds-CCVDhmIO.js";import"./chevron-down-CgbkcCiQ.js";import"./index-DSHI6oH0.js";import"./error-CfhtcL_7.js";import"./BaseCbacBanner-CY3PtWK0.js";import"./makeExternalStore-Dx5t4IsM.js";import"./Tooltip-Cs9p6XT8.js";import"./PopoverPopup-CwL3PPak.js";import"./debounce-BPpQpvYV.js";import"./tick-CLXIS-et.js";import"./DropdownField-9Vn4V-zp.js";import"./isEqual-ByvfUgin.js";import"./withOsdkMetrics-D2PqzxOJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

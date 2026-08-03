import{j as r}from"./iframe-rqdpvzga.js";import{O as b}from"./object-table-BNCtyvoy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-yo41SrJX.js";import{u as g}from"./useOsdkClient-DnpeN7vH.js";import"./preload-helper-BAuA-mTQ.js";import"./Table-CwI65LxP.js";import"./index-BUC_fDrj.js";import"./Dialog-N8lH9woN.js";import"./cross-CfosNt4b.js";import"./svgIconContainer-Bqq5IfTn.js";import"./useBaseUiId-DuTjnFCh.js";import"./InternalBackdrop-D13qOvQs.js";import"./composite-ccFUBUPp.js";import"./index-Cehal3kO.js";import"./index-CJWlNCvv.js";import"./index-CKSQPIZd.js";import"./useEventCallback-W4TpxVKD.js";import"./SkeletonBar-CFpFT4II.js";import"./LoadingCell-BgMCyBoq.js";import"./ColumnConfigDialog-hnZhU6Rq.js";import"./DraggableList-BLHsww-b.js";import"./search-C4ANGgTZ.js";import"./Input-C9VwIK8Z.js";import"./useControlled-BuMCf3Vd.js";import"./isEqual-DEg00wvo.js";import"./isObject-DQhWxrGR.js";import"./Button-BKVkRu72.js";import"./ActionButton-HHbEDF8p.js";import"./Checkbox-BjkRYtp6.js";import"./useValueChanged-DUFwtMjl.js";import"./CollapsiblePanel-CJc3SpYG.js";import"./MultiColumnSortDialog-DqWkkLs0.js";import"./MenuTrigger-CxxInSLp.js";import"./CompositeItem-V9zqfIF2.js";import"./ToolbarRootContext-BMRRgW4c.js";import"./getDisabledMountTransitionStyles-Ca47Gktb.js";import"./getPseudoElementBounds-C8iem-un.js";import"./chevron-down-d7yaCezV.js";import"./index-BvFYeZoL.js";import"./error-3D7_fXdm.js";import"./BaseCbacBanner-DoUsSeDI.js";import"./makeExternalStore-CszC-1tM.js";import"./Tooltip-COfWRuA_.js";import"./PopoverPopup-Cvgc4b4_.js";import"./toNumber-TWPbk2io.js";import"./tick-7-B_JYev.js";import"./DropdownField-DtNNkOb_.js";import"./withOsdkMetrics-CdR4X2BK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

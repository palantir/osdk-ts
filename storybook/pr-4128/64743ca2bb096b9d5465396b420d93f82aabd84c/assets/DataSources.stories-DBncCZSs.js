import{j as r}from"./iframe-ClMgtSuk.js";import{O as b}from"./object-table--l5P5fZV.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DxiuPfh1.js";import{u as g}from"./useOsdkClient-DebYYw8a.js";import"./preload-helper-DTt1WWTr.js";import"./Table-Bs1Mc4j4.js";import"./index-CldZE-Fz.js";import"./Dialog-B8YbOYMH.js";import"./cross-viQYDEND.js";import"./svgIconContainer-oOu9mbxW.js";import"./useBaseUiId-woEv5Hvl.js";import"./InternalBackdrop-lzq1-uho.js";import"./composite-AMpBTCaD.js";import"./index-BU0jcG4_.js";import"./index-Rnbyd2Wh.js";import"./index-Ct_fn0U-.js";import"./useEventCallback-Df1aTrS2.js";import"./SkeletonBar-ClzuP6Go.js";import"./LoadingCell-uwKDV78Q.js";import"./ColumnConfigDialog-LYkt6wr0.js";import"./DraggableList-DuEHNMRv.js";import"./search-COwJRDi0.js";import"./Input-BtIh3kKl.js";import"./useControlled-8r5NxEZn.js";import"./Button-BCu1jtHq.js";import"./small-cross-CqFS18i-.js";import"./ActionButton-DSjTpeTA.js";import"./Checkbox-ASKiaSYC.js";import"./useValueChanged-BUHPg38E.js";import"./CollapsiblePanel-CtkO9azS.js";import"./MultiColumnSortDialog-QlO6Azc5.js";import"./MenuTrigger-CZRm3cej.js";import"./CompositeItem-DEoo3ITM.js";import"./ToolbarRootContext-dH9njPoH.js";import"./getDisabledMountTransitionStyles-DS7SGJ-f.js";import"./getPseudoElementBounds-DAVljBL_.js";import"./chevron-down-DRfUqPRw.js";import"./index-Dlvw17dt.js";import"./error-D3qiwtEy.js";import"./BaseCbacBanner-CN_XmouS.js";import"./makeExternalStore-v6XUl8OF.js";import"./Tooltip-CsPWprPe.js";import"./PopoverPopup-C7ZCNFox.js";import"./debounce-DNxed3Zp.js";import"./tick-BVkIDnpf.js";import"./DropdownField-C5-pHjL8.js";import"./isEqual-z0aK0gs6.js";import"./withOsdkMetrics-H7JHankc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

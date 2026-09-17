import{j as r}from"./iframe-BtGRzxci.js";import{O as b}from"./object-table-DvJWCPho.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-TpiTyl28.js";import{u as g}from"./useOsdkClient-DvX2DAiH.js";import"./preload-helper-CyrDjGUQ.js";import"./Table-hzixPhpe.js";import"./index-tVIozFN1.js";import"./Dialog-UXl6_OEU.js";import"./cross-7jkwYPrY.js";import"./svgIconContainer-CN6dxZIp.js";import"./useBaseUiId-XRf534_a.js";import"./InternalBackdrop-BfGRu2JH.js";import"./composite-Btju52rS.js";import"./index-Dv2SWeyR.js";import"./index-BV7_z1j7.js";import"./index-Nbrbbk2B.js";import"./useEventCallback-BiNkxLXV.js";import"./SkeletonBar-DUe5rZ6s.js";import"./LoadingCell-C0-SnIgS.js";import"./ColumnConfigDialog-Iho4vn5M.js";import"./DraggableList-DnLFn3Lu.js";import"./search-BPr2MDER.js";import"./Input-DGQhm6BR.js";import"./useControlled-rccl1Nao.js";import"./Button-CmbUXSv3.js";import"./small-cross-CkeumqgW.js";import"./ActionButton-5xGca2at.js";import"./Checkbox-D--Pvna1.js";import"./useValueChanged-CjbtTYfl.js";import"./CollapsiblePanel-BaiGGDJy.js";import"./MultiColumnSortDialog-DYusjWQp.js";import"./MenuTrigger-IMl7rvKJ.js";import"./CompositeItem-CG89Nl1U.js";import"./ToolbarRootContext-D3OhDsHo.js";import"./getDisabledMountTransitionStyles-CJvQQmV9.js";import"./getPseudoElementBounds-Wk9KfacK.js";import"./chevron-down-C1HWTq_e.js";import"./index-DLTZ7l6I.js";import"./error-swCJC4aW.js";import"./BaseCbacBanner-BFDB5_A0.js";import"./makeExternalStore-DP55EZzE.js";import"./Tooltip-vzjWcP7C.js";import"./PopoverPopup-Ckm-Ve__.js";import"./debounce-YXq4O7nI.js";import"./tick-ac30L8P3.js";import"./DropdownField-DhAab1KW.js";import"./isEqual-DiCfN5tv.js";import"./withOsdkMetrics-7PiZwI5Y.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

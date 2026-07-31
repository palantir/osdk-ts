import{j as r}from"./iframe-uyk0mCUp.js";import{O as b}from"./object-table-BTyYwJG6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CaSl9mcs.js";import{u as g}from"./useOsdkClient-Cn6Hv8Xo.js";import"./preload-helper-DUkoerkJ.js";import"./Table-DrTTbu2q.js";import"./index-cNyJXSMp.js";import"./Dialog-DZUm8P7v.js";import"./cross-CFwh4iO6.js";import"./svgIconContainer-B7m6z2vX.js";import"./useBaseUiId-BRAYv9TN.js";import"./InternalBackdrop-BMCnvbv2.js";import"./composite-D9L4RBPJ.js";import"./index-COpefVFT.js";import"./index-ClQrFhrN.js";import"./index-5_B92b-6.js";import"./useEventCallback-DbLpAI-e.js";import"./SkeletonBar-BAagPvkY.js";import"./LoadingCell-BBRk3sl4.js";import"./ColumnConfigDialog-BY47kZd1.js";import"./DraggableList-D3hB1ejD.js";import"./search-C-V8Xqsq.js";import"./Input-OnWCQOx0.js";import"./useControlled-BFcXAkHj.js";import"./isEqual-BHPC-lv4.js";import"./isObject-DBijMYtE.js";import"./Button-COieJLVA.js";import"./ActionButton-Cb7KVMxo.js";import"./Checkbox-nUU4UOCK.js";import"./useValueChanged-DXmh0cT4.js";import"./CollapsiblePanel-C8NvxIBZ.js";import"./MultiColumnSortDialog-Bd1Ffmvt.js";import"./MenuTrigger-c9FhZmLK.js";import"./CompositeItem-pCeGSAYO.js";import"./ToolbarRootContext-DI0UYGrF.js";import"./getDisabledMountTransitionStyles-Dansh3cO.js";import"./getPseudoElementBounds-BhVF9B8d.js";import"./chevron-down-C3FX5T-R.js";import"./index-BY1UeHqx.js";import"./error-Dwadp2yn.js";import"./BaseCbacBanner-B5u1VnT7.js";import"./makeExternalStore-gyq_4DLC.js";import"./Tooltip-CDYEbWwI.js";import"./PopoverPopup-DGuzh4yZ.js";import"./toNumber-D5_GPrTk.js";import"./tick-DEmqx1VC.js";import"./DropdownField-jQDwsq8u.js";import"./withOsdkMetrics-D2afrcgu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

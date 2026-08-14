import{j as r}from"./iframe-BiqEJvqs.js";import{O as b}from"./object-table-ByWQTztt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C7_5x4E9.js";import{u as g}from"./useOsdkClient-DgwEzoz8.js";import"./preload-helper-CUf-Ejfa.js";import"./Table-uOy9OEp4.js";import"./index-UOIl6jYX.js";import"./Dialog-znhQ3llA.js";import"./cross-J4n8RB05.js";import"./svgIconContainer-DhtXEAG2.js";import"./useBaseUiId-BfW20ii0.js";import"./InternalBackdrop-BOKyOs02.js";import"./composite-69au3nWT.js";import"./index-BEI0Rcxq.js";import"./index-BphVNaCP.js";import"./index-Ofy5twcD.js";import"./useEventCallback-BoyYhoVd.js";import"./SkeletonBar-CwCAIMYA.js";import"./LoadingCell-DoCiwnlV.js";import"./ColumnConfigDialog-CqdbbkAv.js";import"./DraggableList-jX8MWklq.js";import"./search-BBjG8S0f.js";import"./Input-ED3AY7t3.js";import"./useControlled-KybfaMD9.js";import"./Button-BZ6TNGhX.js";import"./small-cross-heoPx4jP.js";import"./ActionButton-pj4u8-sG.js";import"./Checkbox-CIZgw43L.js";import"./useValueChanged-DsVYoZzQ.js";import"./CollapsiblePanel-CD-DCHTk.js";import"./MultiColumnSortDialog-DzNPYbFj.js";import"./MenuTrigger-Th6t6h5N.js";import"./CompositeItem-DGaDgjtW.js";import"./ToolbarRootContext-6CMk-K6X.js";import"./getDisabledMountTransitionStyles-ByNtjguw.js";import"./getPseudoElementBounds-DxvMtYMy.js";import"./chevron-down-CbDtZ0Pe.js";import"./index-BVNphcmg.js";import"./error-JdYnclCK.js";import"./BaseCbacBanner-BF0XBNK3.js";import"./makeExternalStore-CbsSZTon.js";import"./Tooltip-B170VilI.js";import"./PopoverPopup-DNDK4_dy.js";import"./debounce-CPfb-Wa5.js";import"./tick-amhhThgk.js";import"./DropdownField-IKKiRqSx.js";import"./isEqual-DfHcaT7k.js";import"./withOsdkMetrics-BJrjEamM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

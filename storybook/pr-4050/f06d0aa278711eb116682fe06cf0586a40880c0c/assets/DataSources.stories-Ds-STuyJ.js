import{j as r}from"./iframe-CFV-nnj8.js";import{O as b}from"./object-table-CtxjKN9T.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CjiBZLdz.js";import{u as g}from"./useOsdkClient-X9M28KVd.js";import"./preload-helper-B6fyfr7c.js";import"./Table-BiYiUmOh.js";import"./index-vmaSH1sB.js";import"./Dialog-m9518HMg.js";import"./cross-QMVU-YJc.js";import"./svgIconContainer-D_-2ttXX.js";import"./useBaseUiId-WVaYu2-M.js";import"./InternalBackdrop-Dexmpq_6.js";import"./composite-DJp6IOoD.js";import"./index-BjUsjKoR.js";import"./index-Dyi_6i64.js";import"./index-BFvHZIyN.js";import"./useEventCallback-M1vMQgZ7.js";import"./SkeletonBar-x6A5LKdf.js";import"./LoadingCell-vaVMC9Zh.js";import"./ColumnConfigDialog-CNQb7nr0.js";import"./DraggableList-gITP3HIV.js";import"./search-DZmS-pfQ.js";import"./Input-KbJwk9Nd.js";import"./useControlled-BOSfLjyK.js";import"./Button-B3yPaUxl.js";import"./small-cross-B17ASmwu.js";import"./ActionButton-DNioPXe_.js";import"./Checkbox-QDGReIJr.js";import"./useValueChanged-DWC6YrTv.js";import"./CollapsiblePanel-TbSN7Ilj.js";import"./MultiColumnSortDialog-J02hCAYj.js";import"./MenuTrigger-B2SznUJx.js";import"./CompositeItem-C3ap8dp1.js";import"./ToolbarRootContext-BsgEetLb.js";import"./getDisabledMountTransitionStyles-DE-GPIVs.js";import"./getPseudoElementBounds-g83biV_s.js";import"./chevron-down-14_leR3A.js";import"./index-DsD3GjJA.js";import"./error-CPA32RNg.js";import"./BaseCbacBanner-DUJz5Dl3.js";import"./makeExternalStore-BLm3eYi3.js";import"./Tooltip-DZQrwu44.js";import"./PopoverPopup-93SM5qMU.js";import"./debounce-DDlfQ6-b.js";import"./tick-DCGGFRpD.js";import"./DropdownField-CFseBlqH.js";import"./isEqual-TFc4XBg9.js";import"./withOsdkMetrics-cGR_rgDD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

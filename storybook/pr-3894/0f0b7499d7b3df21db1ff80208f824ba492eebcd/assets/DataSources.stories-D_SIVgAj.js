import{j as r}from"./iframe-C7GOuxD1.js";import{O as b}from"./object-table-dWlD71lL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BFLGSIpm.js";import{u as g}from"./useOsdkClient-DfGQp-uN.js";import"./preload-helper-cLq0tmXV.js";import"./Table-L0bmwFCN.js";import"./index-DBBBWmqo.js";import"./Dialog-BDIg23NE.js";import"./cross-CeilH9rC.js";import"./svgIconContainer-C5oTgJel.js";import"./useBaseUiId-BenimXYg.js";import"./InternalBackdrop-BVf0vh6D.js";import"./composite-Cgb7pd84.js";import"./index-CQ4MzVYN.js";import"./index-DuOry3-s.js";import"./index-CS8Y0uId.js";import"./useEventCallback-BjL9jj3Y.js";import"./SkeletonBar-T4H5mM_R.js";import"./LoadingCell-BjFAbchK.js";import"./ColumnConfigDialog-I-C9Eoid.js";import"./DraggableList-D5qaZpJa.js";import"./search-B3SFcxMO.js";import"./Input-D4NdRTVJ.js";import"./useControlled-B_f3t71o.js";import"./Button-BUb3i5ek.js";import"./small-cross-DxtvnSNv.js";import"./ActionButton-nA6tqUpX.js";import"./Checkbox-Cz1MnAyf.js";import"./useValueChanged-BrLcnIBL.js";import"./CollapsiblePanel-C8GrEU9w.js";import"./MultiColumnSortDialog-DZH5EtZC.js";import"./MenuTrigger-h0mNM3q6.js";import"./CompositeItem-CyvxmxVc.js";import"./ToolbarRootContext-BdzdDLJF.js";import"./getDisabledMountTransitionStyles-9hFn6TYo.js";import"./getPseudoElementBounds-DmIzNuzx.js";import"./chevron-down-D0zt0lGj.js";import"./index-DJdnGM3o.js";import"./error-Gwb1RVKo.js";import"./BaseCbacBanner-DnINnSdh.js";import"./makeExternalStore-Bn6Cuzy6.js";import"./Tooltip-CPPwKixL.js";import"./PopoverPopup-CXEQhiRY.js";import"./debounce-Bny3E4j5.js";import"./tick-CQmS5E0-.js";import"./DropdownField-hrh1cG0I.js";import"./isEqual-ic_Rm2u_.js";import"./withOsdkMetrics-BaeX4vAH.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

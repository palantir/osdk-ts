import{j as r}from"./iframe-iqQU8bOf.js";import{O as b}from"./object-table-CLGuzBvK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dwwkp54V.js";import{u as g}from"./useOsdkClient-DDjfUp_X.js";import"./preload-helper-BsUPb6pd.js";import"./Table-BvjcAQ1n.js";import"./index-CqiIIsfb.js";import"./Dialog-D8UQASn9.js";import"./cross-BerI_bTK.js";import"./svgIconContainer-BNsXYGV2.js";import"./useBaseUiId-CpmA_-bG.js";import"./InternalBackdrop-CVRFuPTa.js";import"./composite-DdOT0bda.js";import"./index-CGAj3FTo.js";import"./index-BTBXmSST.js";import"./index-CQuthkbU.js";import"./useEventCallback-2CRWEol-.js";import"./SkeletonBar-CW-zZ-1l.js";import"./LoadingCell-D9s6QbDP.js";import"./ColumnConfigDialog-D9auHLbs.js";import"./DraggableList-B--3EQEp.js";import"./search-CaykVUN2.js";import"./Input-BRlYFZYm.js";import"./useControlled-DJ8i4enG.js";import"./isEqual-M1ueKsIc.js";import"./isObject-m-8uk5lt.js";import"./Button-DJTByFtP.js";import"./ActionButton-BcPc25rY.js";import"./Checkbox-L58W5cer.js";import"./useValueChanged-DKI8DEgp.js";import"./CollapsiblePanel-CBqaiLbh.js";import"./MultiColumnSortDialog-BIxsHsWK.js";import"./MenuTrigger-CutPpTa2.js";import"./CompositeItem-cDtNESeM.js";import"./ToolbarRootContext-BBwxdbAq.js";import"./getDisabledMountTransitionStyles-BLE9Dl1n.js";import"./getPseudoElementBounds-mTQudAgY.js";import"./chevron-down-Clf6HxH4.js";import"./index-CqkT5pyQ.js";import"./error-BwFxT3aH.js";import"./BaseCbacBanner-j46F3evV.js";import"./makeExternalStore-CKVk4GKk.js";import"./Tooltip-8UlSd3jK.js";import"./PopoverPopup-BIpN2UoJ.js";import"./toNumber-D00XgMT3.js";import"./tick-H9zxDrWg.js";import"./DropdownField-BnJB5e9x.js";import"./withOsdkMetrics-b_xHbubF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

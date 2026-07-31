import{j as r}from"./iframe-CVbJrMx7.js";import{O as b}from"./object-table-Bcho5ZdX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-jFibgA7u.js";import{u as g}from"./useOsdkClient-RliEKiAs.js";import"./preload-helper-Bi2CkPaH.js";import"./Table-Dgj-KEc-.js";import"./index-4zqcjDaD.js";import"./Dialog-Ctn42VeV.js";import"./cross-CMD59SEE.js";import"./svgIconContainer-CSuEqcx2.js";import"./useBaseUiId-6l5ZMBvp.js";import"./InternalBackdrop-D0LdYj0Q.js";import"./composite-DU8HRqMQ.js";import"./index-ByBvz6yB.js";import"./index-BBjaT9-B.js";import"./index-Bvv2KJcj.js";import"./useEventCallback-DnwhgWiF.js";import"./SkeletonBar-vVakX1FI.js";import"./LoadingCell-BJeluyL9.js";import"./ColumnConfigDialog-B8n0OJ5R.js";import"./DraggableList-DAQv2E1C.js";import"./search-BIKIgIOT.js";import"./Input-CCWoJTpA.js";import"./useControlled-BjiYNtSn.js";import"./isEqual-DBIrGstF.js";import"./isObject-DyOuyG5A.js";import"./Button-BRR8MBDs.js";import"./ActionButton-JTtsLIS3.js";import"./Checkbox-DDEE0C56.js";import"./useValueChanged-DZlo1eLL.js";import"./CollapsiblePanel-C6pZJrt2.js";import"./MultiColumnSortDialog-BDVS65V3.js";import"./MenuTrigger-CCHLTuVP.js";import"./CompositeItem-DgkAeX91.js";import"./ToolbarRootContext-BQ1Os6dU.js";import"./getDisabledMountTransitionStyles-DXIS3a3T.js";import"./getPseudoElementBounds-CNmedg3f.js";import"./chevron-down-B7HicDSz.js";import"./index-DNvASVW6.js";import"./error-CnlAvsn-.js";import"./BaseCbacBanner-DQCr1LoZ.js";import"./makeExternalStore-vLSrVJKb.js";import"./Tooltip-BZlE1UbS.js";import"./PopoverPopup-16X7FiIT.js";import"./toNumber-DTHC56UF.js";import"./tick-DNFy_FvK.js";import"./DropdownField-D0P5-rPf.js";import"./withOsdkMetrics-DuX2Gvrb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

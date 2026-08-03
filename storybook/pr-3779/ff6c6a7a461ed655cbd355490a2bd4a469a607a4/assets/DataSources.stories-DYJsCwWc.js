import{j as r}from"./iframe-BDk1IBq0.js";import{O as b}from"./object-table-DjkcdMg4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BGP4FY5i.js";import{u as g}from"./useOsdkClient-B4kJdbyd.js";import"./preload-helper-BTKlFRVT.js";import"./Table-DE3ljT2V.js";import"./index-D7NXbx8O.js";import"./Dialog-cZAFZTwe.js";import"./cross-Yxj_6q4K.js";import"./svgIconContainer-DLmZ_O8B.js";import"./useBaseUiId-DMGSqHE1.js";import"./InternalBackdrop-C03lckkn.js";import"./composite-DMaSIPCu.js";import"./index-Cp3LCsCN.js";import"./index-Ck8z4N77.js";import"./index-DA9cjqaH.js";import"./useEventCallback-BEMfQixj.js";import"./SkeletonBar-Dw7U1fP3.js";import"./LoadingCell-CxrasSrx.js";import"./ColumnConfigDialog-Fs6CZohf.js";import"./DraggableList-BFFHsIkL.js";import"./search-T09tFGVD.js";import"./Input-PeixbVvf.js";import"./useControlled-DBk8iBgn.js";import"./isEqual-C9Q3zzlP.js";import"./isObject-w7NVVWuX.js";import"./Button-D-40IJBp.js";import"./ActionButton-DLjH0OdS.js";import"./Checkbox-CvcVswea.js";import"./useValueChanged-DaOmXYwX.js";import"./CollapsiblePanel-BF9AllQ8.js";import"./MultiColumnSortDialog-Bxdps7Tw.js";import"./MenuTrigger-FvGzwaZM.js";import"./CompositeItem-DqtdQCsE.js";import"./ToolbarRootContext-DIhUV_VV.js";import"./getDisabledMountTransitionStyles-C2C8eikI.js";import"./getPseudoElementBounds-B7o_2H9U.js";import"./chevron-down-ewV3babK.js";import"./index-DBlapOjg.js";import"./error-B4CqJvC_.js";import"./BaseCbacBanner-BSZQ4RtC.js";import"./makeExternalStore-1Ey3n_is.js";import"./Tooltip-B_ggEf85.js";import"./PopoverPopup-DOdenRZd.js";import"./toNumber-CNNoyzkY.js";import"./tick-CMR_boep.js";import"./DropdownField-59d9SWFp.js";import"./withOsdkMetrics-CfKSz8RV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

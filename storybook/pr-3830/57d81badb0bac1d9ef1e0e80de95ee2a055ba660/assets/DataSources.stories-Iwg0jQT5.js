import{j as r}from"./iframe-dUh8zyts.js";import{O as b}from"./object-table-h6uZIDX8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ClSU4uFi.js";import{u as g}from"./useOsdkClient-wiEyyrMf.js";import"./preload-helper-BXymFDmG.js";import"./Table-DeI48HrA.js";import"./index-CJwC7SLj.js";import"./Dialog-BAqQTIU0.js";import"./cross-v5mQEa5y.js";import"./svgIconContainer-DPzpipae.js";import"./useBaseUiId-DxJUnLpO.js";import"./InternalBackdrop-CWW-WkKK.js";import"./composite-DxnDX5iy.js";import"./index-KzBmUVTE.js";import"./index-JHVUTeks.js";import"./index-CQjzSTkR.js";import"./useEventCallback-DyVi0gM7.js";import"./SkeletonBar-B4d9mbjS.js";import"./LoadingCell-CYWP9Nnk.js";import"./ColumnConfigDialog-CTYZhuGD.js";import"./DraggableList-BBdgSxBn.js";import"./search-CWKr1ylo.js";import"./Input-DaNsYN7f.js";import"./useControlled-Buwyj981.js";import"./isEqual-CpoLP9vt.js";import"./isObject-CVlNV3JH.js";import"./Button-1AIBoBve.js";import"./ActionButton-HZveGBx3.js";import"./Checkbox-DAXF_oU2.js";import"./useValueChanged-C9SsLJ2V.js";import"./CollapsiblePanel-uTsFkh66.js";import"./MultiColumnSortDialog-oTUQOLnP.js";import"./MenuTrigger-Cq3Awx9E.js";import"./CompositeItem-BT68WWE1.js";import"./ToolbarRootContext-DkfpkdTH.js";import"./getDisabledMountTransitionStyles-xVfndiNH.js";import"./getPseudoElementBounds-BhdrgAhY.js";import"./chevron-down-B7jyoN5P.js";import"./index-JxUIMAws.js";import"./error-CfTpnqLQ.js";import"./BaseCbacBanner-z8y6g9KL.js";import"./makeExternalStore-D8wmXuZm.js";import"./Tooltip-BtZMYdIX.js";import"./PopoverPopup-C74uJ0i4.js";import"./toNumber-BcZWTPFC.js";import"./tick-CBTFlChJ.js";import"./DropdownField-BQlVEKwT.js";import"./withOsdkMetrics-B-vQVve6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-CtbKcdah.js";import{O as b}from"./object-table-BcacSCN4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bdr2-qzf.js";import{u as g}from"./useOsdkClient-DtvN553N.js";import"./preload-helper-EU-ENyZQ.js";import"./Table-DDvi8H0_.js";import"./index-CwYTowdT.js";import"./Dialog-B9V_CHZo.js";import"./cross-DpOV5wae.js";import"./svgIconContainer-Cet6vu_r.js";import"./useBaseUiId-0bJN_qdd.js";import"./InternalBackdrop-DchFpK7_.js";import"./composite-BHhkxlsM.js";import"./index-DZQwww7d.js";import"./index-fOPXI3EL.js";import"./index-BrPDDtPb.js";import"./useEventCallback-DH2mBgYy.js";import"./SkeletonBar-DgWwIArl.js";import"./LoadingCell-DexMxGnO.js";import"./ColumnConfigDialog-CE99YesT.js";import"./DraggableList-DQiUbEHW.js";import"./search-BwzKNgs0.js";import"./Input-JG5cgvZN.js";import"./useControlled-BcslQkqc.js";import"./Button-B-vHHAok.js";import"./small-cross-BIpZh2I9.js";import"./ActionButton-BMI6qLuN.js";import"./Checkbox-DzgQD_l6.js";import"./useValueChanged-C9bAZlcS.js";import"./CollapsiblePanel-BmBuCIHD.js";import"./MultiColumnSortDialog-DoC4d9gu.js";import"./MenuTrigger-DXL8cJrO.js";import"./CompositeItem-lZSk-3LJ.js";import"./ToolbarRootContext-1H0rLmo4.js";import"./getDisabledMountTransitionStyles-Bx8H60NU.js";import"./getPseudoElementBounds-BU-GKez8.js";import"./chevron-down-DBDRq4_M.js";import"./index-ePGgCjvy.js";import"./error-D69Vfmfe.js";import"./BaseCbacBanner-CXbIB7CA.js";import"./makeExternalStore-QdIdUwH6.js";import"./Tooltip-i8kW-oFE.js";import"./PopoverPopup-B4NW6jDW.js";import"./debounce-5R1Uvz-P.js";import"./tick-BOLhtKSX.js";import"./DropdownField-B8IW1RM3.js";import"./isEqual-DxGVR0hC.js";import"./withOsdkMetrics-BjcrUEVS.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

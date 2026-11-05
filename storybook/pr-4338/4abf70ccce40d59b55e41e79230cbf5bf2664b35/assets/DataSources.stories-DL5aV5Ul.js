import{j as r}from"./iframe-BWfq1Ita.js";import{O as b}from"./object-table-lRJ1r0PT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BU1IrVya.js";import{u as g}from"./useOsdkClient-DUSv4hnn.js";import"./preload-helper-Cez3EkKO.js";import"./Table-h_h1Pdj1.js";import"./index-CsmCBiFc.js";import"./Dialog-D0flTu-Q.js";import"./cross-B2opFBMX.js";import"./svgIconContainer-3Xe0sM70.js";import"./useBaseUiId-AQZerCPK.js";import"./InternalBackdrop-BU6CR9JH.js";import"./composite-BxLIdtja.js";import"./index-Ct2QTZpq.js";import"./index-ZI1bO9GZ.js";import"./index-DzTj4bDT.js";import"./useEventCallback-D1-lsQmd.js";import"./SkeletonBar-DKgRYbiF.js";import"./LoadingCell-Ca170tnn.js";import"./ColumnConfigDialog-D_PyS5d8.js";import"./DraggableList-D6jKmbrg.js";import"./search-BJDwKHsZ.js";import"./Input-DsXOqmoY.js";import"./useControlled-zsZ0Gi2e.js";import"./Button-CDzVT-19.js";import"./small-cross-BQAUdHVP.js";import"./ActionButton-DTQZUzqS.js";import"./Checkbox-pOBDprj4.js";import"./useValueChanged-DcWOn6Em.js";import"./CollapsiblePanel-CRz6BZMc.js";import"./MultiColumnSortDialog-CzoSa3-D.js";import"./MenuTrigger-C1ubLXg7.js";import"./CompositeItem-CT28f8sD.js";import"./ToolbarRootContext-BZs-vXaE.js";import"./getDisabledMountTransitionStyles-BZXhkuBl.js";import"./getPseudoElementBounds-vhJ9Xo_I.js";import"./chevron-down-D-1SOefz.js";import"./index-DKbeeSxy.js";import"./error-D4A2zaxG.js";import"./BaseCbacBanner-DJr1V5NM.js";import"./makeExternalStore-ByJ1Qj-8.js";import"./Tooltip-CDrLWobn.js";import"./PopoverPopup-uC42OBYn.js";import"./debounce-BMBkBKqd.js";import"./tick-DUbrHsOa.js";import"./DropdownField-Cxy9XoQ6.js";import"./isEqual-D4nsmfx_.js";import"./withOsdkMetrics-CVeraRoA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe--zC_rNSE.js";import{O as b}from"./object-table-BOe9lA2v.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CWOIEPDP.js";import{u as g}from"./useOsdkClient-Dz2X6s2_.js";import"./preload-helper-DYnZD4Bp.js";import"./Table-CTrKgZzE.js";import"./index-C7vK7TKT.js";import"./Dialog-pyccm_Sl.js";import"./cross-psL1fqiM.js";import"./svgIconContainer-BSLGGDPy.js";import"./useBaseUiId-Du6_ka1U.js";import"./InternalBackdrop-BENyzdBi.js";import"./composite-D6i-F4zZ.js";import"./index-BzW3EPJ0.js";import"./index-C2WM2yYl.js";import"./index-BfXmFMou.js";import"./useEventCallback-XVofj3Q3.js";import"./SkeletonBar-YNg-qpBa.js";import"./LoadingCell-PYrIJpcx.js";import"./ColumnConfigDialog-BuMqvrVq.js";import"./DraggableList-CKyNAhn0.js";import"./search-9tv9kX9R.js";import"./Input-D1rn4ByC.js";import"./useControlled-DosfrPgq.js";import"./isEqual-Cb3ycsU3.js";import"./isObject-ByfmM9yJ.js";import"./Button-9EpLya_p.js";import"./ActionButton-DKUYSo_8.js";import"./Checkbox-D3v20XFe.js";import"./useValueChanged-mNtMEyK1.js";import"./CollapsiblePanel-DZjfEAb-.js";import"./MultiColumnSortDialog-k17NjXzm.js";import"./MenuTrigger-D1QoqV1b.js";import"./CompositeItem-CFehnZQL.js";import"./ToolbarRootContext-D5d-Ayel.js";import"./getDisabledMountTransitionStyles-PGxk2u3W.js";import"./getPseudoElementBounds-BeiAjeWH.js";import"./chevron-down-nViOd0cr.js";import"./index-D27uMw8-.js";import"./error-d8Uq0Jbt.js";import"./BaseCbacBanner-BgjAsq5O.js";import"./makeExternalStore-CC4dIOh5.js";import"./Tooltip-OnHOWk1D.js";import"./PopoverPopup-CeUgEchc.js";import"./toNumber-CkdIolk1.js";import"./tick-DSSIsItL.js";import"./DropdownField-wdLac42K.js";import"./withOsdkMetrics-CljqM64x.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

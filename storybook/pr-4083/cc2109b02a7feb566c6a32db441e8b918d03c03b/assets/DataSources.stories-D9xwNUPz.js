import{j as r}from"./iframe-CK-e_P5n.js";import{O as b}from"./object-table-DhEk3d9R.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DrbYl4GC.js";import{u as g}from"./useOsdkClient-TQnWVOaJ.js";import"./preload-helper-CdfmlsWT.js";import"./Table-BsqGsGlo.js";import"./index-D1NbsZsT.js";import"./Dialog-DGPTJcg5.js";import"./cross-DdB0B2DT.js";import"./svgIconContainer-CUe9azR3.js";import"./useBaseUiId-B6Thtd3O.js";import"./InternalBackdrop--jYqCsuV.js";import"./composite-CF-uZGHD.js";import"./index-BmOKXyuk.js";import"./index-BAl9UwQ_.js";import"./index-BI0nF061.js";import"./useEventCallback-DLi0pkHc.js";import"./SkeletonBar-CJ14_0Ym.js";import"./LoadingCell-C3R3Sh3u.js";import"./ColumnConfigDialog-CPUbQB7h.js";import"./DraggableList-CD7OhgBJ.js";import"./search-D8NL3mRl.js";import"./Input-DGmd96_F.js";import"./useControlled-flZbgJml.js";import"./Button-DnxkikPI.js";import"./small-cross-D6eJtQvT.js";import"./ActionButton-2BJhUFRZ.js";import"./Checkbox-CIXQ1R8k.js";import"./useValueChanged-DBUoKfVc.js";import"./CollapsiblePanel-Be9_urdY.js";import"./MultiColumnSortDialog-B4hxLfgp.js";import"./MenuTrigger-D5vobJQ0.js";import"./CompositeItem-BRNQwarA.js";import"./ToolbarRootContext-BzLZyYhL.js";import"./getDisabledMountTransitionStyles-GfO_uBTj.js";import"./getPseudoElementBounds-9YvIcjPC.js";import"./chevron-down-D3RJwgIP.js";import"./index--at66w-A.js";import"./error-BFAdc9Td.js";import"./BaseCbacBanner-D-KqGODx.js";import"./makeExternalStore-Bf6pa7D3.js";import"./Tooltip-RRrzeJA8.js";import"./PopoverPopup-DXgU2mtn.js";import"./debounce-CnX0V1iA.js";import"./tick-BVNELgej.js";import"./DropdownField-BncLboR3.js";import"./isEqual-CZA0FnVD.js";import"./withOsdkMetrics-DFjAQMzo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

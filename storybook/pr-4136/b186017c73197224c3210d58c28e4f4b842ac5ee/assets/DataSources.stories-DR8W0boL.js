import{j as r}from"./iframe-J9lCjP1k.js";import{O as b}from"./object-table-B1D_kq2U.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DMJdwtPz.js";import{u as g}from"./useOsdkClient-DkjXMcnc.js";import"./preload-helper-BXO0w5mF.js";import"./Table-BoAj-adh.js";import"./index-xbscF9ue.js";import"./Dialog-pqV7JqzY.js";import"./cross-D1CxmRAM.js";import"./svgIconContainer-CLwoVSXr.js";import"./useBaseUiId-BbYI3Fho.js";import"./InternalBackdrop-DxiO-ikG.js";import"./composite-DI_eiBD4.js";import"./index-BcwSN1Tg.js";import"./index-DQUI6WyQ.js";import"./index-DJ2o0-9_.js";import"./useEventCallback-CJtT_lpI.js";import"./SkeletonBar-Cr_Ejt-L.js";import"./LoadingCell-C9uf2PSw.js";import"./ColumnConfigDialog-C6PFIrJ6.js";import"./DraggableList-DJr8XZbG.js";import"./search-Bzg3xwEF.js";import"./Input-Ba7RqXqy.js";import"./useControlled-DItBXz5T.js";import"./Button-VEce61GE.js";import"./small-cross-DiEF7RM6.js";import"./ActionButton-rPtQIhsU.js";import"./Checkbox-WOx6sV-J.js";import"./useValueChanged-hS01fJLb.js";import"./CollapsiblePanel-CDBi8wiI.js";import"./MultiColumnSortDialog-qDXFaklj.js";import"./MenuTrigger-CuWsZUCH.js";import"./CompositeItem-C-k99tdq.js";import"./ToolbarRootContext-DRYgzWjU.js";import"./getDisabledMountTransitionStyles-BgGFzdkL.js";import"./getPseudoElementBounds-CMNlX2Q2.js";import"./chevron-down-C5IBZF4F.js";import"./index-5j_M01Uz.js";import"./error-XzIXc-ko.js";import"./BaseCbacBanner-D_4wtvg0.js";import"./makeExternalStore-j1jcO9d9.js";import"./Tooltip-BLJkCuf9.js";import"./PopoverPopup-BG_PpWHa.js";import"./debounce-DDbncj5R.js";import"./tick-BYtBOYaj.js";import"./DropdownField-HoWLtdUo.js";import"./isEqual-CcO5n7ZV.js";import"./withOsdkMetrics-C6QFCRSF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

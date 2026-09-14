import{j as r}from"./iframe-Elh15CPO.js";import{O as b}from"./object-table-DmOwYA3a.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DWT0IyQp.js";import{u as g}from"./useOsdkClient-CBxlc9T9.js";import"./preload-helper-Df_Un8ev.js";import"./Table-CAK4NNbF.js";import"./index-DTYWX8Gd.js";import"./Dialog-CeSL8zDR.js";import"./cross-W2wOrtb4.js";import"./svgIconContainer-BzS94m4s.js";import"./useBaseUiId-DnwRjc07.js";import"./InternalBackdrop-DMjCkzTC.js";import"./composite-BSEtTnKL.js";import"./index-Doj8EHeU.js";import"./index-DPHcjEKY.js";import"./index-DWJg2tV_.js";import"./useEventCallback-DN9b37tD.js";import"./SkeletonBar-C40l-VqG.js";import"./LoadingCell-wEUeQ0dk.js";import"./ColumnConfigDialog-aE5C0mPI.js";import"./DraggableList-DCxwSfnC.js";import"./search-O3qV3BZP.js";import"./Input-C_Udp-5V.js";import"./useControlled-enifNsDV.js";import"./Button-D4CjXtEU.js";import"./small-cross-BRdYRDe1.js";import"./ActionButton-DAxrmY5m.js";import"./Checkbox-DFLi9i_0.js";import"./useValueChanged-CY4pDDqC.js";import"./CollapsiblePanel-BuwRJmVL.js";import"./MultiColumnSortDialog-BOZsKGUG.js";import"./MenuTrigger-Bo9Jct4u.js";import"./CompositeItem-CzwKTDvK.js";import"./ToolbarRootContext--FtOM0jf.js";import"./getDisabledMountTransitionStyles-BZhGmJyD.js";import"./getPseudoElementBounds-DHu47n9G.js";import"./chevron-down-vAkfWkS9.js";import"./index-B3O3SB4a.js";import"./error-B_1KE3-h.js";import"./BaseCbacBanner-B-e4n9MM.js";import"./makeExternalStore-DrH3viZo.js";import"./Tooltip-CDuc6-QX.js";import"./PopoverPopup-CmeyaCH5.js";import"./debounce-BkKFILxU.js";import"./tick-K9jJxqF2.js";import"./DropdownField-CL6X_FSf.js";import"./isEqual-BfoLWsoX.js";import"./withOsdkMetrics-SkuWgDWO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

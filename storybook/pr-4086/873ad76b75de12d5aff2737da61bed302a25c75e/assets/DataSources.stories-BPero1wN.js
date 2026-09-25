import{j as r}from"./iframe-DaD-kZgD.js";import{O as b}from"./object-table-BqGGw46Q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BagHfIlh.js";import{u as g}from"./useOsdkClient-BpNsbtIJ.js";import"./preload-helper-B5rjj0RW.js";import"./Table-DMqFeCUw.js";import"./index-BunTbxSe.js";import"./Dialog-CLyz64vM.js";import"./cross-VN_C6F1c.js";import"./svgIconContainer-BuHjzoHd.js";import"./useBaseUiId-D_mAJVOg.js";import"./InternalBackdrop-D9rvDhcY.js";import"./composite-CvSGc8uG.js";import"./index-BLudVFJt.js";import"./index-CibRS9EP.js";import"./index-EjKiPaYv.js";import"./useEventCallback-DZwsnGgj.js";import"./SkeletonBar-CMKv95YA.js";import"./LoadingCell-BAlyAEa4.js";import"./ColumnConfigDialog-DRpER2af.js";import"./DraggableList-CxwPaX4P.js";import"./search-Ba2RAVKf.js";import"./Input-DoThMFAr.js";import"./useControlled-DETcBtyj.js";import"./Button-DIAY5YBq.js";import"./small-cross-3C_RgODH.js";import"./ActionButton-CGL0xlBn.js";import"./Checkbox-BShadSqy.js";import"./useValueChanged-BpD_v2NO.js";import"./CollapsiblePanel-DUX36nEl.js";import"./MultiColumnSortDialog-CNcYfXDj.js";import"./MenuTrigger-BL7Lg1OE.js";import"./CompositeItem-vvOtpWtM.js";import"./ToolbarRootContext-BppVD4NW.js";import"./getDisabledMountTransitionStyles-uJHk-LBD.js";import"./getPseudoElementBounds-DYbJ4f7q.js";import"./chevron-down-CvKLjMsu.js";import"./index-BBz_uzYR.js";import"./error-CF8X_kHA.js";import"./BaseCbacBanner-Z2FnoZWA.js";import"./makeExternalStore-DiTJ7dI9.js";import"./Tooltip-DSYkY7dD.js";import"./PopoverPopup-COghbQef.js";import"./debounce-Ry2gNXo0.js";import"./tick-BlrBnSjV.js";import"./DropdownField-To6MSkSU.js";import"./isEqual-PjwQKt2P.js";import"./withOsdkMetrics-D6sZIqzZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-B_i7Ph77.js";import{O as b}from"./object-table-Dqxg3C0T.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D4xdxzmC.js";import{u as g}from"./useOsdkClient-DdwrseQe.js";import"./preload-helper-DvjJ0SzX.js";import"./Table-DUecyy4E.js";import"./index-COajzjZ8.js";import"./Dialog-Bkf6fLTO.js";import"./cross-r8gHAdxN.js";import"./svgIconContainer-F3PywaHC.js";import"./useBaseUiId-CW69tl4R.js";import"./InternalBackdrop-BWf_EDHi.js";import"./composite-uqQjgKuY.js";import"./index-BfVetZX7.js";import"./index-CKxO46Y-.js";import"./index-ChNkp7Fd.js";import"./useEventCallback-C6UUjjRV.js";import"./SkeletonBar-BE3AUhJe.js";import"./LoadingCell-By6GkYHN.js";import"./ColumnConfigDialog-BImhbnq8.js";import"./DraggableList-CRRNRTpO.js";import"./search-Ci82BY-M.js";import"./Input-Dl5sH1Q7.js";import"./useControlled-CPBNOwGg.js";import"./Button-D37UVdN3.js";import"./small-cross-B6VZzdKR.js";import"./ActionButton-BElQCvpZ.js";import"./Checkbox-BhU4N9_z.js";import"./useValueChanged-BtgVct8c.js";import"./CollapsiblePanel-t-tCNPWx.js";import"./MultiColumnSortDialog-CTqfEDWn.js";import"./MenuTrigger-CY1YIzS_.js";import"./CompositeItem-EZxEWVoS.js";import"./ToolbarRootContext-0-u9G15j.js";import"./getDisabledMountTransitionStyles-1rLXg44K.js";import"./getPseudoElementBounds-aFk6WU6_.js";import"./chevron-down-BOncWiCm.js";import"./index-DvLIeE9l.js";import"./error-DMPOuvoW.js";import"./BaseCbacBanner-DAgiVInW.js";import"./makeExternalStore-Bzou7Lqu.js";import"./Tooltip-geVxKkMd.js";import"./PopoverPopup-DZqF5shI.js";import"./debounce-oLXmJ61g.js";import"./tick-zFsHhUQl.js";import"./DropdownField-DuoCpizZ.js";import"./isEqual-AN1PSN9E.js";import"./withOsdkMetrics-DGIAIiU_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

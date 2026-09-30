import{j as r}from"./iframe-UMA_W4zg.js";import{O as b}from"./object-table-BKKDI_ri.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BpOZnusH.js";import{u as g}from"./useOsdkClient-DJyPXQs4.js";import"./preload-helper-DaWmOC6j.js";import"./Table-BGvWPyfA.js";import"./index-DErLZjti.js";import"./Dialog-BQYk3Xuz.js";import"./cross-uHksr5pp.js";import"./svgIconContainer-9DAz-xsT.js";import"./useBaseUiId-DrNqzCDV.js";import"./InternalBackdrop-Cv-jCIPc.js";import"./composite-cvyf7rpJ.js";import"./index-Dh7ukoT2.js";import"./index-CEcWMbm3.js";import"./index-B3bK0vsc.js";import"./useEventCallback-BylinRJz.js";import"./SkeletonBar-C7upQ1oN.js";import"./LoadingCell-C5zsmtCI.js";import"./ColumnConfigDialog-CkgLU6qt.js";import"./DraggableList-Bpq0lEEU.js";import"./search-DDqiAHNJ.js";import"./Input-B7UvCAbi.js";import"./useControlled-CE_jt1bn.js";import"./Button-CX0KG7k8.js";import"./small-cross-CzUurzMY.js";import"./ActionButton-B7RzNoqN.js";import"./Checkbox-Aalf-Nva.js";import"./useValueChanged-BNApxWdw.js";import"./CollapsiblePanel-CrqQkYc4.js";import"./MultiColumnSortDialog-TIdtig3-.js";import"./MenuTrigger-Ct962EWD.js";import"./CompositeItem-CW8dWwRY.js";import"./ToolbarRootContext-BoABXtXA.js";import"./getDisabledMountTransitionStyles-BxLbi0RQ.js";import"./getPseudoElementBounds-DNHUImXR.js";import"./chevron-down-Bl-z4KIc.js";import"./index-CpBKtjMD.js";import"./error-CSAcfTyc.js";import"./BaseCbacBanner-CMohmlg6.js";import"./makeExternalStore-Cw5EimAG.js";import"./Tooltip-CRExDwDA.js";import"./PopoverPopup-9-F50C0V.js";import"./debounce-DbOnd40f.js";import"./tick-0wfK4xfn.js";import"./DropdownField-CPG2IfxA.js";import"./isEqual-D8Go71qV.js";import"./withOsdkMetrics-SDJh6Z2p.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

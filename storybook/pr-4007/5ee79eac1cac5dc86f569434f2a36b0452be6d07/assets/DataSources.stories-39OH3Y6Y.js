import{j as r}from"./iframe-CiHlxZKU.js";import{O as b}from"./object-table-C4dQmNBt.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CLYLx7Ia.js";import{u as g}from"./useOsdkClient-2Pjo08Xn.js";import"./preload-helper-3-eHC6Oh.js";import"./Table-ZtgXk0oU.js";import"./index-DVK1qKBA.js";import"./Dialog-jNCMq-Da.js";import"./cross-DnkNQUkT.js";import"./svgIconContainer-B7oTlJNo.js";import"./useBaseUiId-CYLsHClR.js";import"./InternalBackdrop-BJHbr0kT.js";import"./composite-BmdkrJdi.js";import"./index-DX1yHJ7e.js";import"./index-BpiTLOmA.js";import"./index-DpLMVXlm.js";import"./useEventCallback-7w4Pvi2m.js";import"./SkeletonBar-BXOdSqzb.js";import"./LoadingCell-BZyyuOIV.js";import"./ColumnConfigDialog-BlzoqZbI.js";import"./DraggableList-Bi0BBenO.js";import"./search-DGzvsSxy.js";import"./Input-WrV6nsUm.js";import"./useControlled-CSOYJAwm.js";import"./Button-79zi9HD3.js";import"./small-cross-BzAZpvdB.js";import"./ActionButton-B55oBZFt.js";import"./Checkbox-D3aGbVro.js";import"./useValueChanged-Dq-vng4U.js";import"./CollapsiblePanel-DvgzvRJe.js";import"./MultiColumnSortDialog-CXlcCZMY.js";import"./MenuTrigger-C9tdQe5I.js";import"./CompositeItem-BgmQxoYD.js";import"./ToolbarRootContext-COwKCexa.js";import"./getDisabledMountTransitionStyles-z4-ghzJd.js";import"./getPseudoElementBounds-TrAXZdgf.js";import"./chevron-down-7F-_gONV.js";import"./index-GfXRF7Uq.js";import"./error-BS001LJB.js";import"./BaseCbacBanner-DHTjEXE2.js";import"./makeExternalStore-BMposTlq.js";import"./Tooltip-kEePm4YO.js";import"./PopoverPopup-Dl2GoZ6p.js";import"./debounce-DxTEdiWN.js";import"./tick-CIMxzo_S.js";import"./DropdownField-DkSX7_zX.js";import"./isEqual-BXzVZVEC.js";import"./withOsdkMetrics-DOs-_cRC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

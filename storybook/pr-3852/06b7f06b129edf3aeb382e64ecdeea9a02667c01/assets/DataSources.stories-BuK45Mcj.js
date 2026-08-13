import{j as r}from"./iframe-BmFJOqc6.js";import{O as b}from"./object-table-H-W8mI66.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D7brIH8-.js";import{u as g}from"./useOsdkClient-CmamzJMC.js";import"./preload-helper-C_jr2zBl.js";import"./Table-BpHj1i1T.js";import"./index-3j69-5Ym.js";import"./Dialog-BHl_uah2.js";import"./cross-CKVqWa-w.js";import"./svgIconContainer-CMQoxDUu.js";import"./useBaseUiId-C5SRli-B.js";import"./InternalBackdrop-LfW5Mcwa.js";import"./composite-BoouiZdh.js";import"./index-DWnSWhJ9.js";import"./index-Cfv6AZs9.js";import"./index-DXpgb3R7.js";import"./useEventCallback-DxoETJUl.js";import"./SkeletonBar-BYmaDYvY.js";import"./LoadingCell-DDCR-xi8.js";import"./ColumnConfigDialog-B_xkXJJp.js";import"./DraggableList-BTBrHQlG.js";import"./search-CioqFqwa.js";import"./Input-BT2Zyp5m.js";import"./useControlled-L8rvP9al.js";import"./isEqual-Bzt_ultW.js";import"./isObject-wZOe6YRR.js";import"./Button-BBPh3cP6.js";import"./ActionButton-DQEgHTbw.js";import"./Checkbox-9fy7D2y_.js";import"./useValueChanged-CxlDIVDs.js";import"./CollapsiblePanel-C30yTyzX.js";import"./MultiColumnSortDialog-UzWZkrUO.js";import"./MenuTrigger-bCnbUhqU.js";import"./CompositeItem-CPVzsbMv.js";import"./ToolbarRootContext-Dryg-_tS.js";import"./getDisabledMountTransitionStyles-CCs1LxYN.js";import"./getPseudoElementBounds-CY2Q6OxG.js";import"./chevron-down-DWMFwiT1.js";import"./index-C3KliuNA.js";import"./error-l2yMMQM_.js";import"./BaseCbacBanner-Ho2FH0qL.js";import"./makeExternalStore-iaafROBl.js";import"./Tooltip-f0K72knV.js";import"./PopoverPopup-DZe7T4hw.js";import"./toNumber-D5o0NDBW.js";import"./tick-BPttWX0Q.js";import"./DropdownField-CzWm6Bt6.js";import"./withOsdkMetrics-BzcGzmjv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

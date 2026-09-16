import{j as r}from"./iframe-CWKtkIUB.js";import{O as b}from"./object-table-5R7mlYop.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-s8A5MDlL.js";import{u as g}from"./useOsdkClient-u9q269DO.js";import"./preload-helper-ipGJxtLm.js";import"./Table-C5DJbWx6.js";import"./index-DmJxPlh_.js";import"./Dialog-D-A3RiqJ.js";import"./cross-DEu5gm-s.js";import"./svgIconContainer-CNCTNhPA.js";import"./useBaseUiId-B8eULTI6.js";import"./InternalBackdrop-DGmr5HTr.js";import"./composite-CLrQ0Pw0.js";import"./index-Pd0hKwBH.js";import"./index-CDK29Ulj.js";import"./index-B7xDDX9i.js";import"./useEventCallback-CiKQuPHs.js";import"./SkeletonBar-loAgoXS5.js";import"./LoadingCell-Ctm-dPkr.js";import"./ColumnConfigDialog-ti5A_XUc.js";import"./DraggableList-D8bzxM_t.js";import"./search-D674kfs0.js";import"./Input-CX60mJQX.js";import"./useControlled-BMMn65Nk.js";import"./Button-BfO_B2Gb.js";import"./small-cross-BACObYvZ.js";import"./ActionButton-BoSuUP-h.js";import"./Checkbox-tCScO48D.js";import"./useValueChanged-C5pU5icH.js";import"./CollapsiblePanel-wQjTDLAh.js";import"./MultiColumnSortDialog-thIR0zTv.js";import"./MenuTrigger-DA9injW0.js";import"./CompositeItem-C2bCi6DR.js";import"./ToolbarRootContext-DoNt8TAQ.js";import"./getDisabledMountTransitionStyles-B3rYUkCj.js";import"./getPseudoElementBounds-W7L9XS3F.js";import"./chevron-down-lIwS08X8.js";import"./index-BG-YC_yo.js";import"./error-y4GKwRxO.js";import"./BaseCbacBanner-DAKVcN5l.js";import"./makeExternalStore-Cwu6Hqp2.js";import"./Tooltip-BPBtSQy6.js";import"./PopoverPopup-D7gPsbnN.js";import"./debounce-D1aK-pGn.js";import"./tick-c3wuZ6gm.js";import"./DropdownField-KGWqFfVd.js";import"./isEqual-C9GDj2JT.js";import"./withOsdkMetrics-LG6-R3uz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

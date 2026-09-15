import{j as r}from"./iframe-DQpCivO1.js";import{O as b}from"./object-table-CU8mywAw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cs3cCe8I.js";import{u as g}from"./useOsdkClient-CwqyybRI.js";import"./preload-helper-BNtpiPnv.js";import"./Table-38llNuJy.js";import"./index-DS8-D35g.js";import"./Dialog-Cu8mAO9_.js";import"./cross-Ccdwkdk3.js";import"./svgIconContainer-CxU-QT8u.js";import"./useBaseUiId-C8ulXah6.js";import"./InternalBackdrop-DLd7Lwe4.js";import"./composite-xfEh3o5g.js";import"./index-BKAa7pmt.js";import"./index-Dqn9XUWy.js";import"./index-DmKdPFBX.js";import"./useEventCallback-8OJUCRRT.js";import"./SkeletonBar-CjumgPcn.js";import"./LoadingCell-BVmS8W3w.js";import"./ColumnConfigDialog-DlUolUQ-.js";import"./DraggableList-y6afPaq6.js";import"./search-GD8U0S68.js";import"./Input-i7VlWrgO.js";import"./useControlled-LcZaVq-T.js";import"./Button-CstsYLg_.js";import"./small-cross-BRsClvfH.js";import"./ActionButton-DrMcD0_E.js";import"./Checkbox-CgtUdNtY.js";import"./useValueChanged-C2RXTXRu.js";import"./CollapsiblePanel-DboLvc9U.js";import"./MultiColumnSortDialog-B6-XrrkP.js";import"./MenuTrigger-DThFqPHZ.js";import"./CompositeItem-BwdYO-ps.js";import"./ToolbarRootContext-DQ_5rIHb.js";import"./getDisabledMountTransitionStyles-C-frLZTH.js";import"./getPseudoElementBounds-DDo7a-AL.js";import"./chevron-down-DfHD6Nmf.js";import"./index-CliSQRrA.js";import"./error-CRC1V3FY.js";import"./BaseCbacBanner-TTjkw73J.js";import"./makeExternalStore-CZgijSTY.js";import"./Tooltip-DlyF3AAY.js";import"./PopoverPopup-BQXF4BGx.js";import"./debounce--yNODiaS.js";import"./tick-BA8CGTis.js";import"./DropdownField-Or1B8bG-.js";import"./isEqual-DASnWbpg.js";import"./withOsdkMetrics-dKG6bw4N.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

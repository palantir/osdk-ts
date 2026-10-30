import{j as r}from"./iframe-BR4-xVYI.js";import{O as b}from"./object-table-3cpMyVSZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DmQORnr2.js";import{u as g}from"./useOsdkClient-CXmIXXsP.js";import"./preload-helper-DbBEOmrA.js";import"./Table-BXcklVqv.js";import"./index-Bl34zl0T.js";import"./Dialog-DJ-9aMTh.js";import"./cross-C0jaUfu0.js";import"./svgIconContainer-DsRlczG5.js";import"./useBaseUiId-BYzMy68a.js";import"./InternalBackdrop-BNRMpNwm.js";import"./composite-B5Ni56Yc.js";import"./index-CeuhUjnH.js";import"./index-ucjEhEXO.js";import"./index--n8M5GBW.js";import"./useEventCallback-CmAo7nrm.js";import"./SkeletonBar-B9zQOriA.js";import"./LoadingCell-lit_1UVA.js";import"./ColumnConfigDialog-CJy6PIYo.js";import"./DraggableList-Bvft9JGy.js";import"./search-WudRV3Lk.js";import"./Input-D7vx6zqX.js";import"./useControlled-DN7CYAB2.js";import"./Button-B43-ydWW.js";import"./small-cross-BeM5hQZj.js";import"./ActionButton-Dfm9fwti.js";import"./Checkbox-Zy4E_9pG.js";import"./useValueChanged-DfThrQO8.js";import"./CollapsiblePanel-Ceg7ith-.js";import"./MultiColumnSortDialog-M8x7mcq8.js";import"./MenuTrigger-DUcDUu6E.js";import"./CompositeItem-CeAvgtlv.js";import"./ToolbarRootContext-DPLqybB9.js";import"./getDisabledMountTransitionStyles-BCPsmVLX.js";import"./getPseudoElementBounds-DJ1Dele8.js";import"./chevron-down-B00usCld.js";import"./index-DEPbvTfn.js";import"./error-DEM7tD3T.js";import"./BaseCbacBanner-Bz-wy3-U.js";import"./makeExternalStore-BG7GijXm.js";import"./Tooltip-CY7AHoDM.js";import"./PopoverPopup-C1kMPgqS.js";import"./debounce-GtwJabeu.js";import"./tick-BIjGCOT-.js";import"./DropdownField-DjgoPeZ6.js";import"./isEqual-BBHofsAC.js";import"./withOsdkMetrics-kvzuwV_e.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

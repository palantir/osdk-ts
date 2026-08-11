import{j as r}from"./iframe-5Z3i0E9X.js";import{O as b}from"./object-table-DPTtzRmo.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DZoQwvt_.js";import{u as g}from"./useOsdkClient-CAUBTODW.js";import"./preload-helper-CxXp5K4w.js";import"./Table-BS_gimTg.js";import"./index-BfhbkjSI.js";import"./Dialog-BqgcU_l7.js";import"./cross-DZCL8gCN.js";import"./svgIconContainer-DvyPNWZq.js";import"./useBaseUiId-BlRYUEsQ.js";import"./InternalBackdrop-6-8lSj7Z.js";import"./composite-CSBuVBSk.js";import"./index-BPvT0TAi.js";import"./index-lKVM4LMn.js";import"./index-Dv5iqqQH.js";import"./useEventCallback-BJQewwS3.js";import"./SkeletonBar-D5JDKLXI.js";import"./LoadingCell-D3qvPcn9.js";import"./ColumnConfigDialog-D5mityMp.js";import"./DraggableList-DwY_-N0y.js";import"./search-D1X78FHj.js";import"./Input-Bt5W6Bbn.js";import"./useControlled-Q_YoD09k.js";import"./isEqual-DOXwneP4.js";import"./isObject-BxHU6UQF.js";import"./Button-MShjPJp1.js";import"./ActionButton-DuJUtkq_.js";import"./Checkbox-Bb7NREoy.js";import"./useValueChanged-DY3EsH1m.js";import"./CollapsiblePanel-DGnymJiI.js";import"./MultiColumnSortDialog-MmbiKaE0.js";import"./MenuTrigger-CVzLJINj.js";import"./CompositeItem-DT5prC13.js";import"./ToolbarRootContext-CleLhimn.js";import"./getDisabledMountTransitionStyles-CY8wd436.js";import"./getPseudoElementBounds-DjXgxs14.js";import"./chevron-down-CA1gmqiz.js";import"./index-DX-aKmrv.js";import"./error-JfXpK5Qu.js";import"./BaseCbacBanner-CXQ-Qa9l.js";import"./makeExternalStore-yqMU8E9S.js";import"./Tooltip-Drortw-b.js";import"./PopoverPopup-T4fSUWna.js";import"./toNumber-vKmWEYXE.js";import"./tick-C6-DnUEq.js";import"./DropdownField-B4CCJs-u.js";import"./withOsdkMetrics-nuv42wTk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-axSYt9jb.js";import{O as b}from"./object-table-CJL2jtUP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DQe9xJE3.js";import{u as g}from"./useOsdkClient-DIUBL3TL.js";import"./preload-helper-5clZkVbz.js";import"./Table-wLjkHKgy.js";import"./index-CLjZOMbp.js";import"./Dialog-Dx3n6IVE.js";import"./cross-BV4PjvJc.js";import"./svgIconContainer-CvOpWe1G.js";import"./useBaseUiId-CfampI5m.js";import"./InternalBackdrop-73Bsxdw-.js";import"./composite-G1l_cMk8.js";import"./index-DpGvCUsF.js";import"./index-6T9wCtxW.js";import"./index-DNBA_y2P.js";import"./useEventCallback-BY8e2U_8.js";import"./SkeletonBar-ClNzeAGH.js";import"./LoadingCell-L-L7aGt4.js";import"./ColumnConfigDialog-BIWB67f-.js";import"./DraggableList-BRobuV8K.js";import"./search-B_GR0Y0K.js";import"./Input-nobTN-9C.js";import"./useControlled-BSRNruV1.js";import"./Button-DBXdKKko.js";import"./small-cross-4Md-SBDX.js";import"./ActionButton-BPhZ5AgD.js";import"./Checkbox-CFxX--nm.js";import"./useValueChanged-BLlZH5mo.js";import"./CollapsiblePanel-Dmb31jh2.js";import"./MultiColumnSortDialog-D4YjYgTK.js";import"./MenuTrigger-BRfJLqNl.js";import"./CompositeItem-E4JqZHrS.js";import"./ToolbarRootContext-HNR9-LxP.js";import"./getDisabledMountTransitionStyles-5OnvXmo8.js";import"./getPseudoElementBounds-Bw-YTuG9.js";import"./chevron-down-BijfbkW5.js";import"./index-iV2cA45t.js";import"./error-dOvZleMr.js";import"./BaseCbacBanner-D9H1tQlA.js";import"./makeExternalStore-7VGeqAOs.js";import"./Tooltip-CqT7nzyV.js";import"./PopoverPopup-Smoy6HlE.js";import"./debounce-eexPevCv.js";import"./tick-BUmA3zHD.js";import"./DropdownField-CLQ_cIrg.js";import"./isEqual-xmdt4oBy.js";import"./withOsdkMetrics-DSBcYRdu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-C8k3uumS.js";import{O as b}from"./object-table-EZOB7GFm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CCyLoqCA.js";import{u as g}from"./useOsdkClient-BvDl_R1k.js";import"./preload-helper-Dj6SQCER.js";import"./Table-NqTGUUle.js";import"./index-Da9JAcME.js";import"./Dialog-DJIAnjKL.js";import"./cross-Dp2ox1xu.js";import"./svgIconContainer-Dj-Mm7D3.js";import"./useBaseUiId-DFXqCjvq.js";import"./InternalBackdrop-aU7kJmwR.js";import"./composite-DxAUAqur.js";import"./index-DzwHbvl0.js";import"./index-DjlNroqj.js";import"./index-DZnZB0mi.js";import"./useEventCallback-fbvYUM-2.js";import"./SkeletonBar-abAgXsnv.js";import"./LoadingCell-Tiia-8Ir.js";import"./ColumnConfigDialog-CmxDqqkp.js";import"./DraggableList-DgviW2i0.js";import"./search-DKEa9C8l.js";import"./Input--AleI5pt.js";import"./useControlled-C2PJbUNw.js";import"./Button-CBL5cv9S.js";import"./small-cross-Ce-hROYd.js";import"./ActionButton-BMUSg4X7.js";import"./Checkbox-B-gD_A1e.js";import"./useValueChanged-Dqs1inlY.js";import"./CollapsiblePanel-Dt19Mdgf.js";import"./MultiColumnSortDialog-mxFmSdR4.js";import"./MenuTrigger-C8wkes2i.js";import"./CompositeItem-DZbgQ7y8.js";import"./ToolbarRootContext-BVd3nTMD.js";import"./getDisabledMountTransitionStyles-DfVVkl0j.js";import"./getPseudoElementBounds-BPwV_7bA.js";import"./chevron-down-Biem--ni.js";import"./index-CEB9MiMS.js";import"./error-DgFxq49l.js";import"./BaseCbacBanner-CbsjZeyt.js";import"./makeExternalStore-Xdq9roG-.js";import"./Tooltip-BGHZdQle.js";import"./PopoverPopup-qnEIN4P4.js";import"./debounce-Nfw019PW.js";import"./tick-B-xbQpjH.js";import"./DropdownField-cT1ROS8v.js";import"./isEqual-DlqCCDtd.js";import"./withOsdkMetrics-zb3RyNQY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

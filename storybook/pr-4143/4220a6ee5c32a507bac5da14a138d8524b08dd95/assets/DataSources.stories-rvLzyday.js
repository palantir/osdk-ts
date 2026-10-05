import{j as r}from"./iframe-DGLAKnND.js";import{O as b}from"./object-table-Dpc5MjBr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cs6q60ZD.js";import{u as g}from"./useOsdkClient-B1Wf-t7W.js";import"./preload-helper-DFgLk3H0.js";import"./Table-BsHucwjJ.js";import"./index-MAOZVqBp.js";import"./Dialog-B7LFCDuZ.js";import"./cross-CxVHgnds.js";import"./svgIconContainer-FR2bqQFg.js";import"./useBaseUiId-BaGNlDqg.js";import"./InternalBackdrop-CMlBsszD.js";import"./composite-CNVl9uwD.js";import"./index-D8VO6Jfw.js";import"./index-TSIf0hfv.js";import"./index-D64aoPmg.js";import"./useEventCallback-Bbz38unH.js";import"./SkeletonBar-DZ3fNMsI.js";import"./LoadingCell-bn0z-gtJ.js";import"./ColumnConfigDialog-CXqm1Z_S.js";import"./DraggableList-CJCY8max.js";import"./search-BOgD6jUI.js";import"./Input-Cs47mLOC.js";import"./useControlled-EZBO8tge.js";import"./Button-D_UOXx3n.js";import"./small-cross-GUXRAdAn.js";import"./ActionButton-BjnG2AJb.js";import"./Checkbox-CF2-HhjI.js";import"./useValueChanged-C708bQfP.js";import"./CollapsiblePanel-C0WuBQuO.js";import"./MultiColumnSortDialog-BUuWI7HK.js";import"./MenuTrigger-CaeYiSBF.js";import"./CompositeItem-DgGcGQW6.js";import"./ToolbarRootContext-DLHGbFy6.js";import"./getDisabledMountTransitionStyles-KvK7cGgY.js";import"./getPseudoElementBounds-_CZkfBpK.js";import"./chevron-down-BpoIGC6g.js";import"./index-2SXn5UAQ.js";import"./error-D43b2FyI.js";import"./BaseCbacBanner-B7t9tKYP.js";import"./makeExternalStore-Ckpy9L-L.js";import"./Tooltip-DRsiLNea.js";import"./PopoverPopup-sChDPaWB.js";import"./debounce-4zT3h9WK.js";import"./tick-MF5FreoB.js";import"./DropdownField-BMcpUr4D.js";import"./isEqual-7hCELrMd.js";import"./withOsdkMetrics-uBYACZNa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

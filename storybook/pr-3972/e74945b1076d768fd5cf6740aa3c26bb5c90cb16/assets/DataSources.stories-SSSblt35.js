import{j as r}from"./iframe-aaRaUaQA.js";import{O as b}from"./object-table-CVNLWWMk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-A_UGpJCA.js";import{u as g}from"./useOsdkClient-GjkrZJXV.js";import"./preload-helper-DDdBuVC6.js";import"./Table-DtYjfP6r.js";import"./index-BFxdwZW8.js";import"./Dialog-B3xE5x_V.js";import"./cross-Civ52i0i.js";import"./svgIconContainer-DPD4yDJx.js";import"./useBaseUiId-OrvyFRjf.js";import"./InternalBackdrop-GC9m-3uE.js";import"./composite-Brai8k8L.js";import"./index-CjX3GsQ1.js";import"./index-B47dG2nh.js";import"./index-CtLyEqHu.js";import"./useEventCallback-C0cTpxYB.js";import"./SkeletonBar-D1kYfXgA.js";import"./LoadingCell-CfQ-CB4H.js";import"./ColumnConfigDialog-DVOPvFop.js";import"./DraggableList-D8c2iwKH.js";import"./search-rSQCSGrC.js";import"./Input-9MkH7huv.js";import"./useControlled-BxZDOjCN.js";import"./Button-_hqfl3rB.js";import"./small-cross-BM4HhB3q.js";import"./ActionButton-C5OMb6xb.js";import"./Checkbox-fVhFFENa.js";import"./useValueChanged-slNl2Col.js";import"./CollapsiblePanel-Y98hikc1.js";import"./MultiColumnSortDialog-DArSz3-b.js";import"./MenuTrigger-2BU8l6Er.js";import"./CompositeItem-ia1rPCPv.js";import"./ToolbarRootContext-CvLiSlR3.js";import"./getDisabledMountTransitionStyles-G0wd3Iab.js";import"./getPseudoElementBounds-BsimZP52.js";import"./chevron-down-DjMdYRFA.js";import"./index-BcetiFxi.js";import"./error-Bw88zVpy.js";import"./BaseCbacBanner-CB0Tsa2y.js";import"./makeExternalStore-DgrVSoVp.js";import"./Tooltip-BH5SwH9x.js";import"./PopoverPopup-DLGzdz9a.js";import"./debounce-DCNsezNJ.js";import"./tick-D1BoxD1y.js";import"./DropdownField-uGc5xnBi.js";import"./isEqual-DTb8ltKO.js";import"./withOsdkMetrics-BCIN_T8e.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

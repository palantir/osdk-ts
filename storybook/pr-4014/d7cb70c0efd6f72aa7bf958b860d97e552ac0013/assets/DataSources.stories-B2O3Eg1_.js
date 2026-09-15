import{j as r}from"./iframe-Cmyuw2Ph.js";import{O as b}from"./object-table-CawhF4-U.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DBN1bwiB.js";import{u as g}from"./useOsdkClient-Bhx478d6.js";import"./preload-helper-BdOHKbj_.js";import"./Table-BY0MFWMS.js";import"./index-DmkTpiQF.js";import"./Dialog-uqtrzIbG.js";import"./cross-DgRED2Y7.js";import"./svgIconContainer-kIxwS322.js";import"./useBaseUiId-BKvwKpWC.js";import"./InternalBackdrop-aC0FPmUr.js";import"./composite-BApZsjKv.js";import"./index-DdBzIF29.js";import"./index-Cy1dz_-E.js";import"./index-DrYEH3ho.js";import"./useEventCallback-D2P37CA4.js";import"./SkeletonBar-BFEabyG6.js";import"./LoadingCell-DWhEU-Sm.js";import"./ColumnConfigDialog-BjRzXQ2B.js";import"./DraggableList-Dx2ER0hA.js";import"./search-MWYwj9aD.js";import"./Input-DF2j3Inj.js";import"./useControlled-1Ry22NdV.js";import"./Button-Cgurdd-l.js";import"./small-cross-B-7R2q8G.js";import"./ActionButton-BwGzlO-h.js";import"./Checkbox-DGGzqo-s.js";import"./useValueChanged-C6zv_ojv.js";import"./CollapsiblePanel-DIQ0ICSn.js";import"./MultiColumnSortDialog-BtDphT88.js";import"./MenuTrigger-BEFYxjmP.js";import"./CompositeItem-Bm_UDkTp.js";import"./ToolbarRootContext-Bziyhvzk.js";import"./getDisabledMountTransitionStyles-A2_XJssl.js";import"./getPseudoElementBounds-C24zyg7W.js";import"./chevron-down-DihUPRd8.js";import"./index-BIIUg6ti.js";import"./error-BVkhCBJN.js";import"./BaseCbacBanner-nzEPUeti.js";import"./makeExternalStore-D1HySzYn.js";import"./Tooltip-DJOnRYv9.js";import"./PopoverPopup-BFna4Wvy.js";import"./debounce-YjruCfws.js";import"./tick-Ci4PnMCw.js";import"./DropdownField-BYzSEZU3.js";import"./isEqual-3pvGkThH.js";import"./withOsdkMetrics-DCjep4oi.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

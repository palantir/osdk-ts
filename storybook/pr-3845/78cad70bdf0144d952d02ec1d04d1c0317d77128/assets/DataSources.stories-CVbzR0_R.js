import{j as r}from"./iframe-B5w1MiMB.js";import{O as b}from"./object-table-Bm49LUOf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CJMjFvdD.js";import{u as g}from"./useOsdkClient-3124dXLb.js";import"./preload-helper-CU1AtdIz.js";import"./Table-EvNA8qkA.js";import"./index-CtjXdvRc.js";import"./Dialog-DCphJ0pX.js";import"./cross-CV9fpUOl.js";import"./svgIconContainer-B7EdkAw1.js";import"./useBaseUiId-1DFIpK_I.js";import"./InternalBackdrop-BW8Gd5Of.js";import"./composite-DdCZUanX.js";import"./index-CLavCOv2.js";import"./index-Cxsp0K40.js";import"./index-fTS2FcWe.js";import"./useEventCallback-D_ZU_Z1u.js";import"./SkeletonBar-BxYwBM3V.js";import"./LoadingCell-yTv8ze3n.js";import"./ColumnConfigDialog-ztGs-pKV.js";import"./DraggableList-Xb0V2hTV.js";import"./search-CzP4ABR3.js";import"./Input-j9KFgO4e.js";import"./useControlled-N5ZmUmtW.js";import"./isEqual-Br14G6um.js";import"./isObject-DpLTSRhw.js";import"./Button-BwuNtGpm.js";import"./ActionButton-DVxnq_cx.js";import"./Checkbox-BBtx1TBv.js";import"./useValueChanged-DZFj9DWZ.js";import"./CollapsiblePanel-CzWau1En.js";import"./MultiColumnSortDialog-CoOnz_sI.js";import"./MenuTrigger-WoUnOu8V.js";import"./CompositeItem-B9-flLpX.js";import"./ToolbarRootContext-DXnkpKvw.js";import"./getDisabledMountTransitionStyles-Cmdfpae2.js";import"./getPseudoElementBounds-CNsqsAze.js";import"./chevron-down-BplLrpUt.js";import"./index-BqopfQQ5.js";import"./error-DbvnMx8s.js";import"./BaseCbacBanner-CmZfweLi.js";import"./makeExternalStore-DG987ZvC.js";import"./Tooltip-DkqaGoGi.js";import"./PopoverPopup-Cs-CmjK7.js";import"./toNumber-ncDJ6WAX.js";import"./tick-BZFtP7oe.js";import"./DropdownField-DmLTcL6M.js";import"./withOsdkMetrics-CMmNO-Cj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

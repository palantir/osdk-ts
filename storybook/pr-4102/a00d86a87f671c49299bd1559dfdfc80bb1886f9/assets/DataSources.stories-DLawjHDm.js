import{j as r}from"./iframe-Cd3assbj.js";import{O as b}from"./object-table-C_4Wdn3N.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BahMLTB0.js";import{u as g}from"./useOsdkClient-5X7bez4P.js";import"./preload-helper-CJDETHpR.js";import"./Table-fpqkWRlu.js";import"./index-CuezTBwu.js";import"./Dialog-DD6q0N6r.js";import"./cross-BWupVKMA.js";import"./svgIconContainer-mKWT46Ew.js";import"./useBaseUiId-BiXP69FS.js";import"./InternalBackdrop-Bfk48BSq.js";import"./composite-Ba6K1tVR.js";import"./index-BAIR5AIA.js";import"./index-Z1uxp6Qk.js";import"./index-CwyP96WI.js";import"./useEventCallback-CeMIqilU.js";import"./SkeletonBar-Cic0iWBu.js";import"./LoadingCell-WSwJSa42.js";import"./ColumnConfigDialog-D1iMsssx.js";import"./DraggableList-ClnuHX0a.js";import"./search-DpDuiZ1l.js";import"./Input-CNsHRcz9.js";import"./useControlled-C6IOb7yO.js";import"./Button-DL7dr6Eo.js";import"./small-cross-D0ffFCO-.js";import"./ActionButton-CJgwBqar.js";import"./Checkbox-DVavq1Vw.js";import"./useValueChanged-BUUaJ7qm.js";import"./CollapsiblePanel-_KRgjImS.js";import"./MultiColumnSortDialog-u-IZRocT.js";import"./MenuTrigger-TQRmhiQT.js";import"./CompositeItem-Bvq7b2TM.js";import"./ToolbarRootContext-8Wniw3sv.js";import"./getDisabledMountTransitionStyles-JnE9U1PQ.js";import"./getPseudoElementBounds-DSs2TMmL.js";import"./chevron-down-CJuFpDqg.js";import"./index-N34x7HCr.js";import"./error-DnfhABs7.js";import"./BaseCbacBanner-DADEXJEh.js";import"./makeExternalStore-BWQlbo1w.js";import"./Tooltip-CtacdFMY.js";import"./PopoverPopup-vz2lsMDk.js";import"./debounce-BBOLVlWE.js";import"./tick-CiqYFsfj.js";import"./DropdownField-CwGIbooA.js";import"./isEqual-CwKKTIZp.js";import"./withOsdkMetrics-CmAk2EDk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

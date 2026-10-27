import{j as r}from"./iframe-C4dizZ36.js";import{O as b}from"./object-table-BgrvQbJI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DRAXtzs1.js";import{u as g}from"./useOsdkClient-DYefkPsN.js";import"./preload-helper-yVPvR8z3.js";import"./Table-BzUgLi4N.js";import"./index-CFT7unnD.js";import"./Dialog-D8prFB35.js";import"./cross-drbNV1T7.js";import"./svgIconContainer-DfcgCVjr.js";import"./useBaseUiId-k_5E4sc5.js";import"./InternalBackdrop-ConLyfAg.js";import"./composite-BKXJ61hE.js";import"./index-CTCpbOLj.js";import"./index-BMu-FTMn.js";import"./index-B0IHZgxT.js";import"./useEventCallback-BEbBXTDA.js";import"./SkeletonBar-Dt_A_Oo6.js";import"./LoadingCell-KwchXr4h.js";import"./ColumnConfigDialog-xcBo-RJ9.js";import"./DraggableList-CKHBkgED.js";import"./search-D-SP9Yj6.js";import"./Input-DPBssrp3.js";import"./useControlled-CUKEEG6I.js";import"./Button-B3WKdDfx.js";import"./small-cross-yc2rW1h-.js";import"./ActionButton-CrXRFnK7.js";import"./Checkbox-CWgjRKWS.js";import"./useValueChanged-DCy4_NVv.js";import"./CollapsiblePanel-TS6XPwGw.js";import"./MultiColumnSortDialog-CG_eOG-o.js";import"./MenuTrigger-B9hf80SG.js";import"./CompositeItem-Deat6XJ7.js";import"./ToolbarRootContext-cilGYW-z.js";import"./getDisabledMountTransitionStyles-DSExnO14.js";import"./getPseudoElementBounds-BTkeKk10.js";import"./chevron-down-B_DWNPfU.js";import"./index-C5-B81cJ.js";import"./error-j1AChp6N.js";import"./BaseCbacBanner-Bkd4XpK8.js";import"./makeExternalStore-BsFJZbFX.js";import"./Tooltip-CcaOWhED.js";import"./PopoverPopup-DjEzPR4r.js";import"./debounce-DpNok1rz.js";import"./tick-9qx9fXAT.js";import"./DropdownField-BfEb6RcP.js";import"./isEqual-DnhpXLt3.js";import"./withOsdkMetrics-CrG5BOev.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

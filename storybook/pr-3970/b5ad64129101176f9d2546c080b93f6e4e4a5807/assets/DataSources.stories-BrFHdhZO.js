import{j as r}from"./iframe-DFSfQ_aP.js";import{O as b}from"./object-table-Bo8foGJ9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BN_PR6Dc.js";import{u as g}from"./useOsdkClient-Cq2Nb_5Z.js";import"./preload-helper-DJLQJiWb.js";import"./Table-D8UroSLJ.js";import"./index-CHPYvPwX.js";import"./Dialog-BYw4_dN0.js";import"./cross-Ce3cqE51.js";import"./svgIconContainer-BpYc0jTS.js";import"./useBaseUiId-DCyghABl.js";import"./InternalBackdrop-C3LI9WHn.js";import"./composite-BX_h9XZf.js";import"./index-CQjeWbkR.js";import"./index-ASrgrlRW.js";import"./index-BomX2u3n.js";import"./useEventCallback-CWkq5eG5.js";import"./SkeletonBar-BXnis-nv.js";import"./LoadingCell-BDGcPLQM.js";import"./ColumnConfigDialog-BIU_6Fcg.js";import"./DraggableList-B3yfqHzs.js";import"./search-HIhGbyYm.js";import"./Input-B4nqbncu.js";import"./useControlled-DXWD0Znz.js";import"./Button-BpGPHejG.js";import"./small-cross-Ck6yssSu.js";import"./ActionButton-DNBUhcHU.js";import"./Checkbox-DoeqS_HZ.js";import"./useValueChanged-DcWoVdTs.js";import"./CollapsiblePanel-BsoK_9-k.js";import"./MultiColumnSortDialog-CxraL-OH.js";import"./MenuTrigger-YFJwhJiB.js";import"./CompositeItem-CyzwHVke.js";import"./ToolbarRootContext-BpJBwGb-.js";import"./getDisabledMountTransitionStyles-vXpnLO87.js";import"./getPseudoElementBounds-Bka1lmS1.js";import"./chevron-down-D8HcwDY0.js";import"./index-CdSacirl.js";import"./error-D7U43ngn.js";import"./BaseCbacBanner-DCmYrZdG.js";import"./makeExternalStore-DeP1q7OZ.js";import"./Tooltip-CNCLPMyb.js";import"./PopoverPopup-246_BZ4N.js";import"./debounce-C679H-9B.js";import"./tick-B1n0K6Q7.js";import"./DropdownField-DcUwV0uD.js";import"./isEqual-ZOtwe112.js";import"./withOsdkMetrics-CFtGdwbh.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

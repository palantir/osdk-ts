import{j as r}from"./iframe-DY1GCbMw.js";import{O as b}from"./object-table-CciFgaiP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BBPEMZR-.js";import{u as g}from"./useOsdkClient-BiAMLbqw.js";import"./preload-helper-CBmLF2uv.js";import"./Table-Dow3q7z3.js";import"./index-D14LjQ6n.js";import"./Dialog-2wYgJqJO.js";import"./cross-CmkMCGAt.js";import"./svgIconContainer-BFVaOhpV.js";import"./useBaseUiId-DuGGt2wk.js";import"./InternalBackdrop-JB_AdRkb.js";import"./composite-BpnSt9TV.js";import"./index-w54taWD8.js";import"./index-DRgBoERL.js";import"./index-4S2sOMY0.js";import"./useEventCallback-qdgPO1dc.js";import"./SkeletonBar-BfAdSFd-.js";import"./LoadingCell-CsMIdMuG.js";import"./ColumnConfigDialog-CaoxwqHB.js";import"./DraggableList-CbiS0L-q.js";import"./search-DozuAt7g.js";import"./Input-BHRf24lx.js";import"./useControlled-DgmoUEMa.js";import"./Button-lZzhyPA5.js";import"./small-cross-B-E1H7Wk.js";import"./ActionButton-BgIpSx8W.js";import"./Checkbox-DO-ve-ai.js";import"./useValueChanged-ibk3K4Gh.js";import"./CollapsiblePanel-sgSmAf5J.js";import"./MultiColumnSortDialog-2d02ICXE.js";import"./MenuTrigger-B0Nk20ol.js";import"./CompositeItem-CyVQmu_E.js";import"./ToolbarRootContext-CKGq1FSG.js";import"./getDisabledMountTransitionStyles-CMWWTT10.js";import"./getPseudoElementBounds-PSTXVLkP.js";import"./chevron-down-DwvhxFZN.js";import"./index-Cw53nmwf.js";import"./error-B-msJLHi.js";import"./BaseCbacBanner-BflXDhPC.js";import"./makeExternalStore-CPaZopZ5.js";import"./Tooltip-DfeHQo_2.js";import"./PopoverPopup-KCoGRqZ6.js";import"./toNumber-DUjm83bJ.js";import"./tick-b9WUc7Jb.js";import"./DropdownField-r9c9LU4A.js";import"./withOsdkMetrics-C-yRlBMm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};

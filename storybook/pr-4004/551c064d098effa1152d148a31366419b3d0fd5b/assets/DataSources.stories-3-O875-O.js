import{j as r}from"./iframe-B-HGqiQv.js";import{O as b}from"./object-table-DjgF1tRq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C4Dy4tg3.js";import{u as g}from"./useOsdkClient-DhlHbxDz.js";import"./preload-helper-f0nf4odL.js";import"./Table-aLeOrhVV.js";import"./index-bxDwllqb.js";import"./Dialog-BXnFsicd.js";import"./cross-EGyIlo5-.js";import"./svgIconContainer-CcOwnLsJ.js";import"./useBaseUiId-SjVBW8d9.js";import"./InternalBackdrop-DlbEw6t2.js";import"./composite-Bss2rQnJ.js";import"./index-BtG-qeps.js";import"./index-CEiCEyzQ.js";import"./index-BBOlyUVk.js";import"./useEventCallback-BGTc3NYX.js";import"./SkeletonBar-UZMMR510.js";import"./LoadingCell-DJ3n0fIv.js";import"./ColumnConfigDialog-Dp-hGRoe.js";import"./DraggableList-g0qcX8Py.js";import"./search-2b7SykPm.js";import"./Input-DQz318CF.js";import"./useControlled-DE8TYXcZ.js";import"./Button-DbLRaPaP.js";import"./small-cross-C9MVmrAy.js";import"./ActionButton-De-rrFSH.js";import"./Checkbox-BqMQh58C.js";import"./useValueChanged-Dvg_Ei3T.js";import"./CollapsiblePanel-B8wfbqwT.js";import"./MultiColumnSortDialog-BAHospfi.js";import"./MenuTrigger-BXJXi7iA.js";import"./CompositeItem-BdVijetn.js";import"./ToolbarRootContext-BLNyP9iz.js";import"./getDisabledMountTransitionStyles-C0uD4fg7.js";import"./getPseudoElementBounds-D3A058yI.js";import"./chevron-down-CPXc6U4P.js";import"./index-CdwYncCO.js";import"./error-BZh_GVh6.js";import"./BaseCbacBanner-CwA_rPGO.js";import"./makeExternalStore-Bg6-61eg.js";import"./Tooltip-gNmuZhk6.js";import"./PopoverPopup-c23FdBcy.js";import"./debounce-HM7gHRwB.js";import"./tick-B70oSR7_.js";import"./DropdownField-CupL-Zrh.js";import"./isEqual-BIqyPK0y.js";import"./withOsdkMetrics-jKzwJRkL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

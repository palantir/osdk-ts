import{j as r}from"./iframe-civNld3i.js";import{O as b}from"./object-table-BkNygl9T.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DMyclJQo.js";import{u as g}from"./useOsdkClient-CDLe6B2D.js";import"./preload-helper-DGob3pd3.js";import"./Table-D3QmnDSd.js";import"./index-Bkk9aIG7.js";import"./Dialog-Veq-I3ha.js";import"./cross-Bl6bAFo8.js";import"./svgIconContainer-Cbt7mtvH.js";import"./useBaseUiId-DfebwqrC.js";import"./InternalBackdrop-BDeg4tmF.js";import"./composite-C8tN05lQ.js";import"./index-BcfoxrgG.js";import"./index-C2RAlQU3.js";import"./index-BU14isbu.js";import"./useEventCallback-BbngQcPL.js";import"./SkeletonBar-ePOHNcXa.js";import"./LoadingCell-DBRxFXJW.js";import"./ColumnConfigDialog-B23L06qv.js";import"./DraggableList-Byy1kqEA.js";import"./search-ulrdH098.js";import"./Input-CzHf5EpN.js";import"./useControlled-DSRlTv1D.js";import"./Button-_66b78aL.js";import"./small-cross-DpA5lC9j.js";import"./ActionButton-D27VwrOt.js";import"./Checkbox-ONjswOP3.js";import"./useValueChanged-BjzJCsWw.js";import"./CollapsiblePanel--7f6zkon.js";import"./MultiColumnSortDialog-DB-aGVTk.js";import"./MenuTrigger-DsBkVnjM.js";import"./CompositeItem-CyFsxOTP.js";import"./ToolbarRootContext-CpIc7UTm.js";import"./getDisabledMountTransitionStyles-CoXeXbxe.js";import"./getPseudoElementBounds-BeYCQidE.js";import"./chevron-down-Cc8MdjVP.js";import"./index-Bz_nIjTo.js";import"./error-9MfXm3EE.js";import"./BaseCbacBanner-RPuZIvbI.js";import"./makeExternalStore-2tdSo-BF.js";import"./Tooltip-BBz15K44.js";import"./PopoverPopup-mFug3adh.js";import"./debounce-_kg4QHxF.js";import"./tick-wP3FdKpg.js";import"./DropdownField-C-J6dPze.js";import"./isEqual-CzH2I0wQ.js";import"./withOsdkMetrics-VkQ2PjHN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

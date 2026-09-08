import{j as r}from"./iframe-D-uQiAEU.js";import{O as b}from"./object-table-CnzEy9bK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BVtfvbbg.js";import{u as g}from"./useOsdkClient-B1rGRzo8.js";import"./preload-helper-p4UgLAci.js";import"./Table-BbvHOkRI.js";import"./index-BAcJFtsj.js";import"./Dialog-CpPL-wiB.js";import"./cross-Cxa7qZ4s.js";import"./svgIconContainer-BwquE4X7.js";import"./useBaseUiId-ChN6vCz4.js";import"./InternalBackdrop-DOf7Wbxd.js";import"./composite-DTJJNp0D.js";import"./index-BoPOR_G0.js";import"./index-TpgQ4q1W.js";import"./index-DGCwle_4.js";import"./useEventCallback-Dl207dUq.js";import"./SkeletonBar-fhPn3StW.js";import"./LoadingCell-C_UtXYFD.js";import"./ColumnConfigDialog-BsKg96eB.js";import"./DraggableList-CrG98e0P.js";import"./search-C_-XZuxq.js";import"./Input-DgsAa7tc.js";import"./useControlled-CCwQc26W.js";import"./Button-DI6776iG.js";import"./small-cross-BVZp2NPW.js";import"./ActionButton-CSIdFpLA.js";import"./Checkbox-DfqF_62M.js";import"./useValueChanged-B5Exoyob.js";import"./CollapsiblePanel-BRn0DhId.js";import"./MultiColumnSortDialog-BOMM5sOv.js";import"./MenuTrigger-C45wYiBf.js";import"./CompositeItem-gF6WPsof.js";import"./ToolbarRootContext-DCPVbVwA.js";import"./getDisabledMountTransitionStyles-BWrmK3Yb.js";import"./getPseudoElementBounds-CEbtWgTD.js";import"./chevron-down-BwXU5HA0.js";import"./index-C2SgD6rg.js";import"./error-CnFMhHrw.js";import"./BaseCbacBanner-DzAdTHvi.js";import"./makeExternalStore-BRy1NQ_S.js";import"./Tooltip-DKGKb6ew.js";import"./PopoverPopup-oWHkAC_s.js";import"./debounce-CRIH8IRe.js";import"./tick-BL7yIHsf.js";import"./DropdownField-CAzO2VqE.js";import"./isEqual-Cq2Z2ug0.js";import"./withOsdkMetrics-DnhB_JkA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-DV_zKu2G.js";import{O as b}from"./object-table-By2q7_ys.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-fcsT5QhA.js";import{u as g}from"./useOsdkClient-Tcdi_rac.js";import"./preload-helper-NfN-SgeO.js";import"./Table-B31c6yHG.js";import"./index-Dg4pCXXs.js";import"./Dialog-CgYbS2_t.js";import"./cross-APJrfIvW.js";import"./svgIconContainer-kLwaY0s0.js";import"./useBaseUiId-B5XoADBe.js";import"./InternalBackdrop-Du_GPTcx.js";import"./composite-DcSj9RrZ.js";import"./index-Qh3Fcvsg.js";import"./index-CEG-DU55.js";import"./index-D_SsiIjb.js";import"./useEventCallback-BQBFJmB-.js";import"./SkeletonBar-quVsDzQk.js";import"./LoadingCell-DXEXK_0H.js";import"./ColumnConfigDialog-NVaQw0r8.js";import"./DraggableList-BMLxRLrQ.js";import"./search-DYE1hvQ2.js";import"./Input-DFXIqK_7.js";import"./useControlled-93X90FOH.js";import"./Button-BVbWdILw.js";import"./small-cross-DRu3YnII.js";import"./ActionButton-CSVekI6l.js";import"./Checkbox-C2cviow0.js";import"./useValueChanged-fRUG-rpo.js";import"./CollapsiblePanel-DqqKh1h2.js";import"./MultiColumnSortDialog-BJV9ndeu.js";import"./MenuTrigger-C6SNAPKX.js";import"./CompositeItem-CHs--B7N.js";import"./ToolbarRootContext-D3r4geEZ.js";import"./getDisabledMountTransitionStyles-AFz6B6Pn.js";import"./getPseudoElementBounds-jFSea8zF.js";import"./chevron-down-D7mWu-TA.js";import"./index-LNDJ7X8H.js";import"./error-DQ-loBpb.js";import"./BaseCbacBanner-B1BFj6EC.js";import"./makeExternalStore-CH15L2gT.js";import"./Tooltip-CqNia_Sj.js";import"./PopoverPopup-DRiAk7M2.js";import"./debounce-YrrW1v9C.js";import"./tick-DQhJP467.js";import"./DropdownField-BmgdesBZ.js";import"./isEqual-C8-mbT_W.js";import"./withOsdkMetrics-B6P3j5oP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

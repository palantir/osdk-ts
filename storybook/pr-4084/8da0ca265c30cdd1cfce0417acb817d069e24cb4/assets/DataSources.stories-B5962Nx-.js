import{j as r}from"./iframe-C52xRtUi.js";import{O as b}from"./object-table-Mxubi6Oi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Chmz11QI.js";import{u as g}from"./useOsdkClient-vXZmMAP8.js";import"./preload-helper-VoitBlG4.js";import"./Table-56lXQUHG.js";import"./index-C7u1bqdX.js";import"./Dialog-C-md9JfH.js";import"./cross-a7kzaFsa.js";import"./svgIconContainer-BCVv-_g-.js";import"./useBaseUiId-DJafaxQ0.js";import"./InternalBackdrop-CPnudeT9.js";import"./composite-B5eZIT_T.js";import"./index-DzK9GJWU.js";import"./index-pyzUPPmp.js";import"./index-NQfdPmWP.js";import"./useEventCallback-B2UfFI64.js";import"./SkeletonBar-C9Im5d1S.js";import"./LoadingCell-N_99h5MN.js";import"./ColumnConfigDialog-kGgT8-Z2.js";import"./DraggableList-DpX7JZGp.js";import"./search-dgHR1_2q.js";import"./Input-BgQuQrPL.js";import"./useControlled-DX7cxw4N.js";import"./Button-B-u0RyTK.js";import"./small-cross-BTfaurxn.js";import"./ActionButton-BnaJtBw6.js";import"./Checkbox-P4X8R7rT.js";import"./useValueChanged-C6ayBYnA.js";import"./CollapsiblePanel-BotBzwtD.js";import"./MultiColumnSortDialog-BZIjIQKu.js";import"./MenuTrigger-qu4PEYKk.js";import"./CompositeItem-DAwBJWeq.js";import"./ToolbarRootContext-CVcuXFio.js";import"./getDisabledMountTransitionStyles-DvEu8SWi.js";import"./getPseudoElementBounds-Di3MTnX5.js";import"./chevron-down-C2zgY8nG.js";import"./index-1YKdHDT0.js";import"./error-COI_mt5G.js";import"./BaseCbacBanner-C56x04d7.js";import"./makeExternalStore-Km1yOtHY.js";import"./Tooltip-DHaZ_9Uj.js";import"./PopoverPopup-B7RCm-bJ.js";import"./debounce-tVcKeVmr.js";import"./tick-DcEx61V3.js";import"./DropdownField-BHSO6XDZ.js";import"./isEqual-Mg-KuvUN.js";import"./withOsdkMetrics-Csym3CTn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

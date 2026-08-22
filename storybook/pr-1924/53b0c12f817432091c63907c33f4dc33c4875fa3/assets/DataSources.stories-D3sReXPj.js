import{j as r}from"./iframe-De8gl-wb.js";import{O as b}from"./object-table-Bz2FDPwn.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C3JOSOoc.js";import{u as g}from"./useOsdkClient-DVrTO4hw.js";import"./preload-helper-CZp3UEUX.js";import"./Table-B1Cak9D7.js";import"./index-yM1iOqxa.js";import"./Dialog-CTd_Fh2m.js";import"./cross-Rb4_YcYg.js";import"./svgIconContainer-O0KE-yUX.js";import"./useBaseUiId-D2bKh7zK.js";import"./InternalBackdrop-CaA3mfgc.js";import"./composite-CsYpzAzm.js";import"./index-CZuFPKTq.js";import"./index-yZ2YDAwx.js";import"./index-adqLLECi.js";import"./useEventCallback-M_gVxY2G.js";import"./SkeletonBar-Cpr1mmtD.js";import"./LoadingCell-B5JUoAiW.js";import"./ColumnConfigDialog-D5-gNagN.js";import"./DraggableList-DWokTizm.js";import"./search-gqOR6dWB.js";import"./Input-jUEOhmQC.js";import"./useControlled-DGI8qUj-.js";import"./Button-C8NRJqZ9.js";import"./small-cross-DCeop5gl.js";import"./ActionButton-9l7y1yGD.js";import"./Checkbox-DBD54aFK.js";import"./useValueChanged-FUmu471A.js";import"./CollapsiblePanel-C9mOk4td.js";import"./MultiColumnSortDialog-DzcM_iH0.js";import"./MenuTrigger-r0ZzgG-T.js";import"./CompositeItem-CLhIql87.js";import"./ToolbarRootContext-RfA3FV7l.js";import"./getDisabledMountTransitionStyles-B1oXkIam.js";import"./getPseudoElementBounds-2piZIYla.js";import"./chevron-down-DwDibcrO.js";import"./index-CEZAAMx5.js";import"./error-DNa-KthT.js";import"./BaseCbacBanner-q7Lsj7j7.js";import"./makeExternalStore-BgPv4tiZ.js";import"./Tooltip-CUSzcSPf.js";import"./PopoverPopup-CQa18L3d.js";import"./debounce-CnDZcNXl.js";import"./tick-CsI3c4Q2.js";import"./DropdownField-CDqudMgk.js";import"./isEqual-BtVuQz1J.js";import"./withOsdkMetrics-Cqq5lG27.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

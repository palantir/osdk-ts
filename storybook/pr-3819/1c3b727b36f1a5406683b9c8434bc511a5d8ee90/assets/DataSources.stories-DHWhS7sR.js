import{j as r}from"./iframe-R5joIy8i.js";import{O as b}from"./object-table-CgNAZxnk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DR5ODz6P.js";import{u as g}from"./useOsdkClient-B33djUjH.js";import"./preload-helper-BDKQXXQd.js";import"./Table-B80Z2OYT.js";import"./index-BjtK3UNq.js";import"./Dialog-Ca0bgPoe.js";import"./cross-BLMm-Ql7.js";import"./svgIconContainer-KEF34-KT.js";import"./useBaseUiId-DzxPRuTg.js";import"./InternalBackdrop-C-TgLuPD.js";import"./composite-DoPpkoU1.js";import"./index-CV_jH-oS.js";import"./index-BCosmSDy.js";import"./index-CHRpbdDl.js";import"./useEventCallback-LMOxoj5R.js";import"./SkeletonBar-D1JBGL5F.js";import"./LoadingCell-CVulol-P.js";import"./ColumnConfigDialog-gVYcKPvo.js";import"./DraggableList-D0vAnTP4.js";import"./search-C23YmzRD.js";import"./Input-Bw5RXfMb.js";import"./useControlled-r3xQWVHF.js";import"./isEqual-9Rsr_ekw.js";import"./isObject-BMoCLrIv.js";import"./Button-CHY-MXSe.js";import"./ActionButton-Bqq9Ii8S.js";import"./Checkbox-BnjbZCw3.js";import"./useValueChanged-CZgv2A3P.js";import"./CollapsiblePanel-CcsZIIiD.js";import"./MultiColumnSortDialog-IarWhTir.js";import"./MenuTrigger-n3vs8F5z.js";import"./CompositeItem-B4wdPUIk.js";import"./ToolbarRootContext-CE7qJbgG.js";import"./getDisabledMountTransitionStyles-D7o0LPiO.js";import"./getPseudoElementBounds-DPnISsh9.js";import"./chevron-down-Bhu5S3ij.js";import"./index-IjrDNVAE.js";import"./error-BPV8EjSv.js";import"./BaseCbacBanner-rtYlPdLh.js";import"./makeExternalStore-BL3yv_tQ.js";import"./Tooltip-COhZTaOk.js";import"./PopoverPopup-CIuUTinA.js";import"./toNumber-Btv-h7uY.js";import"./tick-Cw9Y9tsY.js";import"./DropdownField-BGjG3ep6.js";import"./withOsdkMetrics--n59eel3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

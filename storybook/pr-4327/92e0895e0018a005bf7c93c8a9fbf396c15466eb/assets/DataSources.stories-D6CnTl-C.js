import{j as r}from"./iframe-BJUxpguS.js";import{O as b}from"./object-table-BoMBFXNC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DtF0OX4n.js";import{u as g}from"./useOsdkClient-mJtFvI3C.js";import"./preload-helper-CcPnSf_d.js";import"./Table-SjKZWein.js";import"./index-DaIWjini.js";import"./Dialog-BO-pnz8v.js";import"./cross-CF3gkRQt.js";import"./svgIconContainer-DFZK57uZ.js";import"./useBaseUiId-CUsRHIZ_.js";import"./InternalBackdrop-D_jiv0BX.js";import"./composite-fRasBjEb.js";import"./index-CRptwoO3.js";import"./index-CqveWGS6.js";import"./index-DM_u1KSh.js";import"./useEventCallback-BdXNRzTJ.js";import"./SkeletonBar-Dx6k6i1c.js";import"./LoadingCell-DF0g9G0l.js";import"./ColumnConfigDialog-BpGsYJSX.js";import"./DraggableList-C-XFZCOA.js";import"./search-82BfoOmm.js";import"./Input-JPeJu_Ok.js";import"./useControlled-CV2ikSFn.js";import"./Button-D6-FRmxX.js";import"./small-cross-EomOHUA5.js";import"./ActionButton-DgVSwbQq.js";import"./Checkbox-TQ-A7mqx.js";import"./useValueChanged-C99NUcrN.js";import"./CollapsiblePanel-CqwlYKwl.js";import"./MultiColumnSortDialog-fgaaPMWx.js";import"./MenuTrigger-BYN6WcMd.js";import"./CompositeItem-DC6J7O9B.js";import"./ToolbarRootContext-96Mx370G.js";import"./getDisabledMountTransitionStyles-oGlN2umk.js";import"./getPseudoElementBounds-DSYHNq3I.js";import"./chevron-down-D_Er5Djl.js";import"./index-DJciXKq6.js";import"./error-GeJDXztf.js";import"./BaseCbacBanner-Ccl4dO1s.js";import"./makeExternalStore-CsEdzCsV.js";import"./Tooltip-B80-nJEh.js";import"./PopoverPopup-BETux0X9.js";import"./debounce-BHhTV7Zm.js";import"./tick-DBILgLMj.js";import"./DropdownField-C6X6tb8E.js";import"./isEqual-BDUZntms.js";import"./withOsdkMetrics-CmE_vyV8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

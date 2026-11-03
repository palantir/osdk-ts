import{j as r}from"./iframe-B5RHZXsu.js";import{O as b}from"./object-table-Dkcx8iw6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-duO5-O_t.js";import{u as g}from"./useOsdkClient-ClQGOlrW.js";import"./preload-helper-tHX7vXiV.js";import"./Table-BhIIsFCs.js";import"./index-UZy2jxQz.js";import"./Dialog-udJgb8ju.js";import"./cross-BlEfWoOy.js";import"./svgIconContainer-B_LjJP-U.js";import"./useBaseUiId-CuPoV62G.js";import"./InternalBackdrop-DQlLfdJE.js";import"./composite-BR00GrWy.js";import"./index-VU42HTLU.js";import"./index-BHsGwZQS.js";import"./index-BiYhGcN8.js";import"./useEventCallback-CUl5eVDE.js";import"./SkeletonBar-DP2T5nTp.js";import"./LoadingCell-JwB4v6GZ.js";import"./ColumnConfigDialog-DkMRJkKy.js";import"./DraggableList-BRsM8x8B.js";import"./search-CznqLCy2.js";import"./Input-BXzrXoG1.js";import"./useControlled-DlsNgd8K.js";import"./Button-Cie7BQIA.js";import"./small-cross-D2pF67Rj.js";import"./ActionButton-y0Novnh7.js";import"./Checkbox-CzdYiTdt.js";import"./useValueChanged-BfhksQOL.js";import"./CollapsiblePanel-CCt5xsKY.js";import"./MultiColumnSortDialog-CQ5wDmsr.js";import"./MenuTrigger-CkEwNIFd.js";import"./CompositeItem-XiaPpMq3.js";import"./ToolbarRootContext-DwV7g7uX.js";import"./getDisabledMountTransitionStyles-BCopWTyc.js";import"./getPseudoElementBounds-CkNhuPMZ.js";import"./chevron-down-UdMSp5ir.js";import"./index-BlmshJoj.js";import"./error-BhBB_kyZ.js";import"./BaseCbacBanner-Dc5V3Lie.js";import"./makeExternalStore-82wrc-fZ.js";import"./Tooltip-DlHQ0CXj.js";import"./PopoverPopup-DfYrZwnF.js";import"./debounce-BxIoRoJ-.js";import"./tick-BcP6gfmV.js";import"./DropdownField-BnK7E9TF.js";import"./isEqual-pJA2XBQu.js";import"./withOsdkMetrics-VuSz_R8I.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

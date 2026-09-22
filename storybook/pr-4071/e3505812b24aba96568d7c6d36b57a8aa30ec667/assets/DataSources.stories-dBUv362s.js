import{j as r}from"./iframe-bnALbjvc.js";import{O as b}from"./object-table-CQYVfyLk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-PjOH52pd.js";import{u as g}from"./useOsdkClient--44cx8Bj.js";import"./preload-helper-C8kaRY2F.js";import"./Table-Bhrr6uXR.js";import"./index-CaRZXRvk.js";import"./Dialog-Col9GGkI.js";import"./cross-CGbNp8lf.js";import"./svgIconContainer-C-SVSCUi.js";import"./useBaseUiId-BxyyYmda.js";import"./InternalBackdrop-C-wwUbvn.js";import"./composite-BdnAwbZ3.js";import"./index-C3s-D08F.js";import"./index-D8ht-iMr.js";import"./index-DkcY6kTj.js";import"./useEventCallback-Bgla3un0.js";import"./SkeletonBar-DhafuJvs.js";import"./LoadingCell-B11eB6OI.js";import"./ColumnConfigDialog-Ql0F-LNV.js";import"./DraggableList-DZ59yIIW.js";import"./search-L4rGQlW3.js";import"./Input-sTQZo4x7.js";import"./useControlled-3Q0JUJSo.js";import"./Button-pyIzwVHB.js";import"./small-cross-W4QDLHth.js";import"./ActionButton-CGQnu47F.js";import"./Checkbox-SdKK2Wna.js";import"./useValueChanged-rj55CR90.js";import"./CollapsiblePanel-hHq3Rqpy.js";import"./MultiColumnSortDialog-3sn1qAPg.js";import"./MenuTrigger-D8rKTw1N.js";import"./CompositeItem-DQIpyI6o.js";import"./ToolbarRootContext-mleznJTR.js";import"./getDisabledMountTransitionStyles-CtfsBi68.js";import"./getPseudoElementBounds-CHB398KY.js";import"./chevron-down-CZKe5U1j.js";import"./index-DB9OublQ.js";import"./error-CRPXFfUM.js";import"./BaseCbacBanner-DM4ay7t9.js";import"./makeExternalStore-ICpfmLMh.js";import"./Tooltip-CkyT8l5h.js";import"./PopoverPopup-DUjg4Y47.js";import"./debounce-DN86280o.js";import"./tick-a6w4X9hv.js";import"./DropdownField-FqvN8MA0.js";import"./isEqual-hXRpbEuH.js";import"./withOsdkMetrics-BbTXPZXR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

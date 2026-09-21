import{j as r}from"./iframe-KfcHTeg1.js";import{O as b}from"./object-table-DCtIV20U.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BPlZ8hgp.js";import{u as g}from"./useOsdkClient-B3A79I8Y.js";import"./preload-helper-Bb9isu9Z.js";import"./Table-Bu6PSbB4.js";import"./index-R7bO3Ag2.js";import"./Dialog-D3f_elXv.js";import"./cross-CsyJ80xs.js";import"./svgIconContainer-Bg10ywbV.js";import"./useBaseUiId-BkW36jG5.js";import"./InternalBackdrop-tVRu2lpW.js";import"./composite-SXE3lJSt.js";import"./index-Bw8KhB5T.js";import"./index-C2P4ds86.js";import"./index-BcYBVJtM.js";import"./useEventCallback-BLr_WVRC.js";import"./SkeletonBar-DDrD9EIz.js";import"./LoadingCell-C5uiI7TM.js";import"./ColumnConfigDialog-DeCZb3On.js";import"./DraggableList-xC7GwQ38.js";import"./search-srmRE2lv.js";import"./Input-CN3mZMt5.js";import"./useControlled-BGj-689N.js";import"./Button-DOEhPeJL.js";import"./small-cross-Cn9FtNXX.js";import"./ActionButton-Btyaoa61.js";import"./Checkbox-DqEzFRsP.js";import"./useValueChanged-Dz43bSNR.js";import"./CollapsiblePanel-Dv-wcfHr.js";import"./MultiColumnSortDialog-Bc6MK8qj.js";import"./MenuTrigger-D9ZtQcHZ.js";import"./CompositeItem-D4098fQy.js";import"./ToolbarRootContext-C0NLRCfZ.js";import"./getDisabledMountTransitionStyles-kkxHQkYj.js";import"./getPseudoElementBounds-CH0zahJv.js";import"./chevron-down-Vk4ljz0Y.js";import"./index-BPifgcSB.js";import"./error-BE8S7DUo.js";import"./BaseCbacBanner-BM0cDlRR.js";import"./makeExternalStore-Dw3huE5n.js";import"./Tooltip-BQBI28hZ.js";import"./PopoverPopup-BMw0y_rW.js";import"./debounce-2PRfpVgw.js";import"./tick-DVTuPHTD.js";import"./DropdownField-vOLnZeMB.js";import"./isEqual-asrTyJs0.js";import"./withOsdkMetrics-B7xTPOdu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-D5CWdNdp.js";import{O as b}from"./object-table-EOud3YSs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CkccWvTP.js";import{u as g}from"./useOsdkClient-BTWvqW3U.js";import"./preload-helper-Cs2ER-7-.js";import"./Table-DYPsVii4.js";import"./index-DmRKQ5gu.js";import"./Dialog-Cjmh--Nw.js";import"./cross-YX9QXa6Y.js";import"./svgIconContainer-B6KxKnjw.js";import"./useBaseUiId-ByIiMOew.js";import"./InternalBackdrop-CwmVqkKm.js";import"./composite-u6E42LXc.js";import"./index-DQTlocgX.js";import"./index-DJSWcjtY.js";import"./index-DlctO1Vj.js";import"./useEventCallback-CUdtWi1h.js";import"./SkeletonBar-Dsep6i17.js";import"./LoadingCell-D6KBbW-w.js";import"./ColumnConfigDialog-14XM0LM5.js";import"./DraggableList-20Cr2QMm.js";import"./search-YJzut-LN.js";import"./Input-Dk6BTnFd.js";import"./useControlled-Dp3YziLR.js";import"./Button-CX2uzNBF.js";import"./small-cross-C3BgNwcQ.js";import"./ActionButton-6bJnLdYp.js";import"./Checkbox-B-fBsKCu.js";import"./useValueChanged-RZ5vNT_v.js";import"./CollapsiblePanel-DtWGfqS_.js";import"./MultiColumnSortDialog-CemOIoQQ.js";import"./MenuTrigger-B3SmJQBD.js";import"./CompositeItem-BKjFMUh6.js";import"./ToolbarRootContext-CEpyHN5v.js";import"./getDisabledMountTransitionStyles-BAK-aKJ4.js";import"./getPseudoElementBounds-8DDsxEhD.js";import"./chevron-down-BWXHwUsU.js";import"./index-vLNFJNsx.js";import"./error-BnTb_JyD.js";import"./BaseCbacBanner-q-p8dZVZ.js";import"./makeExternalStore-MWPsIyHx.js";import"./Tooltip-s8Dx_pXA.js";import"./PopoverPopup-CHmR5dlC.js";import"./debounce-B2VVpvOF.js";import"./tick-WgC55DvX.js";import"./DropdownField-KfOaBG1s.js";import"./isEqual-DojFh0mn.js";import"./withOsdkMetrics-Csrf-Npu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

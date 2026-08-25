import{j as r}from"./iframe-DxvjiuoG.js";import{O as b}from"./object-table-C1rIg07t.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DxEq5uEG.js";import{u as g}from"./useOsdkClient-BL3DQAGe.js";import"./preload-helper-2Cdctxvp.js";import"./Table-Bt7I-9fh.js";import"./index-D2DXMnPC.js";import"./Dialog-D8iGCXY0.js";import"./cross-CU5iUeZK.js";import"./svgIconContainer-Bc-LX5w1.js";import"./useBaseUiId-i2ghUAO7.js";import"./InternalBackdrop-CF51yINN.js";import"./composite-MpnK6H_E.js";import"./index-DN7VKkaP.js";import"./index-CgTiDnZY.js";import"./index-DT-Ax1H_.js";import"./useEventCallback-DPD1XA1q.js";import"./SkeletonBar-ByvRbgLN.js";import"./LoadingCell-DH0nmNKa.js";import"./ColumnConfigDialog-DCRof0cd.js";import"./DraggableList-o0x5Lz3i.js";import"./search-fJEePfyI.js";import"./Input-B0kS4IYW.js";import"./useControlled-D-Xx0mSD.js";import"./Button-C-PpSW9Y.js";import"./small-cross-BlyD_TgH.js";import"./ActionButton-8gADSdhA.js";import"./Checkbox-Dk9uVSa8.js";import"./useValueChanged-CApWWG6C.js";import"./CollapsiblePanel-Jf-2Om3A.js";import"./MultiColumnSortDialog-Bzb2juOk.js";import"./MenuTrigger-tMIluLVa.js";import"./CompositeItem-CRP27kpk.js";import"./ToolbarRootContext-DuzuuZ_P.js";import"./getDisabledMountTransitionStyles-O_Za4iz6.js";import"./getPseudoElementBounds-2CPKLsDC.js";import"./chevron-down-QZl6FCPt.js";import"./index-DzU4p4MN.js";import"./error-6Ostu_bN.js";import"./BaseCbacBanner-BSrTd76m.js";import"./makeExternalStore-BFeJ6DMi.js";import"./Tooltip-DK3UmKno.js";import"./PopoverPopup-D-UXvPmv.js";import"./debounce-cAzSpEOp.js";import"./tick-6ZyvJRYq.js";import"./DropdownField-Bj3DtAmp.js";import"./isEqual-BZ4w7fHr.js";import"./withOsdkMetrics-Vqy1EVn8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

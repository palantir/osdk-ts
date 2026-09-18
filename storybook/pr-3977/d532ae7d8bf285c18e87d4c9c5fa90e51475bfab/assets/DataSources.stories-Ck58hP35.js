import{j as r}from"./iframe-TxXxbmz5.js";import{O as b}from"./object-table-DOS0WT1a.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BtpPRLMB.js";import{u as g}from"./useOsdkClient-CCaWk0Px.js";import"./preload-helper-CpxRQbhd.js";import"./Table-C2X14doc.js";import"./index-CN0gJRJO.js";import"./Dialog-DT7VSMak.js";import"./cross-VXN4aiwS.js";import"./svgIconContainer-CELXinHy.js";import"./useBaseUiId-Br3V4Y7Q.js";import"./InternalBackdrop-CetaIsfW.js";import"./composite-DOASapxT.js";import"./index-B7GgCYYh.js";import"./index-CIu9B3ha.js";import"./index-DyCiBw5P.js";import"./useEventCallback-g6vs120_.js";import"./SkeletonBar-BMAk9jbB.js";import"./LoadingCell-DPGrgI7B.js";import"./ColumnConfigDialog-zuV-SXCD.js";import"./DraggableList-DN_w3IKW.js";import"./search-BC9yKYZ2.js";import"./Input-B4WkyavH.js";import"./useControlled-DruZmDs3.js";import"./Button-LZRzEtLJ.js";import"./small-cross-Cdx0iwCB.js";import"./ActionButton-D-hbTAJE.js";import"./Checkbox-CARz_iuB.js";import"./useValueChanged-CWKC294z.js";import"./CollapsiblePanel-dwMPUOFS.js";import"./MultiColumnSortDialog-Dg0KJEfa.js";import"./MenuTrigger-BBnNVDOO.js";import"./CompositeItem-BE7Mz5Vz.js";import"./ToolbarRootContext-BWpuHFgW.js";import"./getDisabledMountTransitionStyles-C9uIvqp9.js";import"./getPseudoElementBounds-DfyCOY8U.js";import"./chevron-down-BclEY4pC.js";import"./index-CRtDM6bX.js";import"./error-DK4Y1HxX.js";import"./BaseCbacBanner-BekuzNeO.js";import"./makeExternalStore-Da0z5igE.js";import"./Tooltip-FiY13jbJ.js";import"./PopoverPopup-CPS5tfTo.js";import"./debounce-CnngSnsz.js";import"./tick-CF_Cqk30.js";import"./DropdownField-Cuo6Kh-T.js";import"./isEqual-Vj9O0wAi.js";import"./withOsdkMetrics-BEHPBM8E.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

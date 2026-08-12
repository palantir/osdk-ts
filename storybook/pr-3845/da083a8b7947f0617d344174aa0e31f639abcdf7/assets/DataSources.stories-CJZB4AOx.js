import{j as r}from"./iframe-BG-xXo7r.js";import{O as b}from"./object-table-1RAfaQKF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bda41rWp.js";import{u as g}from"./useOsdkClient-DH7JXxel.js";import"./preload-helper-2GkLelL5.js";import"./Table-rb1p-4tf.js";import"./index-Pj-HzUzm.js";import"./Dialog-DrUN80A_.js";import"./cross-COO8NBvG.js";import"./svgIconContainer-CRyh23yS.js";import"./useBaseUiId-D-UAxzqn.js";import"./InternalBackdrop-WCG0sYkD.js";import"./composite-CKXXvF5N.js";import"./index-BK0u17L-.js";import"./index-DwqJd7FU.js";import"./index-DR02O8bu.js";import"./useEventCallback-C97y8csB.js";import"./SkeletonBar-CKWLJD0i.js";import"./LoadingCell-CAUxc5Qv.js";import"./ColumnConfigDialog-zJyC0k_x.js";import"./DraggableList-jcpceXqW.js";import"./search-BdsoZ98Z.js";import"./Input-BZw_T80b.js";import"./useControlled-iuVTSgpH.js";import"./isEqual-DPwdhm9T.js";import"./isObject-CSS3G1-i.js";import"./Button-BwngmVa3.js";import"./ActionButton-Ck1hjfYS.js";import"./Checkbox-BAWFiuPA.js";import"./useValueChanged-CpBTQG4m.js";import"./CollapsiblePanel-BxSGC2o0.js";import"./MultiColumnSortDialog-B3LSPblt.js";import"./MenuTrigger-Bg-yIpNH.js";import"./CompositeItem-cxMrWvJM.js";import"./ToolbarRootContext-DRFZpc1m.js";import"./getDisabledMountTransitionStyles-BFncSCC7.js";import"./getPseudoElementBounds-DIwOO_f-.js";import"./chevron-down-BfUHrZib.js";import"./index-CQkLRa4U.js";import"./error-RFJ-PR3n.js";import"./BaseCbacBanner-BiIEtPUE.js";import"./makeExternalStore-BKMYc6Mc.js";import"./Tooltip-pjPnDbXT.js";import"./PopoverPopup-B0nz0je_.js";import"./toNumber-s1ERlujj.js";import"./tick-Ck2m9m_d.js";import"./DropdownField-Clf5Rcoi.js";import"./withOsdkMetrics-CfOwfL5Z.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

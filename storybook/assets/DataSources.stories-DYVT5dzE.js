import{j as r}from"./iframe-q6NKVMOW.js";import{O as b}from"./object-table-DzbbIM5Z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C_cualaH.js";import{u as g}from"./useOsdkClient-brfNmyCb.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BbYjbBYd.js";import"./index-B5MNjG-7.js";import"./Dialog-3E9ScHwj.js";import"./cross-kBxFNNzf.js";import"./svgIconContainer-Cl-19u26.js";import"./useBaseUiId-DS12ecTt.js";import"./InternalBackdrop-_jEsJaJc.js";import"./composite-DWdzf7xq.js";import"./index-CXmB_YXt.js";import"./index-B8pCVHdG.js";import"./index-CPso5KRe.js";import"./useEventCallback-BjoOPJhQ.js";import"./SkeletonBar-BLnRSmtQ.js";import"./LoadingCell-BfelY0um.js";import"./ColumnConfigDialog-DCPZqHqP.js";import"./DraggableList-OQJn8TwR.js";import"./search-BG6VKYDl.js";import"./Input-CW_LwEgU.js";import"./useControlled-rHUBc6dP.js";import"./Button-B0F_wJsq.js";import"./small-cross-BFe6bKcr.js";import"./ActionButton-DELaTHWY.js";import"./Checkbox-Bo5IimwW.js";import"./useValueChanged-B_EMYZEM.js";import"./CollapsiblePanel-DpM02--P.js";import"./MultiColumnSortDialog-Bp3s0Soi.js";import"./MenuTrigger-Dlad_--F.js";import"./CompositeItem-Cm8x2Oga.js";import"./ToolbarRootContext-CrOFR8_B.js";import"./getDisabledMountTransitionStyles-Dy4RoREr.js";import"./getPseudoElementBounds-C7xHfoER.js";import"./chevron-down-DeyzUbGB.js";import"./index-N79EOdPZ.js";import"./error-C3FqO6Mu.js";import"./BaseCbacBanner-CGXBjJmn.js";import"./makeExternalStore-C_DYB-ey.js";import"./Tooltip-DdAmQHtJ.js";import"./PopoverPopup-CEvo7W78.js";import"./debounce-LdB-CNSo.js";import"./tick-CVAXBWRm.js";import"./DropdownField-BtqcTwLB.js";import"./isEqual-DAYpnafB.js";import"./withOsdkMetrics-B0o7MA2A.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

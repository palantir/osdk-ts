import{j as r}from"./iframe-ZAeU3zkK.js";import{O as b}from"./object-table-BI32PtsP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-OuHyvBM9.js";import{u as g}from"./useOsdkClient-CACsolCb.js";import"./preload-helper-DFsW7uwK.js";import"./Table-l3mPBzd1.js";import"./index-C9bCg_D0.js";import"./Dialog-Btj1QDjF.js";import"./cross-ItoF_QFP.js";import"./svgIconContainer-kZIk52CD.js";import"./useBaseUiId-Cr86WIIa.js";import"./InternalBackdrop-lV80e5CV.js";import"./composite-DFfGy7b5.js";import"./index-BrY0sG19.js";import"./index-BSgExDm2.js";import"./index-B_QXRGZh.js";import"./useEventCallback-D1zmtjsN.js";import"./SkeletonBar-ke7cILwX.js";import"./LoadingCell-q8CMiXdE.js";import"./ColumnConfigDialog-CtJCCHtI.js";import"./DraggableList-BDeEbSFQ.js";import"./search-DGJLlzUF.js";import"./Input-DZJFdIf0.js";import"./useControlled-CsDf-xSS.js";import"./isEqual-B3qe3pS1.js";import"./isObject-DRgm0nAf.js";import"./Button-btiulsx-.js";import"./ActionButton-swfO8HME.js";import"./Checkbox-BaVNDqn9.js";import"./useValueChanged-BqnyuSl8.js";import"./CollapsiblePanel-BwEoPyuP.js";import"./MultiColumnSortDialog-C9IFmKTT.js";import"./MenuTrigger-Uiz0PELH.js";import"./CompositeItem-B-J0xggi.js";import"./ToolbarRootContext-6UgAqfrb.js";import"./getDisabledMountTransitionStyles-KElE6z_O.js";import"./getPseudoElementBounds-BeDlRbET.js";import"./chevron-down-D_k3Y51h.js";import"./index-CjDYZjtC.js";import"./error-MpDB7OgY.js";import"./BaseCbacBanner-BEF2jKkB.js";import"./makeExternalStore-CLF-6_HY.js";import"./Tooltip-h2W3NXYk.js";import"./PopoverPopup-COPtTg9S.js";import"./toNumber-CEti0auR.js";import"./tick-CK1j0r_S.js";import"./DropdownField-D279pPiY.js";import"./withOsdkMetrics-D_HYVVwC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

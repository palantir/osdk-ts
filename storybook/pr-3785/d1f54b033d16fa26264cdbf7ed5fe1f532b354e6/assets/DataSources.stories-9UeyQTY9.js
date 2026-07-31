import{j as r}from"./iframe-CVSzcR9w.js";import{O as b}from"./object-table-BL1OrLFB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CDRGVLxJ.js";import{u as g}from"./useOsdkClient-zxzV_-Ks.js";import"./preload-helper-BmmGuI8h.js";import"./Table-CWnSfT3m.js";import"./index-CoAdBXlo.js";import"./Dialog-BzNiLNgs.js";import"./cross-V8sJpGew.js";import"./svgIconContainer-KW-Ldlhm.js";import"./useBaseUiId-pwNrWxdW.js";import"./InternalBackdrop-DNoxDdhd.js";import"./composite-C1Itxjsp.js";import"./index-7SZNtxet.js";import"./index-qmxryskj.js";import"./index-C9y3lIUT.js";import"./useEventCallback-DpMXC2Hy.js";import"./SkeletonBar-B9Ea506E.js";import"./LoadingCell-DDjnYE73.js";import"./ColumnConfigDialog-C4dV68Pi.js";import"./DraggableList-WoTEeIb9.js";import"./search-BnG6tzYG.js";import"./Input-BoTWr8hd.js";import"./useControlled-D5f5j6Pp.js";import"./isEqual-ClJk3lFA.js";import"./isObject-Vb025kqi.js";import"./Button-DeOcB25O.js";import"./ActionButton-BcK8fNN1.js";import"./Checkbox-BSkLo_n2.js";import"./useValueChanged-CJNDKAIt.js";import"./CollapsiblePanel-XxbiJK0o.js";import"./MultiColumnSortDialog-DJCm2HJK.js";import"./MenuTrigger-B4kKkHBw.js";import"./CompositeItem-Bp7fB8eh.js";import"./ToolbarRootContext-DvS1wowG.js";import"./getDisabledMountTransitionStyles-JXZ7CF5Q.js";import"./getPseudoElementBounds-1PgxGw36.js";import"./chevron-down-DgBBMt89.js";import"./index-__u3if6D.js";import"./error-CyOfkgHN.js";import"./BaseCbacBanner-G11Duftm.js";import"./makeExternalStore-B7Vg_OOg.js";import"./Tooltip-BGpjdADX.js";import"./PopoverPopup-BeNdVAq4.js";import"./toNumber-cJlww_NR.js";import"./tick-DGpYKPfs.js";import"./DropdownField-DD8sp4es.js";import"./withOsdkMetrics-yQOKEog8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

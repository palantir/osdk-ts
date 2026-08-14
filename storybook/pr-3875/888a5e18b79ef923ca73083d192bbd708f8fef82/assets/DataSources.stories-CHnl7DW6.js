import{j as r}from"./iframe-6a_kvn9r.js";import{O as b}from"./object-table-gJ255PhT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-v3SpIrGk.js";import{u as g}from"./useOsdkClient-CGw7GANw.js";import"./preload-helper-UmLrF_r9.js";import"./Table-XFNsRdvZ.js";import"./index-DZsq7FTs.js";import"./Dialog-CJHtM02i.js";import"./cross-ClFn7dec.js";import"./svgIconContainer-BMlsWZH7.js";import"./useBaseUiId-BwFLjng5.js";import"./InternalBackdrop-DESVWcn8.js";import"./composite-BqONz2GB.js";import"./index-De5jnlky.js";import"./index-BA8CMsKZ.js";import"./index-DdLLueEx.js";import"./useEventCallback-CzHH4T4L.js";import"./SkeletonBar-cjMH9Rpu.js";import"./LoadingCell-emwA1P9i.js";import"./ColumnConfigDialog-DumybdDg.js";import"./DraggableList-DkgUp4lG.js";import"./search-DOcCo1oD.js";import"./Input-BN6wpSvl.js";import"./useControlled-DlWAEbXA.js";import"./Button-BY6mG_TR.js";import"./small-cross-Bn2R2wbf.js";import"./ActionButton-Bi5m9DmB.js";import"./Checkbox-BPX4OFc-.js";import"./useValueChanged-CcWLOV5o.js";import"./CollapsiblePanel-CdhtTK8U.js";import"./MultiColumnSortDialog-BtmZ1yCk.js";import"./MenuTrigger-sr65K0My.js";import"./CompositeItem-r_UKZCPX.js";import"./ToolbarRootContext-8rOO4UX6.js";import"./getDisabledMountTransitionStyles-YFTqCi3r.js";import"./getPseudoElementBounds-CWsjtQ7H.js";import"./chevron-down-CWTTgj3w.js";import"./index-BGR9g80G.js";import"./error-C1tZ3x6V.js";import"./BaseCbacBanner-Cn-gJzjV.js";import"./makeExternalStore-B7ja9LyT.js";import"./Tooltip-CbdMy9JX.js";import"./PopoverPopup-C2WrfQ0J.js";import"./debounce-BQ6n828Z.js";import"./tick-Ddpdailt.js";import"./DropdownField-iDzYtBYA.js";import"./isEqual-By-mDykE.js";import"./withOsdkMetrics-D0t1junC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

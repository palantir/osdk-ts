import{j as r}from"./iframe-TjZyb1bS.js";import{O as b}from"./object-table-BV4MS_q3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dth77Y_x.js";import{u as g}from"./useOsdkClient-DYOHCNMK.js";import"./preload-helper-6vf5keDo.js";import"./Table-BGNs9QD3.js";import"./index-DO-d5Nhw.js";import"./Dialog-23QYsuiV.js";import"./cross-CcY2Z_E0.js";import"./svgIconContainer-g1t1jdQ-.js";import"./useBaseUiId-Dy5x7CTr.js";import"./InternalBackdrop-CL0l71br.js";import"./composite-B6T__7Xq.js";import"./index-08ELxWRo.js";import"./index-7MMySw2W.js";import"./index-IX_ZzulM.js";import"./useEventCallback-B_jx4L8R.js";import"./SkeletonBar-BN1dFAOr.js";import"./LoadingCell-BAUyVAf6.js";import"./ColumnConfigDialog-x4FXt_HP.js";import"./DraggableList-BNTHvxrB.js";import"./search-EfOYLmyo.js";import"./Input-JrCXDO00.js";import"./useControlled-DPKnbe0H.js";import"./Button-D4RUqMFW.js";import"./small-cross-_-bOsCQr.js";import"./ActionButton-B1ZAyzPy.js";import"./Checkbox-C3YPr4s5.js";import"./useValueChanged-C4PO7ygq.js";import"./CollapsiblePanel-BaMD_OMq.js";import"./MultiColumnSortDialog-C5kaH62z.js";import"./MenuTrigger-DFd2Cz7b.js";import"./CompositeItem-BA7lzU2v.js";import"./ToolbarRootContext-DAXEwoS8.js";import"./getDisabledMountTransitionStyles-DjPnR7Pk.js";import"./getPseudoElementBounds-CK3999ou.js";import"./chevron-down-aFaMKH-b.js";import"./index-ntrV61BC.js";import"./error-Ch19zHJw.js";import"./BaseCbacBanner-TgOhY0Ii.js";import"./makeExternalStore-C8VFKLfw.js";import"./Tooltip-CXH0W3g_.js";import"./PopoverPopup-CFt2P9Dg.js";import"./debounce-C2sRTyHH.js";import"./tick-zIDdkd7l.js";import"./DropdownField-CBqw0p8h.js";import"./isEqual-DpAq6o8s.js";import"./withOsdkMetrics-C27aqxoK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

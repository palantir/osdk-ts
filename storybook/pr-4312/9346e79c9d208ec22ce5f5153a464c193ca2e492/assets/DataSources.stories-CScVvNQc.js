import{j as r}from"./iframe-DM1KpbCL.js";import{O as b}from"./object-table-BYpj4rmp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-2z0jyVZo.js";import{u as g}from"./useOsdkClient-2PfnP7RQ.js";import"./preload-helper-B5lE_CeJ.js";import"./Table-CgY3wOOw.js";import"./index-CcTzWx10.js";import"./Dialog-BPu8yv4m.js";import"./cross-CnFtk43X.js";import"./svgIconContainer-D9_cFA2L.js";import"./useBaseUiId-BS0ydcCd.js";import"./InternalBackdrop-BafR-jVe.js";import"./composite-UHbWR1-V.js";import"./index-kvb1enIs.js";import"./index-Zf2bdMMR.js";import"./index-DzseGhFT.js";import"./useEventCallback-CPGZvpaV.js";import"./SkeletonBar-CIbWgRcz.js";import"./LoadingCell-B-S-snu4.js";import"./ColumnConfigDialog-BwmXpKR2.js";import"./DraggableList-BPHkcrGz.js";import"./search-CDaKZsSd.js";import"./Input-rJPz8yLN.js";import"./useControlled-BpM5Znsw.js";import"./Button-DbYUMIvf.js";import"./small-cross-D217SYw1.js";import"./ActionButton-CWh3vKDS.js";import"./Checkbox-B_lQ7cng.js";import"./useValueChanged-BvcJAZcs.js";import"./CollapsiblePanel-BCYCJ6Xx.js";import"./MultiColumnSortDialog-B1ICIl4b.js";import"./MenuTrigger-CAG7Bxtr.js";import"./CompositeItem-DEphRU8b.js";import"./ToolbarRootContext-kXKFrX_U.js";import"./getDisabledMountTransitionStyles-BnK3lh8Z.js";import"./getPseudoElementBounds-CmPQacu1.js";import"./chevron-down-B55CqhSV.js";import"./index-BzYLadhD.js";import"./error-BpWcPv0-.js";import"./BaseCbacBanner-B7JhimwT.js";import"./makeExternalStore-ZdV9YzEC.js";import"./Tooltip-DJZfHa2w.js";import"./PopoverPopup-B7nGMxdA.js";import"./debounce-CcYDWLT0.js";import"./tick-Dp0UZtnJ.js";import"./DropdownField-ByM8k4kQ.js";import"./isEqual-CGEFIeDh.js";import"./withOsdkMetrics-Dzlv9-Px.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

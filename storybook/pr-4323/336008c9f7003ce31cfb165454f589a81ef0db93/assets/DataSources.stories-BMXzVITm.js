import{j as r}from"./iframe-Dy3pbGVl.js";import{O as b}from"./object-table-kTEr-sWF.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-7n0SntDC.js";import{u as g}from"./useOsdkClient-B6m6pKrS.js";import"./preload-helper-CpAlczou.js";import"./Table-VOHC5N06.js";import"./index-BGynA5Ey.js";import"./Dialog-zWcA6cDC.js";import"./cross-_ffwL7On.js";import"./svgIconContainer-DwcpIzbz.js";import"./useBaseUiId-1GhcXjBj.js";import"./InternalBackdrop-DMIRmadR.js";import"./composite-DD7PMic6.js";import"./index-rQvGOKiy.js";import"./index-B3hOY3C5.js";import"./index-Dl_Buekn.js";import"./useEventCallback-C3LX0_mu.js";import"./SkeletonBar-DSCrW__O.js";import"./LoadingCell-DfPkft0q.js";import"./ColumnConfigDialog-BbLQ2JxQ.js";import"./DraggableList-C-d_nAEh.js";import"./search-CRVUm7gt.js";import"./Input-Ddh63PuK.js";import"./useControlled-CHjpObPc.js";import"./Button-ByPi26fD.js";import"./small-cross-DjIzegN_.js";import"./ActionButton-DFCeFCb6.js";import"./Checkbox-DDOz7-wX.js";import"./useValueChanged-DpMeL3s2.js";import"./CollapsiblePanel-CBe89pMe.js";import"./MultiColumnSortDialog-CZFWzHwI.js";import"./MenuTrigger-CZSjGNYF.js";import"./CompositeItem-BeUctUoU.js";import"./ToolbarRootContext-B0Ul7YuG.js";import"./getDisabledMountTransitionStyles-eVKTLrRf.js";import"./getPseudoElementBounds-gTzTtYPO.js";import"./chevron-down-8plcDTLG.js";import"./index-TQ3K22OR.js";import"./error-C7pYFxix.js";import"./BaseCbacBanner-C2pkLlLs.js";import"./makeExternalStore-WrhHs9Vh.js";import"./Tooltip-BSjRKIbt.js";import"./PopoverPopup-DrFWXbYx.js";import"./debounce-CXNS7Ik8.js";import"./tick-CBR4s6ZO.js";import"./DropdownField-CzivYSGB.js";import"./isEqual-Z9n-lDZW.js";import"./withOsdkMetrics-DtiZVH3G.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

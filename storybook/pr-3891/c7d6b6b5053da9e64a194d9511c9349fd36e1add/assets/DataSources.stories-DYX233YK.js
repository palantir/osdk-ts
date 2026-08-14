import{j as r}from"./iframe-Ct96tLEP.js";import{O as b}from"./object-table-BVb4YUri.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-iEqQo9UR.js";import{u as g}from"./useOsdkClient-CNbvIXrl.js";import"./preload-helper-BzXm-lWo.js";import"./Table-BLTNEoRk.js";import"./index-BrLV5Brk.js";import"./Dialog-CdgpJYdr.js";import"./cross-njCgeQQ_.js";import"./svgIconContainer-YyohibIC.js";import"./useBaseUiId-DlPo7HoM.js";import"./InternalBackdrop-CBhLfZ10.js";import"./composite-ClWDPy_Z.js";import"./index-n7zQzqGm.js";import"./index-CFGgbOOg.js";import"./index-DvkK9vYJ.js";import"./useEventCallback-NT9uVSN-.js";import"./SkeletonBar-CHy9ImdP.js";import"./LoadingCell-CBjpGz6p.js";import"./ColumnConfigDialog-DeNfn3-2.js";import"./DraggableList-CdCzNXll.js";import"./search-gcuSrwrj.js";import"./Input-BjRTRl1y.js";import"./useControlled-BrUHVbre.js";import"./Button--zxmfjhO.js";import"./small-cross-CdOMJomB.js";import"./ActionButton-mBYFJsFl.js";import"./Checkbox-DCpFl39i.js";import"./useValueChanged-5fXKuMKH.js";import"./CollapsiblePanel-Zda4NkR-.js";import"./MultiColumnSortDialog-LxJNdhr2.js";import"./MenuTrigger-DDhJo6rx.js";import"./CompositeItem-ofC_tm6k.js";import"./ToolbarRootContext-COQSoUvI.js";import"./getDisabledMountTransitionStyles-CosExIO_.js";import"./getPseudoElementBounds-C54av8yB.js";import"./chevron-down-3x8blo3k.js";import"./index-BQUZFKJ4.js";import"./error-9UY90i-J.js";import"./BaseCbacBanner-CClJZgLo.js";import"./makeExternalStore-DsptzOqM.js";import"./Tooltip-COO2pN_0.js";import"./PopoverPopup-Bp-cbf8K.js";import"./debounce-qlqazifV.js";import"./tick-BTw5BL4P.js";import"./DropdownField-ipyk94KE.js";import"./isEqual-OrluLmcb.js";import"./withOsdkMetrics-BTh75wtd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

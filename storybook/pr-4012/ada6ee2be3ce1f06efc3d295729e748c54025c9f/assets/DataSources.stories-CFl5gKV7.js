import{j as r}from"./iframe-R3i6F3aO.js";import{O as b}from"./object-table-BgTYg10X.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CsLCEMtu.js";import{u as g}from"./useOsdkClient-B-ltzRX3.js";import"./preload-helper-C9bdGnH6.js";import"./Table-C01PNnUN.js";import"./index-BGblgBJY.js";import"./Dialog-vzu_lA8w.js";import"./cross-BPxLtSBw.js";import"./svgIconContainer-C5apQk5w.js";import"./useBaseUiId-Bs3UtHPs.js";import"./InternalBackdrop-BHQr0waf.js";import"./composite-DqPiEnK1.js";import"./index-FYBTDmiA.js";import"./index-BcSLoxTr.js";import"./index-CJpO-LuO.js";import"./useEventCallback-Br_xasQQ.js";import"./SkeletonBar-CEO897hA.js";import"./LoadingCell-78y270gJ.js";import"./ColumnConfigDialog-CMfpzQwr.js";import"./DraggableList-BIW1gmbf.js";import"./search-CLosiH11.js";import"./Input-sn4ChjOn.js";import"./useControlled-CF852Dip.js";import"./Button-DHONR1q8.js";import"./small-cross-BPJFbpZY.js";import"./ActionButton-CgZ1I1zH.js";import"./Checkbox-G34ERc79.js";import"./useValueChanged-DXcnjapY.js";import"./CollapsiblePanel-CnpdwwlI.js";import"./MultiColumnSortDialog-D17gBqMo.js";import"./MenuTrigger-SapJWbmy.js";import"./CompositeItem-CwiOxIme.js";import"./ToolbarRootContext-CwgLFLhe.js";import"./getDisabledMountTransitionStyles-B-rU_9sL.js";import"./getPseudoElementBounds-BhVzGz-s.js";import"./chevron-down-DiJ60wr5.js";import"./index-DRFmYbvw.js";import"./error-DSevPCVz.js";import"./BaseCbacBanner-D58x-qgC.js";import"./makeExternalStore-BNMggstW.js";import"./Tooltip-C7Pq2vOJ.js";import"./PopoverPopup-sZXPOR4E.js";import"./debounce-QFsAiE7l.js";import"./tick-BlsNuID7.js";import"./DropdownField-BAjlL0wb.js";import"./isEqual-B8rlE8Mo.js";import"./withOsdkMetrics-D6yaQzlx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

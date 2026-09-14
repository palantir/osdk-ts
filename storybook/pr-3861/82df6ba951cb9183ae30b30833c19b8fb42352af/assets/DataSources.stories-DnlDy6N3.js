import{j as r}from"./iframe-D3x4g0gw.js";import{O as b}from"./object-table-BJWR7mZ5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CIpzs5u0.js";import{u as g}from"./useOsdkClient-CcBCF4jU.js";import"./preload-helper-DpKiFXQE.js";import"./Table-gtzT0OA8.js";import"./index-DmJVhxkC.js";import"./Dialog-BL0eiG9o.js";import"./cross-noZD8yCQ.js";import"./svgIconContainer-Ch07AZiN.js";import"./useBaseUiId-Cza7NB65.js";import"./InternalBackdrop-DRfabTHE.js";import"./composite-CbVzOtkL.js";import"./index-BFwtMTR7.js";import"./index-CHX_y3YQ.js";import"./index-BM_v9pt3.js";import"./useEventCallback-DKxR4GSB.js";import"./SkeletonBar-BBCGvtlx.js";import"./LoadingCell-BkcsG2ev.js";import"./ColumnConfigDialog-CIdTSppo.js";import"./DraggableList-B2z6Jhre.js";import"./search-Vpq8vYa6.js";import"./Input-D7XVlSnc.js";import"./useControlled-u8Kd9MbQ.js";import"./Button-waIQuOK_.js";import"./small-cross-DojPJSHV.js";import"./ActionButton-D4pNdjo7.js";import"./Checkbox-SAzgd6A3.js";import"./useValueChanged-Cm3ghXGz.js";import"./CollapsiblePanel-MtWIBxII.js";import"./MultiColumnSortDialog-CX94El7z.js";import"./MenuTrigger-D4FrUD7q.js";import"./CompositeItem-C81j0gfv.js";import"./ToolbarRootContext-D-JTlGY6.js";import"./getDisabledMountTransitionStyles-BDg7WwLA.js";import"./getPseudoElementBounds-m4kZMHaS.js";import"./chevron-down-F1u7ETIP.js";import"./index-CdtIJVqT.js";import"./error-EOjqK743.js";import"./BaseCbacBanner-CAxpfmC5.js";import"./makeExternalStore-B-EBN1-5.js";import"./Tooltip-Cny1QPUK.js";import"./PopoverPopup-BJayu4w5.js";import"./debounce-Dgw7wFze.js";import"./tick-E3YA_PC9.js";import"./DropdownField-BTbdugIo.js";import"./isEqual-DdD0roBe.js";import"./withOsdkMetrics-q2ysVhnq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

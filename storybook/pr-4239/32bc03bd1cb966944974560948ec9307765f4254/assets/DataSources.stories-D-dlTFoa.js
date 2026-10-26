import{j as r}from"./iframe-DexdKsaQ.js";import{O as b}from"./object-table--Xzz2q6z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DV5JVy0O.js";import{u as g}from"./useOsdkClient-mkKseWzk.js";import"./preload-helper-C3HMhfxy.js";import"./Table-0uxJVwjw.js";import"./index-CbLEfBq5.js";import"./Dialog-Bl_IB0gG.js";import"./cross-D_rqjJ8K.js";import"./svgIconContainer-BRMcYWO4.js";import"./useBaseUiId-sMlbFyJU.js";import"./InternalBackdrop-AGxJgsS7.js";import"./composite-BciPM06w.js";import"./index-BqerP4CK.js";import"./index-__d1p36X.js";import"./index-DRMwbFJm.js";import"./useEventCallback-00FuE3yt.js";import"./SkeletonBar-CTo2vf2l.js";import"./LoadingCell-QVcjovzl.js";import"./ColumnConfigDialog-8H_Huj5j.js";import"./DraggableList-IrB-ONqE.js";import"./search-DTk97rWq.js";import"./Input-BuDuHwVf.js";import"./useControlled-DJ_HdD9M.js";import"./Button-Cpyi3piv.js";import"./small-cross-CDaXIpxf.js";import"./ActionButton-5jPmd7jR.js";import"./Checkbox-Cs-cCTFT.js";import"./useValueChanged-CrQ7wcWr.js";import"./CollapsiblePanel-gO76M-DU.js";import"./MultiColumnSortDialog-a4DIDRAh.js";import"./MenuTrigger-DC413XLI.js";import"./CompositeItem-UFfjwpOD.js";import"./ToolbarRootContext-B4sm5nDg.js";import"./getDisabledMountTransitionStyles-ux2ze1bo.js";import"./getPseudoElementBounds-B3DGHAsz.js";import"./chevron-down-CPG2b4DG.js";import"./index-DEkTB2Ut.js";import"./error-mWFE-E3g.js";import"./BaseCbacBanner-B0Bpjetm.js";import"./makeExternalStore-CGnJLW95.js";import"./Tooltip-CXPRVM-4.js";import"./PopoverPopup-Bl0JUMbC.js";import"./debounce-B6TRsFCS.js";import"./tick-D75lzxtW.js";import"./DropdownField-BSrXQuo_.js";import"./isEqual-BYVoFHZi.js";import"./withOsdkMetrics-DPD_IOvo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

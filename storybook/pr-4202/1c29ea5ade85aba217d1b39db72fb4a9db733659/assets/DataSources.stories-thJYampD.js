import{j as r}from"./iframe-CIXJ1U8N.js";import{O as b}from"./object-table-DtBNFrGy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-c73KBfeA.js";import{u as g}from"./useOsdkClient-hryzPEYC.js";import"./preload-helper-CgAbFwMM.js";import"./Table-ujY_3q3Y.js";import"./index-2fupTi2T.js";import"./Dialog-CtKlx1EH.js";import"./cross-C_OpOp6J.js";import"./svgIconContainer-Huhb1Vpv.js";import"./useBaseUiId-CSHKQrix.js";import"./InternalBackdrop-BB_NyzKQ.js";import"./composite-CkH4ezLi.js";import"./index-Cj3EoK94.js";import"./index-BD3Sluvn.js";import"./index-CMU6jwvj.js";import"./useEventCallback-BAb1tGXb.js";import"./SkeletonBar-DWlwxS8c.js";import"./LoadingCell-RhYunsw8.js";import"./ColumnConfigDialog-CA_BQylr.js";import"./DraggableList-QR-30KqF.js";import"./search-C5_KVz48.js";import"./Input-BNqEEzus.js";import"./useControlled-Bxgh_fPL.js";import"./Button-B0yxaPGE.js";import"./small-cross-DqpTtCsd.js";import"./ActionButton-P6WNwUke.js";import"./Checkbox-DdW4Dgwk.js";import"./useValueChanged-9P5wqA7j.js";import"./CollapsiblePanel-BvJiT584.js";import"./MultiColumnSortDialog-njBKOwpR.js";import"./MenuTrigger-DL4uNTPf.js";import"./CompositeItem-lWchzb2t.js";import"./ToolbarRootContext-R5s0J2Ul.js";import"./getDisabledMountTransitionStyles-Bdjcrdfd.js";import"./getPseudoElementBounds-BIDolQ8Z.js";import"./chevron-down-7pDp1Oma.js";import"./index-Cy-OTb6Y.js";import"./error-DmS7Y91z.js";import"./BaseCbacBanner-CdsEDBi4.js";import"./makeExternalStore-Dq-OkEYB.js";import"./Tooltip-IZXR1Hew.js";import"./PopoverPopup-SRPRdtkN.js";import"./debounce--Eb71UVP.js";import"./tick-CbF9d7YO.js";import"./DropdownField-BjlvHhR7.js";import"./isEqual-D-5hfkVh.js";import"./withOsdkMetrics-D0zzaBUz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-C1kKKYdD.js";import{O as b}from"./object-table-EugYSPRX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BP3ho0qc.js";import{u as g}from"./useOsdkClient-CK76NQ5O.js";import"./preload-helper-C6rhobWF.js";import"./Table-CLbo6gpE.js";import"./index-B1n8gOgb.js";import"./Dialog-D7ukJCKc.js";import"./cross-BR0Y4p7f.js";import"./svgIconContainer-BTr0PbTv.js";import"./useBaseUiId-DXAZbTHW.js";import"./InternalBackdrop-3F3xyHcj.js";import"./composite-ByHxOBay.js";import"./index-DQDP2CQD.js";import"./index-BLcLrxFs.js";import"./index-U-Kwg7sY.js";import"./useEventCallback-CdKhensz.js";import"./SkeletonBar-CPN9tZcc.js";import"./LoadingCell-ClyVakYH.js";import"./ColumnConfigDialog-BgefYkLR.js";import"./DraggableList-CHuZ_t3T.js";import"./search-D608KClO.js";import"./Input-BuF9ZIUF.js";import"./useControlled-unM0ZLUw.js";import"./Button-BSvNohBM.js";import"./small-cross-BIpg1ePk.js";import"./ActionButton-B68xFw_I.js";import"./Checkbox-xlu2pDu0.js";import"./useValueChanged-DFOr3chR.js";import"./CollapsiblePanel-CKUKf9Bh.js";import"./MultiColumnSortDialog-MHmSP81g.js";import"./MenuTrigger-o8CXHElR.js";import"./CompositeItem-BdX0jAKM.js";import"./ToolbarRootContext-BtomAQOF.js";import"./getDisabledMountTransitionStyles-Clu-nqTW.js";import"./getPseudoElementBounds-B5hqRMo8.js";import"./chevron-down-nMTcBTam.js";import"./index-BzLe4OJj.js";import"./error-BDemNBQ2.js";import"./BaseCbacBanner-BUjFwL83.js";import"./makeExternalStore-Cl4nhu8w.js";import"./Tooltip-CWzX8-a-.js";import"./PopoverPopup-BDqDxjcQ.js";import"./debounce-CcUXcLi7.js";import"./tick-BitGxqRP.js";import"./DropdownField-D9mPTLqi.js";import"./isEqual-CHP7bcZD.js";import"./withOsdkMetrics-BcxhsS6v.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

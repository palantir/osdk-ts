import{j as r}from"./iframe-DbTMqywr.js";import{O as b}from"./object-table-B4NijfTH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-gQd7UeVW.js";import{u as g}from"./useOsdkClient-T0bLDe_N.js";import"./preload-helper-CplCMsOq.js";import"./Table-ivRLn4Th.js";import"./index-DrdNpw1u.js";import"./Dialog-DCrT0Gtt.js";import"./cross-D4suWXRq.js";import"./svgIconContainer-1kdK0av6.js";import"./useBaseUiId-kPb3HUGs.js";import"./InternalBackdrop-C2r_bKtU.js";import"./composite-EoFmCbIV.js";import"./index-B_vDPu9R.js";import"./index-BCeNJbNy.js";import"./index-D8QZGzUD.js";import"./useEventCallback-BukFJMlj.js";import"./SkeletonBar-DxAs7_Je.js";import"./LoadingCell-B5t-9nBu.js";import"./ColumnConfigDialog-BoEEyPIP.js";import"./DraggableList-ChICZTX-.js";import"./search-CUcR83Lr.js";import"./Input-BLknSyNo.js";import"./useControlled-DbEVD0lO.js";import"./Button-B7bNBfe0.js";import"./small-cross-Ch5rXEbe.js";import"./ActionButton-L8rz2KEU.js";import"./Checkbox-DNMwhsGI.js";import"./useValueChanged-bqR-PJWE.js";import"./CollapsiblePanel-C4Fd8GWr.js";import"./MultiColumnSortDialog-C2m7wdIH.js";import"./MenuTrigger-C4ayYf8h.js";import"./CompositeItem-hF1oPeOK.js";import"./ToolbarRootContext-D1MHZAC5.js";import"./getDisabledMountTransitionStyles-CKr3XGAi.js";import"./getPseudoElementBounds-H03pfPE9.js";import"./chevron-down-Bh3KWvIp.js";import"./index-BioKUlDZ.js";import"./error-Du92aaZX.js";import"./BaseCbacBanner-B4a-77eR.js";import"./makeExternalStore-mtSSB5CA.js";import"./Tooltip-X97LD_qB.js";import"./PopoverPopup-yvtzY1iK.js";import"./debounce-BgRvR_Oe.js";import"./tick-Dk-mGEMR.js";import"./DropdownField-AShWiiqn.js";import"./isEqual-C3spmmnW.js";import"./withOsdkMetrics-C049M_96.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

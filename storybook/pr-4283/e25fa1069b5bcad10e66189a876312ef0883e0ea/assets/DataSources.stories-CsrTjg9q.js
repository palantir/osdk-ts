import{j as r}from"./iframe-CYk-VOyX.js";import{O as b}from"./object-table-Dlv2NNIH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BNa9ELP0.js";import{u as g}from"./useOsdkClient-CpgQqUq5.js";import"./preload-helper-SkgcqAwO.js";import"./Table-CcTGCJ8I.js";import"./index-SBfcRZ8A.js";import"./Dialog-BSX3qA9d.js";import"./cross-DMsanrWV.js";import"./svgIconContainer-jVuUMFBU.js";import"./useBaseUiId-DaFkg2Hs.js";import"./InternalBackdrop-Boo6A0xA.js";import"./composite-BKwpvwkR.js";import"./index-C_yRwNB9.js";import"./index-BIIvDw_e.js";import"./index-DPxe0aBZ.js";import"./useEventCallback-BY8DoVsR.js";import"./SkeletonBar-62HfS3Nk.js";import"./LoadingCell-C1ph3ij6.js";import"./ColumnConfigDialog-CngWqElV.js";import"./DraggableList-BPueF49n.js";import"./search-cR64-3Tm.js";import"./Input-D-JL81JO.js";import"./useControlled-C7TGm_r4.js";import"./Button-CExSo-UX.js";import"./small-cross-G7_j2zv8.js";import"./ActionButton-D8hPawwc.js";import"./Checkbox-BYlpXA2o.js";import"./useValueChanged-DrnGNbKP.js";import"./CollapsiblePanel-D0zrAQ08.js";import"./MultiColumnSortDialog-DZEk5xHQ.js";import"./MenuTrigger-CeyAU8Ab.js";import"./CompositeItem-CaDSOm5y.js";import"./ToolbarRootContext--t9DiEt8.js";import"./getDisabledMountTransitionStyles-CPFd5Dgv.js";import"./getPseudoElementBounds-BtB_IhPs.js";import"./chevron-down-Bs06bZ_z.js";import"./index-DHPPBEA9.js";import"./error-zC5vfcSr.js";import"./BaseCbacBanner-BJopHCBa.js";import"./makeExternalStore-B8yIQpmX.js";import"./Tooltip-DygePy8y.js";import"./PopoverPopup-MmB-vCo2.js";import"./debounce-BLRPrO6Z.js";import"./tick-sF3dW88A.js";import"./DropdownField-B-M_qxJL.js";import"./isEqual-DTmc0HEa.js";import"./withOsdkMetrics-BJbglULT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

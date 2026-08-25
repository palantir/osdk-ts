import{j as r}from"./iframe-DYuNygDT.js";import{O as b}from"./object-table-BGSywQPX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BjPSK1Lx.js";import{u as g}from"./useOsdkClient-DT0yAhzW.js";import"./preload-helper-DNcVOp9p.js";import"./Table-Bd0SIFCS.js";import"./index-Z-VamNUn.js";import"./Dialog-DU71SPyH.js";import"./cross-BAgwegJv.js";import"./svgIconContainer-DW4S_s8v.js";import"./useBaseUiId-BcxI-vr3.js";import"./InternalBackdrop-DzbbdgPK.js";import"./composite-B8-6F05C.js";import"./index-CJc8tiXf.js";import"./index-B54hZF59.js";import"./index-BnKCXvWh.js";import"./useEventCallback-CTNFarTj.js";import"./SkeletonBar-CRx6wyYo.js";import"./LoadingCell-CcdHY3uR.js";import"./ColumnConfigDialog-Cn6RbG_i.js";import"./DraggableList-BREctNVP.js";import"./search-DIPEzkiP.js";import"./Input-CDNL1w7C.js";import"./useControlled-BuiEHDXU.js";import"./Button-BsHu9zTC.js";import"./small-cross-CdaaHxKR.js";import"./ActionButton-5OHeM4Pf.js";import"./Checkbox-C8evdvVx.js";import"./useValueChanged-BXHZKjZ0.js";import"./CollapsiblePanel-CfT5DkwQ.js";import"./MultiColumnSortDialog-zK16g6ZJ.js";import"./MenuTrigger-Oimw98t7.js";import"./CompositeItem-DAdd__ur.js";import"./ToolbarRootContext-BNqu3LLk.js";import"./getDisabledMountTransitionStyles-BLopcKSb.js";import"./getPseudoElementBounds-BZEvyE4s.js";import"./chevron-down-DwRyFZmE.js";import"./index-Bq3G2Qv2.js";import"./error-DXNNzXjG.js";import"./BaseCbacBanner-CuOxMcbL.js";import"./makeExternalStore-BtgLem_Q.js";import"./Tooltip-BoBbTl3T.js";import"./PopoverPopup-CviStnN-.js";import"./debounce-CKSVpS6C.js";import"./tick-vrNi4Iyx.js";import"./DropdownField-Dcj1OaRe.js";import"./isEqual-Dx3IzvLl.js";import"./withOsdkMetrics-DuapMseQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

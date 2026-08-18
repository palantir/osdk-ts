import{j as r}from"./iframe-p9M8Eb1o.js";import{O as b}from"./object-table-BVh7yVRM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DTwsJvWf.js";import{u as g}from"./useOsdkClient-D7_YHw9a.js";import"./preload-helper-BmPKtly3.js";import"./Table-C7Hnfk7g.js";import"./index-C7HqDw_m.js";import"./Dialog-DncBo-NF.js";import"./cross-DvJLudhK.js";import"./svgIconContainer-ORV28Ze3.js";import"./useBaseUiId-44IrCziu.js";import"./InternalBackdrop-BvVIg8pG.js";import"./composite-VcTvRuc6.js";import"./index-DErAUfdw.js";import"./index-KTI1yLVe.js";import"./index-_-VNpVA1.js";import"./useEventCallback-C6mJqMK5.js";import"./SkeletonBar-DTlAHnHY.js";import"./LoadingCell-Bxbo88PR.js";import"./ColumnConfigDialog-D_x-ANcD.js";import"./DraggableList-CTNqD4VN.js";import"./search-BgxntRlT.js";import"./Input-C1Qbw3qy.js";import"./useControlled-4rsFBSOI.js";import"./Button-C6WWR2wI.js";import"./small-cross-Bd_YaqEW.js";import"./ActionButton-Chkht-BK.js";import"./Checkbox-BRtk7UqB.js";import"./useValueChanged-CQ0CbEeS.js";import"./CollapsiblePanel-C57d84wj.js";import"./MultiColumnSortDialog-B4MIhkIZ.js";import"./MenuTrigger-Bh8Crdsb.js";import"./CompositeItem-ZctO4SwH.js";import"./ToolbarRootContext-tC1th2e9.js";import"./getDisabledMountTransitionStyles-CdOWit4h.js";import"./getPseudoElementBounds-D0nkbtwp.js";import"./chevron-down-SljOnwRS.js";import"./index-C8zfpOdA.js";import"./error-qZyqYi81.js";import"./BaseCbacBanner-E_n65XpB.js";import"./makeExternalStore-BEpV-olz.js";import"./Tooltip-Dj16PZ2B.js";import"./PopoverPopup-vzbW-VJo.js";import"./debounce-2Qm8GLyy.js";import"./tick-BWy-f_cg.js";import"./DropdownField-DdBLMtNy.js";import"./isEqual-Crow1MAv.js";import"./withOsdkMetrics-CirbbHCI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

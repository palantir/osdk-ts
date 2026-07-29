import{j as r}from"./iframe-qUoJ8bD1.js";import{O as b}from"./object-table-C32Rb_v3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CpkOjadt.js";import{u as g}from"./useOsdkClient-BZmE3ry2.js";import"./preload-helper-ol3ztxLZ.js";import"./Table-DRuLsJ_W.js";import"./index-vMykFoz6.js";import"./Dialog-Qn8cLgI0.js";import"./cross-Cb35bm_z.js";import"./svgIconContainer-BFdHToqX.js";import"./useBaseUiId-DfL4ZZ8P.js";import"./InternalBackdrop-Cy_T0_FE.js";import"./composite-tj8owiCg.js";import"./index-DP_UhRTF.js";import"./index-Cz64Jyqa.js";import"./index-CB8C7-cG.js";import"./useEventCallback-DyvP_A81.js";import"./SkeletonBar-B4W7I0T9.js";import"./LoadingCell-C15wAKb0.js";import"./ColumnConfigDialog-BYKxoyE9.js";import"./DraggableList-DoSjLXZ2.js";import"./search-tL4GtzWj.js";import"./Input-CvSd3bUP.js";import"./useControlled-FmFohdHO.js";import"./isEqual-B_BmCAxf.js";import"./isObject-Dq2guUP7.js";import"./Button-DKNtfJMf.js";import"./ActionButton-CzoT9_MD.js";import"./Checkbox-MV4Nduzg.js";import"./useValueChanged-B3K31CFr.js";import"./CollapsiblePanel-Dkg1AscN.js";import"./MultiColumnSortDialog-DQTHxNJz.js";import"./MenuTrigger-2erLp3kW.js";import"./CompositeItem-BQsHw04j.js";import"./ToolbarRootContext-B_pSOxlb.js";import"./getDisabledMountTransitionStyles-CAcIXuef.js";import"./getPseudoElementBounds-BjRM6Xgm.js";import"./chevron-down-CMcKK_Lk.js";import"./index-SLkx8Rlc.js";import"./error-CbX-Ektr.js";import"./BaseCbacBanner-DQSGrcdr.js";import"./makeExternalStore-Os8YTNFV.js";import"./Tooltip-DpDnM_U4.js";import"./PopoverPopup-BMhFJB_0.js";import"./toNumber-6Rdthf3C.js";import"./tick-y6xP0Rva.js";import"./DropdownField-CqolFLg9.js";import"./withOsdkMetrics-DxfUN9ge.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

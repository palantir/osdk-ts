import{j as r}from"./iframe-DeJWYCn1.js";import{O as b}from"./object-table-DWE2VEpf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DxZ1JiHs.js";import{u as g}from"./useOsdkClient-CNpvmYWs.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DnOMAeVk.js";import"./index-B5Yva2Xc.js";import"./Dialog-BIJb_fD_.js";import"./cross-BHBLhOoQ.js";import"./svgIconContainer-D4OdXIbd.js";import"./useBaseUiId-DhBsrvdy.js";import"./InternalBackdrop-BJau4LqI.js";import"./composite-q4pLTQsX.js";import"./index-B6JIIbmg.js";import"./index-Bkdv8Oep.js";import"./index-Ccr_Oqxn.js";import"./useEventCallback-DdrNhhpd.js";import"./SkeletonBar-BwPzkscq.js";import"./LoadingCell-BVl8AVkF.js";import"./ColumnConfigDialog-dYRefZ2m.js";import"./DraggableList-BEs5_1MY.js";import"./search-ymO1htD2.js";import"./Input-ChnYFThm.js";import"./useControlled-DyW4-M2H.js";import"./Button-BTjXEyn6.js";import"./small-cross-CfWYRnkb.js";import"./ActionButton-DPXABoY3.js";import"./Checkbox-ByzxnXye.js";import"./useValueChanged-B2CAJ-lq.js";import"./CollapsiblePanel-BMKqCEZr.js";import"./MultiColumnSortDialog-B5PSdxf2.js";import"./MenuTrigger-DP6Vl1V5.js";import"./CompositeItem-BhfhJAmc.js";import"./ToolbarRootContext-Bw_XS67E.js";import"./getDisabledMountTransitionStyles-xtYaaI8G.js";import"./getPseudoElementBounds-Cyi5-PCV.js";import"./chevron-down-C0hhObXO.js";import"./index-B8RwvKuR.js";import"./error-CPbKcdrM.js";import"./BaseCbacBanner-CClRvK2W.js";import"./makeExternalStore-DYjFjmyg.js";import"./Tooltip-BhujbOiL.js";import"./PopoverPopup-BUbNU-wA.js";import"./debounce-DaBf6ZBx.js";import"./tick-DsYG6Jvb.js";import"./DropdownField-BiG-Qys8.js";import"./isEqual-Di2UFqa0.js";import"./withOsdkMetrics-BUS-C4Xd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-DX49BiZ-.js";import{O as b}from"./object-table-DrKTDrO6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DmE1jAmn.js";import{u as g}from"./useOsdkClient-DE7ajC3A.js";import"./preload-helper-9LHBCYVI.js";import"./Table-CZuWcrXt.js";import"./index-DxuHGCjB.js";import"./Dialog-C-cL_0Cq.js";import"./cross-CauetHLv.js";import"./svgIconContainer-B548BSI_.js";import"./useBaseUiId-DI7HJ1sZ.js";import"./InternalBackdrop-arkfzs0p.js";import"./composite-BTvCmLum.js";import"./index-Ygr_7AWn.js";import"./index-C4WszJy1.js";import"./index-Bdq2wKWL.js";import"./useEventCallback-GV-Pgizz.js";import"./SkeletonBar-MYvuqKYn.js";import"./LoadingCell-BYFPeWHn.js";import"./ColumnConfigDialog-DUpqOCt6.js";import"./DraggableList-CW6BC225.js";import"./search-D15_q6tD.js";import"./Input-BQDPJQM6.js";import"./useControlled-C31TKFPE.js";import"./Button-RYY6ZBF7.js";import"./small-cross-DOgxSwsw.js";import"./ActionButton-fCGjoV2h.js";import"./Checkbox-C5arZxQh.js";import"./useValueChanged-oS_NGm3B.js";import"./CollapsiblePanel-CofaTKq1.js";import"./MultiColumnSortDialog-CiE6ARBo.js";import"./MenuTrigger-slTfosOo.js";import"./CompositeItem-1DFf-U3D.js";import"./ToolbarRootContext-BkXM-WhV.js";import"./getDisabledMountTransitionStyles-DM4O4Z57.js";import"./getPseudoElementBounds-Dk11viJV.js";import"./chevron-down-CPeorV8q.js";import"./index-DxqztkoM.js";import"./error-DKDHu63B.js";import"./BaseCbacBanner-D1_WKzx0.js";import"./makeExternalStore-Ckt0eied.js";import"./Tooltip-CokKdHnx.js";import"./PopoverPopup-CcyqtV2P.js";import"./debounce-Bmue7bGU.js";import"./tick-kBh_PFVS.js";import"./DropdownField-iEi1_u7m.js";import"./isEqual-DQRNTvNf.js";import"./withOsdkMetrics-DxWj1HC0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-BUf-CLqY.js";import{O as b}from"./object-table-Dyvh2IGr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BsckbAvr.js";import{u as g}from"./useOsdkClient-ctroE3hm.js";import"./preload-helper-riapeqtP.js";import"./Table-CzS-rh25.js";import"./index-C_MybgQ3.js";import"./Dialog-lZrjoHin.js";import"./cross-CGc-Hcb9.js";import"./svgIconContainer-DU0Ye5dG.js";import"./useBaseUiId-gpzCx-rm.js";import"./InternalBackdrop-C5ZNKnCf.js";import"./composite-ByB7nSsB.js";import"./index-CrCMLvTm.js";import"./index-DvN6Rba3.js";import"./index-B3D2SnAc.js";import"./useEventCallback-BywkN-Ff.js";import"./SkeletonBar-DFo16lR0.js";import"./LoadingCell-CdUbXIXo.js";import"./ColumnConfigDialog-BxDZ3Dv6.js";import"./DraggableList-B4cd4Qb-.js";import"./search-pVr5xk4n.js";import"./Input-DnSUiNyS.js";import"./useControlled-DEV21H7B.js";import"./Button-cOSWZtuo.js";import"./small-cross-CSJnPQqY.js";import"./ActionButton-BBw0Te-_.js";import"./Checkbox-C46p_nfP.js";import"./useValueChanged-MJAskWLg.js";import"./CollapsiblePanel-UPRERRAW.js";import"./MultiColumnSortDialog-Cf13_Nd2.js";import"./MenuTrigger-x9K-Wus0.js";import"./CompositeItem-Cjz_Qy2T.js";import"./ToolbarRootContext-tqZMT8gQ.js";import"./getDisabledMountTransitionStyles-BCAFuXq1.js";import"./getPseudoElementBounds-DzYucCEu.js";import"./chevron-down-CRvVeW5r.js";import"./index-CD5GlWla.js";import"./error-CZVIneLk.js";import"./BaseCbacBanner-CmW41sxI.js";import"./makeExternalStore-BFB7Uams.js";import"./Tooltip-Cm_gslQX.js";import"./PopoverPopup-BlmOLchB.js";import"./debounce-B-iF24A7.js";import"./tick-B2EggPvK.js";import"./DropdownField-Sb9cC2Wv.js";import"./isEqual-BL-FfRPo.js";import"./withOsdkMetrics-BtUVOcAG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

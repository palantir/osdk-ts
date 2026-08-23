import{j as r}from"./iframe-Dyt2g367.js";import{O as b}from"./object-table-BGrb6iBk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-HfbS-UsV.js";import{u as g}from"./useOsdkClient-BnH7y6EI.js";import"./preload-helper-Iy-_aWsL.js";import"./Table-Dbyfkzfz.js";import"./index-CVbuIiNF.js";import"./Dialog-Dd_kDCnz.js";import"./cross-BGMDayEl.js";import"./svgIconContainer-CQnuEYht.js";import"./useBaseUiId-CNdrP4cM.js";import"./InternalBackdrop-D_O2FDbV.js";import"./composite-CioN3i6x.js";import"./index-C3uS1quW.js";import"./index-DX_nn_2Y.js";import"./index-CQBiAgvJ.js";import"./useEventCallback-B4DeWEdX.js";import"./SkeletonBar-COKv4C1t.js";import"./LoadingCell-D4jVSLP5.js";import"./ColumnConfigDialog-DPusEu3Q.js";import"./DraggableList-CDKAtbXG.js";import"./search-Dlesc_Bn.js";import"./Input-EjY_nd8e.js";import"./useControlled-B5GqLh5A.js";import"./Button-RkRB1WVt.js";import"./small-cross-F18Oi3GF.js";import"./ActionButton-B8gmucK7.js";import"./Checkbox-BEe2g6L-.js";import"./useValueChanged-CTa1gX9Z.js";import"./CollapsiblePanel-D1P_utse.js";import"./MultiColumnSortDialog-C1sdqr4R.js";import"./MenuTrigger-vstZFNDR.js";import"./CompositeItem-GHEjzrAu.js";import"./ToolbarRootContext-DbHSAu67.js";import"./getDisabledMountTransitionStyles-BFGyiY2l.js";import"./getPseudoElementBounds-B26mWoJW.js";import"./chevron-down-CoqmzOf8.js";import"./index-FIX-qPnt.js";import"./error-CoUpGJie.js";import"./BaseCbacBanner-EauHrW6a.js";import"./makeExternalStore-CoWyK-bl.js";import"./Tooltip-BqdBfPty.js";import"./PopoverPopup-DTLPFEsG.js";import"./debounce-CcTcFdOE.js";import"./tick-_Azp_NBs.js";import"./DropdownField-CGjuW6yJ.js";import"./isEqual-qXkbevHO.js";import"./withOsdkMetrics-C7K3xDQn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

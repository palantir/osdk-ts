import{j as r}from"./iframe-DQyXgQjF.js";import{O as b}from"./object-table-Buiz7_zN.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-LaQUDjj5.js";import{u as g}from"./useOsdkClient-BCI3PIPJ.js";import"./preload-helper-BwATEbbW.js";import"./Table-B59PSWJQ.js";import"./index-zxLoORa7.js";import"./Dialog-Brve9XOD.js";import"./cross-DYm99n8j.js";import"./svgIconContainer-CWf268Wa.js";import"./useBaseUiId-3phzK7j-.js";import"./InternalBackdrop-verxdvs1.js";import"./composite-CU43rjMu.js";import"./index-YSBI5FA8.js";import"./index-L_6XzX0S.js";import"./index-CwpcqqAQ.js";import"./useEventCallback-DNyqnppz.js";import"./SkeletonBar-BBzp9902.js";import"./LoadingCell-CZ0qhRs8.js";import"./ColumnConfigDialog-AVcPD8Jq.js";import"./DraggableList-DUjLA_JY.js";import"./search-BmUdzc_y.js";import"./Input-DiCaaolk.js";import"./useControlled-D7uKPK_J.js";import"./Button-7Yv-s8d8.js";import"./small-cross-DsIT7tGr.js";import"./ActionButton-zXa_t6ga.js";import"./Checkbox-Z99gldXK.js";import"./useValueChanged-DVlVg2nV.js";import"./CollapsiblePanel-j1dwugrc.js";import"./MultiColumnSortDialog-2u3dK1Q7.js";import"./MenuTrigger-BxAwaBm5.js";import"./CompositeItem-RFl7h3zH.js";import"./ToolbarRootContext-BfCsQAap.js";import"./getDisabledMountTransitionStyles-D0wMZ4Z4.js";import"./getPseudoElementBounds-CJlWZBwf.js";import"./chevron-down-B7bppAwZ.js";import"./index-Dvo2_Daj.js";import"./error-F90l69c5.js";import"./BaseCbacBanner-DRohbIbG.js";import"./makeExternalStore-CjiqYirX.js";import"./Tooltip-DMcknpxT.js";import"./PopoverPopup-Lw5BvCW6.js";import"./debounce-kj3B_jEO.js";import"./tick-DeKMMXtG.js";import"./DropdownField-B1cH9VTb.js";import"./isEqual-g9VSMI7E.js";import"./withOsdkMetrics-o51FJnXF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

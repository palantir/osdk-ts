import{j as r}from"./iframe-Dj3y_FXz.js";import{O as b}from"./object-table-ChC7y-am.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BAEwpldl.js";import{u as g}from"./useOsdkClient-K6JAw32y.js";import"./preload-helper-D41TUqQK.js";import"./Table-Ch4GzdGc.js";import"./index-DD6p90gq.js";import"./Dialog-CpIUcxp0.js";import"./cross-CVdfkFqF.js";import"./svgIconContainer-D_6_keQ1.js";import"./useBaseUiId-D8RgwyAn.js";import"./InternalBackdrop-5z-sgEQM.js";import"./composite-DnSqe8X8.js";import"./index-CxKUFA2E.js";import"./index-18fnm7EA.js";import"./index-Q6m8Uz6B.js";import"./useEventCallback-D-hkdMR7.js";import"./SkeletonBar-QvTedd7J.js";import"./LoadingCell-CqaEpvLp.js";import"./ColumnConfigDialog-BtPXF6DA.js";import"./DraggableList-DiO9-yFi.js";import"./search-DqELWH10.js";import"./Input-C00XXgL_.js";import"./useControlled-CogZz_Fp.js";import"./isEqual-CgnQk9cA.js";import"./isObject-DltkD9gV.js";import"./Button-Dz0Fa_jz.js";import"./ActionButton-gTd9NfDq.js";import"./Checkbox-DXtG2TSz.js";import"./useValueChanged-3KFnokUh.js";import"./CollapsiblePanel-dWVFulUf.js";import"./MultiColumnSortDialog-CKLVs871.js";import"./MenuTrigger-DrqvZa_k.js";import"./CompositeItem-DERML8IO.js";import"./ToolbarRootContext-BWQ69sPa.js";import"./getDisabledMountTransitionStyles-CD2MoVvb.js";import"./getPseudoElementBounds-DYGqIPmF.js";import"./chevron-down-vDvBpfK_.js";import"./index-hy5cmm3j.js";import"./error-a0jqZXnu.js";import"./BaseCbacBanner-CFb6v-Yr.js";import"./makeExternalStore-CoHw-zti.js";import"./Tooltip-CVzFy9Xe.js";import"./PopoverPopup-CWhtGTWR.js";import"./toNumber-B_tOvU6S.js";import"./tick-CIMNouXh.js";import"./DropdownField-B4klekJb.js";import"./withOsdkMetrics-FM_wpNGl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

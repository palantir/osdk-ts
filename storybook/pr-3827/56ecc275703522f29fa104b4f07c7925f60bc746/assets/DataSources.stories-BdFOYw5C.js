import{j as r}from"./iframe-Bw3x6lZJ.js";import{O as b}from"./object-table-KzIqbEB8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cy5eYO3P.js";import{u as g}from"./useOsdkClient-BBzpp516.js";import"./preload-helper-D6ImcOTa.js";import"./Table-Dn3rkKiX.js";import"./index-Qclu0QrF.js";import"./Dialog-Diba78Yn.js";import"./cross-m2G2dPiH.js";import"./svgIconContainer-BM9FUCfQ.js";import"./useBaseUiId-vJHidliA.js";import"./InternalBackdrop-BBU4IrWY.js";import"./composite-aqmH1tPf.js";import"./index-cks-ZHTj.js";import"./index-BCgpKXyP.js";import"./index-DAhYrebj.js";import"./useEventCallback-B3x6jacx.js";import"./SkeletonBar-CuoJzBkC.js";import"./LoadingCell-DiT3zFwT.js";import"./ColumnConfigDialog-CcIdW_Y_.js";import"./DraggableList-B4PR-Ql0.js";import"./search-D48t6EZV.js";import"./Input-DR8DiZ8k.js";import"./useControlled-oOeAgRpZ.js";import"./isEqual-Cj10nL2b.js";import"./isObject-POigzj9I.js";import"./Button-CFbUHaqb.js";import"./ActionButton-Bv98HW9B.js";import"./Checkbox-_PsJuHu0.js";import"./useValueChanged-CRiOWQUR.js";import"./CollapsiblePanel-DDt6cKZo.js";import"./MultiColumnSortDialog-CYroUACu.js";import"./MenuTrigger-CHrB0ZA9.js";import"./CompositeItem-f_kpd3CD.js";import"./ToolbarRootContext-4HkoDmNp.js";import"./getDisabledMountTransitionStyles-DASxAd7F.js";import"./getPseudoElementBounds-CcrwyNPG.js";import"./chevron-down-mYSDwVOj.js";import"./index-D9NWm6bI.js";import"./error-B-KtUvsa.js";import"./BaseCbacBanner-U4HxRxxX.js";import"./makeExternalStore-xbWe60kF.js";import"./Tooltip-QdSUHEnp.js";import"./PopoverPopup-Bjb7rB-u.js";import"./toNumber-D9ViIeEh.js";import"./tick-CqjIagJp.js";import"./DropdownField-ws6Kg5_D.js";import"./withOsdkMetrics-BzxdER45.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

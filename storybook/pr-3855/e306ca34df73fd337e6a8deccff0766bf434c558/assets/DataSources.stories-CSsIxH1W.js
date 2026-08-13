import{j as r}from"./iframe-BJrSrRma.js";import{O as b}from"./object-table-CE2q3N5f.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CQpFY7SR.js";import{u as g}from"./useOsdkClient-CBENBplO.js";import"./preload-helper-83yR054m.js";import"./Table-DQw_Fm5L.js";import"./index-DFXfJE3M.js";import"./Dialog-CIeMT4_a.js";import"./cross-DFiuK2I5.js";import"./svgIconContainer-CUA3xiLW.js";import"./useBaseUiId-BdZoOrU1.js";import"./InternalBackdrop-CX1L_1sQ.js";import"./composite-DimSL5Dw.js";import"./index-Cxlf7HqO.js";import"./index-BaVB7RYf.js";import"./index-DwJoAW6Z.js";import"./useEventCallback-C_smlSfI.js";import"./SkeletonBar-7oNPY7ub.js";import"./LoadingCell-Cx8g6Kor.js";import"./ColumnConfigDialog-DqDhi-7s.js";import"./DraggableList-B1TTFqcD.js";import"./search-Bcym4jdA.js";import"./Input-bMqivlqR.js";import"./useControlled-D5g6V7fQ.js";import"./Button-DWYMaUrj.js";import"./small-cross-Bj4sfQyy.js";import"./ActionButton-CwBTvNNT.js";import"./Checkbox-BvzX-4RF.js";import"./useValueChanged-Bwvej-Ce.js";import"./CollapsiblePanel-5Ce4VwIJ.js";import"./MultiColumnSortDialog-ClipWpCL.js";import"./MenuTrigger-CAbN0KqP.js";import"./CompositeItem-je4-aaCh.js";import"./ToolbarRootContext-CM7Fz4lg.js";import"./getDisabledMountTransitionStyles-DkpoARP_.js";import"./getPseudoElementBounds-BoflN6Xu.js";import"./chevron-down-CP4830r-.js";import"./index-w5EjZqSi.js";import"./error-lgLbUxfX.js";import"./BaseCbacBanner-GDLEtZZt.js";import"./makeExternalStore-BJhWzj4_.js";import"./Tooltip-I_exNZ7U.js";import"./PopoverPopup-DA2ANurn.js";import"./toNumber-DkdmQXwg.js";import"./tick-DgQBhy3o.js";import"./DropdownField-t3qnicyE.js";import"./withOsdkMetrics-DyVFL9JC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};

import{j as r}from"./iframe-B70S6Lmv.js";import{O as b}from"./object-table-BfTy7xib.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-j-r5nunf.js";import{u as g}from"./useOsdkClient-e-zC0dYQ.js";import"./preload-helper-DvqZs_Ee.js";import"./Table-DiAKwS9Z.js";import"./index-DWnMAI4T.js";import"./Dialog-BI2LCIhj.js";import"./cross-RQeYgE-5.js";import"./svgIconContainer-DCrmifFa.js";import"./useBaseUiId-EwZnzvJa.js";import"./InternalBackdrop-swj0KUjw.js";import"./composite-DkMtiPjX.js";import"./index-CuOP0KH2.js";import"./index-BKhiojeG.js";import"./index-DjQQ9Ebf.js";import"./useEventCallback-BaRUcjQf.js";import"./SkeletonBar-XMBBLDKR.js";import"./LoadingCell-CJRIZTrX.js";import"./ColumnConfigDialog-bucvOWJ0.js";import"./DraggableList-yliEoYZI.js";import"./search-BA089tRt.js";import"./Input-aN0JqfYJ.js";import"./useControlled-BYkqALsw.js";import"./isEqual-Diwy372c.js";import"./isObject-Bau7kQmU.js";import"./Button-ChkfdyYN.js";import"./ActionButton-CmxK41cn.js";import"./Checkbox-Ldf5yhpW.js";import"./useValueChanged-C1efsP7L.js";import"./CollapsiblePanel-Df1NXogi.js";import"./MultiColumnSortDialog-Cpu5deyQ.js";import"./MenuTrigger-HI6uf4IZ.js";import"./CompositeItem-BVQtW5gx.js";import"./ToolbarRootContext-CMGSy6ZS.js";import"./getDisabledMountTransitionStyles-JyNwSVpS.js";import"./getPseudoElementBounds-Cqb5T_QV.js";import"./chevron-down-DGeK32yC.js";import"./index-BhkemeNm.js";import"./error-B37gQfOZ.js";import"./BaseCbacBanner-B0K-ZHth.js";import"./makeExternalStore-BEhTvj2Q.js";import"./Tooltip-JVwBppS1.js";import"./PopoverPopup-CsTcm8RG.js";import"./toNumber-wPLlggss.js";import"./tick-DI3EVtTl.js";import"./DropdownField-X8THrraV.js";import"./withOsdkMetrics-DB3VOG4-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

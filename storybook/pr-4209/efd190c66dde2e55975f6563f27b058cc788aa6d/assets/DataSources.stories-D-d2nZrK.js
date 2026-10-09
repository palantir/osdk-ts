import{j as r}from"./iframe-BBEsiyhw.js";import{O as b}from"./object-table-Dq8XXRr-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C0eK2yPz.js";import{u as g}from"./useOsdkClient-Dj0AF7_N.js";import"./preload-helper-BmblPu1v.js";import"./Table-pFVgEkXm.js";import"./index-ClnGgge0.js";import"./Dialog-BUh_BioF.js";import"./cross-D8hf1lyL.js";import"./svgIconContainer-BftRkbDY.js";import"./useBaseUiId-B3oGhb6T.js";import"./InternalBackdrop-ChnKIul8.js";import"./composite-CotiRSPy.js";import"./index-BjsoHb5F.js";import"./index-DalDu3QI.js";import"./index--qEH9jKV.js";import"./useEventCallback-B1mH3cgs.js";import"./SkeletonBar-CnHRJgGL.js";import"./LoadingCell-WYQo3n6Z.js";import"./ColumnConfigDialog-DrGLRuHz.js";import"./DraggableList-C1o2JZQo.js";import"./search-CUaj7sUK.js";import"./Input-BCyCFswy.js";import"./useControlled-BD3zVyK-.js";import"./Button-C37aiOXg.js";import"./small-cross-CYF_B5Lg.js";import"./ActionButton-i2asGAmE.js";import"./Checkbox-BLIvRp7L.js";import"./useValueChanged-B8GX47Ef.js";import"./CollapsiblePanel-BBI2Wh35.js";import"./MultiColumnSortDialog-CgdSH3_A.js";import"./MenuTrigger-BuN-Dfsd.js";import"./CompositeItem-BDqi7Zsx.js";import"./ToolbarRootContext-BkzilyRu.js";import"./getDisabledMountTransitionStyles-BdiTBQkJ.js";import"./getPseudoElementBounds-Cdat2o12.js";import"./chevron-down-DqgLlLlb.js";import"./index-BK2KAOIj.js";import"./error-DhmHSkrO.js";import"./BaseCbacBanner-DZDVC8eH.js";import"./makeExternalStore-oMnnQc1q.js";import"./Tooltip-CwE-ESs7.js";import"./PopoverPopup-CuSOAdrR.js";import"./debounce-CpTZuqbj.js";import"./tick-kQvs8Sxv.js";import"./DropdownField-BOu_gmsx.js";import"./isEqual-Bn_yEad4.js";import"./withOsdkMetrics-J9vpDrpe.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

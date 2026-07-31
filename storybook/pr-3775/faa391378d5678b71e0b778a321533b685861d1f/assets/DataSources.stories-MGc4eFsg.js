import{j as r}from"./iframe-DiGNclSn.js";import{O as b}from"./object-table-Dg4mcHgY.js";import{E as a}from"./Employee-BAk2o20h.js";import{d,o as j}from"./objectTableStoryHelpers-Pg3hFT-k.js";import{u as T}from"./useOsdkClient-r4NaY58R.js";import"./preload-helper-_nBZMF1N.js";import"./Table-BCuhh6ge.js";import"./index-DPWCSEHO.js";import"./Dialog-B-fkT72x.js";import"./cross-CbAhiqWN.js";import"./svgIconContainer-BxPJUld6.js";import"./useBaseUiId-D12Lp3G0.js";import"./InternalBackdrop-C1s96-Aj.js";import"./composite-DkuYOO8L.js";import"./index-bfAA9M0x.js";import"./index-DBnYr8W-.js";import"./index-CDg3Jdzj.js";import"./useEventCallback-CnfDq7zw.js";import"./SkeletonBar-DHet2gQG.js";import"./LoadingCell-B5g6mc64.js";import"./ColumnConfigDialog-DUtURtyg.js";import"./DraggableList-5PwJhooe.js";import"./search-CgbFJOiA.js";import"./Input-CGFWWoCB.js";import"./useControlled-BPiHfNKi.js";import"./isEqual-CA7oPY6d.js";import"./isObject-Dy1fxxDP.js";import"./Button-ByuxmoUQ.js";import"./ActionButton-D_77xKTc.js";import"./Checkbox-D7knJomp.js";import"./useValueChanged-CaCE8fH4.js";import"./CollapsiblePanel-D2GcFen2.js";import"./MultiColumnSortDialog-CK2RNh5E.js";import"./MenuTrigger-CoQLOQ4w.js";import"./CompositeItem-BIK6e8lr.js";import"./ToolbarRootContext-CEQ97Tgl.js";import"./getDisabledMountTransitionStyles-C5v_7uXE.js";import"./getPseudoElementBounds-DXECebKL.js";import"./chevron-down-DGDtildZ.js";import"./index-BeDKwvOI.js";import"./error-rMD5wQqr.js";import"./BaseCbacBanner-DgW9P053.js";import"./makeExternalStore-Bv-o0CiQ.js";import"./Tooltip-CAPXE57O.js";import"./PopoverPopup-DmoA5dgd.js";import"./toNumber-BV9q2Ild.js";import"./tick-CFMgnZ5l.js";import"./DropdownField-CUyp9SOg.js";import"./withOsdkMetrics-DSL5Vxy9.js";const g={type:"interface",apiName:"Worker"},{expect:i,within:f}=__STORYBOOK_MODULE_TEST__,je={...j,title:"Components/ObjectTable/Features/Data Sources"},n={args:{objectType:a,columnDefinitions:d},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:e=>{const u=T()(a).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...e,objectType:a,objectSet:u})})},play:async({canvasElement:e})=>{const t=f(e);await t.findAllByText("Marketing Manager"),await i(t.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await i(t.queryByText("Content Manager")).not.toBeInTheDocument()}},h=[{locator:{type:"property",id:"employeeNumber"}}],E="657495071",o={args:{objectType:g,columnDefinitions:h},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. Any object implementing the interface is displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

const columnDefinitions: ColumnDefinition<WorkerInterface>[] = [
  { locator: { type: "property", id: "employeeNumber" } },
];

<ObjectTable
  objectType={WorkerInterface}
  columnDefinitions={columnDefinitions}
/>`}}},render:e=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...e})}),play:async({canvasElement:e})=>{const t=f(e);await t.findByText(E),await i(t.getByText("Employee Number")).toBeInTheDocument()}};var c,s,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var m,l,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee,
    columnDefinitions: workerInterfaceColumns as unknown as ColumnDefinition<Employee>[]
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. Any object implementing the " + "interface is displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

const columnDefinitions: ColumnDefinition<WorkerInterface>[] = [
  { locator: { type: "property", id: "employeeNumber" } },
];

<ObjectTable
  objectType={WorkerInterface}
  columnDefinitions={columnDefinitions}
/>\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText(TARGET_EMPLOYEE_NUMBER);
    await expect(canvas.getByText("Employee Number")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const Te=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,n as WithObjectSet,Te as __namedExportsOrder,je as default};

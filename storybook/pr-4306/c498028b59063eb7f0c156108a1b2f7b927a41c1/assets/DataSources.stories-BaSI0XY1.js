import{j as r}from"./iframe-Bjmz4Pw6.js";import{O as b}from"./object-table-Cbq5OCuZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DlGlu5l4.js";import{u as g}from"./useOsdkClient-DWH25UnA.js";import"./preload-helper-ChdqJ_Fk.js";import"./Table-5_CJmnAL.js";import"./index-CteV8V5-.js";import"./Dialog-RyhhQJPG.js";import"./cross-DLiU4vOO.js";import"./svgIconContainer-waXVP79l.js";import"./useBaseUiId-Dab5gkr1.js";import"./InternalBackdrop-wmuwnNCk.js";import"./composite-D5kvXpM3.js";import"./index-B0jhHXrB.js";import"./index-xuV1OxFF.js";import"./index-DXs3na67.js";import"./useEventCallback-CEkSFShG.js";import"./SkeletonBar-RK8wJKnc.js";import"./LoadingCell-DzfUiNrU.js";import"./ColumnConfigDialog-C7PhcgmF.js";import"./DraggableList-DEQHvBAg.js";import"./search-BFNLN2pg.js";import"./Input-CYsfOYNb.js";import"./useControlled-UgrzeJ-P.js";import"./Button-gMxn8bZ8.js";import"./small-cross-CwgSRf6S.js";import"./ActionButton-BXkFs4JK.js";import"./Checkbox-B30WmTbv.js";import"./useValueChanged-CtNi9ozz.js";import"./CollapsiblePanel-7Vg1XIbp.js";import"./MultiColumnSortDialog-5T3HYw5a.js";import"./MenuTrigger-iuHF1wpt.js";import"./CompositeItem-XruUBT06.js";import"./ToolbarRootContext-D0yTrMZy.js";import"./getDisabledMountTransitionStyles-BclIXzND.js";import"./getPseudoElementBounds-CVsUqdMo.js";import"./chevron-down-DYnrRDqf.js";import"./index-BqU459RR.js";import"./error-DXq7Sg4A.js";import"./BaseCbacBanner-DNpt7vOE.js";import"./makeExternalStore-Czv1SlrP.js";import"./Tooltip-B6HLdM-u.js";import"./PopoverPopup-B8vKH9Gz.js";import"./debounce-BS14Ht-K.js";import"./tick-DI_p6XGO.js";import"./DropdownField-E6FKc9RM.js";import"./isEqual-Cb_ACtXN.js";import"./withOsdkMetrics-DHpFVYZj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

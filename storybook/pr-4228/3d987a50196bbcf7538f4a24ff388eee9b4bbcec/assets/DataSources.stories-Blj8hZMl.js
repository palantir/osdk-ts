import{j as r}from"./iframe-D48Q2Ih8.js";import{O as b}from"./object-table-DATd4Pz4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-fQ5lKLRx.js";import{u as g}from"./useOsdkClient-BH3gu2IN.js";import"./preload-helper-CL77aTRo.js";import"./Table-CWfEJx7M.js";import"./index-BAc81QxV.js";import"./Dialog-CEjVroA8.js";import"./cross-7sczFfzI.js";import"./svgIconContainer-C8Iv3sR3.js";import"./useBaseUiId-DGTp0U_O.js";import"./InternalBackdrop-C1aj-xTs.js";import"./composite-AHBdhfMT.js";import"./index-DKv9tcd8.js";import"./index-CMlea4RE.js";import"./index-BHqJ1oa6.js";import"./useEventCallback-aEIzFPGy.js";import"./SkeletonBar-B5oNwZvF.js";import"./LoadingCell-7-2_99YR.js";import"./ColumnConfigDialog-uxjXxGDp.js";import"./DraggableList-CcqPBCqI.js";import"./search-C9PzHLND.js";import"./Input-BYdVsABv.js";import"./useControlled-CFgtbz8z.js";import"./Button-CRna_EZj.js";import"./small-cross-DjM-LCX5.js";import"./ActionButton-DXiBkKho.js";import"./Checkbox-DUUA5pAi.js";import"./useValueChanged-_pNhoUMT.js";import"./CollapsiblePanel-otyxGyv7.js";import"./MultiColumnSortDialog-B5o9fJfs.js";import"./MenuTrigger-DLjn-TCi.js";import"./CompositeItem-CIsGCI0M.js";import"./ToolbarRootContext-RyVic0HL.js";import"./getDisabledMountTransitionStyles-CW-RwN9m.js";import"./getPseudoElementBounds-9xeptCZR.js";import"./chevron-down-BKXBxbNC.js";import"./index-BSoRDxwG.js";import"./error-CmBzdsaE.js";import"./BaseCbacBanner-DsV8cD14.js";import"./makeExternalStore-CP04809A.js";import"./Tooltip-UTWEnQHo.js";import"./PopoverPopup-CTXF1CIh.js";import"./debounce-B6B9DlWV.js";import"./tick-Clvl1m1w.js";import"./DropdownField-BzDGU56S.js";import"./isEqual-B4HfJ3SA.js";import"./withOsdkMetrics-D4HQPyjO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

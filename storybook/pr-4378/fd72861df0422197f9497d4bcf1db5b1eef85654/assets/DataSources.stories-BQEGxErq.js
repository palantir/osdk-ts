import{j as r}from"./iframe-3OlCtOnX.js";import{O as b}from"./object-table-BvyHghk7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Fo1TK6BA.js";import{u as g}from"./useOsdkClient--TOQCL4r.js";import"./preload-helper-DmXfM5jO.js";import"./Table-WM1LRRuU.js";import"./index-yHmphh38.js";import"./Dialog-BnYZSNWW.js";import"./cross-BDST6L4k.js";import"./svgIconContainer-BDwLYbew.js";import"./useBaseUiId-DF4e_SYr.js";import"./InternalBackdrop-DdQOJpo0.js";import"./composite-U0WuYJlx.js";import"./index-BIyck5Eo.js";import"./index-Dkb2coF2.js";import"./index-ByPauzBu.js";import"./useEventCallback-D7je9L3S.js";import"./SkeletonBar-BXcGfT3d.js";import"./LoadingCell-BG8BLS5r.js";import"./ColumnConfigDialog-Chy4GVeW.js";import"./DraggableList-CVZrPSkM.js";import"./search-DDk_kDx9.js";import"./Input-Du0sMknh.js";import"./useControlled-D4KKpMBk.js";import"./Button-DvYWHdUE.js";import"./small-cross-Q6V4ucxv.js";import"./ActionButton-X9C3Amb_.js";import"./Checkbox-CFLZGIxk.js";import"./useValueChanged-BmFaeCuB.js";import"./CollapsiblePanel-Cq5Vusdc.js";import"./MultiColumnSortDialog-B613juMG.js";import"./MenuTrigger-BwhUQFuO.js";import"./CompositeItem-CpBBjcG8.js";import"./ToolbarRootContext-DhJDeVBv.js";import"./getDisabledMountTransitionStyles-BR9XCEFs.js";import"./getPseudoElementBounds-BX9nOk-V.js";import"./chevron-down-CgI6LlJc.js";import"./index-DLQ0415V.js";import"./error-CWwoWVCq.js";import"./BaseCbacBanner-C08fTxVd.js";import"./makeExternalStore-C_bh9nYT.js";import"./Tooltip-BN6uj7yR.js";import"./isObject-UhbsXXcU.js";import"./debounce-ger8MaPs.js";import"./tick-JCXFlbLf.js";import"./DropdownField-BIODsSJB.js";import"./isEqual-CtwCO3Wt.js";import"./_baseIsEqual-Cx8-OPaz.js";import"./withOsdkMetrics-CFm1sTgg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};

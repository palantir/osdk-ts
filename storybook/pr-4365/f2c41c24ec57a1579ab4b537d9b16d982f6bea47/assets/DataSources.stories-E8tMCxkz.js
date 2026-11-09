import{j as r}from"./iframe-B1cjW9lN.js";import{O as b}from"./object-table-B9PygxED.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CiLocD64.js";import{u as g}from"./useOsdkClient-DPZRapDv.js";import"./preload-helper-esge5jOw.js";import"./Table-Eq_CeIkf.js";import"./index-DBKcAKBa.js";import"./Dialog-Jn4y4XS8.js";import"./cross-B-sNKi3J.js";import"./svgIconContainer-z9g6oSzF.js";import"./useBaseUiId-CtX_9P1W.js";import"./InternalBackdrop-wKJgBdeU.js";import"./composite-rAM9AtlZ.js";import"./index-CuHejiQW.js";import"./index-CalZYv_8.js";import"./index-Bql2IapG.js";import"./useEventCallback-92aUWZ3N.js";import"./SkeletonBar-BLVnUxZg.js";import"./LoadingCell-BQamoQUk.js";import"./ColumnConfigDialog-_8oVLR1B.js";import"./DraggableList-gqUnaBKo.js";import"./search-050tV6oC.js";import"./Input-DbrQZdXa.js";import"./useControlled-DdMiAZ8X.js";import"./Button-Dy6NAp_j.js";import"./small-cross-BVJ_zxjg.js";import"./ActionButton-3Dynih0B.js";import"./Checkbox-ChDDet3u.js";import"./useValueChanged-CEYyAvOZ.js";import"./CollapsiblePanel-56xbF4C6.js";import"./MultiColumnSortDialog-BlHZIdWq.js";import"./MenuTrigger-79xVCCUd.js";import"./CompositeItem-CR9WkMFf.js";import"./ToolbarRootContext-CQYaUzuu.js";import"./getDisabledMountTransitionStyles-B5gHyAnx.js";import"./getPseudoElementBounds-Cs7nJpkY.js";import"./chevron-down-Qs9iMpX5.js";import"./index-B7TJ5Vg6.js";import"./error-4QB3sX_8.js";import"./BaseCbacBanner-BUmy3QjG.js";import"./makeExternalStore-CvmwDfYu.js";import"./Tooltip-DzMrezpL.js";import"./isObject-ekK2jEIM.js";import"./debounce-BsGa84tP.js";import"./tick-7_Cax-oj.js";import"./DropdownField-Bhsc50nt.js";import"./isEqual-WveHXPpz.js";import"./_baseIsEqual-DkPaQEsL.js";import"./withOsdkMetrics-NF_KYzrC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

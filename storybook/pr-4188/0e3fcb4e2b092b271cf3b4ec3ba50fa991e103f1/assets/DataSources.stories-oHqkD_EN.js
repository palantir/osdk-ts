import{j as r}from"./iframe-BgM5ILJD.js";import{O as b}from"./object-table-Dqm71HsL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-KM3rZjZl.js";import{u as g}from"./useOsdkClient-EIls4xNE.js";import"./preload-helper-D1sAdP5a.js";import"./Table-DfE3HXIV.js";import"./index-ah8Na9h1.js";import"./Dialog-C1fnwkaV.js";import"./cross-B5mOqZwT.js";import"./svgIconContainer-De6gxcHK.js";import"./useBaseUiId-CzAuSX_4.js";import"./InternalBackdrop-B3lJ8A-i.js";import"./composite-BS7dFqvY.js";import"./index-DAXSmbbp.js";import"./index-YnWjipca.js";import"./index-BtZ9XuP3.js";import"./useEventCallback-ED2yFhLZ.js";import"./SkeletonBar-c3-BssZC.js";import"./LoadingCell-UzH3i-RV.js";import"./ColumnConfigDialog-BG6weTj9.js";import"./DraggableList-Cj8oPYGs.js";import"./search-C2iFy_Yx.js";import"./Input-DL79KIMl.js";import"./useControlled-COnm-wVi.js";import"./Button-KrMtAmhv.js";import"./small-cross-R2Kh-d3N.js";import"./ActionButton-4Ees6e5q.js";import"./Checkbox-Gq8tw6H7.js";import"./useValueChanged-Deeelsz_.js";import"./CollapsiblePanel-IXMutafc.js";import"./MultiColumnSortDialog-CKj_uiZa.js";import"./MenuTrigger-98n7_1EC.js";import"./CompositeItem-B6xGoOu0.js";import"./ToolbarRootContext-CjwaP5zw.js";import"./getDisabledMountTransitionStyles-7N3HMxRW.js";import"./getPseudoElementBounds-CdSGgRcD.js";import"./chevron-down-D1QYpBiI.js";import"./index-DturTZ53.js";import"./error-BFuWQWXY.js";import"./BaseCbacBanner-D3f4VTUa.js";import"./makeExternalStore-CkeVFEY-.js";import"./Tooltip-nFXiDwkG.js";import"./PopoverPopup-BBlagmYo.js";import"./debounce-8yqP3aY_.js";import"./tick-B5Dk5gWg.js";import"./DropdownField-7t-kwafh.js";import"./isEqual-w7VvbcfM.js";import"./withOsdkMetrics-DYzG-urA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

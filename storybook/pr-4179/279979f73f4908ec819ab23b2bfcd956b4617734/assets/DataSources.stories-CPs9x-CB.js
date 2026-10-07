import{j as r}from"./iframe-Dn-9qR05.js";import{O as b}from"./object-table-RVYWSQVb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CrDcw8ax.js";import{u as g}from"./useOsdkClient-D1GnjUl5.js";import"./preload-helper-CEUgRBGl.js";import"./Table-3aCJl_YM.js";import"./index-CShzoPuj.js";import"./Dialog-TK6XzCpV.js";import"./cross-CFJY3pI7.js";import"./svgIconContainer-DN7hY7wX.js";import"./useBaseUiId-DlYLGnbC.js";import"./InternalBackdrop-CSP9tAeZ.js";import"./composite-Dam7p1Gi.js";import"./index-siGyqdKv.js";import"./index-Cm5JEtld.js";import"./index-PmTUoQ6e.js";import"./useEventCallback-yrBTKri_.js";import"./SkeletonBar-g7tzeTNf.js";import"./LoadingCell-CeUY9Yie.js";import"./ColumnConfigDialog-D-3H8mRr.js";import"./DraggableList-Clp-stUz.js";import"./search-B9RszC_k.js";import"./Input-Ckj63NR0.js";import"./useControlled-CX6Xi137.js";import"./Button-CD6ruQEI.js";import"./small-cross-CfSIwwvk.js";import"./ActionButton-DJJlGWOS.js";import"./Checkbox-CMMOr2Lt.js";import"./useValueChanged-B9A96Xzu.js";import"./CollapsiblePanel-Banv_PU4.js";import"./MultiColumnSortDialog-fLe92FZV.js";import"./MenuTrigger-ZXE47TlK.js";import"./CompositeItem-DUnPjw9m.js";import"./ToolbarRootContext-C6ldVUmb.js";import"./getDisabledMountTransitionStyles-DhN5fa4D.js";import"./getPseudoElementBounds-aQjcu0Ut.js";import"./chevron-down-fpE-PXKH.js";import"./index-B79Dn3Wp.js";import"./error-Cuq16P9x.js";import"./BaseCbacBanner-DNbN0KCn.js";import"./makeExternalStore-Dqgr7oFO.js";import"./Tooltip-CbEYBBXB.js";import"./PopoverPopup-B_2-3pgb.js";import"./debounce-Bvt0kX1y.js";import"./tick-CgK3j2VX.js";import"./DropdownField-DC36O3p8.js";import"./isEqual-Dm8G62_o.js";import"./withOsdkMetrics-BQNjNhlw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

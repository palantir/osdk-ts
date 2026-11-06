import{j as r}from"./iframe-CT0ueW5J.js";import{O as b}from"./object-table-CuIVWNvc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BohiyEo_.js";import{u as g}from"./useOsdkClient-DaWrwNax.js";import"./preload-helper-CJAqHn_u.js";import"./Table-DNWrt4ow.js";import"./index-BnCCNHc8.js";import"./Dialog-D0qPzayg.js";import"./cross-Cyv96KiS.js";import"./svgIconContainer-IfNYosH4.js";import"./useBaseUiId-sdgRlT1f.js";import"./InternalBackdrop-IMT1pB90.js";import"./composite-DKQtJrfK.js";import"./index-C9OqCYVT.js";import"./index-BjzTUR_u.js";import"./index-D9FtuD0I.js";import"./useEventCallback-CgkxQMVg.js";import"./SkeletonBar-BOkXS-5U.js";import"./LoadingCell-CNvEEV9y.js";import"./ColumnConfigDialog-DQ0S7ega.js";import"./DraggableList-CvAtHR4t.js";import"./search-LkIpH0hE.js";import"./Input-DATuNACb.js";import"./useControlled-FL95Cn3G.js";import"./Button-ICT0IjE_.js";import"./small-cross-B5bSG8T4.js";import"./ActionButton-DUhBWnTe.js";import"./Checkbox-apvi8FHa.js";import"./useValueChanged-BH-DNPTf.js";import"./CollapsiblePanel-C_pT0bYR.js";import"./MultiColumnSortDialog-Dumy50Un.js";import"./MenuTrigger-DBO5k-3Z.js";import"./CompositeItem-iZ_HyQEG.js";import"./ToolbarRootContext-B-rHXnnf.js";import"./getDisabledMountTransitionStyles-C5eHg9LA.js";import"./getPseudoElementBounds-CX5xt4_X.js";import"./chevron-down-CY0HcTjS.js";import"./index-BLIQsvSb.js";import"./error-D7Pe4Z66.js";import"./BaseCbacBanner-CrHErys3.js";import"./makeExternalStore-DU28tiTB.js";import"./Tooltip-C8DWe441.js";import"./PopoverPopup-wk_1VcH9.js";import"./debounce-D8sdisyq.js";import"./tick-DafMeIZ7.js";import"./DropdownField-BRVEW7-m.js";import"./isEqual-DAtG9i0o.js";import"./withOsdkMetrics-HMzwH_1Q.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

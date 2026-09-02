import{j as r}from"./iframe-BHUFYaIi.js";import{O as b}from"./object-table-BpSuzW6M.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-zEjDm_Ak.js";import{u as g}from"./useOsdkClient-Dq42XRO4.js";import"./preload-helper-XnuLqDXH.js";import"./Table-CYeOpkhw.js";import"./index-Cv4N1cyr.js";import"./Dialog-Cp13S4Si.js";import"./cross-BOaBzgsR.js";import"./svgIconContainer-BwQXc51L.js";import"./useBaseUiId-MuM6uWGO.js";import"./InternalBackdrop-DUSHaGPj.js";import"./composite-B11uKuMK.js";import"./index-BPIvu6CK.js";import"./index-pncntrbL.js";import"./index-BxDALGli.js";import"./useEventCallback-DlrRREsq.js";import"./SkeletonBar-ij_FTAsS.js";import"./LoadingCell-DptSXl9K.js";import"./ColumnConfigDialog-DjN3HRYd.js";import"./DraggableList-lLbeAFUA.js";import"./search-CLJDIGSY.js";import"./Input-DjWGIh_z.js";import"./useControlled-CDjv9IaU.js";import"./Button-BLcFnS6Y.js";import"./small-cross-D9b89U2o.js";import"./ActionButton-D74MdW_-.js";import"./Checkbox-DyL8kHLu.js";import"./useValueChanged-BY36D3U1.js";import"./CollapsiblePanel-DUF4My8r.js";import"./MultiColumnSortDialog-Tg8SCamW.js";import"./MenuTrigger-B54q71Ab.js";import"./CompositeItem-MMdNYb42.js";import"./ToolbarRootContext-BeFb59Mm.js";import"./getDisabledMountTransitionStyles-Cs7RsEkT.js";import"./getPseudoElementBounds-DtwWcLj3.js";import"./chevron-down-BXEOl8Ri.js";import"./index-CWLFPPbc.js";import"./error-V_uXrOkx.js";import"./BaseCbacBanner-4MO9OZQU.js";import"./makeExternalStore-DlAYw1no.js";import"./Tooltip-CjOEcU2b.js";import"./PopoverPopup-ktlHKRLg.js";import"./debounce-CcDJlsBH.js";import"./tick-BKcWfYV_.js";import"./DropdownField-6qZcqvj8.js";import"./isEqual-Bx2Ngtz_.js";import"./withOsdkMetrics-D-xlszSM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

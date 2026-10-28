import{j as r}from"./iframe-Dd3-Yl6N.js";import{O as b}from"./object-table-DpU8rOP1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-i0OD-YHY.js";import{u as g}from"./useOsdkClient-DZ1zIMqw.js";import"./preload-helper-C9sTmRJF.js";import"./Table-CJkFrbE4.js";import"./index-BiUH_hpy.js";import"./Dialog-DXHTFgGh.js";import"./cross-Eqzrh4V_.js";import"./svgIconContainer-B7D9nEeV.js";import"./useBaseUiId-CtlPAw8O.js";import"./InternalBackdrop-CmK4_yD0.js";import"./composite-B7_CRtOh.js";import"./index-Dk7mnZge.js";import"./index-CbNEs7cg.js";import"./index-lGfMNjwG.js";import"./useEventCallback-USAjYtY7.js";import"./SkeletonBar-C8vnuUpQ.js";import"./LoadingCell-cNBqiPSl.js";import"./ColumnConfigDialog-DNtdz8t8.js";import"./DraggableList-D0jY9WXX.js";import"./search-uFxQauC9.js";import"./Input-BFjIxR6L.js";import"./useControlled-tZuoOrAX.js";import"./Button-DgI_B-BT.js";import"./small-cross-CrGAYCsL.js";import"./ActionButton-4WW_Bvqo.js";import"./Checkbox-SDQwho6i.js";import"./useValueChanged-XCnKvKXZ.js";import"./CollapsiblePanel-BOoyEJPY.js";import"./MultiColumnSortDialog-BDhw5L_6.js";import"./MenuTrigger-BzJv6k6o.js";import"./CompositeItem-BLXgiCJ0.js";import"./ToolbarRootContext-YQCd6tra.js";import"./getDisabledMountTransitionStyles-BXNmj0yT.js";import"./getPseudoElementBounds-DmW7W9n1.js";import"./chevron-down-COpzwsCU.js";import"./index-D_tBmJ25.js";import"./error-OA8M66y2.js";import"./BaseCbacBanner-CQiUk9d3.js";import"./makeExternalStore-C5CgSHDu.js";import"./Tooltip-B41k5vGI.js";import"./isObject-kZj6fUWz.js";import"./debounce-DKDpCZ3V.js";import"./tick-CH9Wrri9.js";import"./DropdownField-Dt4JM_pr.js";import"./isEqual-W7tw2uNy.js";import"./_baseIsEqual-CkzZKYO0.js";import"./withOsdkMetrics-CIN8qa0j.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

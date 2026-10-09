import{j as r}from"./iframe-Bz3hVWPH.js";import{O as b}from"./object-table-Coh6khSe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C5Z_qkBb.js";import{u as g}from"./useOsdkClient-C-ZEaw1j.js";import"./preload-helper-B5WDuSuX.js";import"./Table-vO5Gnq6f.js";import"./index-DByWOMtj.js";import"./Dialog-D4obr35u.js";import"./cross-Fpn0tB3m.js";import"./svgIconContainer-_Jncan05.js";import"./useBaseUiId-dzLz4lPg.js";import"./InternalBackdrop-DSn-b-zD.js";import"./composite-CPnF2lA7.js";import"./index-vogC1DiU.js";import"./index-De0WyPkh.js";import"./index-BIjtRufh.js";import"./useEventCallback-CT17wzJW.js";import"./SkeletonBar-B6lmbx_o.js";import"./LoadingCell-BYZJaKgx.js";import"./ColumnConfigDialog-l5kk5jJ2.js";import"./DraggableList-jBvaIbKs.js";import"./search-Ctah0g8H.js";import"./Input-niPYTtX3.js";import"./useControlled-DOWqxCnV.js";import"./Button-CiU5aFV9.js";import"./small-cross-BzeHldsH.js";import"./ActionButton-OnzJnryN.js";import"./Checkbox-BEY2gbmr.js";import"./useValueChanged-BISvWiN-.js";import"./CollapsiblePanel-jHetj5wz.js";import"./MultiColumnSortDialog-BV0ux_2F.js";import"./MenuTrigger-DBuTjWXZ.js";import"./CompositeItem-dA2LCxOZ.js";import"./ToolbarRootContext-D-xyRBQY.js";import"./getDisabledMountTransitionStyles-BdHWZjt-.js";import"./getPseudoElementBounds-BC_aNtit.js";import"./chevron-down-Bi16AFVJ.js";import"./index-BwGnMyFh.js";import"./error-CQxjkOW_.js";import"./BaseCbacBanner-DsvHyF5N.js";import"./makeExternalStore-BkTXcz9h.js";import"./Tooltip-DfHl7Xwe.js";import"./PopoverPopup-CUtjr2xE.js";import"./debounce-u07EyXLU.js";import"./tick-UZyx2gLc.js";import"./DropdownField-CQFrJZV4.js";import"./isEqual-Bw8rh7NU.js";import"./withOsdkMetrics-DIZcYriA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

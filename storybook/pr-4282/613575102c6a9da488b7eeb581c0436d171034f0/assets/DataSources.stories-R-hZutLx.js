import{j as r}from"./iframe-BgXQ_2ZQ.js";import{O as b}from"./object-table-CC0ZxKyO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C7i8IVqh.js";import{u as g}from"./useOsdkClient-CcbFY1-2.js";import"./preload-helper-BidOVzf2.js";import"./Table-JOmGqnGr.js";import"./index-Du7DARA2.js";import"./Dialog-Cb5azjs7.js";import"./cross-DjR1Bdqm.js";import"./svgIconContainer-Dt6fkfKI.js";import"./useBaseUiId-BDBZknBQ.js";import"./InternalBackdrop-c9jJBd1p.js";import"./composite-DkGW9dlU.js";import"./index-BrroAixZ.js";import"./index-BNVSiMmU.js";import"./index-BSei0jMm.js";import"./useEventCallback-R0FrqxvI.js";import"./SkeletonBar-BBIq-vhs.js";import"./LoadingCell-CsZKXS-Q.js";import"./ColumnConfigDialog-ByzLyWUj.js";import"./DraggableList-Bwy-m9j0.js";import"./search-DUa1f9S-.js";import"./Input-snLmBrpI.js";import"./useControlled-BJTO4Tz0.js";import"./Button-DyzWkyRc.js";import"./small-cross-DZhFWeH9.js";import"./ActionButton-BXIrWwIY.js";import"./Checkbox-Dl0Ot1yr.js";import"./useValueChanged-pU_y0YNC.js";import"./CollapsiblePanel-Bdczxe9M.js";import"./MultiColumnSortDialog-CoCx59aY.js";import"./MenuTrigger-Dz9YkOj_.js";import"./CompositeItem-BoTWi4na.js";import"./ToolbarRootContext-DnYkqago.js";import"./getDisabledMountTransitionStyles-D_LWhqVm.js";import"./getPseudoElementBounds-Df9rfh-s.js";import"./chevron-down-xbEb9_oS.js";import"./index-BR5r7qBw.js";import"./error-DWfidi70.js";import"./BaseCbacBanner-DkSenGHc.js";import"./makeExternalStore-Bhk5996J.js";import"./Tooltip-KBTfxc0_.js";import"./PopoverPopup-BYQDCscd.js";import"./debounce-DWFh7d24.js";import"./tick-Cj44jG3P.js";import"./DropdownField-CsQwc8Ii.js";import"./isEqual-DBPj2USA.js";import"./withOsdkMetrics-DMzLVnra.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

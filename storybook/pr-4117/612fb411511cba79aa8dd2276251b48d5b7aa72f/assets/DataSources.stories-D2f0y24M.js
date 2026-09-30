import{j as r}from"./iframe-BarfOKYJ.js";import{O as b}from"./object-table-BA95ot9T.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BduLNUSs.js";import{u as g}from"./useOsdkClient-Bup81mrr.js";import"./preload-helper-DhgTfoUj.js";import"./Table-CYwjXXf8.js";import"./index-DdXQxkq9.js";import"./Dialog-BObe6AXz.js";import"./cross-awiM4qkb.js";import"./svgIconContainer-CZ2JLaJP.js";import"./useBaseUiId-DPa9F6U_.js";import"./InternalBackdrop-CzqI8c2A.js";import"./composite-C6iH7oZR.js";import"./index-CylLJLDi.js";import"./index-BSz4BzcY.js";import"./index-8BqqJVP-.js";import"./useEventCallback-BM5lsma7.js";import"./SkeletonBar-DwtS4_5f.js";import"./LoadingCell-BZXewJRV.js";import"./ColumnConfigDialog-D8VaEYza.js";import"./DraggableList-PlZw6FYG.js";import"./search-C8DSNwE8.js";import"./Input-BuDULjbT.js";import"./useControlled-Bj7AFHc7.js";import"./Button-glJjOdf_.js";import"./small-cross-BpfwKVxt.js";import"./ActionButton-CLQTqINC.js";import"./Checkbox-CIvg_P1G.js";import"./useValueChanged-CeW4BP0G.js";import"./CollapsiblePanel-BLyrJB6N.js";import"./MultiColumnSortDialog-CNuD0TJX.js";import"./MenuTrigger-WpUQ5-iy.js";import"./CompositeItem-DtdptPgn.js";import"./ToolbarRootContext-BuAvit0a.js";import"./getDisabledMountTransitionStyles-BKNuGRXS.js";import"./getPseudoElementBounds-CoZE2llY.js";import"./chevron-down-CDrseuzZ.js";import"./index-BYqnSnwI.js";import"./error-D3ss51fq.js";import"./BaseCbacBanner-Lt4jf_3F.js";import"./makeExternalStore-Ddoj9Y3j.js";import"./Tooltip-BFgf2gEu.js";import"./PopoverPopup-CIFWoRMP.js";import"./debounce-BerZfsn6.js";import"./tick-BdVYhETS.js";import"./DropdownField-CsNv8iOU.js";import"./isEqual-BDgUedTG.js";import"./withOsdkMetrics-B8r59qzx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

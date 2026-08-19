import{j as r}from"./iframe-CJUBUTub.js";import{O as b}from"./object-table-DwddERxx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C4jIdbL-.js";import{u as g}from"./useOsdkClient-B1B799x9.js";import"./preload-helper-CIaS7xmC.js";import"./Table-D6LAu_qp.js";import"./index-D6RKL9xW.js";import"./Dialog-tFwyZqn4.js";import"./cross-CLjLUeJo.js";import"./svgIconContainer-CXg-3J8w.js";import"./useBaseUiId-YnyDNtng.js";import"./InternalBackdrop-Rxhs1aJY.js";import"./composite-IgJfsXTy.js";import"./index-DmjIOSHs.js";import"./index-BfGfq02Q.js";import"./index-C5qONp6M.js";import"./useEventCallback-L7RTqL_n.js";import"./SkeletonBar-BdJVeNGK.js";import"./LoadingCell-BA54JClW.js";import"./ColumnConfigDialog-0w9-pAgF.js";import"./DraggableList-K0eBUk7L.js";import"./search-5t0wk0Gr.js";import"./Input-DfF7VsZQ.js";import"./useControlled-C4N2tr7p.js";import"./Button-DCqz38K7.js";import"./small-cross-BLph0oUA.js";import"./ActionButton-aE1Vn891.js";import"./Checkbox-C1_eXCF3.js";import"./useValueChanged-BhGo1cQZ.js";import"./CollapsiblePanel-BUDs43GM.js";import"./MultiColumnSortDialog-DqqkdhJm.js";import"./MenuTrigger-PEhyz_-A.js";import"./CompositeItem-CL-JcIqG.js";import"./ToolbarRootContext-BtuYN_1f.js";import"./getDisabledMountTransitionStyles-CpqTqMd3.js";import"./getPseudoElementBounds-BF4H2UwQ.js";import"./chevron-down-CuNdvUfz.js";import"./index-C3hSlA2p.js";import"./error--zLI5MtK.js";import"./BaseCbacBanner-CYib6Qd_.js";import"./makeExternalStore-DKQcCda3.js";import"./Tooltip-DIGJzMd5.js";import"./PopoverPopup-CRY5tVUJ.js";import"./debounce-DNVsdhoz.js";import"./tick-iXfhAnSu.js";import"./DropdownField-Colf05W8.js";import"./isEqual-X86jlpqw.js";import"./withOsdkMetrics-DJlQtgHI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

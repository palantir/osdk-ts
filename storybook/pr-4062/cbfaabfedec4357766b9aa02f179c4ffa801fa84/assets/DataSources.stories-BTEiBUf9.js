import{j as r}from"./iframe-3uOeStlO.js";import{O as b}from"./object-table-qJDWYpnJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DVVLHu4C.js";import{u as g}from"./useOsdkClient-BR5uz5xP.js";import"./preload-helper-B_uYGV8k.js";import"./Table-COy7OTJg.js";import"./index-B_qY6xMA.js";import"./Dialog-Ccqoblb9.js";import"./cross-waxScdAW.js";import"./svgIconContainer-BXcgfdNM.js";import"./useBaseUiId-DFf4k_ND.js";import"./InternalBackdrop-DeK6mcEC.js";import"./composite-DbFqwck4.js";import"./index-CkR9lTv2.js";import"./index-CV8wC36m.js";import"./index-K1gQz8hL.js";import"./useEventCallback-B_uqfwHC.js";import"./SkeletonBar-Cx2xW1pn.js";import"./LoadingCell-CII1RZf_.js";import"./ColumnConfigDialog-B9tNGQiq.js";import"./DraggableList-tGDRcHwH.js";import"./search-DB4T2psl.js";import"./Input-CYQFeP5H.js";import"./useControlled-Iq2zkhRy.js";import"./Button-B1JQinsR.js";import"./small-cross-DBqN_GPD.js";import"./ActionButton-B-_2-j29.js";import"./Checkbox-TNqUNqJn.js";import"./useValueChanged-BPuYePe0.js";import"./CollapsiblePanel-o2O4Ppa4.js";import"./MultiColumnSortDialog-BVqdM4HG.js";import"./MenuTrigger--u7WeyuR.js";import"./CompositeItem-B84OCPkr.js";import"./ToolbarRootContext-Dbkjbr9t.js";import"./getDisabledMountTransitionStyles-BEO9K8qN.js";import"./getPseudoElementBounds-hiaVLHB1.js";import"./chevron-down-Bzj-jMLe.js";import"./index-BiPZja9p.js";import"./error-BXiGRUyR.js";import"./BaseCbacBanner-Bcx0lEUZ.js";import"./makeExternalStore-B5qagnOI.js";import"./Tooltip-CiOtNwo6.js";import"./PopoverPopup-B8-ohf43.js";import"./debounce-D-3tGswa.js";import"./tick-Cvl3VbM3.js";import"./DropdownField-DiWe0nIp.js";import"./isEqual-LJdz_BZ3.js";import"./withOsdkMetrics-DtWegvZ6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-CNtj4pm0.js";import{O as b}from"./object-table-BdWu6-xy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D12xXKSZ.js";import{u as g}from"./useOsdkClient-VbnySwVH.js";import"./preload-helper-BS75hAbV.js";import"./Table-DSQlX70T.js";import"./index-sjmYZucR.js";import"./Dialog-D3lioHOd.js";import"./cross-BI_rXiCk.js";import"./svgIconContainer-KAKJdeY6.js";import"./useBaseUiId-lN80hZHi.js";import"./InternalBackdrop-BMWNtsZU.js";import"./composite-GfxKj1uF.js";import"./index-Cgs0l_sb.js";import"./index-CUZALXVA.js";import"./index-djpdBoFm.js";import"./useEventCallback-DuERb84G.js";import"./SkeletonBar-CZrTeSVQ.js";import"./LoadingCell-BRNwHJc1.js";import"./ColumnConfigDialog-CMgbih-7.js";import"./DraggableList-WdI-3es1.js";import"./search-D7W-cB43.js";import"./Input-C4ZhagKB.js";import"./useControlled-B0rx1snt.js";import"./Button-eHM7dp0m.js";import"./small-cross-DtFIErRB.js";import"./ActionButton-CmPvNCl_.js";import"./Checkbox-BMufYA8q.js";import"./useValueChanged-DDRJQ_I0.js";import"./CollapsiblePanel-D4KfY0r3.js";import"./MultiColumnSortDialog-CrARlvWc.js";import"./MenuTrigger-Cqg0-xP9.js";import"./CompositeItem-BO5p0iBu.js";import"./ToolbarRootContext-DeNcRZ79.js";import"./getDisabledMountTransitionStyles-BqG7Ghbq.js";import"./getPseudoElementBounds-Cvn7IccH.js";import"./chevron-down-DuRgHJud.js";import"./index-vLqmlx6U.js";import"./error-BoQP4cSo.js";import"./BaseCbacBanner-Bpgn6iSi.js";import"./makeExternalStore-CJ8yXjVF.js";import"./Tooltip-CC9kMvNv.js";import"./PopoverPopup-D6qb_igd.js";import"./debounce--s-i1_AZ.js";import"./tick-BMhhdG7H.js";import"./DropdownField-Bnf0PiqN.js";import"./isEqual-C16MQX7m.js";import"./withOsdkMetrics-D3scg1-Z.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

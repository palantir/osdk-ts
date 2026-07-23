import{j as r}from"./iframe-8mEMf3e5.js";import{O as b}from"./object-table-CBeO6GJv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BI-eNsmx.js";import{u as g}from"./useOsdkClient-IgGH-bJp.js";import"./preload-helper-DbAS9a1v.js";import"./Table-2LaouPg7.js";import"./index--J3l5EbG.js";import"./Dialog-BXa8SM-x.js";import"./cross-UGSNun_i.js";import"./svgIconContainer-BDT9UouZ.js";import"./useBaseUiId-DKi4WO_9.js";import"./InternalBackdrop-CEKXh1r6.js";import"./composite-C_r6gpBa.js";import"./index-BFzy3rwW.js";import"./index-B4h71S0u.js";import"./index-Fnh0SKoA.js";import"./useEventCallback-BA3rmIgm.js";import"./SkeletonBar-B4q-fZON.js";import"./LoadingCell-BtMn-OKA.js";import"./ColumnConfigDialog-yGg0EZmf.js";import"./DraggableList-D8cZ2I0J.js";import"./search-D3-FY_Jd.js";import"./Input-D4BJzKx_.js";import"./useControlled-CxBgkGC_.js";import"./isEqual-DuszkGv8.js";import"./isObject-DLnm7mgx.js";import"./Button-DilAyh-o.js";import"./ActionButton-BYOem6VU.js";import"./Checkbox-DZsB_T0F.js";import"./useValueChanged--MxB3UJn.js";import"./CollapsiblePanel-xxPgX1M9.js";import"./MultiColumnSortDialog-BZMnhRkj.js";import"./MenuTrigger-BuOkqg4V.js";import"./CompositeItem-CxQ7s4vA.js";import"./ToolbarRootContext-zmF5Vdu_.js";import"./getDisabledMountTransitionStyles-BUd0X9ss.js";import"./getPseudoElementBounds-CuDU7ocY.js";import"./chevron-down-C6YJpuG9.js";import"./index-CRqHRu41.js";import"./error-75F6hF38.js";import"./BaseCbacBanner-DIOYHQZK.js";import"./makeExternalStore-BoR92T3E.js";import"./Tooltip-Dy5F6isQ.js";import"./PopoverPopup-ClxUddzo.js";import"./toNumber-D6lWBfW1.js";import"./tick-hmdyoMoc.js";import"./DropdownField-B__xqiLV.js";import"./withOsdkMetrics-BDnjGfwF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

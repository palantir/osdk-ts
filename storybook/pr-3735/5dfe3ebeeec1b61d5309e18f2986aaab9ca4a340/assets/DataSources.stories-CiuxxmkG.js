import{j as r}from"./iframe-DSMWrXPe.js";import{O as b}from"./object-table-brzJdw4z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BjnKPWag.js";import{u as g}from"./useOsdkClient-C-RzX03l.js";import"./preload-helper-BlZGs9G1.js";import"./Table-FLFX5WVY.js";import"./index-D6D_nts1.js";import"./Dialog-CxwSbKcE.js";import"./cross-mTQyjJ68.js";import"./svgIconContainer-UJFGmyTn.js";import"./useBaseUiId-Cx1Xrpmr.js";import"./InternalBackdrop-D0nVKbjz.js";import"./composite-B-A3OnRf.js";import"./index-CN-8IRxo.js";import"./index-DNaGfyxP.js";import"./index-DSxEGt0t.js";import"./useEventCallback-B5PgNgv2.js";import"./SkeletonBar-CNF74keQ.js";import"./LoadingCell-D3IcZ7G9.js";import"./ColumnConfigDialog-q2xCJ1vk.js";import"./DraggableList-DEuHSCUq.js";import"./search-Cw6Jc9Ce.js";import"./Input-wgU5PuR4.js";import"./useControlled-2qj00gpi.js";import"./isEqual-DpvqD4Se.js";import"./isObject-V_1Zj_Zw.js";import"./Button-DZHdVHGV.js";import"./ActionButton-DXOcgc9O.js";import"./Checkbox-eegeH5wv.js";import"./useValueChanged-BNgYpVJr.js";import"./CollapsiblePanel-bfaXjnr1.js";import"./MultiColumnSortDialog-BSM2ZWp1.js";import"./MenuTrigger-BjB-MtHP.js";import"./CompositeItem-B-YTSQE9.js";import"./ToolbarRootContext-CUL72IU0.js";import"./getDisabledMountTransitionStyles-C0KhBNLA.js";import"./getPseudoElementBounds-aUbKXBHu.js";import"./chevron-down-B5dAgewr.js";import"./index-CDy6IKMN.js";import"./error-CoP_lWQF.js";import"./BaseCbacBanner-CsBjL5vT.js";import"./makeExternalStore-TjOOI6Gz.js";import"./Tooltip-DNENNQFW.js";import"./PopoverPopup-BbkLso8i.js";import"./toNumber-_WDj94yf.js";import"./tick-jHimGsho.js";import"./DropdownField-BgvzeuHw.js";import"./withOsdkMetrics-5xZP9LUJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

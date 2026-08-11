import{j as r}from"./iframe-BYxEOIgJ.js";import{O as b}from"./object-table-ZGMv6O3p.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CeL0FSRQ.js";import{u as g}from"./useOsdkClient-CNrMQGxQ.js";import"./preload-helper-CYfeVk8W.js";import"./Table-BQsMFTl4.js";import"./index-DKKaubsW.js";import"./Dialog-9IDRR8Td.js";import"./cross-BIhLN6o-.js";import"./svgIconContainer-BEmlyg-y.js";import"./useBaseUiId-nfkORe0E.js";import"./InternalBackdrop-DNuz-SJQ.js";import"./composite-Cx4sqESm.js";import"./index-tQSEfkeh.js";import"./index-BOJvayi6.js";import"./index-DwnZeONY.js";import"./useEventCallback-Wzc0f3SD.js";import"./SkeletonBar-DkY0CIx2.js";import"./LoadingCell-CQeIxM7f.js";import"./ColumnConfigDialog-C0b_e5gr.js";import"./DraggableList-WHk-6vds.js";import"./search-D-odk6X_.js";import"./Input-DjFm0Vep.js";import"./useControlled-CUdaOkZq.js";import"./isEqual-BhWNui4X.js";import"./isObject-LQOhNoGU.js";import"./Button-BD1cn9XN.js";import"./ActionButton--q9fC4uz.js";import"./Checkbox-B2UQUxW9.js";import"./useValueChanged-Bdy5pI-C.js";import"./CollapsiblePanel-Cq48y23I.js";import"./MultiColumnSortDialog-CxLVk_VS.js";import"./MenuTrigger-Cj5R0CGN.js";import"./CompositeItem-DmtenJN8.js";import"./ToolbarRootContext-49DlEGV6.js";import"./getDisabledMountTransitionStyles-C9TiHE4J.js";import"./getPseudoElementBounds-C8ySOvtU.js";import"./chevron-down-CrQY9uCp.js";import"./index-DHS4kq0m.js";import"./error-Cj50jG_k.js";import"./BaseCbacBanner-DeIJCNJT.js";import"./makeExternalStore-MdKyv_9V.js";import"./Tooltip-BGdIr3DT.js";import"./PopoverPopup-BjEwSVm1.js";import"./toNumber-CMjVeBac.js";import"./tick-C7W402bP.js";import"./DropdownField-DOymprAa.js";import"./withOsdkMetrics-C8n5_A-t.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

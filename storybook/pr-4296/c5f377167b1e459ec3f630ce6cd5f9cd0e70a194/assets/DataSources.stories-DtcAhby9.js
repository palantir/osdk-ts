import{j as r}from"./iframe-X83lPBeu.js";import{O as b}from"./object-table-Y_3wYW9d.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CAHq_IB2.js";import{u as g}from"./useOsdkClient-CMlwPsT9.js";import"./preload-helper-B2sKPI8B.js";import"./Table-MemkOZOO.js";import"./index-BQDctdoe.js";import"./Dialog-DEiSH4_y.js";import"./cross-DESSfx8f.js";import"./svgIconContainer-CrLLWaC0.js";import"./useBaseUiId-CXpBK7Xe.js";import"./InternalBackdrop-CPq4-grn.js";import"./composite-C3KQbPWK.js";import"./index-CC_w3gYY.js";import"./index-DeDXgDsX.js";import"./index-DJhqSZmI.js";import"./useEventCallback-BzkW8p-_.js";import"./SkeletonBar-C-PQinYo.js";import"./LoadingCell-CZpi8tRS.js";import"./ColumnConfigDialog-DEaTwFfm.js";import"./DraggableList-DWHIIeJB.js";import"./search-CGhIjKAK.js";import"./Input-C5377Qeu.js";import"./useControlled-CRW8vka0.js";import"./Button-C6LVoI3t.js";import"./small-cross-BGOiG0gJ.js";import"./ActionButton-CA6MrVcg.js";import"./Checkbox-DY07kqsM.js";import"./useValueChanged-CpfWf914.js";import"./CollapsiblePanel-CrXH_pxU.js";import"./MultiColumnSortDialog-BhobuEes.js";import"./MenuTrigger-DjoQlH_H.js";import"./CompositeItem-DmkSf1ho.js";import"./ToolbarRootContext-DNKVBjDF.js";import"./getDisabledMountTransitionStyles-DAbmYawC.js";import"./getPseudoElementBounds-Mr0Voovu.js";import"./chevron-down-C6VkVqqF.js";import"./index-ArSP-sSJ.js";import"./error-gzJnjayk.js";import"./BaseCbacBanner-KZqmSl10.js";import"./makeExternalStore-D0mNPEg-.js";import"./Tooltip-BTG2SIH8.js";import"./PopoverPopup-G2s0F852.js";import"./debounce-CJcmUv4x.js";import"./tick-ClK8H8tK.js";import"./DropdownField-D0HzhIcj.js";import"./isEqual-C0ftKMoJ.js";import"./withOsdkMetrics-DWVSjT_8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

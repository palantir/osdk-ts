import{j as r}from"./iframe-B2s0ilwM.js";import{O as b}from"./object-table-Df0SPqQE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D5Q6E_4C.js";import{u as g}from"./useOsdkClient-leyOYd9w.js";import"./preload-helper-MMy8iX7M.js";import"./Table-C9FeGHfK.js";import"./index-DUMP_Qp6.js";import"./Dialog-CM61Fugd.js";import"./cross-DZSba9zk.js";import"./svgIconContainer-DRCF-NHW.js";import"./useBaseUiId-BVH4GIbN.js";import"./InternalBackdrop-B-Ja5_xj.js";import"./composite-DFa6zY9f.js";import"./index-mYTbhKt1.js";import"./index-DdqPMtaM.js";import"./index-D509LBW8.js";import"./useEventCallback-CUt-4jCY.js";import"./SkeletonBar-DIroCERZ.js";import"./LoadingCell-B_iM1kY5.js";import"./ColumnConfigDialog-CBcQ7LV-.js";import"./DraggableList-CEuKva_i.js";import"./search-De6MFVaz.js";import"./Input-CjCyxjsG.js";import"./useControlled-C3oDg3XB.js";import"./Button-Bnx37qOJ.js";import"./small-cross-DUrl-Gxm.js";import"./ActionButton-COeBFnf1.js";import"./Checkbox-ybshHhz7.js";import"./useValueChanged-B7ZJE4yn.js";import"./CollapsiblePanel-D6thvhNc.js";import"./MultiColumnSortDialog-D-ae3yca.js";import"./MenuTrigger-om7rzqwZ.js";import"./CompositeItem-DNqREtRU.js";import"./ToolbarRootContext-DDaNMj4N.js";import"./getDisabledMountTransitionStyles-Dmi_83d2.js";import"./getPseudoElementBounds-DXFFzy9T.js";import"./chevron-down-CW4_yRhZ.js";import"./index-ClsdzwAW.js";import"./error-DeXC2vVV.js";import"./BaseCbacBanner-DslKMIMd.js";import"./makeExternalStore-D_KS_COu.js";import"./Tooltip-CntzDWe4.js";import"./PopoverPopup-CCpYUP6e.js";import"./debounce-CmkkVxIz.js";import"./tick-Bjc9CW2e.js";import"./DropdownField-95SM7q8x.js";import"./isEqual-B8qzt1pj.js";import"./withOsdkMetrics-B_SFwrj7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

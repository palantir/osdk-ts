import{j as r}from"./iframe-CUqJoiyS.js";import{O as b}from"./object-table-BnYDDL8D.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B0ElnWjO.js";import{u as g}from"./useOsdkClient-B74Rz75W.js";import"./preload-helper-CqOWo9Kq.js";import"./Table-B1GTAg4A.js";import"./index-DhW4888P.js";import"./Dialog-B-itnpN2.js";import"./cross-GG3fOgP3.js";import"./svgIconContainer-B7WKcrMM.js";import"./useBaseUiId-BZb7TWDk.js";import"./InternalBackdrop-Dq_kPC_w.js";import"./composite-TXFEMlyS.js";import"./index-DAzmwTik.js";import"./index-BBo0v-HH.js";import"./index-BJ9da-D9.js";import"./useEventCallback-Dz2Wo-yx.js";import"./SkeletonBar-Dw2EozU6.js";import"./LoadingCell-rbx7b-G-.js";import"./ColumnConfigDialog-DaEjAh-z.js";import"./DraggableList-DBeD6qpj.js";import"./search-DIQou5oL.js";import"./Input-CRJI3PzK.js";import"./useControlled-BMDtEhI-.js";import"./Button-BNd5oumq.js";import"./small-cross-Cpb8kTzQ.js";import"./ActionButton-EApO2EOv.js";import"./Checkbox-C269ILAZ.js";import"./useValueChanged-MoKiEcJY.js";import"./CollapsiblePanel-DixO6tjx.js";import"./MultiColumnSortDialog-B4yq9Rnw.js";import"./MenuTrigger-D7ayu_ww.js";import"./CompositeItem-Zdmcbf9r.js";import"./ToolbarRootContext-DkHEjN7J.js";import"./getDisabledMountTransitionStyles-D-aggpUt.js";import"./getPseudoElementBounds-CL_A93Bv.js";import"./chevron-down-BfkwxApB.js";import"./index-BCxd25LX.js";import"./error-l4XIFlvt.js";import"./BaseCbacBanner-lm6dXBt-.js";import"./makeExternalStore-DVkGjBto.js";import"./Tooltip-CJfjtiJ9.js";import"./PopoverPopup-Crglkfe6.js";import"./debounce-BVDXVoV0.js";import"./tick-CLiQuWYA.js";import"./DropdownField-DFoQOfPb.js";import"./isEqual-DlgN1XxT.js";import"./withOsdkMetrics-BPGEJQZq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-DJkts_RL.js";import{O as b}from"./object-table-El6ZJtdS.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-i7vkY5Yb.js";import{u as g}from"./useOsdkClient-CytKAX8u.js";import"./preload-helper-DnSYvyfS.js";import"./Table-CkcyUqQ4.js";import"./index-AdNwtOlb.js";import"./Dialog-C5jCL8Mx.js";import"./cross-RIukJOv6.js";import"./svgIconContainer-C5-52KFN.js";import"./useBaseUiId-BOJH0vIf.js";import"./InternalBackdrop-D5KetDnt.js";import"./composite-DDvCjav2.js";import"./index-Ci2eYgLO.js";import"./index-BDcDuz1j.js";import"./index-CQxVkwph.js";import"./useEventCallback-lKoyoV4u.js";import"./SkeletonBar-BvqjdvM1.js";import"./LoadingCell-CjZbM9If.js";import"./ColumnConfigDialog-DAZT9Gdl.js";import"./DraggableList-CD_o0Imw.js";import"./search-_QUQf3i5.js";import"./Input-FCTts1k3.js";import"./useControlled-DasQvtmr.js";import"./Button-sRivSwhn.js";import"./small-cross-CVWWEP0y.js";import"./ActionButton-VwPGUJzv.js";import"./Checkbox-DYlpQOH7.js";import"./useValueChanged-CZGvPtYp.js";import"./CollapsiblePanel-iUKB7uZT.js";import"./MultiColumnSortDialog-Dp7hOvd-.js";import"./MenuTrigger-CjrvOlSn.js";import"./CompositeItem-LGAP8V9B.js";import"./ToolbarRootContext-DzjIN-OH.js";import"./getDisabledMountTransitionStyles-BYybRfax.js";import"./getPseudoElementBounds-CzOa17qB.js";import"./chevron-down-DB2rAp0-.js";import"./index-CUwadNBX.js";import"./error-BqILnzwq.js";import"./BaseCbacBanner-DO50Ydj3.js";import"./makeExternalStore-phk9_3eu.js";import"./Tooltip-C3bMyjLM.js";import"./isObject-pPVUn46w.js";import"./debounce-CsNmpAAZ.js";import"./tick-Bn4wwjz-.js";import"./DropdownField-CG-CwPna.js";import"./isEqual-BRzVBIIh.js";import"./_baseIsEqual-BfrWjv7z.js";import"./withOsdkMetrics-BoDHZnfJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};

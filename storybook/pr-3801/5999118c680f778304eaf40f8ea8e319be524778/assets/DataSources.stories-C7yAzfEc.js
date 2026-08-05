import{j as r}from"./iframe-DlsSxhci.js";import{O as b}from"./object-table-CRAh95MC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-afX7mkFC.js";import{u as g}from"./useOsdkClient-Bz2RwTNu.js";import"./preload-helper-C-s1U77H.js";import"./Table-Bj0YMStq.js";import"./index-cP9eqqta.js";import"./Dialog-C5U6ZShk.js";import"./cross-C60t9tFZ.js";import"./svgIconContainer-DPjUtDUg.js";import"./useBaseUiId-C02HFIUM.js";import"./InternalBackdrop-DBknUb6w.js";import"./composite-H8SSz-ne.js";import"./index-cF6qZyvr.js";import"./index-DNVt94aI.js";import"./index-DpBvQz_i.js";import"./useEventCallback-B2uIvmto.js";import"./SkeletonBar-B0jE-NJT.js";import"./LoadingCell-C7YLxKY7.js";import"./ColumnConfigDialog-CWIAK8ug.js";import"./DraggableList-Cq1gBryW.js";import"./search-BqsY1PeE.js";import"./Input-Ci6C2hr-.js";import"./useControlled-Z7ZWa5VR.js";import"./isEqual-B8XloMG1.js";import"./isObject-BTVuOy-v.js";import"./Button-CxITngjL.js";import"./ActionButton-BWBcKq3A.js";import"./Checkbox-CQJt_NNw.js";import"./useValueChanged-B3zPCOA0.js";import"./CollapsiblePanel-B5uHCo3M.js";import"./MultiColumnSortDialog-BhSvpKv1.js";import"./MenuTrigger-BwFK0x6i.js";import"./CompositeItem-drMwpLA_.js";import"./ToolbarRootContext-vkAvhQwM.js";import"./getDisabledMountTransitionStyles-DMANXZME.js";import"./getPseudoElementBounds-CMsfWS6D.js";import"./chevron-down-DonJjnvl.js";import"./index-CBkUqlyA.js";import"./error-IK-rXp7z.js";import"./BaseCbacBanner-DhSKbTPU.js";import"./makeExternalStore-CH2NQdic.js";import"./Tooltip-DKzdlOiN.js";import"./PopoverPopup-NPYSC6zj.js";import"./toNumber-Co3sADDP.js";import"./tick-2uq__bbs.js";import"./DropdownField-Bsph783u.js";import"./withOsdkMetrics-Bw6076Jo.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

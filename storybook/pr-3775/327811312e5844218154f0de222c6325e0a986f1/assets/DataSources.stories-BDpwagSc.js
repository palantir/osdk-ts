import{j as r}from"./iframe-Dt0Ahp7v.js";import{O as b}from"./object-table-C7lON5md.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DUI3W8pS.js";import{u as g}from"./useOsdkClient-BB1GGDEB.js";import"./preload-helper-Csxsg529.js";import"./Table-CEI-Num5.js";import"./index-DKNyxDiu.js";import"./Dialog-Dtjx5p-C.js";import"./cross-DRzxKD9P.js";import"./svgIconContainer-CB7_PxJy.js";import"./useBaseUiId-CdwE49_c.js";import"./InternalBackdrop-DXzVZsqm.js";import"./composite-RqLHFCRB.js";import"./index-DgQ3UFA5.js";import"./index-BrDzKhkc.js";import"./index-raFJTOQN.js";import"./useEventCallback-wrrEUMLU.js";import"./SkeletonBar-l9KRBROl.js";import"./LoadingCell-CO5NOT5a.js";import"./ColumnConfigDialog-BGZCh411.js";import"./DraggableList-Bz08LFBa.js";import"./search-CMt_GG0Z.js";import"./Input-BG_Aon1B.js";import"./useControlled-LVr7DFLg.js";import"./isEqual-BxFB4iwO.js";import"./isObject-CDU1KAZx.js";import"./Button-Du4-mwXs.js";import"./ActionButton-Cv8Q47bY.js";import"./Checkbox-Ssgs7t0h.js";import"./useValueChanged-B0uXxmiT.js";import"./CollapsiblePanel-DBgJLNcW.js";import"./MultiColumnSortDialog-CDU5j975.js";import"./MenuTrigger-CmkyV0y8.js";import"./CompositeItem-pKV5GE2B.js";import"./ToolbarRootContext-BdRkmkbo.js";import"./getDisabledMountTransitionStyles-CPh35wbM.js";import"./getPseudoElementBounds-BorjMQgh.js";import"./chevron-down-DNCAQpBE.js";import"./index-wINFjYfg.js";import"./error-DG09RTcC.js";import"./BaseCbacBanner-BbbOdFTy.js";import"./makeExternalStore-BYkIgxdy.js";import"./Tooltip-D9Gho6OQ.js";import"./PopoverPopup-qJvh0xU8.js";import"./toNumber-ju4VPkOz.js";import"./tick-2io-CBPy.js";import"./DropdownField-wOiC2tMo.js";import"./withOsdkMetrics-8vUC6id2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

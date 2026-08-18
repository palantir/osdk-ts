import{j as r}from"./iframe-DdQFRxp3.js";import{O as b}from"./object-table-CgU8zier.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BGbEG16S.js";import{u as g}from"./useOsdkClient-zD-chn6z.js";import"./preload-helper-DRTLQAg9.js";import"./Table-BewXHTi-.js";import"./index-TaYeYo9P.js";import"./Dialog-CzfsQsmI.js";import"./cross-sSLLNBfX.js";import"./svgIconContainer-uAn5cIaB.js";import"./useBaseUiId-vUIL2zRu.js";import"./InternalBackdrop-Bgn-yQPf.js";import"./composite-CE_Dj80Q.js";import"./index-CWWT09XN.js";import"./index-sOpdPN6D.js";import"./index-DGUr0vQ-.js";import"./useEventCallback-C4t0hT56.js";import"./SkeletonBar-BH6A2cWm.js";import"./LoadingCell-T8jVQDBg.js";import"./ColumnConfigDialog-CrTRCubR.js";import"./DraggableList-BYhvoQND.js";import"./search-nJivgl6W.js";import"./Input-Dylmv0nm.js";import"./useControlled-Cq-T_M7n.js";import"./Button-BdP51mHG.js";import"./small-cross-DH6TZDYg.js";import"./ActionButton-BdbE3v1s.js";import"./Checkbox-B87kemOG.js";import"./useValueChanged-C4HM5Mz3.js";import"./CollapsiblePanel-C7y-Kvqx.js";import"./MultiColumnSortDialog-DDxvjfEB.js";import"./MenuTrigger-BSqX7Abh.js";import"./CompositeItem-8f3x543_.js";import"./ToolbarRootContext-DCNtGQN6.js";import"./getDisabledMountTransitionStyles-J12WueKr.js";import"./getPseudoElementBounds-BLRtQhLY.js";import"./chevron-down-BosSoN29.js";import"./index-mv95Zkl0.js";import"./error-CvWe5-Ao.js";import"./BaseCbacBanner-DfdGEvuA.js";import"./makeExternalStore-peJQO0Rf.js";import"./Tooltip-aHmx8fwV.js";import"./PopoverPopup-DNY153Hn.js";import"./debounce-CJMKILxf.js";import"./tick-dWysx9EM.js";import"./DropdownField-DncUGCO2.js";import"./isEqual-C1cjFRCW.js";import"./withOsdkMetrics-Bp0vBcfz.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

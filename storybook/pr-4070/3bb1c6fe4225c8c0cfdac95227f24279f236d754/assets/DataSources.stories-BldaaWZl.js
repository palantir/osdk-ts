import{j as r}from"./iframe-NgqvngwL.js";import{O as b}from"./object-table-zSHAdfRU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B_Kb4l48.js";import{u as g}from"./useOsdkClient-CbLO7ws_.js";import"./preload-helper-C7qDpPhw.js";import"./Table-C9WrHZ03.js";import"./index-qNBEcOe2.js";import"./Dialog-BZx82TGU.js";import"./cross-B13Y_yM6.js";import"./svgIconContainer-Dg9noX_E.js";import"./useBaseUiId-usyGi_EF.js";import"./InternalBackdrop-irI5Oo7V.js";import"./composite-D8ywKD-R.js";import"./index-PMXb-wuA.js";import"./index-DpzlvyBx.js";import"./index-DUSkmaua.js";import"./useEventCallback-DrH7Jh0v.js";import"./SkeletonBar-BEIw4nVm.js";import"./LoadingCell-T6PSs_OS.js";import"./ColumnConfigDialog-pT1NqsXO.js";import"./DraggableList-5foGUvEP.js";import"./search-Dwv2h1CQ.js";import"./Input-CVgaaiBC.js";import"./useControlled-eXO0aHwT.js";import"./Button-oU3-hekz.js";import"./small-cross-DVdjFEnO.js";import"./ActionButton-B466E0uY.js";import"./Checkbox-BylebwwO.js";import"./useValueChanged-DiEkonDj.js";import"./CollapsiblePanel-BGz8oV02.js";import"./MultiColumnSortDialog-CFcjieBc.js";import"./MenuTrigger-DReTHaj0.js";import"./CompositeItem-C3cyTcS-.js";import"./ToolbarRootContext-CPIM7tk6.js";import"./getDisabledMountTransitionStyles-Dx4TXj1A.js";import"./getPseudoElementBounds-D1HMYsHr.js";import"./chevron-down-Bn4ZfVbM.js";import"./index-DktHhzQs.js";import"./error-BXs3tL6Z.js";import"./BaseCbacBanner-DnEMMlwl.js";import"./makeExternalStore-BhuLMaNX.js";import"./Tooltip-C4PI_X-z.js";import"./PopoverPopup-U9kUO_es.js";import"./debounce-CuGvF61s.js";import"./tick-BX_Ynmx5.js";import"./DropdownField-fe_Mf-M6.js";import"./isEqual-CoLabZFb.js";import"./withOsdkMetrics-pTfsj7aC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

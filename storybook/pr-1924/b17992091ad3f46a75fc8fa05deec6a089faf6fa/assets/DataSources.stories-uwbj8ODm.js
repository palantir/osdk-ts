import{j as r}from"./iframe-BJzVVo3C.js";import{O as b}from"./object-table-iloeXTiv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-O5mlbI6r.js";import{u as g}from"./useOsdkClient-C7mnWl4M.js";import"./preload-helper-BGo6yCWR.js";import"./Table-Q7vMfUTJ.js";import"./index-jYeXRVJt.js";import"./Dialog-Cat5-d5T.js";import"./cross-BODoIHG7.js";import"./svgIconContainer-BafRnCSe.js";import"./useBaseUiId-aWvq-Ojy.js";import"./InternalBackdrop-LaTt__SN.js";import"./composite-DVXx00LN.js";import"./index-Cu3TSrS7.js";import"./index-DY-H4zuh.js";import"./index-CGlZ0CTP.js";import"./useEventCallback-CPVPsHDE.js";import"./SkeletonBar-CmmIOnV3.js";import"./LoadingCell-u13Tws5Z.js";import"./ColumnConfigDialog-DzZb_NDG.js";import"./DraggableList-BnBPKCgQ.js";import"./search-CNzRQSLi.js";import"./Input-D8VZz3qg.js";import"./useControlled-BU_ZAQ-v.js";import"./Button-CtA29Am0.js";import"./small-cross-CIrD0bDh.js";import"./ActionButton-DNcn8P02.js";import"./Checkbox-D7r-WuhL.js";import"./useValueChanged-CnANt21_.js";import"./CollapsiblePanel-BbVSWDIY.js";import"./MultiColumnSortDialog-bPERNjQE.js";import"./MenuTrigger-C0sRySoL.js";import"./CompositeItem-UocH3YCc.js";import"./ToolbarRootContext-BS8U1N_y.js";import"./getDisabledMountTransitionStyles-DruUCqOL.js";import"./getPseudoElementBounds-BuOaNQX4.js";import"./chevron-down-GN6eodao.js";import"./index-C038wilx.js";import"./error-B0Rx4D9Q.js";import"./BaseCbacBanner--Vy8vTm4.js";import"./makeExternalStore-c77j8ZZC.js";import"./Tooltip-DwG0NqTz.js";import"./PopoverPopup-CbiEHiO_.js";import"./debounce-DqxAIWi9.js";import"./tick-C1AZecKl.js";import"./DropdownField-C9P6RcpY.js";import"./isEqual-DffZPRyo.js";import"./withOsdkMetrics-BD3BFsPk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

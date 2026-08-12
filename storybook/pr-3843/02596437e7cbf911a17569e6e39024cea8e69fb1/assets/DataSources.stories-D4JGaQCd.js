import{j as r}from"./iframe-BzgeOfJo.js";import{O as b}from"./object-table-CcppgmG_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BgorSf4v.js";import{u as g}from"./useOsdkClient-DcUrkyFT.js";import"./preload-helper-Bkrr1btE.js";import"./Table-ChpIbJnY.js";import"./index-0sS4DK38.js";import"./Dialog-BZEvx_K9.js";import"./cross-CDPJxVBK.js";import"./svgIconContainer-DfG8sdKE.js";import"./useBaseUiId-CXJNSrJM.js";import"./InternalBackdrop-BayFq1HO.js";import"./composite-B4xmkZhl.js";import"./index-CGtuAssr.js";import"./index-BF9eciPM.js";import"./index-Do1t6yvi.js";import"./useEventCallback-DoNQJm52.js";import"./SkeletonBar-DtVWZo4V.js";import"./LoadingCell-tQGaf6Fy.js";import"./ColumnConfigDialog-CAYn7V1z.js";import"./DraggableList-D722nH37.js";import"./search-D0znHoB0.js";import"./Input-uW-V73Ym.js";import"./useControlled-CCMODMjy.js";import"./isEqual-B3eAqf2z.js";import"./isObject-WM2S0FIl.js";import"./Button-CMlQCxNr.js";import"./ActionButton-CzlEqbU-.js";import"./Checkbox-DoYSW_5U.js";import"./useValueChanged-CsD6JbCM.js";import"./CollapsiblePanel-nnSQYfou.js";import"./MultiColumnSortDialog-CN8uVtgE.js";import"./MenuTrigger-DIP-YTxW.js";import"./CompositeItem-hxBAdSix.js";import"./ToolbarRootContext-BPdZZUMs.js";import"./getDisabledMountTransitionStyles-CKX8M7fA.js";import"./getPseudoElementBounds-mxfkqN-r.js";import"./chevron-down-DWn-RMzw.js";import"./index-C4lWqJjv.js";import"./error-B2aj7L5W.js";import"./BaseCbacBanner-DhKW-D1J.js";import"./makeExternalStore-Bo_8jKeh.js";import"./Tooltip-DaUXTYBe.js";import"./PopoverPopup-lz77nYOE.js";import"./toNumber-B6i1rSxO.js";import"./tick-BblDtOqU.js";import"./DropdownField-DhpZ0Ims.js";import"./withOsdkMetrics-C1N_Pny7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

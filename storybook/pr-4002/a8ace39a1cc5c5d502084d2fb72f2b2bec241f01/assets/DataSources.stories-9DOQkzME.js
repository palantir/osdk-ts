import{j as r}from"./iframe-Dhq7AaUP.js";import{O as b}from"./object-table-BsDnAea4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CoswS1cM.js";import{u as g}from"./useOsdkClient-CIEi34cT.js";import"./preload-helper-B5t1nGT4.js";import"./Table-fHRNdmYO.js";import"./index-505BPbMk.js";import"./Dialog-D9RsVnl0.js";import"./cross-BTExjjDl.js";import"./svgIconContainer-D5rjHQJh.js";import"./useBaseUiId-8_wbyGGA.js";import"./InternalBackdrop-BwExNyw1.js";import"./composite-m_TTOmrH.js";import"./index-5i4D4FjR.js";import"./index-Cn7LZsiB.js";import"./index-Ds9Aeuo4.js";import"./useEventCallback-DrWx2I0p.js";import"./SkeletonBar-Dfu2XLH1.js";import"./LoadingCell-DOFmpZhf.js";import"./ColumnConfigDialog--25Pujtc.js";import"./DraggableList-0_lK1LFX.js";import"./search-D9UNy25Q.js";import"./Input-BLnXCCTA.js";import"./useControlled-CWg50-5h.js";import"./Button-DHokje8p.js";import"./small-cross-C-lwhhcT.js";import"./ActionButton-KqE6rva2.js";import"./Checkbox-C_uTtVWa.js";import"./useValueChanged-Ba8xukC7.js";import"./CollapsiblePanel-B1W1icVw.js";import"./MultiColumnSortDialog-4PH33oyq.js";import"./MenuTrigger-ggSaI92l.js";import"./CompositeItem-CmAuNbAQ.js";import"./ToolbarRootContext-BPtqJH5V.js";import"./getDisabledMountTransitionStyles-CskAKAe0.js";import"./getPseudoElementBounds-DfU8GLtR.js";import"./chevron-down-D4blBvUy.js";import"./index-MT3wqTUP.js";import"./error-_SQQqIaC.js";import"./BaseCbacBanner-CASdGgiJ.js";import"./makeExternalStore-v3dRS4Sg.js";import"./Tooltip-DNpuDERk.js";import"./PopoverPopup-CbuPYz_R.js";import"./debounce-DxmZJnBK.js";import"./tick-BxbL6Sum.js";import"./DropdownField-CfokxXbx.js";import"./isEqual-Bw6Bno3N.js";import"./withOsdkMetrics-CQGMBuHv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

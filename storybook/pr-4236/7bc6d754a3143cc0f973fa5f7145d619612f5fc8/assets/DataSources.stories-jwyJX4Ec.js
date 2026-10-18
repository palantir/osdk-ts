import{j as r}from"./iframe-D826lLui.js";import{O as b}from"./object-table-B_uBeT-f.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DG_bYEm2.js";import{u as g}from"./useOsdkClient-Bbo5pAbB.js";import"./preload-helper-CGkAb-Wu.js";import"./Table-BUFGUybT.js";import"./index-DxNlvLAd.js";import"./Dialog-BOe-rnhW.js";import"./cross-9ZGBzaem.js";import"./svgIconContainer-BjuGxCIz.js";import"./useBaseUiId-CcA6f0Di.js";import"./InternalBackdrop-D8CCCsk7.js";import"./composite-D5SkMTiw.js";import"./index-e93ICMyG.js";import"./index-Dt4QZQ1m.js";import"./index-BjybkpAS.js";import"./useEventCallback-Ef5EfyWq.js";import"./SkeletonBar-DI4OC7oE.js";import"./LoadingCell-DfPckAF8.js";import"./ColumnConfigDialog-wVrsPA1W.js";import"./DraggableList-FEYECt2n.js";import"./search-BEeF_4Rd.js";import"./Input-D8Q7l-gb.js";import"./useControlled-D2sq1Iv_.js";import"./Button-DOLHRrn6.js";import"./small-cross-Dy0HqjGX.js";import"./ActionButton-BGwu0aco.js";import"./Checkbox-Ba70wUOE.js";import"./useValueChanged-D4utz3wv.js";import"./CollapsiblePanel-B3fFT0gn.js";import"./MultiColumnSortDialog-DgVM5Z_C.js";import"./MenuTrigger-f-DXw5qg.js";import"./CompositeItem-DW0wn-NB.js";import"./ToolbarRootContext-DY8S7jf3.js";import"./getDisabledMountTransitionStyles-CWVYXsPM.js";import"./getPseudoElementBounds-DvlgftUk.js";import"./chevron-down-C1HuiRtn.js";import"./index-T95LEHG2.js";import"./error-DNLlyci1.js";import"./BaseCbacBanner-DtsQhcu9.js";import"./makeExternalStore-B82ZGGVu.js";import"./Tooltip-DJDeXhNg.js";import"./PopoverPopup-B6kEvXUf.js";import"./debounce-cNU0CJPI.js";import"./tick-DxttFOXl.js";import"./DropdownField-JiLo16C6.js";import"./isEqual-DIp8qzW1.js";import"./withOsdkMetrics--xMNvw5Y.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

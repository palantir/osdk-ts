import{j as r}from"./iframe-mxG0bqmN.js";import{O as b}from"./object-table-WFIM5xuM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-9__xSIXK.js";import{u as g}from"./useOsdkClient-D60YQHAg.js";import"./preload-helper-CNw17NEq.js";import"./Table-CAKdzfmG.js";import"./index-29oGgzLZ.js";import"./Dialog-CzGl0n2S.js";import"./cross-D6Tl4R1E.js";import"./svgIconContainer-rUf9sgj2.js";import"./useBaseUiId-B0pa-b1P.js";import"./InternalBackdrop-CGuoD2YW.js";import"./composite-CT4w3sd4.js";import"./index-LiG5jLj1.js";import"./index-xs8nS-0V.js";import"./index-CxXsu0GI.js";import"./useEventCallback-L-Hi9oaa.js";import"./SkeletonBar-BCvv_Y3s.js";import"./LoadingCell-wIgPXJ0i.js";import"./ColumnConfigDialog-BW87yl2t.js";import"./DraggableList-BhkR4Rp6.js";import"./search-D0vl5yax.js";import"./Input-DAYbAIy1.js";import"./useControlled-CwpY0gyY.js";import"./Button-CoXV5wZD.js";import"./small-cross-B4Qofj2m.js";import"./ActionButton-Cf-j963P.js";import"./Checkbox-8pM9UbcC.js";import"./useValueChanged-pIGQFkB0.js";import"./CollapsiblePanel-BCX6O8yN.js";import"./MultiColumnSortDialog-C30X4qHV.js";import"./MenuTrigger-CUh0N47S.js";import"./CompositeItem-CqN63eX8.js";import"./ToolbarRootContext-fx2tIRtZ.js";import"./getDisabledMountTransitionStyles-9AH5tTIW.js";import"./getPseudoElementBounds-Bb4Xtmeq.js";import"./chevron-down-BPLfSvEY.js";import"./index-yPM4gYG7.js";import"./error-C0pmiaE9.js";import"./BaseCbacBanner-CesOwNkt.js";import"./makeExternalStore-DsBTIsva.js";import"./Tooltip-z0kTVIGb.js";import"./PopoverPopup-Cs7h6BtC.js";import"./debounce-CTavI0VY.js";import"./tick-jAHr_TTi.js";import"./DropdownField-DDaAL4R3.js";import"./isEqual-C7XaR8KZ.js";import"./withOsdkMetrics-BccI-HLw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-CDKj6riZ.js";import{O as b}from"./object-table-BkPo0DHn.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DvyrUvDT.js";import{u as g}from"./useOsdkClient-DGLHrUME.js";import"./preload-helper-2bCQFHut.js";import"./Table-D4FUUOFM.js";import"./index-DetP7shj.js";import"./Dialog-L7gFa3sH.js";import"./cross-BYAFUA7Y.js";import"./svgIconContainer-CbX48z79.js";import"./useBaseUiId-_WJi2oWJ.js";import"./InternalBackdrop-gfABYBaE.js";import"./composite-CqNHIi7L.js";import"./index-B2o7iGnK.js";import"./index-CjcUdmkL.js";import"./index-Crh_ASHH.js";import"./useEventCallback-CDEXMXWY.js";import"./SkeletonBar-Cssm9L3x.js";import"./LoadingCell-jX58PZqe.js";import"./ColumnConfigDialog-uoblqHBh.js";import"./DraggableList-DrMmkPtb.js";import"./search-DvJSVec5.js";import"./Input-BFZp6n3R.js";import"./useControlled-XE9pZf79.js";import"./Button-CG5FCWgZ.js";import"./small-cross-5rAHwMU9.js";import"./ActionButton-BkP-JJoD.js";import"./Checkbox-BKKr9Rzl.js";import"./useValueChanged-Coru2arj.js";import"./CollapsiblePanel-zQS1BJ72.js";import"./MultiColumnSortDialog-CPVFcEnW.js";import"./MenuTrigger-Dp2k6FuQ.js";import"./CompositeItem-B3wPzhHU.js";import"./ToolbarRootContext-BCzvZYHk.js";import"./getDisabledMountTransitionStyles-RTgAaaG2.js";import"./getPseudoElementBounds-DABSHmAT.js";import"./chevron-down-BsLIY-zC.js";import"./index-CMQpOErY.js";import"./error-RLt_WdpY.js";import"./BaseCbacBanner-DZgs1u-I.js";import"./makeExternalStore-jqVUK_Pp.js";import"./Tooltip-CWLV-0q5.js";import"./PopoverPopup-Cd1GWSO-.js";import"./debounce-BwcIUiDW.js";import"./tick-DFRTfwJn.js";import"./DropdownField-CvpHFiWC.js";import"./isEqual-Du5KZsM4.js";import"./withOsdkMetrics-RKhA3pS2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

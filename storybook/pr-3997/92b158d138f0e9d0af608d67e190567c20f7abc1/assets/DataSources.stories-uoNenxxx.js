import{j as r}from"./iframe-CxUFDRLk.js";import{O as b}from"./object-table-Cwk7xm14.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cp2nPj1E.js";import{u as g}from"./useOsdkClient-BpG5SD2k.js";import"./preload-helper-BOCVFqPP.js";import"./Table-Dqfk7wyN.js";import"./index-D3P2PnfT.js";import"./Dialog-BU96hrNx.js";import"./cross-BABVEZtV.js";import"./svgIconContainer-lhP_uqYt.js";import"./useBaseUiId-B_I-AE6w.js";import"./InternalBackdrop-2L9B9MFF.js";import"./composite-C6x_RQDW.js";import"./index-CfF-bhSp.js";import"./index-BzoE9HQS.js";import"./index-D6DNyq_c.js";import"./useEventCallback-ZNNLb4EC.js";import"./SkeletonBar-B-5lxJx6.js";import"./LoadingCell-D2xXOTjr.js";import"./ColumnConfigDialog-CEY5behw.js";import"./DraggableList-B2trtdD6.js";import"./search-Bycz8Mke.js";import"./Input-BnQ1Pqm-.js";import"./useControlled-i_PgyXUB.js";import"./Button-DfD1hoUH.js";import"./small-cross-HxQFWB4N.js";import"./ActionButton-D1b2dROh.js";import"./Checkbox-BoRXXaXQ.js";import"./useValueChanged-DiYqY4ta.js";import"./CollapsiblePanel-KaZ7CRFP.js";import"./MultiColumnSortDialog-DuDCgPoI.js";import"./MenuTrigger-Cnc_xPLq.js";import"./CompositeItem-Bm2eQNpM.js";import"./ToolbarRootContext-DgN8QGqs.js";import"./getDisabledMountTransitionStyles-kKhuwNUe.js";import"./getPseudoElementBounds-0LLCjN2z.js";import"./chevron-down-CGVLA0Cv.js";import"./index-Dh-mEvCI.js";import"./error-D-IJQZZn.js";import"./BaseCbacBanner-CighYLtt.js";import"./makeExternalStore-YOPDBlSx.js";import"./Tooltip-CMU-bxvV.js";import"./PopoverPopup-pze7gDjU.js";import"./debounce-CAh4NXmJ.js";import"./tick-D4sARw8j.js";import"./DropdownField-DPW3dnFU.js";import"./isEqual-GlpYI2kv.js";import"./withOsdkMetrics-CPTjHpfw.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

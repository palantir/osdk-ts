import{j as r}from"./iframe-CP7QTMjD.js";import{O as b}from"./object-table-D9Dw5A1S.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BwAwaOD2.js";import{u as g}from"./useOsdkClient-Cme5jE9K.js";import"./preload-helper-Bd8suxmt.js";import"./Table-WYu1FoLA.js";import"./index-BPsbF1qe.js";import"./Dialog-CcSBw3cV.js";import"./cross-DFB4dF8m.js";import"./svgIconContainer-BrNHieP3.js";import"./useBaseUiId-BaO1Z6ca.js";import"./InternalBackdrop-Cing5ETY.js";import"./composite-CVUK9pNM.js";import"./index-CcGoeXSV.js";import"./index-DJ7K6xAB.js";import"./index-B8n6SXrn.js";import"./useEventCallback-DsWKuR0v.js";import"./SkeletonBar-D5qgVXpA.js";import"./LoadingCell-DGzNCCL0.js";import"./ColumnConfigDialog-I_9AraPf.js";import"./DraggableList-MRdSsgMG.js";import"./search-BhBPvxZt.js";import"./Input-DJXNsHex.js";import"./useControlled-qxdzJ-6o.js";import"./Button-COqGdDuO.js";import"./small-cross-BqZiuEiq.js";import"./ActionButton-DbYjNuD3.js";import"./Checkbox-NO0w5BLz.js";import"./useValueChanged-DQ3D-BRv.js";import"./CollapsiblePanel-bhxAfR0e.js";import"./MultiColumnSortDialog-DopPnQeE.js";import"./MenuTrigger-BdHpW3oz.js";import"./CompositeItem-CZgkbGHU.js";import"./ToolbarRootContext-DiyEBXMz.js";import"./getDisabledMountTransitionStyles-Cv6vIEs8.js";import"./getPseudoElementBounds-RlrWvf9k.js";import"./chevron-down-BXz7fXPz.js";import"./index-Dee7JgMQ.js";import"./error-CB1q8I3x.js";import"./BaseCbacBanner-CVuUMrb-.js";import"./makeExternalStore-Bl7e9I-a.js";import"./Tooltip-BoUewqjJ.js";import"./PopoverPopup-DA2udT_l.js";import"./debounce-DNDQd4GO.js";import"./tick-BDk4I-rW.js";import"./DropdownField-DBFC8z6r.js";import"./isEqual-8KxI1bXH.js";import"./withOsdkMetrics-BE1P-0Lv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

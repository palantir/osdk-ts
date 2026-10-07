import{j as r}from"./iframe-q2c2VLg1.js";import{O as b}from"./object-table-B4HfjqZM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CH-Ighr1.js";import{u as g}from"./useOsdkClient-hNGabp8J.js";import"./preload-helper-Dd4fXQyN.js";import"./Table-CHyiWqlF.js";import"./index-CRaifptZ.js";import"./Dialog-BbMkATkH.js";import"./cross-CcrMbm-0.js";import"./svgIconContainer-BlrvzrEz.js";import"./useBaseUiId-omTFJ4IU.js";import"./InternalBackdrop-CTJCbO8j.js";import"./composite-NSumfvPY.js";import"./index-4j_oKqKk.js";import"./index-9q1QNwoC.js";import"./index-Ch4BOwgF.js";import"./useEventCallback-BNjTdnVh.js";import"./SkeletonBar-CmnjTk1p.js";import"./LoadingCell-Cwt8KlOw.js";import"./ColumnConfigDialog-02CFeY74.js";import"./DraggableList-CLoGBAZH.js";import"./search-B-fHJPoD.js";import"./Input-BRmugyzW.js";import"./useControlled-CAFIwmV7.js";import"./Button-BsjIA1gg.js";import"./small-cross-BupKOZtI.js";import"./ActionButton-B33HwgcC.js";import"./Checkbox-DSR4bz5U.js";import"./useValueChanged-DKgjsggr.js";import"./CollapsiblePanel-Dpq-3A02.js";import"./MultiColumnSortDialog-vjsXkIXe.js";import"./MenuTrigger-DQv_UTwZ.js";import"./CompositeItem-DvufjjXa.js";import"./ToolbarRootContext-gOhTdtut.js";import"./getDisabledMountTransitionStyles-CnTFITkJ.js";import"./getPseudoElementBounds-D7yijoXW.js";import"./chevron-down-BiLdY5Pu.js";import"./index-Br8J5rfr.js";import"./error-D-r93luQ.js";import"./BaseCbacBanner-3Q4NPe38.js";import"./makeExternalStore-BO8xauxU.js";import"./Tooltip-Di0qEmWK.js";import"./PopoverPopup--4kjghnN.js";import"./debounce-C-ob5Pqr.js";import"./tick-Bb3qh1mv.js";import"./DropdownField-Bthj7fif.js";import"./isEqual-3wGjHPnA.js";import"./withOsdkMetrics-DYLb2cmM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

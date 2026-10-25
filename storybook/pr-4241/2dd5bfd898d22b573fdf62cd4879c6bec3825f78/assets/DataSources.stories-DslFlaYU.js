import{j as r}from"./iframe-Cz66haSq.js";import{O as b}from"./object-table-DgHEroMX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D9vlxn5-.js";import{u as g}from"./useOsdkClient-DPYsXDsF.js";import"./preload-helper-xhSAljX0.js";import"./Table-CX8QpB3V.js";import"./index-BUXfO4Ju.js";import"./Dialog-BrdTDQh1.js";import"./cross-D9OamDgN.js";import"./svgIconContainer-DHL3SwmU.js";import"./useBaseUiId--zYyuape.js";import"./InternalBackdrop-Cy2hO_QK.js";import"./composite-BA9faNy6.js";import"./index-0XJJDvoy.js";import"./index-DfGIRzxo.js";import"./index-CP2YAN8J.js";import"./useEventCallback-CBZ6ta6R.js";import"./SkeletonBar-n0_YCfbh.js";import"./LoadingCell-DHeCnijo.js";import"./ColumnConfigDialog-CV9-HJ4X.js";import"./DraggableList-DJBRcK0Q.js";import"./search-ARM4tErG.js";import"./Input-Bxz-Dd7O.js";import"./useControlled-C9QmB7A0.js";import"./Button-C0vlEOkp.js";import"./small-cross-BvAVeELv.js";import"./ActionButton-JYX3c3SK.js";import"./Checkbox-DO5ZYVN7.js";import"./useValueChanged-CFnHS4Ph.js";import"./CollapsiblePanel-CDnOBlfI.js";import"./MultiColumnSortDialog-P-1eLcJI.js";import"./MenuTrigger-wVH_z4yX.js";import"./CompositeItem-hCCScXH4.js";import"./ToolbarRootContext-B9foH7Qy.js";import"./getDisabledMountTransitionStyles-Df62lxLU.js";import"./getPseudoElementBounds-KBPA7oty.js";import"./chevron-down-e8LYC-cq.js";import"./index-CWknVfE8.js";import"./error-CctugoDe.js";import"./BaseCbacBanner-Dbe55bim.js";import"./makeExternalStore-CSjj7q-A.js";import"./Tooltip-Cpc6auoa.js";import"./PopoverPopup-lHWxOezE.js";import"./debounce-BQlWP471.js";import"./tick-DHfOLs3o.js";import"./DropdownField-B7Jif8UN.js";import"./isEqual-DMMPSwJg.js";import"./withOsdkMetrics-BKDPrjKN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

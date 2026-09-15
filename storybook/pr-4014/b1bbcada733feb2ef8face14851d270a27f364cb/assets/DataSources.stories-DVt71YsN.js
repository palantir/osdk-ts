import{j as r}from"./iframe-DlVDy023.js";import{O as b}from"./object-table-CPAm_TLy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CGCPAlr4.js";import{u as g}from"./useOsdkClient-De-2KVrO.js";import"./preload-helper-DJFhMTqE.js";import"./Table-j2_rfAjy.js";import"./index-B3fXiAQb.js";import"./Dialog-BGV1_4Fw.js";import"./cross-mcjuSBTc.js";import"./svgIconContainer-s-JQVLQ9.js";import"./useBaseUiId-BKw8YauT.js";import"./InternalBackdrop-D_CBn7dT.js";import"./composite-BLhg11U-.js";import"./index-LVqexgrH.js";import"./index-C3j1YyMW.js";import"./index-BjgwtoXC.js";import"./useEventCallback-SgtlW3mH.js";import"./SkeletonBar-B2rGYxr9.js";import"./LoadingCell-DOnLUlr2.js";import"./ColumnConfigDialog-CDGOT_Fh.js";import"./DraggableList-fs8A0IHu.js";import"./search-Dlo_g8mx.js";import"./Input-DaMbbLWO.js";import"./useControlled-Dii3KKCf.js";import"./Button-CPiBfc-M.js";import"./small-cross-yv-Uq6dQ.js";import"./ActionButton-B_l7y5Oe.js";import"./Checkbox-BbcpH0v_.js";import"./useValueChanged-LxRYviJx.js";import"./CollapsiblePanel-lLYHy2Fj.js";import"./MultiColumnSortDialog-qHU4Amng.js";import"./MenuTrigger-BJKqFBK7.js";import"./CompositeItem-CCYoAgW2.js";import"./ToolbarRootContext--DNvLQWo.js";import"./getDisabledMountTransitionStyles-Cn73GRue.js";import"./getPseudoElementBounds-BIvWT8t6.js";import"./chevron-down-CjY3inSa.js";import"./index-BzvLJ1CU.js";import"./error-DOacZup1.js";import"./BaseCbacBanner-ekdnej3L.js";import"./makeExternalStore-DF_bocEY.js";import"./Tooltip-bH5NED12.js";import"./PopoverPopup-Cv9ybNd5.js";import"./debounce-Hj0VluNc.js";import"./tick-geEvKQPJ.js";import"./DropdownField-fDoWtAsS.js";import"./isEqual-BUPS7RB4.js";import"./withOsdkMetrics-zKe3req1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

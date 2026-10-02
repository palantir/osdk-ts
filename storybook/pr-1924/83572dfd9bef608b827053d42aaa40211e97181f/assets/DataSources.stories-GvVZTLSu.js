import{j as r}from"./iframe-dYZcY_yd.js";import{O as b}from"./object-table-DdgFIgE4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C2shaYOw.js";import{u as g}from"./useOsdkClient-B_kqpc0H.js";import"./preload-helper-nvTVJuZ0.js";import"./Table-CXRdWy_q.js";import"./index-DdpHHEag.js";import"./Dialog-2Xy4rBeC.js";import"./cross-Dy_Om33n.js";import"./svgIconContainer-d4KiPlL-.js";import"./useBaseUiId-BmHomGuM.js";import"./InternalBackdrop-B7SrXjlM.js";import"./composite-D7xb_xyv.js";import"./index-D1qSefVk.js";import"./index-CTY9EHBj.js";import"./index-YYQZ3ova.js";import"./useEventCallback-DeO715E3.js";import"./SkeletonBar-_1DWBUrN.js";import"./LoadingCell-DQBTbC2i.js";import"./ColumnConfigDialog-MRc2UlrB.js";import"./DraggableList-BwkaMsR8.js";import"./search-CDnnsnvp.js";import"./Input-2gIVp1J7.js";import"./useControlled-BgrYkcgC.js";import"./Button-lcjZj2UQ.js";import"./small-cross-BXDAngmo.js";import"./ActionButton-oKML9K2p.js";import"./Checkbox-BpEaPOBK.js";import"./useValueChanged-RbvDjp5x.js";import"./CollapsiblePanel-B2EqHOMP.js";import"./MultiColumnSortDialog-RXpLq4f3.js";import"./MenuTrigger-CAysan5f.js";import"./CompositeItem-DIIkXBkk.js";import"./ToolbarRootContext-DaQhWJhT.js";import"./getDisabledMountTransitionStyles-CEfeB9r5.js";import"./getPseudoElementBounds-MleGKnPQ.js";import"./chevron-down-DS-zMT_I.js";import"./index-CtGq4PGv.js";import"./error-D1PWFSVl.js";import"./BaseCbacBanner-Dqe3LcXr.js";import"./makeExternalStore-CHw5k_cg.js";import"./Tooltip-NXVN9pAS.js";import"./PopoverPopup-CzPa19Jo.js";import"./debounce-0K7vkP1p.js";import"./tick-6CBeLfgO.js";import"./DropdownField-BCHipXvA.js";import"./isEqual-Bhfajn7J.js";import"./withOsdkMetrics-7sRD0apQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

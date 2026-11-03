import{j as r}from"./iframe-vcLMjbea.js";import{O as b}from"./object-table-BfvzlUao.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B4JZLZpg.js";import{u as g}from"./useOsdkClient-DE3ZbsH3.js";import"./preload-helper-RU1OdimD.js";import"./Table-CSY55iFj.js";import"./index-CG3KkM6y.js";import"./Dialog-Xcbat__-.js";import"./cross-D-EFak3i.js";import"./svgIconContainer-Gicaxf1s.js";import"./useBaseUiId-DnJ4weT2.js";import"./InternalBackdrop-HVYVXyCg.js";import"./composite-CT0DZWF7.js";import"./index-BIHIRrhw.js";import"./index-CU58PLdw.js";import"./index-NU5zO8vj.js";import"./useEventCallback-D6NEmK7_.js";import"./SkeletonBar-sPDIVMCS.js";import"./LoadingCell-CT123iLI.js";import"./ColumnConfigDialog-DZg6qXzG.js";import"./DraggableList-DZ2o5zTG.js";import"./search-3IXTuiXl.js";import"./Input-B07SGOjF.js";import"./useControlled-BXjUIo-l.js";import"./Button-DY9kTYfp.js";import"./small-cross-Bp4GK8nv.js";import"./ActionButton-BgFvfHoG.js";import"./Checkbox-BwhD0opN.js";import"./useValueChanged-Fi604hGA.js";import"./CollapsiblePanel-DiUY56Er.js";import"./MultiColumnSortDialog-o2Oosgua.js";import"./MenuTrigger-CNqmUXY3.js";import"./CompositeItem-BN5pExu_.js";import"./ToolbarRootContext-6uR7xL1n.js";import"./getDisabledMountTransitionStyles-CMJs3FOY.js";import"./getPseudoElementBounds-CVVRvaQ5.js";import"./chevron-down-CCBKa1Fl.js";import"./index-DM0ijL_x.js";import"./error-CrN3ijuU.js";import"./BaseCbacBanner-CxJGL3mi.js";import"./makeExternalStore-SiSiEnyI.js";import"./Tooltip-bH_4JHn2.js";import"./PopoverPopup-Bma8tsO9.js";import"./debounce-N0qJ7Xu9.js";import"./tick-DMkp_lOe.js";import"./DropdownField-DHSmAbjS.js";import"./isEqual-C1DaMkeA.js";import"./withOsdkMetrics-BcVOHfX1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

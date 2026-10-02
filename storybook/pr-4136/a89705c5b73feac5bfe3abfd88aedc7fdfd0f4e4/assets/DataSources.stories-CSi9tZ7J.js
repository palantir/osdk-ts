import{j as r}from"./iframe-PECeEW3T.js";import{O as b}from"./object-table-LBakupUf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-brdJWUHv.js";import{u as g}from"./useOsdkClient-DubZDY7d.js";import"./preload-helper-C6A5QCy5.js";import"./Table-BWD-PnJ7.js";import"./index-BjSahMIP.js";import"./Dialog-BqqkE3KK.js";import"./cross-jtAUAPzX.js";import"./svgIconContainer-B-v0aTHG.js";import"./useBaseUiId-D-8DZjqe.js";import"./InternalBackdrop-O0lOdESn.js";import"./composite-Ce7Nqskp.js";import"./index-ieJWeIAg.js";import"./index-C9QXfA_d.js";import"./index-DtGkyzrP.js";import"./useEventCallback-DyH-DdM5.js";import"./SkeletonBar-BMS3_wA0.js";import"./LoadingCell-6LypjGrw.js";import"./ColumnConfigDialog-DSzAIdyP.js";import"./DraggableList-Ci3g6B9Z.js";import"./search-CpCpMqWp.js";import"./Input-Dyun1iu7.js";import"./useControlled-rCZffMic.js";import"./Button-LcQP4ZCC.js";import"./small-cross-Dy6Y0Hcc.js";import"./ActionButton-B99REHhD.js";import"./Checkbox-CxAecBCs.js";import"./useValueChanged-ChvBCWAV.js";import"./CollapsiblePanel-BsfLZLWB.js";import"./MultiColumnSortDialog-BP9-8PQ8.js";import"./MenuTrigger-DQ_Gyd4O.js";import"./CompositeItem-CUJUUY83.js";import"./ToolbarRootContext-CpX9GNwO.js";import"./getDisabledMountTransitionStyles-CKuvmIJF.js";import"./getPseudoElementBounds-DuSZBJyL.js";import"./chevron-down-CxtRUuHx.js";import"./index-BKt47rIQ.js";import"./error-BJrA_-EN.js";import"./BaseCbacBanner-PxU5sa-M.js";import"./makeExternalStore-v3gjQsp8.js";import"./Tooltip-CNpkEvmJ.js";import"./PopoverPopup-B6HgbBU2.js";import"./debounce-DUaEl7gF.js";import"./tick-zmXIdbTH.js";import"./DropdownField-D4M8Ec5T.js";import"./isEqual-D_x1Rpx1.js";import"./withOsdkMetrics-CQL6tA2X.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

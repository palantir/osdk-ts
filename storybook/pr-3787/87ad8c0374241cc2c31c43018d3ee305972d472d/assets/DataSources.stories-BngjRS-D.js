import{j as r}from"./iframe-TwL9Rdcu.js";import{O as b}from"./object-table-DOmpi9ec.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D2WcaMFi.js";import{u as g}from"./useOsdkClient-BcYS5GMf.js";import"./preload-helper-Dtd1x7f0.js";import"./Table-D157Dw9p.js";import"./index-B37Vkn7p.js";import"./Dialog-BPOvzZvq.js";import"./cross-DEXmuJ6S.js";import"./svgIconContainer-Cn5jlibP.js";import"./useBaseUiId-CA6_Pr4t.js";import"./InternalBackdrop-CxDNG576.js";import"./composite-Aws6OWjh.js";import"./index-DiSmLK3F.js";import"./index-BzhMbvob.js";import"./index-Oca42Qm_.js";import"./useEventCallback-DT0sCX5x.js";import"./SkeletonBar-CSWMLadG.js";import"./LoadingCell-Ck4mXGmE.js";import"./ColumnConfigDialog-DqZvcT84.js";import"./DraggableList-DXDZhqMb.js";import"./search-M01QHkXX.js";import"./Input-D1m7PFdq.js";import"./useControlled-Ee5pocfV.js";import"./isEqual-S7BEPodu.js";import"./isObject-D04Zr0Ej.js";import"./Button-93iZ1g0B.js";import"./ActionButton-Bl3Bz7Yc.js";import"./Checkbox-7MnoqMPv.js";import"./useValueChanged-BMITbowe.js";import"./CollapsiblePanel-GG2tw--5.js";import"./MultiColumnSortDialog-jEPlSRTE.js";import"./MenuTrigger-UQ3lmTDq.js";import"./CompositeItem-DDQiXXk3.js";import"./ToolbarRootContext-3L1WJeQb.js";import"./getDisabledMountTransitionStyles-CnFJwfEc.js";import"./getPseudoElementBounds-DtKiTUz6.js";import"./chevron-down-CfEskrRU.js";import"./index-ClR5kgm1.js";import"./error-3oWabdkP.js";import"./BaseCbacBanner-O7P0tRBU.js";import"./makeExternalStore-BX0FhRjZ.js";import"./Tooltip-BKi7jcww.js";import"./PopoverPopup-DMOPdfl-.js";import"./toNumber-BZugkDQH.js";import"./tick-vtzmVJ8o.js";import"./DropdownField-CyncprO9.js";import"./withOsdkMetrics-DF9gmOzI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

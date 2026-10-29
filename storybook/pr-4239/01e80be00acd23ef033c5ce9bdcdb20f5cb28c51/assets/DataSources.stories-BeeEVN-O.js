import{j as r}from"./iframe-Dm6fEHSl.js";import{O as b}from"./object-table-DnFCrXZi.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dml-1xiA.js";import{u as g}from"./useOsdkClient-CBlvauOc.js";import"./preload-helper-Bqb1rZ_1.js";import"./Table-BihK-ML9.js";import"./index-0oZqapnL.js";import"./Dialog-DBnyMnw4.js";import"./cross-Bt5YxcTr.js";import"./svgIconContainer-DQYcgJEu.js";import"./useBaseUiId-DheuxufY.js";import"./InternalBackdrop-CWYVY9cc.js";import"./composite-Dro01qd5.js";import"./index-B9LtevwQ.js";import"./index-CFKD3KmR.js";import"./index-DLRHryCX.js";import"./useEventCallback-CRhDiDVJ.js";import"./SkeletonBar-CuUg8o4-.js";import"./LoadingCell-BpReS1Uv.js";import"./ColumnConfigDialog-CHcXL66b.js";import"./DraggableList-CsP1XmWO.js";import"./search-C7KxNUeL.js";import"./Input-C1Iecv69.js";import"./useControlled-BNqne-mh.js";import"./Button-DtwGlaif.js";import"./small-cross-DZMVW_os.js";import"./ActionButton-BcLZ8dUx.js";import"./Checkbox-CE6rrq8N.js";import"./useValueChanged-DdVY_JQU.js";import"./CollapsiblePanel-CPNer4jD.js";import"./MultiColumnSortDialog-liHRsGTS.js";import"./MenuTrigger-bZ6gnwnL.js";import"./CompositeItem-BlaUOs4g.js";import"./ToolbarRootContext-2ybRt6Lm.js";import"./getDisabledMountTransitionStyles-C5jTdX4L.js";import"./getPseudoElementBounds-B0DqqRGA.js";import"./chevron-down-CWH7kW7k.js";import"./index-nzPy6itP.js";import"./error-CtkZoki4.js";import"./BaseCbacBanner-DvfiGpMO.js";import"./makeExternalStore-Ctl6TIlE.js";import"./Tooltip-R_AQOimg.js";import"./PopoverPopup-DXuTelnl.js";import"./debounce-D-AGcw8s.js";import"./tick-QJWik-78.js";import"./DropdownField-DGrJZFlx.js";import"./isEqual-CuOjpzUY.js";import"./withOsdkMetrics-BttmRgw9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

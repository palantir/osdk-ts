import{j as r}from"./iframe-BW9rbZjN.js";import{O as b}from"./object-table-D6uyDopU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DMuNYnL9.js";import{u as g}from"./useOsdkClient-CY_b6Lwm.js";import"./preload-helper-_oZNT5AE.js";import"./Table-BoMRUDWK.js";import"./index-qZzwlkOA.js";import"./Dialog-BQ7qEwTW.js";import"./cross-BMKp4c2D.js";import"./svgIconContainer-c8HYcTYH.js";import"./useBaseUiId-bQLFYp4J.js";import"./InternalBackdrop-CKd5MsCE.js";import"./composite-DIc49Li7.js";import"./index-C88Pj_Ew.js";import"./index-CRuyPTCE.js";import"./index-DvSwkwzx.js";import"./useEventCallback-BwkPSbL2.js";import"./SkeletonBar-BlTcRZOI.js";import"./LoadingCell-BWEPztFD.js";import"./ColumnConfigDialog-D4cOUPl1.js";import"./DraggableList-Cjx102Hx.js";import"./search-CKuArl9i.js";import"./Input-DapIOR9y.js";import"./useControlled-C9bKjxUP.js";import"./Button-DXKWCxc8.js";import"./small-cross-DPXcetjy.js";import"./ActionButton-Br5-QwIr.js";import"./Checkbox-I9JLT3mi.js";import"./useValueChanged-5yWlHOsJ.js";import"./CollapsiblePanel-BO030zQL.js";import"./MultiColumnSortDialog-COlh9DSW.js";import"./MenuTrigger-ByyLkC45.js";import"./CompositeItem-CfT9zTJr.js";import"./ToolbarRootContext-tp4wTZqh.js";import"./getDisabledMountTransitionStyles-DuFqv9O7.js";import"./getPseudoElementBounds-cJb6hBmW.js";import"./chevron-down-DnA8hxYU.js";import"./index-DQfloIhJ.js";import"./error-DKZCTWAx.js";import"./BaseCbacBanner-B5oQvseO.js";import"./makeExternalStore-RW-A0j4x.js";import"./Tooltip-DARXcT77.js";import"./PopoverPopup-DZ1vqIll.js";import"./debounce-BijLWZBG.js";import"./tick-qItvjZhi.js";import"./DropdownField-BoM_lVwS.js";import"./isEqual-BL5I-1RN.js";import"./withOsdkMetrics-C9bjwSD5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

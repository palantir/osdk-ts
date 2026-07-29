import{j as r}from"./iframe-Dj2cKGnO.js";import{O as b}from"./object-table-DDtFqPBI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-o-OjSzYN.js";import{u as g}from"./useOsdkClient-CpNUt0AY.js";import"./preload-helper-C4DRB2fG.js";import"./Table-BXXgJkx5.js";import"./index-BO7YIbLm.js";import"./Dialog-BC0N5_7u.js";import"./cross-BR_uQDj2.js";import"./svgIconContainer-BpBQ0iGt.js";import"./useBaseUiId-e1nCQA8K.js";import"./InternalBackdrop-eWkjZ7Vn.js";import"./composite-5gl7qD0t.js";import"./index-Cz2dMcbH.js";import"./index-D7Xl9lR0.js";import"./index-pt5WX9KE.js";import"./useEventCallback-JFaXoDI3.js";import"./SkeletonBar-CQWkQwyM.js";import"./LoadingCell-B7lsHsqt.js";import"./ColumnConfigDialog-BIFV4IGe.js";import"./DraggableList-CswUdwxo.js";import"./search-C6Gs3wIW.js";import"./Input-DJhGkZgO.js";import"./useControlled-B1nPULYy.js";import"./isEqual-CkFRBfKF.js";import"./isObject-CWqdK9wF.js";import"./Button-CptP105M.js";import"./ActionButton-DHight5r.js";import"./Checkbox-DglfwZeF.js";import"./useValueChanged-DZZ5yUcK.js";import"./CollapsiblePanel-7hMlZynw.js";import"./MultiColumnSortDialog-BkXML1Gy.js";import"./MenuTrigger-Bu-Wot8X.js";import"./CompositeItem-BjekPXkF.js";import"./ToolbarRootContext-BHEFpPDT.js";import"./getDisabledMountTransitionStyles-Dev7gewU.js";import"./getPseudoElementBounds-D8dLGn3J.js";import"./chevron-down-LbKJSdTq.js";import"./index-CkLjKLx-.js";import"./error-DP1wqNc6.js";import"./BaseCbacBanner-Dgb48O8R.js";import"./makeExternalStore-BicNN6mB.js";import"./Tooltip-CucWZmFu.js";import"./PopoverPopup-lDh7JWpB.js";import"./toNumber-CGgINaIS.js";import"./tick-uO4W4Tlc.js";import"./DropdownField-BP-vtTDy.js";import"./withOsdkMetrics-BHLwwwlP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

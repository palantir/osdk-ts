import{j as r}from"./iframe-CZqFYSvz.js";import{O as b}from"./object-table-DwMB5kVn.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BB0wYHoh.js";import{u as g}from"./useOsdkClient-CH4uCo_W.js";import"./preload-helper-W-9dgf5b.js";import"./Table-B3v6P-QS.js";import"./index-4I_FO6X-.js";import"./Dialog-ceRzZVUm.js";import"./cross-DwkOXENp.js";import"./svgIconContainer-B4GgTWLP.js";import"./useBaseUiId-D1DgvgDy.js";import"./InternalBackdrop-CqAf0JXm.js";import"./composite-DshpnDaY.js";import"./index-CwvgB0UQ.js";import"./index-TcvRDgBd.js";import"./index-DwIy-beY.js";import"./useEventCallback-C1QWqQSQ.js";import"./SkeletonBar-YNeerWRQ.js";import"./LoadingCell-J626_w_e.js";import"./ColumnConfigDialog-DhBY97p3.js";import"./DraggableList-DTGbsUyi.js";import"./search-DQIrKTJC.js";import"./Input-DFczC5qB.js";import"./useControlled-BEhUjoKU.js";import"./Button-DPWKZHun.js";import"./small-cross-DqYGaSrZ.js";import"./ActionButton-DwlulUX5.js";import"./Checkbox-CT4wGdV_.js";import"./useValueChanged-pQbly7Ct.js";import"./CollapsiblePanel-fJf7Arc3.js";import"./MultiColumnSortDialog-Daa1Ku64.js";import"./MenuTrigger-kTph8d-l.js";import"./CompositeItem-BX8AU06n.js";import"./ToolbarRootContext-FrGRfv5z.js";import"./getDisabledMountTransitionStyles-BKCYmhLV.js";import"./getPseudoElementBounds-BXEncbQt.js";import"./chevron-down-DW5k5Yie.js";import"./index-CkQb-QUw.js";import"./error-B_2Afo6g.js";import"./BaseCbacBanner-MmXi3aHl.js";import"./makeExternalStore-BLCxm6Ol.js";import"./Tooltip-4cXVr-Gb.js";import"./PopoverPopup-NWTu8aE_.js";import"./debounce-iVB6b_Y1.js";import"./tick-CC6n50A4.js";import"./DropdownField-BI2c6Ebd.js";import"./isEqual-BAjQPonJ.js";import"./withOsdkMetrics-BHAZhm5k.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

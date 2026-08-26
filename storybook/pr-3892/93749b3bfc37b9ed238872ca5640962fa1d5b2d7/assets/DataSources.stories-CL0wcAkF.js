import{j as r}from"./iframe-BLZOZW6T.js";import{O as b}from"./object-table-DqxkZbgO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CRAi0DF8.js";import{u as g}from"./useOsdkClient-D8U812ID.js";import"./preload-helper-BHT5lAru.js";import"./Table-dx6pwWIS.js";import"./index-Ahi5oMOt.js";import"./Dialog-GVs4rX3z.js";import"./cross-tEyjMRHD.js";import"./svgIconContainer-5vRPxuG5.js";import"./useBaseUiId-DZK7RG_f.js";import"./InternalBackdrop-iNO5Vei7.js";import"./composite-CRbvEibM.js";import"./index-DTxc1Osh.js";import"./index-ew_UyycK.js";import"./index-hsRhqC-3.js";import"./useEventCallback-DEsWc7Yx.js";import"./SkeletonBar-DMlEsaA0.js";import"./LoadingCell-C_e88Nbd.js";import"./ColumnConfigDialog-Ca0TTFpY.js";import"./DraggableList-DHxzUxXi.js";import"./search-FYqqa5v1.js";import"./Input-BOnD-W6r.js";import"./useControlled-COYf85Oy.js";import"./Button-DIO4S2kj.js";import"./small-cross-B3UhGftV.js";import"./ActionButton-C5lrJG63.js";import"./Checkbox-DNqoME2L.js";import"./useValueChanged-E7YHGw8y.js";import"./CollapsiblePanel-CTIviYDr.js";import"./MultiColumnSortDialog-B_1MQGgn.js";import"./MenuTrigger-KIj5uwST.js";import"./CompositeItem-C1uYFHLI.js";import"./ToolbarRootContext-J2Xa_TG-.js";import"./getDisabledMountTransitionStyles-CHVkErr4.js";import"./getPseudoElementBounds-BrWb8Yo6.js";import"./chevron-down-Cs3lx4vz.js";import"./index-DwKU9nYV.js";import"./error-BZramTgy.js";import"./BaseCbacBanner-cnlNeaYN.js";import"./makeExternalStore-M7RjktEr.js";import"./Tooltip-DphF3Fsm.js";import"./PopoverPopup-dw0h2vwP.js";import"./debounce-BZPHVZxa.js";import"./tick-C0OJoswb.js";import"./DropdownField-L_MoXsHP.js";import"./isEqual-DwVE72P3.js";import"./withOsdkMetrics-CD2XJjA_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-ReE2Q7yp.js";import{O as b}from"./object-table-MAGjIDR9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BkvwDPm-.js";import{u as g}from"./useOsdkClient-CH1S_bx0.js";import"./preload-helper-B7Z9MrKi.js";import"./Table-CopLwwJC.js";import"./index-BewkrVTa.js";import"./Dialog-CZ_JPe82.js";import"./cross-jItXGdNq.js";import"./svgIconContainer-DReIj__U.js";import"./useBaseUiId-D8bMBWWs.js";import"./InternalBackdrop-C14mfAnw.js";import"./composite-BwZods8z.js";import"./index-B0bWJrJS.js";import"./index-gciaynI9.js";import"./index-B-CZhjmL.js";import"./useEventCallback-DSxaVaZ9.js";import"./SkeletonBar-C7A8YeA1.js";import"./LoadingCell-CZSCqk4l.js";import"./ColumnConfigDialog-iWINWIDN.js";import"./DraggableList-DYf_eZ1S.js";import"./search-BhOewJBY.js";import"./Input-B8139ni5.js";import"./useControlled-CiRsQt_l.js";import"./Button-BlxZNp8T.js";import"./small-cross-sxi8v31H.js";import"./ActionButton-BbqGHHOq.js";import"./Checkbox-f-XzpaRv.js";import"./useValueChanged-DIzh1Vve.js";import"./CollapsiblePanel-8t3xxJ8x.js";import"./MultiColumnSortDialog-DbqYgnN8.js";import"./MenuTrigger-5_fkVDIe.js";import"./CompositeItem-CiU9fGHE.js";import"./ToolbarRootContext-Bl5a0QSn.js";import"./getDisabledMountTransitionStyles-rH4RKoLB.js";import"./getPseudoElementBounds-iOtDRySU.js";import"./chevron-down-BzzFswn9.js";import"./index-DFSTGtRN.js";import"./error-CPS8uYGW.js";import"./BaseCbacBanner-CqM5sqJ7.js";import"./makeExternalStore-CzYz1Gie.js";import"./Tooltip-CgjwpZg6.js";import"./PopoverPopup-DfcYj7fK.js";import"./debounce-DXVTweio.js";import"./tick-D9DVZKih.js";import"./DropdownField-usIkxFYB.js";import"./isEqual-BrODwJu8.js";import"./withOsdkMetrics-CzWROb4n.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

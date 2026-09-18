import{j as r}from"./iframe-CCVL4Idp.js";import{O as b}from"./object-table-LApLy7sh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B6dmRL_n.js";import{u as g}from"./useOsdkClient-C1izoF8E.js";import"./preload-helper-Bfdvow4t.js";import"./Table-y5i6iDQ6.js";import"./index-CqRYjhYr.js";import"./Dialog-CsuSO74f.js";import"./cross-Bpaou5px.js";import"./svgIconContainer-DLYZviFk.js";import"./useBaseUiId-CNDNQCax.js";import"./InternalBackdrop-BOLrYZlT.js";import"./composite-8_zPWC08.js";import"./index-f-mV_Lh2.js";import"./index-CuMFdNkD.js";import"./index-D1XSNP8S.js";import"./useEventCallback-DNycK2kG.js";import"./SkeletonBar-BQkCbvbz.js";import"./LoadingCell-DKZD2fy5.js";import"./ColumnConfigDialog-BCU4b9nD.js";import"./DraggableList-BWmJYQFV.js";import"./search-C00pZ1Ly.js";import"./Input-Cn7fB1Ph.js";import"./useControlled-wuiuTdj_.js";import"./Button-DYSDt2wl.js";import"./small-cross-D_IDVYYi.js";import"./ActionButton-BoQK0oCg.js";import"./Checkbox-CTiOjQ-V.js";import"./useValueChanged-B0V7HCrV.js";import"./CollapsiblePanel-BdSR7VOY.js";import"./MultiColumnSortDialog-Bz146-0u.js";import"./MenuTrigger-BwcpBOF1.js";import"./CompositeItem-BVwr5vb2.js";import"./ToolbarRootContext-B9eib1V0.js";import"./getDisabledMountTransitionStyles-DsWKjHfV.js";import"./getPseudoElementBounds-B1H8xoBN.js";import"./chevron-down-Ve2FZYZx.js";import"./index-BsgThsOD.js";import"./error-DNOpGdYX.js";import"./BaseCbacBanner-y0OozxMj.js";import"./makeExternalStore-Bx0vFg8y.js";import"./Tooltip-155_4Sip.js";import"./PopoverPopup-ChuxaA1C.js";import"./debounce-DHu_JVgk.js";import"./tick-BXHEK5fI.js";import"./DropdownField-B-zXvzEE.js";import"./isEqual-Do9DtU8-.js";import"./withOsdkMetrics-BTy9Ees1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

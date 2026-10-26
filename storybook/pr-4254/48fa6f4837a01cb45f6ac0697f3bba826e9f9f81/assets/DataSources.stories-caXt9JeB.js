import{j as r}from"./iframe-B41lgdKN.js";import{O as b}from"./object-table-CmxWLL0B.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dqib5iI6.js";import{u as g}from"./useOsdkClient-D00y5DQT.js";import"./preload-helper-DI5m88JW.js";import"./Table-Co7hecY_.js";import"./index-C2q613GL.js";import"./Dialog-CWeVqIwm.js";import"./cross-C9BOtq1y.js";import"./svgIconContainer-D7Eue1ZZ.js";import"./useBaseUiId-BgB3Fx_y.js";import"./InternalBackdrop-BILEvSbn.js";import"./composite-B54UYmeO.js";import"./index-D_IcPDjf.js";import"./index-Cujrcm2-.js";import"./index-DdsQXbay.js";import"./useEventCallback-xWqpVog3.js";import"./SkeletonBar-CGdxBAF7.js";import"./LoadingCell-jbi8AJ8l.js";import"./ColumnConfigDialog-CL5y9Q7l.js";import"./DraggableList-D9UwDPNT.js";import"./search-D5xcli0X.js";import"./Input-C5V0yZmk.js";import"./useControlled-COiD_eR7.js";import"./Button-CLPb2Ul9.js";import"./small-cross-BiIUW-iP.js";import"./ActionButton-BUTqoq-Q.js";import"./Checkbox-B4SrzSIC.js";import"./useValueChanged-uNqrEDBx.js";import"./CollapsiblePanel-m4kdZM0i.js";import"./MultiColumnSortDialog-BGl8Ae1h.js";import"./MenuTrigger-0SMi1Bkm.js";import"./CompositeItem-DKeB6UbW.js";import"./ToolbarRootContext-DaqyENip.js";import"./getDisabledMountTransitionStyles-vQmeQXHd.js";import"./getPseudoElementBounds-S244zxdS.js";import"./chevron-down-DPEakPZ3.js";import"./index-B5Wpr3Nx.js";import"./error-DxQUrNdP.js";import"./BaseCbacBanner-CYN7YaF7.js";import"./makeExternalStore-BkjE2Bfi.js";import"./Tooltip-9yKLS0Jj.js";import"./PopoverPopup-DAEUfrcq.js";import"./debounce-UdAL_ybq.js";import"./tick-jRfkJ3jM.js";import"./DropdownField-BKkvVjBl.js";import"./isEqual-BoLhe-YY.js";import"./withOsdkMetrics-BJYPVZ1i.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

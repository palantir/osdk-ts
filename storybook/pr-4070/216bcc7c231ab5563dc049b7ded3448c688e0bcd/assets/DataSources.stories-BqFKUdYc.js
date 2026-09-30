import{j as r}from"./iframe-_5xzb7Z5.js";import{O as b}from"./object-table-0qi2nMot.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-MxKf490a.js";import{u as g}from"./useOsdkClient-m9TwflB_.js";import"./preload-helper-9kDSgaR1.js";import"./Table-DsrQfiL7.js";import"./index-BQLQ6q72.js";import"./Dialog-Bbjbb_1f.js";import"./cross-DvzeLUuw.js";import"./svgIconContainer-zoYg_i-y.js";import"./useBaseUiId-CL6BvqYc.js";import"./InternalBackdrop-Cx_q57j2.js";import"./composite-RcxH71Ia.js";import"./index-Bwe_rVKq.js";import"./index-a6ymnaCE.js";import"./index-nvhFONdR.js";import"./useEventCallback-B_bCz7hc.js";import"./SkeletonBar-BnEWIrOx.js";import"./LoadingCell-DwlYTioM.js";import"./ColumnConfigDialog-0RMPiipV.js";import"./DraggableList-tGQIUW9A.js";import"./search-FeXiW-S5.js";import"./Input-6FTkig4D.js";import"./useControlled-CaOEMTdE.js";import"./Button-BN8W0OGL.js";import"./small-cross-yCsD8QJM.js";import"./ActionButton-B002jOVk.js";import"./Checkbox-C9unrssW.js";import"./useValueChanged-CqFQHurj.js";import"./CollapsiblePanel-upvgLUI2.js";import"./MultiColumnSortDialog-PYIcfppy.js";import"./MenuTrigger-DnPTwTN1.js";import"./CompositeItem-sQD2esUI.js";import"./ToolbarRootContext-BP4N1j53.js";import"./getDisabledMountTransitionStyles-B-Suvi-e.js";import"./getPseudoElementBounds-BupiSRrq.js";import"./chevron-down-Dc3YtOri.js";import"./index-CNCDNsvZ.js";import"./error-Ba02y8oz.js";import"./BaseCbacBanner-BMMVV8EG.js";import"./makeExternalStore-GpKW6nTD.js";import"./Tooltip-CiEdThN9.js";import"./PopoverPopup-CRcIjBTG.js";import"./debounce-Lcm6HHyi.js";import"./tick-CP0D6HqE.js";import"./DropdownField-DOx-xuVw.js";import"./isEqual-DXzuEJcp.js";import"./withOsdkMetrics-uKo-L4d5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-D6uAV5TU.js";import{O as b}from"./object-table-BwnIPp8Q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DTjTuvOC.js";import{u as g}from"./useOsdkClient-o-471cIP.js";import"./preload-helper-DgVxICfb.js";import"./Table-CRx6JA84.js";import"./index-CY-pWkIE.js";import"./Dialog-CfZC9tap.js";import"./cross-C1qbDIAe.js";import"./svgIconContainer-to51jCpQ.js";import"./useBaseUiId-Cm0jnEPf.js";import"./InternalBackdrop-NL9DIBlB.js";import"./composite-BEzxj37g.js";import"./index-bpYghXGo.js";import"./index-JG_tkU8g.js";import"./index-ByXvVmI6.js";import"./useEventCallback-DVHh9L01.js";import"./SkeletonBar-DKDnh7uJ.js";import"./LoadingCell-CDILZwUZ.js";import"./ColumnConfigDialog-CKly1pAJ.js";import"./DraggableList-siYf0BWh.js";import"./search-BkhC58qY.js";import"./Input-DgviHqP4.js";import"./useControlled-CNCN21-B.js";import"./Button-D1LcAXjL.js";import"./small-cross-BlyS8cCD.js";import"./ActionButton-Dm6zTNT-.js";import"./Checkbox-DA-cZczo.js";import"./useValueChanged-C6SY9C02.js";import"./CollapsiblePanel-DQG7EOif.js";import"./MultiColumnSortDialog-Dkd3iv5n.js";import"./MenuTrigger-oX_QBijd.js";import"./CompositeItem-BovdAW9J.js";import"./ToolbarRootContext-Cj-ulQf0.js";import"./getDisabledMountTransitionStyles-C4AOWP0V.js";import"./getPseudoElementBounds-CI3G1dnv.js";import"./chevron-down-y6Dx4H3i.js";import"./index-CF_buGa8.js";import"./error-AQL_lZl-.js";import"./BaseCbacBanner-DRF4wjkH.js";import"./makeExternalStore-DWEUTaD3.js";import"./Tooltip-BDskuAWO.js";import"./PopoverPopup-CoRD32O0.js";import"./debounce-Cf7XEzCl.js";import"./tick-CJVi8Uyj.js";import"./DropdownField-Dza8gOA9.js";import"./isEqual-N7cPq6Z7.js";import"./withOsdkMetrics-C88Xzccf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

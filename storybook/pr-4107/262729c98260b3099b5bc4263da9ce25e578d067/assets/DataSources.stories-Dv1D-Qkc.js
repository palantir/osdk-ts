import{j as r}from"./iframe-CXrJqDi7.js";import{O as b}from"./object-table-Cd3STzG6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DriWFLf1.js";import{u as g}from"./useOsdkClient-DBydK2k_.js";import"./preload-helper-jkRaFgLU.js";import"./Table-BhBhFKEz.js";import"./index-CIjDsdU0.js";import"./Dialog-B9epiWv4.js";import"./cross-BukSyOKz.js";import"./svgIconContainer-BzSV1llx.js";import"./useBaseUiId-DRTWV3IQ.js";import"./InternalBackdrop-ZhhoRitJ.js";import"./composite-BIMYEycB.js";import"./index-rAYh6pbi.js";import"./index-CUgOIZQ8.js";import"./index-DCDlBCaZ.js";import"./useEventCallback-JwHO2nyR.js";import"./SkeletonBar-BwxqUkGA.js";import"./LoadingCell-0V77jspv.js";import"./ColumnConfigDialog-D1Ji2zsY.js";import"./DraggableList-CYP5Vy9D.js";import"./search-Dyn6N2H3.js";import"./Input-CvxpQ6Xp.js";import"./useControlled-BrDZ81ve.js";import"./Button-BnGcPvMs.js";import"./small-cross-FSbZyUiS.js";import"./ActionButton-C9HLEbBL.js";import"./Checkbox-DWj--UOb.js";import"./useValueChanged-5Z86VqGU.js";import"./CollapsiblePanel-BopoqNCU.js";import"./MultiColumnSortDialog-rx6YdH4_.js";import"./MenuTrigger-De9J9ONv.js";import"./CompositeItem-CyZPBPBK.js";import"./ToolbarRootContext-Dha7jpb4.js";import"./getDisabledMountTransitionStyles-D6coONqb.js";import"./getPseudoElementBounds-BFV0DdWn.js";import"./chevron-down-vVCEooOb.js";import"./index-WbZsn1IX.js";import"./error-bx5NADv9.js";import"./BaseCbacBanner-B-0TwJ_2.js";import"./makeExternalStore-Bxt_lPGm.js";import"./Tooltip-DdLaENUl.js";import"./PopoverPopup-DE4OVcAD.js";import"./debounce-DfSTdNM2.js";import"./tick-BKMBX6oh.js";import"./DropdownField-Be1p7WjB.js";import"./isEqual-CVznVMsb.js";import"./withOsdkMetrics-Dl4aNlWl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

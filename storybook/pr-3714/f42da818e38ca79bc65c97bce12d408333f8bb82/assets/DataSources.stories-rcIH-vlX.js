import{j as r}from"./iframe-CJA1xNbf.js";import{O as b}from"./object-table-p5zSmE9I.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CqvzuYNc.js";import{u as g}from"./useOsdkClient-BfQQJQSe.js";import"./preload-helper-C2luW4zJ.js";import"./Table-DoSKpfQD.js";import"./index-C-8NmWLG.js";import"./Dialog-BOl7KEAj.js";import"./cross-CQqjvK9t.js";import"./svgIconContainer-CbX6k65p.js";import"./useBaseUiId-BvJ2qcSN.js";import"./InternalBackdrop-CFtyIHF7.js";import"./composite-DOttNt49.js";import"./index-DnzCeTgw.js";import"./index-COLkTz0A.js";import"./index-6fmeW7-6.js";import"./useEventCallback-BYhwn4pa.js";import"./SkeletonBar-DshquNDl.js";import"./LoadingCell-DmCyIN3R.js";import"./ColumnConfigDialog-DHP7XzNA.js";import"./DraggableList-C-5K3eKq.js";import"./search-BEFnIjoY.js";import"./Input-BEw3OBGr.js";import"./useControlled-Cw0VkJXd.js";import"./Button-vRCY7Tct.js";import"./small-cross-CJKlltL0.js";import"./ActionButton-Brl7quwo.js";import"./Checkbox-CrY7RfHX.js";import"./useValueChanged-B4sZueCD.js";import"./CollapsiblePanel-BnuzOBv2.js";import"./MultiColumnSortDialog-DjBNMJbv.js";import"./MenuTrigger-BM22BcfG.js";import"./CompositeItem-DEmGmvGp.js";import"./ToolbarRootContext-sfA9hU9w.js";import"./getDisabledMountTransitionStyles-DxG_dub5.js";import"./getPseudoElementBounds-LXwOsv9_.js";import"./chevron-down-CisS9nHL.js";import"./index-CoZeC-uo.js";import"./error-BRaZ14N8.js";import"./BaseCbacBanner-qP8CyVJW.js";import"./makeExternalStore-C0IKfOCn.js";import"./Tooltip-DfQvNW_E.js";import"./PopoverPopup-B5BKr__5.js";import"./debounce-BuqRMN8y.js";import"./tick-C06BStMP.js";import"./DropdownField-CzOk54o3.js";import"./isEqual-jR_iTTD8.js";import"./withOsdkMetrics-CqtplnYL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

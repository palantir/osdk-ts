import{j as r}from"./iframe-BpjAczHY.js";import{O as b}from"./object-table-CbPG2EbH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CTFKTLpl.js";import{u as g}from"./useOsdkClient-D0Eek7Y4.js";import"./preload-helper-n775iZGy.js";import"./Table-C8bNeHtW.js";import"./index-B865hR58.js";import"./Dialog-C0PdJPQK.js";import"./cross-C6qTQWHW.js";import"./svgIconContainer-C3jJhmpt.js";import"./useBaseUiId-99hOwMJj.js";import"./InternalBackdrop-Nq7KwH4o.js";import"./composite-Dz8fJC5u.js";import"./index-CL2exV6n.js";import"./index-BGlvu2Wm.js";import"./index-DA4_2A10.js";import"./useEventCallback-B6zcZW3p.js";import"./SkeletonBar-BecfrY7r.js";import"./LoadingCell-vBGp6yxc.js";import"./ColumnConfigDialog-CfCkja_H.js";import"./DraggableList-DuvP9j4v.js";import"./search-NVe0lSCh.js";import"./Input-BK2Nmyqv.js";import"./useControlled-DGtH5z0Q.js";import"./Button-Dj8yiv60.js";import"./small-cross-DupO9VP4.js";import"./ActionButton-CRHWpJnS.js";import"./Checkbox-DfWTU0cg.js";import"./useValueChanged-CSF7lu2m.js";import"./CollapsiblePanel-By7EAy8-.js";import"./MultiColumnSortDialog-Ciz1sd7u.js";import"./MenuTrigger-Be270hxZ.js";import"./CompositeItem-DG1i5uV0.js";import"./ToolbarRootContext-BQn0Rtks.js";import"./getDisabledMountTransitionStyles-BgiX7odw.js";import"./getPseudoElementBounds-CCx4Tlrc.js";import"./chevron-down-_ycbe8m1.js";import"./index-DmLzhgLv.js";import"./error-Biwv1K3K.js";import"./BaseCbacBanner-B6WijF8k.js";import"./makeExternalStore-RoIlT1g0.js";import"./Tooltip-VrYqX_Lh.js";import"./PopoverPopup-BxpA88JM.js";import"./debounce-Ds0PQScg.js";import"./tick-B4peCy1V.js";import"./DropdownField-BJglwOE0.js";import"./isEqual-D9lvvdTI.js";import"./withOsdkMetrics-C6lIiCV7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

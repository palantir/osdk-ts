import{j as r}from"./iframe-DfRsO-W_.js";import{O as b}from"./object-table-CP9JoLqJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CKS91Bsu.js";import{u as g}from"./useOsdkClient-Da6wTJ7N.js";import"./preload-helper-B1nnBqyx.js";import"./Table-x1N0vMog.js";import"./index-CQkS0c9h.js";import"./Dialog-CQuuouNU.js";import"./cross-CBNkzS8W.js";import"./svgIconContainer-DgyEbBbg.js";import"./useBaseUiId-t6nqxOAa.js";import"./InternalBackdrop-DexqjegU.js";import"./composite-BNASiMUs.js";import"./index-0fIzBmZ6.js";import"./index-COUiLxiP.js";import"./index-DAMwa_zH.js";import"./useEventCallback-B9H6hou4.js";import"./SkeletonBar-C4TEZaxd.js";import"./LoadingCell-jyJlJ8rZ.js";import"./ColumnConfigDialog-DuyPqMVs.js";import"./DraggableList-da0sxfAo.js";import"./search-DnesuR3u.js";import"./Input-BeFyt6Zg.js";import"./useControlled-DwMJ2aka.js";import"./Button-PGajkELE.js";import"./small-cross-BD6x5MXv.js";import"./ActionButton-DjurcGej.js";import"./Checkbox-L7hCldyi.js";import"./useValueChanged-CQ6Yx7cq.js";import"./CollapsiblePanel-DUX-GqzR.js";import"./MultiColumnSortDialog-fqDZVUuC.js";import"./MenuTrigger-DdmOX4vv.js";import"./CompositeItem-C6hDdpH4.js";import"./ToolbarRootContext-BRXAevlR.js";import"./getDisabledMountTransitionStyles-B2AXI69J.js";import"./getPseudoElementBounds-Ck1GK_Vt.js";import"./chevron-down-Cdf065g5.js";import"./index-DkHZL3b5.js";import"./error-3c9XVh4b.js";import"./BaseCbacBanner-CwLmqWu7.js";import"./makeExternalStore-C23Jsp2C.js";import"./Tooltip-1SCODkG_.js";import"./PopoverPopup-De149wyZ.js";import"./debounce-BAkgb8RS.js";import"./tick-CjE9NPay.js";import"./DropdownField-CgS_exM3.js";import"./isEqual-BnnGO8J7.js";import"./withOsdkMetrics-D1y4-r1W.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

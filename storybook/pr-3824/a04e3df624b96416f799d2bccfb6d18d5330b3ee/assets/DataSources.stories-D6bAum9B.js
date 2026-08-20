import{j as r}from"./iframe-vrerelee.js";import{O as b}from"./object-table-C77hH-X-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CBPgndOr.js";import{u as g}from"./useOsdkClient-CUb002RZ.js";import"./preload-helper-EWJUa1-K.js";import"./Table-C0Y9cRlL.js";import"./index-CNxP3rjT.js";import"./Dialog-C-ycvXhr.js";import"./cross-Psx69AyP.js";import"./svgIconContainer-6n9cb0mN.js";import"./useBaseUiId-CAROlnX8.js";import"./InternalBackdrop-B2deliiX.js";import"./composite-DDTJeHL3.js";import"./index-yOPz6Uw0.js";import"./index-AmaRSzHC.js";import"./index-BxycLxmI.js";import"./useEventCallback-BGHzswty.js";import"./SkeletonBar-B5K6rZTn.js";import"./LoadingCell-Dpjt84nq.js";import"./ColumnConfigDialog-D8YDv3iE.js";import"./DraggableList-DThfYCrz.js";import"./search-Bhqmpp8a.js";import"./Input-C9Tgfj8O.js";import"./useControlled-CjkZ0zkX.js";import"./Button-y-WAAif2.js";import"./small-cross-BXp4fE6H.js";import"./ActionButton-DQ74GkZQ.js";import"./Checkbox-BtPLyCy5.js";import"./useValueChanged-BMbMl2pt.js";import"./CollapsiblePanel-Cx4OKjzZ.js";import"./MultiColumnSortDialog-D7Zb2Ynk.js";import"./MenuTrigger-BqPc4r3c.js";import"./CompositeItem-B4kVU38_.js";import"./ToolbarRootContext-CcUY96Hu.js";import"./getDisabledMountTransitionStyles-Cltm6V_7.js";import"./getPseudoElementBounds-Cn4A2pne.js";import"./chevron-down-7LzC2ZOe.js";import"./index-DyV40wfp.js";import"./error-BxHij2Hj.js";import"./BaseCbacBanner-Cc8lcT32.js";import"./makeExternalStore-CGm7b8F9.js";import"./Tooltip-ZywtbqPZ.js";import"./PopoverPopup-C7--kMEm.js";import"./debounce-B5fxBA0q.js";import"./tick-ChAbTz2_.js";import"./DropdownField-DvW-d2ag.js";import"./isEqual-WV-XZln-.js";import"./withOsdkMetrics-CTLM5X88.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

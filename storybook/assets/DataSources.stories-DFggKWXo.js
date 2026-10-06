import{j as r}from"./iframe-Cd5diGA4.js";import{O as b}from"./object-table-DK-Vk0K8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CuXsFdVB.js";import{u as g}from"./useOsdkClient-DNLZbnGw.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BVhb1VDS.js";import"./index-CzM4WAmt.js";import"./Dialog-SqqO26FL.js";import"./cross-ButwHlHJ.js";import"./svgIconContainer-DaB2_UOp.js";import"./useBaseUiId-visX6u-_.js";import"./InternalBackdrop-BH_ajHFZ.js";import"./composite-CvjMA8y2.js";import"./index-DAgKjLrT.js";import"./index-Y3NM_UBm.js";import"./index-B-PHEzSN.js";import"./useEventCallback-gcr9TNzx.js";import"./SkeletonBar-BLoGGC6L.js";import"./LoadingCell-DFlWXzkK.js";import"./ColumnConfigDialog-COxdtVMj.js";import"./DraggableList-B-3f11gE.js";import"./search-Dn_Ud8yw.js";import"./Input-BTdSlwyz.js";import"./useControlled-BM2rkvMt.js";import"./Button-CqfMgiGG.js";import"./small-cross-D8C9SWIq.js";import"./ActionButton-D1mJzJ86.js";import"./Checkbox-DH-ovV7p.js";import"./useValueChanged-BwYeNo1h.js";import"./CollapsiblePanel-Df68r8NJ.js";import"./MultiColumnSortDialog-moChkA17.js";import"./MenuTrigger-Cx_EZ4Jt.js";import"./CompositeItem-Bud6cqZd.js";import"./ToolbarRootContext-BsB0g93g.js";import"./getDisabledMountTransitionStyles-BvKshnXk.js";import"./getPseudoElementBounds-BJZWWLa0.js";import"./chevron-down-BxrXgsF8.js";import"./index-BqTfBsD7.js";import"./error-BudjlwPt.js";import"./BaseCbacBanner-CzbfxawI.js";import"./makeExternalStore-CFuKSi4I.js";import"./Tooltip-2UDphehv.js";import"./PopoverPopup-CkIT-hq_.js";import"./debounce-DpmfyqFC.js";import"./tick-B8kZrpYx.js";import"./DropdownField-Bg6DPx3N.js";import"./isEqual-BA5U0Dg4.js";import"./withOsdkMetrics-C_0Aw4CV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

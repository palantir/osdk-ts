import{j as r}from"./iframe-6GPNG9Xi.js";import{O as b}from"./object-table-DWgQyALO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CWUMpUDn.js";import{u as g}from"./useOsdkClient-CFj73qoH.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CL7bvEdV.js";import"./index-BLLT78dd.js";import"./Dialog-XqrTNsLI.js";import"./cross-CDqWfoJU.js";import"./svgIconContainer-BdQnszdm.js";import"./useBaseUiId-N7eZ68O9.js";import"./InternalBackdrop-CFXrjmmF.js";import"./composite-BYxN19ZW.js";import"./index-DZlFhs1y.js";import"./index-BHQMMX4F.js";import"./index-DLivmPlx.js";import"./useEventCallback-Cpzpgr_n.js";import"./SkeletonBar-DghLNx4Z.js";import"./LoadingCell-H7l3Xd-N.js";import"./ColumnConfigDialog-CugdJqDq.js";import"./DraggableList-BBaW8GD-.js";import"./search-BbrW5BKI.js";import"./Input-DQenBszh.js";import"./useControlled-DGTBEOub.js";import"./Button-vhjBY76J.js";import"./small-cross-CPEpmVAr.js";import"./ActionButton-DaCDaB0L.js";import"./Checkbox-CM1vw9Zg.js";import"./useValueChanged-DZ0NFAW9.js";import"./CollapsiblePanel-BMTWBF66.js";import"./MultiColumnSortDialog-JxflHR-S.js";import"./MenuTrigger-DWk9Woo3.js";import"./CompositeItem-BOpE1HX7.js";import"./ToolbarRootContext-qHXZhovw.js";import"./getDisabledMountTransitionStyles-B5Kb1i5L.js";import"./getPseudoElementBounds-BxPGNRwH.js";import"./chevron-down-Dnhw5Ae_.js";import"./index-DXeIJDVP.js";import"./error-DBj4FgTN.js";import"./BaseCbacBanner-C5ddbdsN.js";import"./makeExternalStore-BTPDRRuj.js";import"./Tooltip-D9qeKbHO.js";import"./PopoverPopup-BrKaTwlD.js";import"./debounce-D7aOU_II.js";import"./tick-DY1Ho6fU.js";import"./DropdownField-DLs5QjN0.js";import"./isEqual-DF4zAEzU.js";import"./withOsdkMetrics-DeEkmlIV.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-BX9a9lIA.js";import{O as b}from"./object-table-C9_bf-JA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Be0jt3r4.js";import{u as g}from"./useOsdkClient-Bh-oR6BU.js";import"./preload-helper-BlXb_Vg9.js";import"./Table-DoTBy3cy.js";import"./index-DU3Z-NO3.js";import"./Dialog-BHtEZgzi.js";import"./cross-DuBsq8tA.js";import"./svgIconContainer-UHOj5M6P.js";import"./useBaseUiId-rZTTYrCD.js";import"./InternalBackdrop-D0pdeOz1.js";import"./composite-BZsQ_ZE_.js";import"./index-Xkcqocgf.js";import"./index-Cmn1GPS_.js";import"./index-BGOtK9pW.js";import"./useEventCallback-BewJa_r1.js";import"./SkeletonBar-CvROekkE.js";import"./LoadingCell-CCxJlqw1.js";import"./ColumnConfigDialog-e0j7wZ87.js";import"./DraggableList-B6Z0nOYU.js";import"./search-D5VPbQqk.js";import"./Input-R8AltOJ3.js";import"./useControlled-D1C6STzO.js";import"./Button-nhugV28E.js";import"./small-cross-CEZM1_xp.js";import"./ActionButton-FmCiWWCn.js";import"./Checkbox-D8zEtcjh.js";import"./useValueChanged-jvisKX1J.js";import"./CollapsiblePanel-CKvjIGAx.js";import"./MultiColumnSortDialog-DvmjnIY_.js";import"./MenuTrigger-DyrwgVGJ.js";import"./CompositeItem-h-F_V8Zb.js";import"./ToolbarRootContext-CfpoMHoy.js";import"./getDisabledMountTransitionStyles-GzpTE14B.js";import"./getPseudoElementBounds-DTY5_p4Y.js";import"./chevron-down-Baa_eZBL.js";import"./index-CGQ8sj2I.js";import"./error-BEhn7utC.js";import"./BaseCbacBanner-D1vQrPhP.js";import"./makeExternalStore-BYhN6o4S.js";import"./Tooltip-DIBDL7CT.js";import"./PopoverPopup-B82LsnQc.js";import"./debounce-BV21oJOA.js";import"./tick-BulTBCV9.js";import"./DropdownField-aWbBYl77.js";import"./isEqual-BvwvV_z2.js";import"./withOsdkMetrics-C7fLYswC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

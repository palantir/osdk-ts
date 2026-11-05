import{j as r}from"./iframe-NpRIbPdx.js";import{O as b}from"./object-table-BHfrYftR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BjKduKi0.js";import{u as g}from"./useOsdkClient-yMbsmr2e.js";import"./preload-helper-OSq5jQkX.js";import"./Table-CF5s51ja.js";import"./index-CY16uySw.js";import"./Dialog-BDhuSFkv.js";import"./cross-D_KA-OEe.js";import"./svgIconContainer-D56q5fZV.js";import"./useBaseUiId-B58WCAya.js";import"./InternalBackdrop-CyQ0qo1z.js";import"./composite-BuQ8bNLj.js";import"./index-BeW67UVI.js";import"./index-Bhk4lf9n.js";import"./index-Btpa_jjb.js";import"./useEventCallback-BQn_UK38.js";import"./SkeletonBar-fAm3YbtB.js";import"./LoadingCell-cH6j09za.js";import"./ColumnConfigDialog-B6YIquQg.js";import"./DraggableList-CzYvzisU.js";import"./search-BQKjluR2.js";import"./Input-geD0QmM7.js";import"./useControlled-C_x2TKVp.js";import"./Button-B7hLTnAe.js";import"./small-cross-DnJ4w8jW.js";import"./ActionButton-Dz0ucYQ4.js";import"./Checkbox-C7f6nBhb.js";import"./useValueChanged-Bju82j-V.js";import"./CollapsiblePanel-Uw9lqt-L.js";import"./MultiColumnSortDialog-uWtN7dz7.js";import"./MenuTrigger-Da_E-lAo.js";import"./CompositeItem-9iq6yCgJ.js";import"./ToolbarRootContext-zUNFbjuY.js";import"./getDisabledMountTransitionStyles-B_lO8q9e.js";import"./getPseudoElementBounds-Ix_nmD-p.js";import"./chevron-down-BnVBaJX5.js";import"./index-DdBpKYEV.js";import"./error-B8p2hdA4.js";import"./BaseCbacBanner-BmsZwYA9.js";import"./makeExternalStore-he_3GqFk.js";import"./Tooltip-DVLHEN3u.js";import"./PopoverPopup-pjnshs8Z.js";import"./debounce-BHEHv-OY.js";import"./tick-DOsn7mMx.js";import"./DropdownField-3vS_OVvb.js";import"./isEqual-D8HIEQ-D.js";import"./withOsdkMetrics-RYSsSWu2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

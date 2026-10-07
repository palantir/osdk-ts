import{j as r}from"./iframe-B0BeHSW3.js";import{O as b}from"./object-table-DdTuxNNY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DSxH7R34.js";import{u as g}from"./useOsdkClient-CYqnm12a.js";import"./preload-helper-DAJqEBqZ.js";import"./Table-kE_BvdsI.js";import"./index-fkdnmgoB.js";import"./Dialog-B5C9WyLD.js";import"./cross-ChIXxlFh.js";import"./svgIconContainer-3LirYjxc.js";import"./useBaseUiId-CFx2OXwB.js";import"./InternalBackdrop-xPEFo0aI.js";import"./composite-BKG8TgZ7.js";import"./index-CeseuNBk.js";import"./index-B8qFFoze.js";import"./index-ChyoeDYU.js";import"./useEventCallback-B0c3gcjQ.js";import"./SkeletonBar-C5AffQmv.js";import"./LoadingCell-VUqHb4DV.js";import"./ColumnConfigDialog-CfkbMa1G.js";import"./DraggableList-DnLwSB2K.js";import"./search-Eov1ZRug.js";import"./Input-BhPQq-YU.js";import"./useControlled-Y2VvyFT1.js";import"./Button-CUzfzg16.js";import"./small-cross-GcZN--Q5.js";import"./ActionButton-DWP5wTUe.js";import"./Checkbox-CVXwVKB9.js";import"./useValueChanged-IjvfJjRR.js";import"./CollapsiblePanel-chL21z8S.js";import"./MultiColumnSortDialog-C7qO2RVW.js";import"./MenuTrigger-CJ8xEsSL.js";import"./CompositeItem-CCwjGTNJ.js";import"./ToolbarRootContext-BU8BYZpt.js";import"./getDisabledMountTransitionStyles--mZk6BZS.js";import"./getPseudoElementBounds-B-DwAZaN.js";import"./chevron-down-CIEyD1Re.js";import"./index-Dbl4MtyX.js";import"./error-LXXuPtJW.js";import"./BaseCbacBanner-DgmS4GYo.js";import"./makeExternalStore-CLIh_9sw.js";import"./Tooltip-DNEHwr8p.js";import"./PopoverPopup-DAPZVEwH.js";import"./debounce-DeBplguO.js";import"./tick-cnkBzsXZ.js";import"./DropdownField-BHYbQQp4.js";import"./isEqual-BmLwudnH.js";import"./withOsdkMetrics-CRG9AD3M.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

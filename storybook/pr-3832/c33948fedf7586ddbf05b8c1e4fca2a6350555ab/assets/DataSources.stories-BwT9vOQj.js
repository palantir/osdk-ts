import{j as r}from"./iframe-DQJhsGVr.js";import{O as b}from"./object-table-BjV_vJjr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Yi1sw1uE.js";import{u as g}from"./useOsdkClient-Dj7AzKP-.js";import"./preload-helper-BYPnNrHf.js";import"./Table-BubZaiGx.js";import"./index-1_EsOKwE.js";import"./Dialog-Bb1l7Kje.js";import"./cross-RNHwHsza.js";import"./svgIconContainer-HMv0MEad.js";import"./useBaseUiId-EuR0djcZ.js";import"./InternalBackdrop-Cs0T4rJ3.js";import"./composite-DvpYcJ4q.js";import"./index-CbwbPLuB.js";import"./index-d5GOwTqG.js";import"./index-DUQBSqzq.js";import"./useEventCallback-DVzfprMv.js";import"./SkeletonBar-CT5sY0Sj.js";import"./LoadingCell-BwmFV4Ps.js";import"./ColumnConfigDialog-BS59tt78.js";import"./DraggableList-dBpIwsbr.js";import"./search-DJW6FQCH.js";import"./Input-DLTHdalW.js";import"./useControlled-CavIZvRH.js";import"./isEqual-B-xwiFzL.js";import"./isObject-DDLvUWU9.js";import"./Button-DoThKF3_.js";import"./ActionButton-Dg9OJBAE.js";import"./Checkbox-C13FyR1l.js";import"./useValueChanged-Bjtcn_OZ.js";import"./CollapsiblePanel-CTL5FTpu.js";import"./MultiColumnSortDialog-BiwLfm0u.js";import"./MenuTrigger-BSrSjDrL.js";import"./CompositeItem-BHa5W7al.js";import"./ToolbarRootContext-DPrCQgAj.js";import"./getDisabledMountTransitionStyles-BXFxCvRe.js";import"./getPseudoElementBounds-YUnfbs-Q.js";import"./chevron-down-Mkun0WwY.js";import"./index-mkeG7rQI.js";import"./error-OGxYpfA4.js";import"./BaseCbacBanner-DllNzV1_.js";import"./makeExternalStore-pYvmGBhQ.js";import"./Tooltip-ClcT_wsL.js";import"./PopoverPopup-Bq1IEmwF.js";import"./toNumber-DQYOTChI.js";import"./tick-D8gY6lgy.js";import"./DropdownField-tDuqkBrj.js";import"./withOsdkMetrics-Do5HPYid.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

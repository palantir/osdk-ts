import{j as r}from"./iframe-BGoY5mFC.js";import{O as b}from"./object-table-DfeUx1e5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BKnKWigg.js";import{u as g}from"./useOsdkClient-9nkt6SOH.js";import"./preload-helper-DsvzwfCi.js";import"./Table-IYycR_yA.js";import"./index-DnfiKoHw.js";import"./Dialog-B4v_Dkac.js";import"./cross-BtqJOxEL.js";import"./svgIconContainer-BX-wZNF4.js";import"./useBaseUiId-CIYnZ7Oo.js";import"./InternalBackdrop-Cuwv9baZ.js";import"./composite-DKhm2DCj.js";import"./index-B6V6F-VV.js";import"./index-DYEd7rlA.js";import"./index-BdsorHI7.js";import"./useEventCallback-B7XLSD-1.js";import"./SkeletonBar-BJdY69_4.js";import"./LoadingCell-BhvmkPi_.js";import"./ColumnConfigDialog-Bo_2MhnH.js";import"./DraggableList-YOfpeBYu.js";import"./search-Du0qzm2Q.js";import"./Input-D9S9buqu.js";import"./useControlled-Cqb7ClaQ.js";import"./Button-CFNLbf5u.js";import"./small-cross-CAVitq02.js";import"./ActionButton-BYefn9m4.js";import"./Checkbox-gUrxRc_L.js";import"./useValueChanged-U8j9sHFt.js";import"./CollapsiblePanel-_2hoyG7n.js";import"./MultiColumnSortDialog-Ch8pRqdH.js";import"./MenuTrigger-Ds2ksrWo.js";import"./CompositeItem-2fAyt8Be.js";import"./ToolbarRootContext-DUxALj_T.js";import"./getDisabledMountTransitionStyles-C7fH5JXd.js";import"./getPseudoElementBounds-ALTzwxqv.js";import"./chevron-down-CCx6Nv0U.js";import"./index-B0vfjDqX.js";import"./error-Brajw6PY.js";import"./BaseCbacBanner-DY-2ccuc.js";import"./makeExternalStore-BltVU3hB.js";import"./Tooltip-CaSp1gFC.js";import"./PopoverPopup-SiLT4RMM.js";import"./debounce-COVFQzqA.js";import"./tick-DIaShr09.js";import"./DropdownField-nznVdv8m.js";import"./isEqual-BpvRW_ez.js";import"./withOsdkMetrics-DBjKwuY0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

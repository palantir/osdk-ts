import{j as r}from"./iframe-p2YICxUI.js";import{O as b}from"./object-table-DXwVoDL-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C1AkfA3h.js";import{u as g}from"./useOsdkClient-i5Bf0XJq.js";import"./preload-helper-C_d8LugS.js";import"./Table-DoflLJiY.js";import"./index-CsAVedHf.js";import"./Dialog-BpqAGMf3.js";import"./cross-DphGr94_.js";import"./svgIconContainer-ByMgsc6W.js";import"./useBaseUiId-CsBNKmu8.js";import"./InternalBackdrop-Bl4pAqkn.js";import"./composite-BPYrj6eG.js";import"./index-4ZagnSn6.js";import"./index-XAimxDaP.js";import"./index-BvbPlynd.js";import"./useEventCallback-DNjRXV4C.js";import"./SkeletonBar-Da2Aho7B.js";import"./LoadingCell-ChvYeOgu.js";import"./ColumnConfigDialog-Cd2T6Buy.js";import"./DraggableList-DYrbEckZ.js";import"./search-h5TogDUF.js";import"./Input-se4kwers.js";import"./useControlled-DfYpZvNd.js";import"./Button-ByiY3lLu.js";import"./small-cross-CsgJpP59.js";import"./ActionButton-BQ6YslU0.js";import"./Checkbox-DkAhCGWt.js";import"./useValueChanged-Oji2CKci.js";import"./CollapsiblePanel-J0gq_9ov.js";import"./MultiColumnSortDialog-CJeF3pL7.js";import"./MenuTrigger-CThGnNMB.js";import"./CompositeItem-BejJ0cXB.js";import"./ToolbarRootContext-DOpGxQlA.js";import"./getDisabledMountTransitionStyles-B3K2sZ2M.js";import"./getPseudoElementBounds-DoNDWMZt.js";import"./chevron-down-CvKzqnOZ.js";import"./index-BO7UbGKj.js";import"./error-LbvP5jG0.js";import"./BaseCbacBanner-CemxdjR3.js";import"./makeExternalStore-DCD_3Y1Y.js";import"./Tooltip-CaUh6MSb.js";import"./PopoverPopup-BLF-1tn1.js";import"./debounce-fGYFEdED.js";import"./tick-Bp4sawQk.js";import"./DropdownField-BezvDOf1.js";import"./isEqual-B-KMF0Li.js";import"./withOsdkMetrics-DKcHZ6W6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

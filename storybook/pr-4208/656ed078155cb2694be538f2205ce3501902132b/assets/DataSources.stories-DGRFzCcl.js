import{j as r}from"./iframe-2J5FrKrg.js";import{O as b}from"./object-table-BjSwGXl6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-MkJf4k25.js";import{u as g}from"./useOsdkClient-dszr35NK.js";import"./preload-helper-1KHcGwA2.js";import"./Table-zF77GmYS.js";import"./index-DdQFZN0A.js";import"./Dialog-p_DiZkyI.js";import"./cross-C3qjpKNn.js";import"./svgIconContainer-C5u_HnP9.js";import"./useBaseUiId-BvE4vbB0.js";import"./InternalBackdrop-C54DBojs.js";import"./composite-BbUTZOvt.js";import"./index-CoGmcCzI.js";import"./index-bAdLuKNp.js";import"./index-BWJlDcPZ.js";import"./useEventCallback-LZLaGDRe.js";import"./SkeletonBar-BN0PV5wz.js";import"./LoadingCell-B6TmGQE1.js";import"./ColumnConfigDialog-BgDTGJHS.js";import"./DraggableList-sdzFfl77.js";import"./search-fHZBvfeM.js";import"./Input-BEKgo6O6.js";import"./useControlled-BRuPwTnE.js";import"./Button-CtoNW8MW.js";import"./small-cross-BBZdbk9L.js";import"./ActionButton-DWjB7yZw.js";import"./Checkbox-ChMOarzF.js";import"./useValueChanged-DXaGf5Gs.js";import"./CollapsiblePanel-C-9b8GqA.js";import"./MultiColumnSortDialog-BlPs5WlI.js";import"./MenuTrigger-CWG7noKe.js";import"./CompositeItem-yS3I_oZm.js";import"./ToolbarRootContext-CzvAPQX5.js";import"./getDisabledMountTransitionStyles-BNeqbgtt.js";import"./getPseudoElementBounds-C-mj8-g1.js";import"./chevron-down-DfTNwrQT.js";import"./index-CXuKETzB.js";import"./error-55u3yHQS.js";import"./BaseCbacBanner-aYjX9m9G.js";import"./makeExternalStore-B7uL5LnD.js";import"./Tooltip-C8NnOdy1.js";import"./PopoverPopup-CgQ4X2Ge.js";import"./debounce-CrX5_LDj.js";import"./tick-w61hFyp6.js";import"./DropdownField-CV1IThhY.js";import"./isEqual-BtLImdWH.js";import"./withOsdkMetrics-4gfK0oWP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-DFUOfUSe.js";import{O as b}from"./object-table-eI_MpLLM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CBRoBAVM.js";import{u as g}from"./useOsdkClient-BjSmFqIm.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CC8_Mmh6.js";import"./index-kBc01955.js";import"./Dialog-_LqnPVgX.js";import"./cross-B1MvVSxZ.js";import"./svgIconContainer-BEzB0n9v.js";import"./useBaseUiId-iIiGKJbX.js";import"./InternalBackdrop-C8Deyz8F.js";import"./composite-1eFG2hxZ.js";import"./index-CjvFN5_9.js";import"./index-BENq6zow.js";import"./index-DszQvq9I.js";import"./useEventCallback-wAoswJKo.js";import"./SkeletonBar-DGafzJ4m.js";import"./LoadingCell-DUifgGui.js";import"./ColumnConfigDialog-CO5Wyt08.js";import"./DraggableList-RxOxYVED.js";import"./search-DJSgEYs8.js";import"./Input-BQVjPxIe.js";import"./useControlled-v23QOsKY.js";import"./Button-ixew-sI_.js";import"./small-cross-C4xB7Q44.js";import"./ActionButton-DTZYfIEP.js";import"./Checkbox-DRApCZzW.js";import"./useValueChanged-DJsabPfY.js";import"./CollapsiblePanel-CpgSESuR.js";import"./MultiColumnSortDialog-EJkaScIR.js";import"./MenuTrigger-F77Zj-N2.js";import"./CompositeItem-DFHRfQA2.js";import"./ToolbarRootContext-BDheAh6f.js";import"./getDisabledMountTransitionStyles-1clqSlQZ.js";import"./getPseudoElementBounds-C7b_XFOL.js";import"./chevron-down-CYOYBDrS.js";import"./index-DvkqE7yU.js";import"./error-D5rDq67F.js";import"./BaseCbacBanner-DNewZ_zV.js";import"./makeExternalStore-CBoWfP78.js";import"./Tooltip-Fm9QhiyQ.js";import"./PopoverPopup-Dtz2QEwE.js";import"./debounce-DziqxyEi.js";import"./tick-DzTIrrQ0.js";import"./DropdownField-BhG0LvOe.js";import"./isEqual-CP-xjrih.js";import"./withOsdkMetrics-BWtToZ6G.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-BgOcomY1.js";import{O as b}from"./object-table-BSL1_9Ix.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CVBSZQaN.js";import{u as g}from"./useOsdkClient-B5u6g0Ch.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-1DPjstk8.js";import"./index-B4Fy05Hs.js";import"./Dialog-mTBoijVX.js";import"./cross-CM39ZxII.js";import"./svgIconContainer-B7ISeWKv.js";import"./useBaseUiId-2i3TXOih.js";import"./InternalBackdrop-B7iY7MCf.js";import"./composite-H1Wa0kFX.js";import"./index-hjJ69L9b.js";import"./index-BmB0MH-o.js";import"./index-lRPC6GOL.js";import"./useEventCallback-BPywqORe.js";import"./SkeletonBar-Cikw0j-e.js";import"./LoadingCell-B2VIXLEw.js";import"./ColumnConfigDialog-DGitpEMK.js";import"./DraggableList-DD5T7n-a.js";import"./search-K4mebQJh.js";import"./Input-BWBlcqWD.js";import"./useControlled-CDFL_iHK.js";import"./isEqual-Duw1SWO6.js";import"./isObject-DIP1i4oH.js";import"./Button-BlOVwK6T.js";import"./ActionButton-7iZ2WqXE.js";import"./Checkbox-DAaS9nsE.js";import"./useValueChanged-B3UFC0Ev.js";import"./CollapsiblePanel-BWcH6qMX.js";import"./MultiColumnSortDialog-Blz5asut.js";import"./MenuTrigger-CGXKYSlO.js";import"./CompositeItem-BSdcRnox.js";import"./ToolbarRootContext-BRjUsvcz.js";import"./getDisabledMountTransitionStyles-DwxMXkUD.js";import"./getPseudoElementBounds-DLyBRRBf.js";import"./chevron-down-DozmMeTK.js";import"./index-DDMgjQRv.js";import"./error-Dzz3V0Ob.js";import"./BaseCbacBanner-BZSDzsbU.js";import"./makeExternalStore-DsKVr37k.js";import"./Tooltip-BX6F7vhO.js";import"./PopoverPopup-Cp-RpADF.js";import"./toNumber-CQLSmLk0.js";import"./tick-DY56p526.js";import"./DropdownField-C0HqIwfY.js";import"./withOsdkMetrics-B05mg-EK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

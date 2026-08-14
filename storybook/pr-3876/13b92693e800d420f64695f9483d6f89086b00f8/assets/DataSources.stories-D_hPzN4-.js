import{j as r}from"./iframe-0eC9Hb1Q.js";import{O as b}from"./object-table-D7oZIRCE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-reAznzgd.js";import{u as g}from"./useOsdkClient-B7nV8p0s.js";import"./preload-helper-CyETt7By.js";import"./Table-D5uZHd5s.js";import"./index-CRE2XHsU.js";import"./Dialog-B8_GHTyL.js";import"./cross-D9zq7TFg.js";import"./svgIconContainer-C7W98r5m.js";import"./useBaseUiId-B_2ELJP8.js";import"./InternalBackdrop-BOAibfmR.js";import"./composite-Cd_XCN96.js";import"./index-CvdbH2x8.js";import"./index-D9GA0kdv.js";import"./index-iV2dELQ1.js";import"./useEventCallback-C0tClelP.js";import"./SkeletonBar-eBdcJl3t.js";import"./LoadingCell-CZ-mwP2y.js";import"./ColumnConfigDialog-ro3mDikH.js";import"./DraggableList-DlG1vA6n.js";import"./search-F24JokU_.js";import"./Input-CIgrvflx.js";import"./useControlled-D5GxZ6C-.js";import"./Button-C1ygc_il.js";import"./small-cross-DFLTLzz0.js";import"./ActionButton-B6EzioXF.js";import"./Checkbox-JWIuZaTI.js";import"./useValueChanged-C5Z4l0Hz.js";import"./CollapsiblePanel-Cq_F2eVy.js";import"./MultiColumnSortDialog-EPeOeL4H.js";import"./MenuTrigger-BagA7P2M.js";import"./CompositeItem-CV7hu4fC.js";import"./ToolbarRootContext-afkGU23n.js";import"./getDisabledMountTransitionStyles-CjHO1xCK.js";import"./getPseudoElementBounds-BhgXRSlJ.js";import"./chevron-down-BTFePERp.js";import"./index-BiegP6go.js";import"./error-lpXmTpCf.js";import"./BaseCbacBanner-Do2SxMD9.js";import"./makeExternalStore-CP3jPB6B.js";import"./Tooltip-Du2WyMOU.js";import"./PopoverPopup-Cbgij3G0.js";import"./debounce-DT3Sn9e2.js";import"./tick-DklGyNLw.js";import"./DropdownField-Ba8uSvbB.js";import"./isEqual-DGiSGIUH.js";import"./withOsdkMetrics-COXmoufD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

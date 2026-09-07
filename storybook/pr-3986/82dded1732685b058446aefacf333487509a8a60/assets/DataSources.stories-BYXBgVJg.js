import{j as r}from"./iframe-BtBIXkF3.js";import{O as b}from"./object-table-9UB2qNHK.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C0mMQcc0.js";import{u as g}from"./useOsdkClient-Dw51PFJi.js";import"./preload-helper-KCRTf-fU.js";import"./Table-C-92Mm7K.js";import"./index-BGAjKCp6.js";import"./Dialog-yW4mTTj3.js";import"./cross-B9mjFWYU.js";import"./svgIconContainer-CclLyuS6.js";import"./useBaseUiId-CzkvuYxc.js";import"./InternalBackdrop-CxX8IWWG.js";import"./composite-Bn3hBJno.js";import"./index-DnxktrWp.js";import"./index-Bg1G_Vw4.js";import"./index-D1E8i8Wn.js";import"./useEventCallback-BQpb3sO5.js";import"./SkeletonBar-BNOhPsmd.js";import"./LoadingCell-C5Xqiqpu.js";import"./ColumnConfigDialog-auwReXLV.js";import"./DraggableList-DW3EaiLm.js";import"./search-DV3YNQgX.js";import"./Input-CZ_pHuwE.js";import"./useControlled-Bsm9yLUZ.js";import"./Button-FoDlRoyn.js";import"./small-cross-D7pBBSfk.js";import"./ActionButton-CXzhKuCF.js";import"./Checkbox-I1uYLB9H.js";import"./useValueChanged-DWNSNYCY.js";import"./CollapsiblePanel-CZO-nI2a.js";import"./MultiColumnSortDialog-DrKFPM2W.js";import"./MenuTrigger-DRF14xJF.js";import"./CompositeItem-BCTeJPmX.js";import"./ToolbarRootContext-B_9qz0NR.js";import"./getDisabledMountTransitionStyles-D444HRMW.js";import"./getPseudoElementBounds-DWPVaQIw.js";import"./chevron-down-BHLBt5vn.js";import"./index-C81F4-IO.js";import"./error-VXjIMzYn.js";import"./BaseCbacBanner-CdTxml7S.js";import"./makeExternalStore-CMGSbNhD.js";import"./Tooltip-BzRRe3iu.js";import"./PopoverPopup-CII93Llt.js";import"./debounce-fpq53JQI.js";import"./tick-BfzomYJ0.js";import"./DropdownField-CeeFHjMT.js";import"./isEqual-Nrqv2hX0.js";import"./withOsdkMetrics-CEusHpqR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

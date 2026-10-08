import{j as r}from"./iframe-Dh2xvDPL.js";import{O as b}from"./object-table-CyttWP_N.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-3LfqpDjt.js";import{u as g}from"./useOsdkClient-BDIRf078.js";import"./preload-helper-SAHcs0zZ.js";import"./Table-BBHaU1bC.js";import"./index-Dr7bSUf-.js";import"./Dialog-CCieSDld.js";import"./cross-ZJLJ2cFd.js";import"./svgIconContainer-BHSUSAvD.js";import"./useBaseUiId-X9Y2KA52.js";import"./InternalBackdrop-C2q5bYna.js";import"./composite-KqTwPrS-.js";import"./index-CT9Bx1MM.js";import"./index-n6Qd_eA8.js";import"./index-BM8dCjb_.js";import"./useEventCallback-C1LEHjlu.js";import"./SkeletonBar-DlK6Lvgg.js";import"./LoadingCell--qTTcwGL.js";import"./ColumnConfigDialog-DzRcgXCF.js";import"./DraggableList-D2Nvn9BZ.js";import"./search-DmyvADcW.js";import"./Input-D6WeFSc3.js";import"./useControlled-Cuxd_f5K.js";import"./Button-YpbDPlK1.js";import"./small-cross-DJlalsgy.js";import"./ActionButton-CGAhjyey.js";import"./Checkbox-BNxawU7W.js";import"./useValueChanged-DhcPVJzs.js";import"./CollapsiblePanel-Bx6XMZE8.js";import"./MultiColumnSortDialog-BY6eWIGX.js";import"./MenuTrigger-ChH9TEBU.js";import"./CompositeItem-DLX8hiU0.js";import"./ToolbarRootContext-D8HNRzfl.js";import"./getDisabledMountTransitionStyles-DxtpCxOq.js";import"./getPseudoElementBounds-BI_64AOy.js";import"./chevron-down-Bnx_kJUl.js";import"./index-DSLCj2ev.js";import"./error-DKTxybZv.js";import"./BaseCbacBanner-BXlg9iiI.js";import"./makeExternalStore-DYD0iaqF.js";import"./Tooltip-C-gFw6R-.js";import"./PopoverPopup-BCrdCA5S.js";import"./debounce-DG8yYAXE.js";import"./tick-1mKZAjPR.js";import"./DropdownField-CXn8MxM3.js";import"./isEqual-ChBky0gE.js";import"./withOsdkMetrics-DzUlIuBm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

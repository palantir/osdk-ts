import{j as r}from"./iframe-DA9dclNV.js";import{O as b}from"./object-table-LtoG5sfp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-9LxBMz5g.js";import{u as g}from"./useOsdkClient-pjJiOzt2.js";import"./preload-helper-Bx64lG7g.js";import"./Table-BCWTUx35.js";import"./index-kn43Hsx3.js";import"./Dialog-A-l1sJaY.js";import"./cross-Db3CMctj.js";import"./svgIconContainer-CdmY4bEV.js";import"./useBaseUiId-_qFsZVnk.js";import"./InternalBackdrop-DvR7fsn8.js";import"./composite-CayJIHWq.js";import"./index-ByvNBIsG.js";import"./index-DkDw_XlI.js";import"./index-CzHCOOLi.js";import"./useEventCallback-DI6z4bpK.js";import"./SkeletonBar-BkicTxkg.js";import"./LoadingCell-CFE_0ygU.js";import"./ColumnConfigDialog-BNsWj8YS.js";import"./DraggableList-DOjDpghY.js";import"./search-CsCC8gU7.js";import"./Input-xbm-V7-x.js";import"./useControlled-DOm30eCY.js";import"./Button-6VSTuqQC.js";import"./small-cross-1vdYgDXh.js";import"./ActionButton-aOr6P1Sc.js";import"./Checkbox-1wmPd_MM.js";import"./useValueChanged-ByrE0fn3.js";import"./CollapsiblePanel-CQ1HbAul.js";import"./MultiColumnSortDialog-Co2LVOgM.js";import"./MenuTrigger-DHh-Y8_X.js";import"./CompositeItem-21cMzz5_.js";import"./ToolbarRootContext-tV_1SIt_.js";import"./getDisabledMountTransitionStyles-BijzmGMm.js";import"./getPseudoElementBounds-CnYd-v8a.js";import"./chevron-down-DC0K_Daw.js";import"./index-Bz8vlsKZ.js";import"./error-DHS0vKCT.js";import"./BaseCbacBanner-DgYcjeca.js";import"./makeExternalStore-BYx66Bfu.js";import"./Tooltip-Kcrn1yWM.js";import"./PopoverPopup-BbeJMqJB.js";import"./debounce-WmNVgQD9.js";import"./tick-DZkClMaT.js";import"./DropdownField-97vatCOJ.js";import"./isEqual-R0aPEYDK.js";import"./withOsdkMetrics-BeJRVpQP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

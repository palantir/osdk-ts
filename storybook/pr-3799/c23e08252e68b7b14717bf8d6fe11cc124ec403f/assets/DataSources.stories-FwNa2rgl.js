import{j as r}from"./iframe-B5HqSCrD.js";import{O as b}from"./object-table-CLhvV0sn.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BJrNemX-.js";import{u as g}from"./useOsdkClient-Y2Pbzv4c.js";import"./preload-helper-DE0BuRVC.js";import"./Table-DkELPzBJ.js";import"./index-3d_Ih8uu.js";import"./Dialog-H9-E4w2l.js";import"./cross-VDxjcvXQ.js";import"./svgIconContainer-CO9jRBk2.js";import"./useBaseUiId-CeyHJ71C.js";import"./InternalBackdrop-DBiFfm9_.js";import"./composite-BZoJUTZ6.js";import"./index-Dmjh6VFf.js";import"./index-DYzYrR48.js";import"./index-99B3A1s9.js";import"./useEventCallback-C8_kB9P9.js";import"./SkeletonBar-BLsKHVil.js";import"./LoadingCell-BEvGs8YD.js";import"./ColumnConfigDialog-DH75OxG6.js";import"./DraggableList-CxDpBb9E.js";import"./search-CuXh0Rqq.js";import"./Input-B9x2qENv.js";import"./useControlled-BmEUk3EV.js";import"./isEqual-Xf2Ok89z.js";import"./isObject-D3meP0-w.js";import"./Button-iUWC51LE.js";import"./ActionButton-DFf9rTic.js";import"./Checkbox-CHxjevHU.js";import"./useValueChanged-1wblBHwY.js";import"./CollapsiblePanel-BBfKXcAF.js";import"./MultiColumnSortDialog-CFCdo4Nh.js";import"./MenuTrigger-C9hbuv7A.js";import"./CompositeItem-B8KMobiC.js";import"./ToolbarRootContext-CDgHazHY.js";import"./getDisabledMountTransitionStyles-hHW3P6En.js";import"./getPseudoElementBounds-BHzfj_4b.js";import"./chevron-down-n8kYFotX.js";import"./index-DQiInoFX.js";import"./error-CIQ5NIBk.js";import"./BaseCbacBanner-BF2X8on1.js";import"./makeExternalStore-DH9SaGtV.js";import"./Tooltip-DvI37wGo.js";import"./PopoverPopup-BW2-1mOh.js";import"./toNumber-BnUSw4ET.js";import"./tick-Z31rtQQN.js";import"./DropdownField-dRPK3w48.js";import"./withOsdkMetrics-GMU0XdN8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

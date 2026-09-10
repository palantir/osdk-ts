import{j as r}from"./iframe-ByMeZtzX.js";import{O as b}from"./object-table-BWfDz0us.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B3z12Jii.js";import{u as g}from"./useOsdkClient-ixFLeVu3.js";import"./preload-helper-CKCWlQAf.js";import"./Table-CJnRggrL.js";import"./index-MjIH22RC.js";import"./Dialog-ZxxUTcFp.js";import"./cross-BL14zVVR.js";import"./svgIconContainer-BWYJe8Lc.js";import"./useBaseUiId-COE4qdfZ.js";import"./InternalBackdrop-Dunp36dg.js";import"./composite-BJmqHe58.js";import"./index-C5DhJsVj.js";import"./index-CGEFtaju.js";import"./index-BWU4Zziw.js";import"./useEventCallback-CvBku6w-.js";import"./SkeletonBar-DKliZ6jy.js";import"./LoadingCell-By3X5tWM.js";import"./ColumnConfigDialog-BkjViHOX.js";import"./DraggableList-ujhsv7NO.js";import"./search-Cq1vvGyL.js";import"./Input-Cu1JHp0_.js";import"./useControlled-DCuR4lHr.js";import"./Button-CfzUE4zU.js";import"./small-cross-C4a4JTK6.js";import"./ActionButton-DhKaPnov.js";import"./Checkbox-WAVkAh-5.js";import"./useValueChanged-D09un0L_.js";import"./CollapsiblePanel-CD29H3XJ.js";import"./MultiColumnSortDialog-BkGokrZQ.js";import"./MenuTrigger-DDD8T7fc.js";import"./CompositeItem-CEWc-TNz.js";import"./ToolbarRootContext-B0lEY-MF.js";import"./getDisabledMountTransitionStyles-SuR5eTaW.js";import"./getPseudoElementBounds-DVrDM1RK.js";import"./chevron-down-Chsl7nyR.js";import"./index-B41_CCIn.js";import"./error-yKJFbcKE.js";import"./BaseCbacBanner-D7vjhjJY.js";import"./makeExternalStore-DbH4cGZ0.js";import"./Tooltip-CP2jx6MZ.js";import"./PopoverPopup-CpgQFEX8.js";import"./debounce-BUN5jtxl.js";import"./tick-DcrvbN3Y.js";import"./DropdownField-8MU5Z2g6.js";import"./isEqual-DIZ47AXY.js";import"./withOsdkMetrics-CJVxpJaf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

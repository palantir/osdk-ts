import{j as r}from"./iframe-Cf0qyGmO.js";import{O as b}from"./object-table-B3dUEJgW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C5aBH6p0.js";import{u as g}from"./useOsdkClient-Blulg0DK.js";import"./preload-helper-FPWMSdmp.js";import"./Table-C96eoQ6L.js";import"./index-BgodPvXa.js";import"./Dialog-1ooC9KhB.js";import"./cross-Dw3cMUV6.js";import"./svgIconContainer-Cf6GYh8C.js";import"./useBaseUiId-BYXJoihF.js";import"./InternalBackdrop-Cr8_GTkt.js";import"./composite-C4psFksR.js";import"./index-vIhG0vhZ.js";import"./index-_vrq9vUl.js";import"./index-DcVAYh3u.js";import"./useEventCallback-D6E5ELqq.js";import"./SkeletonBar-B3eK4lrr.js";import"./LoadingCell-zmT-jdAw.js";import"./ColumnConfigDialog-BiFwCQUt.js";import"./DraggableList-CfAVftDP.js";import"./search-CjtKZYOm.js";import"./Input-DeGiuUjm.js";import"./useControlled-BC5mDRRe.js";import"./Button-QXRQZjdg.js";import"./small-cross-BtxyZWiR.js";import"./ActionButton-CagVTzlG.js";import"./Checkbox-CYDFVU58.js";import"./useValueChanged-Iv8KZjJ4.js";import"./CollapsiblePanel-CzQfHLf4.js";import"./MultiColumnSortDialog-vANMZoGL.js";import"./MenuTrigger-3jyGR3ne.js";import"./CompositeItem-Hv8dpGL2.js";import"./ToolbarRootContext-BEgrRK88.js";import"./getDisabledMountTransitionStyles-D1czWqQx.js";import"./getPseudoElementBounds-D7l6Y_as.js";import"./chevron-down-CciGsrf9.js";import"./index-DsFZ6bc6.js";import"./error-CneFkgZH.js";import"./BaseCbacBanner-CF3yMDO2.js";import"./makeExternalStore-Do5TdYdF.js";import"./Tooltip-D8djcuHS.js";import"./PopoverPopup-CAL-bmct.js";import"./debounce-qcOHSgKC.js";import"./tick-YNlQehLt.js";import"./DropdownField-BNhZxXTj.js";import"./isEqual-zZcIegst.js";import"./withOsdkMetrics-T_QycJJf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

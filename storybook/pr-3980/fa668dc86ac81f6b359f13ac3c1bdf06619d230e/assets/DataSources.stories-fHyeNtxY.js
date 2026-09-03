import{j as r}from"./iframe-BV--DL-R.js";import{O as b}from"./object-table-DQHNYxoz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-esbzKQoF.js";import{u as g}from"./useOsdkClient-BpiaH7Up.js";import"./preload-helper-BfGADaHb.js";import"./Table-7uiN3oSh.js";import"./index-CpBKC5uG.js";import"./Dialog-CebkHvWH.js";import"./cross-D8EsCuc2.js";import"./svgIconContainer-vnkw8afj.js";import"./useBaseUiId-rbddndRR.js";import"./InternalBackdrop-A29j3Jv_.js";import"./composite-CQeJ_a4C.js";import"./index-EXqXv7zU.js";import"./index-B1MBKIV9.js";import"./index-BxGUdqqq.js";import"./useEventCallback-DLQ-P11x.js";import"./SkeletonBar-CQF-UYPc.js";import"./LoadingCell-C4WppctV.js";import"./ColumnConfigDialog-RLeotKr6.js";import"./DraggableList-CqO_EFJB.js";import"./search-BMQtt1GF.js";import"./Input-CryKSl2-.js";import"./useControlled-CdeR330J.js";import"./Button-D-B9BslW.js";import"./small-cross-DRxw8mHr.js";import"./ActionButton-kVCpi8C7.js";import"./Checkbox-BctEX42o.js";import"./useValueChanged-CJeYGrcH.js";import"./CollapsiblePanel-S4FPv7iH.js";import"./MultiColumnSortDialog-BV6SioqH.js";import"./MenuTrigger-DwsQoCvq.js";import"./CompositeItem-CftYIfuS.js";import"./ToolbarRootContext-BKEdcjiV.js";import"./getDisabledMountTransitionStyles-B1E7AbBw.js";import"./getPseudoElementBounds-Bw9teYEa.js";import"./chevron-down-DLz3NkpP.js";import"./index-BG63AOsT.js";import"./error-CX8ETYns.js";import"./BaseCbacBanner-Cc424hnx.js";import"./makeExternalStore-CbX_-WII.js";import"./Tooltip-CVaWVMU1.js";import"./PopoverPopup-Dab1ytdf.js";import"./debounce-yjhqSwaL.js";import"./tick-BN4lQriL.js";import"./DropdownField-CqJYsTEQ.js";import"./isEqual-Dx0Yr_9W.js";import"./withOsdkMetrics-bx0PT80C.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

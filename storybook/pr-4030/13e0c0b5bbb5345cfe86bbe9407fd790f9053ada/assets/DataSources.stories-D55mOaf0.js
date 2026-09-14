import{j as r}from"./iframe-DNB7pKwx.js";import{O as b}from"./object-table-NhqJjfhz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-IAGY_3BF.js";import{u as g}from"./useOsdkClient-DLQVDV9-.js";import"./preload-helper-zsyjqppt.js";import"./Table-6ooXf9WE.js";import"./index-CO8W_kBY.js";import"./Dialog-CXIS6D4l.js";import"./cross-Z_Cymmuf.js";import"./svgIconContainer-C0yR1K-j.js";import"./useBaseUiId-CFk2utP-.js";import"./InternalBackdrop-CIfMg3nl.js";import"./composite-Bsz5rAKx.js";import"./index-Cw7J0xRI.js";import"./index-BWzAq-lx.js";import"./index-ByG_Kyzm.js";import"./useEventCallback-TZn-4x3i.js";import"./SkeletonBar-w-Qq4Ert.js";import"./LoadingCell-C9GMa5FX.js";import"./ColumnConfigDialog-nfmzFuly.js";import"./DraggableList-BNjC8l2T.js";import"./search-B9wO7VDL.js";import"./Input-D7pQEHrn.js";import"./useControlled-CZirorca.js";import"./Button-HIyOMk5a.js";import"./small-cross-Cm5tY5N1.js";import"./ActionButton-BDTx-Qbk.js";import"./Checkbox-Cw-ak7s5.js";import"./useValueChanged-CqJ9Z422.js";import"./CollapsiblePanel-B-v-suKQ.js";import"./MultiColumnSortDialog-BBCRPuIP.js";import"./MenuTrigger-ZMUMiY9J.js";import"./CompositeItem-DZ0O8IVJ.js";import"./ToolbarRootContext-Bsj6zD7P.js";import"./getDisabledMountTransitionStyles-C1tq72oP.js";import"./getPseudoElementBounds-C6kDNpun.js";import"./chevron-down-DkSb3Fq2.js";import"./index-B7VbqBWX.js";import"./error-DTTI1i1g.js";import"./BaseCbacBanner-6LauhKz6.js";import"./makeExternalStore-rGxpfiad.js";import"./Tooltip-CPCusgxO.js";import"./PopoverPopup-CBmLhNWS.js";import"./debounce-o7CNYw6i.js";import"./tick-avU0SFao.js";import"./DropdownField-BbJfNZO2.js";import"./isEqual-DDNJ2-ln.js";import"./withOsdkMetrics-aAvnjy0e.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

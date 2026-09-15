import{j as r}from"./iframe-DuUcAaP1.js";import{O as b}from"./object-table-Dm_KZ43D.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BPB2V9Fv.js";import{u as g}from"./useOsdkClient-CdO-nD-I.js";import"./preload-helper-Cljs7IBf.js";import"./Table-IFeDj94S.js";import"./index-BMAxCDX5.js";import"./Dialog-MJluOa7D.js";import"./cross-DA3pEoMX.js";import"./svgIconContainer-D6Wl3-m9.js";import"./useBaseUiId-CfMTCz35.js";import"./InternalBackdrop-vDVdwV4k.js";import"./composite-D0tirFPb.js";import"./index-C7wdlZ1Q.js";import"./index-C8RlHGqn.js";import"./index-1IuyBqrn.js";import"./useEventCallback-DzTIRB0b.js";import"./SkeletonBar-BSOPCtS0.js";import"./LoadingCell-C21YoYGE.js";import"./ColumnConfigDialog-glg7uWEe.js";import"./DraggableList-D65kdgez.js";import"./search-B301Jn8l.js";import"./Input-ZBAaH2zD.js";import"./useControlled-hj_GBxd9.js";import"./Button-DYK5XWRq.js";import"./small-cross-DsR2FxNg.js";import"./ActionButton-4IxyZ6p9.js";import"./Checkbox-CAqcqw4h.js";import"./useValueChanged-DC9rBEqy.js";import"./CollapsiblePanel-B9wkvjE1.js";import"./MultiColumnSortDialog-K78lmReX.js";import"./MenuTrigger-Bbfe8Edv.js";import"./CompositeItem-t4AJuCm-.js";import"./ToolbarRootContext-USv7Hl-3.js";import"./getDisabledMountTransitionStyles-BMs-QQOr.js";import"./getPseudoElementBounds-CV4Ydp2d.js";import"./chevron-down-DyPw48Bz.js";import"./index-BdrLvqg1.js";import"./error-CQ18bNi9.js";import"./BaseCbacBanner-Dh_Doq3I.js";import"./makeExternalStore-CsrMhPRl.js";import"./Tooltip-kBgFTss4.js";import"./PopoverPopup-RFQNSErN.js";import"./debounce-XJRfHy2s.js";import"./tick-DZ3AsDHy.js";import"./DropdownField-Cb0RW1j-.js";import"./isEqual-BatthdD_.js";import"./withOsdkMetrics-C2TwiXMB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

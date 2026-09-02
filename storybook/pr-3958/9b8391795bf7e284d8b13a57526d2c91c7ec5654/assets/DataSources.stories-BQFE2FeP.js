import{j as r}from"./iframe-CV7MwmCP.js";import{O as b}from"./object-table-Cj1nijnb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cb4Vww-5.js";import{u as g}from"./useOsdkClient-C63pRinH.js";import"./preload-helper-DaalMKrO.js";import"./Table-BJuxhHcS.js";import"./index-CcmSo4f0.js";import"./Dialog-BGtR0xP5.js";import"./cross-BCKmMZfz.js";import"./svgIconContainer-BUwlxwM3.js";import"./useBaseUiId-D02gbCJt.js";import"./InternalBackdrop-apLUccr2.js";import"./composite-C5wlKwIo.js";import"./index-Cbmw9Aiw.js";import"./index-DZAiGofL.js";import"./index-D1Ud-UQP.js";import"./useEventCallback-CBeA15IC.js";import"./SkeletonBar-B7jUP9zd.js";import"./LoadingCell-CnAgf7pz.js";import"./ColumnConfigDialog-BqSXyCAB.js";import"./DraggableList-ShbNYLF5.js";import"./search-ZA-JuIRw.js";import"./Input-LBPH7NI5.js";import"./useControlled-B_AlXpDe.js";import"./Button-DL3cpirA.js";import"./small-cross-CClaOzes.js";import"./ActionButton-DR2X-pvt.js";import"./Checkbox-_FZGFlQq.js";import"./useValueChanged-CgXUX70Z.js";import"./CollapsiblePanel-BHKHfMPs.js";import"./MultiColumnSortDialog-KMRCcWQd.js";import"./MenuTrigger-qmOJgo_k.js";import"./CompositeItem-DeeqYyog.js";import"./ToolbarRootContext-m0BDUoDq.js";import"./getDisabledMountTransitionStyles-dYTq3w9c.js";import"./getPseudoElementBounds-Dav5DWq0.js";import"./chevron-down-DSa8oKzx.js";import"./index-BT2TFY4S.js";import"./error-CMXtHiOW.js";import"./BaseCbacBanner-C3roT97X.js";import"./makeExternalStore-D2__KQ0O.js";import"./Tooltip-UQeFx1yB.js";import"./PopoverPopup-CtCkbput.js";import"./debounce-C_lpTgYJ.js";import"./tick-0LVn8dGI.js";import"./DropdownField-CaQvqdAI.js";import"./isEqual-DsMCDxpD.js";import"./withOsdkMetrics-B-y4GUW2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

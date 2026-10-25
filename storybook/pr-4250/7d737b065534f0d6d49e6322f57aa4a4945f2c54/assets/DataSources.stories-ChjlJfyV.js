import{j as r}from"./iframe-C9eTmg5F.js";import{O as b}from"./object-table-BFJt_XBe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D28KN-KB.js";import{u as g}from"./useOsdkClient-CNiGT0YI.js";import"./preload-helper-MBuTZogN.js";import"./Table-BD6TclSS.js";import"./index-Cl06-CY3.js";import"./Dialog-B4YghQDZ.js";import"./cross-BNf72m15.js";import"./svgIconContainer-B8-j9zbf.js";import"./useBaseUiId-CarAhcX4.js";import"./InternalBackdrop-CEAB_Tl8.js";import"./composite-BG0FW9Gv.js";import"./index-DawaRm_6.js";import"./index-UInLMRBx.js";import"./index-2Dxqnc05.js";import"./useEventCallback-CaSNRWxA.js";import"./SkeletonBar-jvvHiVWk.js";import"./LoadingCell-DCMe2S9E.js";import"./ColumnConfigDialog-Pa_A63wu.js";import"./DraggableList-DD40pty3.js";import"./search-BBX0widz.js";import"./Input-RYWRwt9M.js";import"./useControlled-D63t172P.js";import"./Button-CrIJmJlm.js";import"./small-cross-BTCn6zZs.js";import"./ActionButton-VZlfdBm7.js";import"./Checkbox-78UKRuuo.js";import"./useValueChanged-BVHy35zR.js";import"./CollapsiblePanel-B1UPkWfl.js";import"./MultiColumnSortDialog-DpJo-55X.js";import"./MenuTrigger-KK_Dd5KH.js";import"./CompositeItem-QTP5J2AO.js";import"./ToolbarRootContext-MN-0Ldxt.js";import"./getDisabledMountTransitionStyles-BTqLOmVB.js";import"./getPseudoElementBounds-CgTJwG5C.js";import"./chevron-down-BJBNlRqs.js";import"./index--xwF9EYW.js";import"./error-BYbnYzlx.js";import"./BaseCbacBanner-DokTRe_s.js";import"./makeExternalStore-CAiiZnZr.js";import"./Tooltip-qg3PMoFt.js";import"./PopoverPopup-D9bH8toe.js";import"./debounce-C6FqpP08.js";import"./tick-CF6J7PUl.js";import"./DropdownField-Cf4e64fv.js";import"./isEqual-BPwaLeUQ.js";import"./withOsdkMetrics-Dy0OWLdL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

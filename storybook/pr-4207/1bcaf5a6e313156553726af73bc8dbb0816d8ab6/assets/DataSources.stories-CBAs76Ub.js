import{j as r}from"./iframe-BxrMAPhN.js";import{O as b}from"./object-table-kLrWn1bD.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CAhYp7hh.js";import{u as g}from"./useOsdkClient-BmkTGWD1.js";import"./preload-helper-DrnFR1_M.js";import"./Table-_lbqKSTc.js";import"./index-3ce-DqIm.js";import"./Dialog-C8L9xW1b.js";import"./cross-CgUMfDbf.js";import"./svgIconContainer-BTC4I1jP.js";import"./useBaseUiId-CYhkk9Wl.js";import"./InternalBackdrop-fby99vEC.js";import"./composite-Dd7hy379.js";import"./index-C4XN9ow6.js";import"./index-DZWGTrRj.js";import"./index-CUS5I621.js";import"./useEventCallback-ztQWmBPn.js";import"./SkeletonBar-Dijlhnp9.js";import"./LoadingCell-Beq5gjYy.js";import"./ColumnConfigDialog-DCt_o6YG.js";import"./DraggableList-B_XL0fvE.js";import"./search-DDIdgg65.js";import"./Input-B49f-IH3.js";import"./useControlled-CBAJvoho.js";import"./Button-BHjA9vXD.js";import"./small-cross-DcC-nrRa.js";import"./ActionButton-CV_MAkW4.js";import"./Checkbox-ccqMIQBw.js";import"./useValueChanged-kVe0_w2P.js";import"./CollapsiblePanel-Dc01KugY.js";import"./MultiColumnSortDialog-DNdkPCtc.js";import"./MenuTrigger-Dpo_htYB.js";import"./CompositeItem-DrJtYX8s.js";import"./ToolbarRootContext-BseqN11S.js";import"./getDisabledMountTransitionStyles-CmE2wGB-.js";import"./getPseudoElementBounds-DT1sYSxK.js";import"./chevron-down-vMhLf0Yn.js";import"./index-B8D9hLY9.js";import"./error-AaI7Sssv.js";import"./BaseCbacBanner-CLTovdFm.js";import"./makeExternalStore-BOIpe8LX.js";import"./Tooltip-NlgzcR6l.js";import"./PopoverPopup-VtScEPpW.js";import"./debounce-B6IFkGZ6.js";import"./tick-F7U5QknT.js";import"./DropdownField-Dn-sPpxO.js";import"./isEqual-BBx3w4Uo.js";import"./withOsdkMetrics-PY8DhDl3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

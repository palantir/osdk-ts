import{j as r}from"./iframe-Bm9OwjZM.js";import{O as b}from"./object-table-BdOtMKtj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DlTH6Xhu.js";import{u as g}from"./useOsdkClient-CN1s-vKt.js";import"./preload-helper-Bxv9zFay.js";import"./Table-C5d9fcW1.js";import"./index-CObn2eDC.js";import"./Dialog-YqtByMUq.js";import"./cross-Bo0UY3wT.js";import"./svgIconContainer-CGp9KnXA.js";import"./useBaseUiId-D5G-UFce.js";import"./InternalBackdrop-CSTuoliM.js";import"./composite-CV2pmKck.js";import"./index-CYRBkEMI.js";import"./index-CZ4br5bx.js";import"./index-D3K1YH6u.js";import"./useEventCallback-C1sCbiB1.js";import"./SkeletonBar-C4tbzHrf.js";import"./LoadingCell-Bob79hrl.js";import"./ColumnConfigDialog-BEpELY0Q.js";import"./DraggableList-aiQUDllv.js";import"./search-CMsxyB6o.js";import"./Input-BBarF8jI.js";import"./useControlled-DagSlxnt.js";import"./Button-DH8D07bO.js";import"./small-cross-CpEGyO2C.js";import"./ActionButton-b5H9Wsoo.js";import"./Checkbox-C42BhasO.js";import"./useValueChanged-BziSxweC.js";import"./CollapsiblePanel-CSPGJmMi.js";import"./MultiColumnSortDialog-DcTDhB5S.js";import"./MenuTrigger-N4nRkaQI.js";import"./CompositeItem-Dks46NaI.js";import"./ToolbarRootContext-BzeWV0Ij.js";import"./getDisabledMountTransitionStyles-DW6BIlyq.js";import"./getPseudoElementBounds-Dw9iwve0.js";import"./chevron-down-Ykcn_Zyn.js";import"./index-DzghPfIw.js";import"./error-CCuJWU5M.js";import"./BaseCbacBanner-CCrrjuO8.js";import"./makeExternalStore-B2bSqcMJ.js";import"./Tooltip-Ca0v0yFB.js";import"./PopoverPopup-LXlLsWEU.js";import"./debounce-Cg2J-NCz.js";import"./tick-C0wxgn1E.js";import"./DropdownField-tU79IoE9.js";import"./isEqual-lfYKGgFL.js";import"./withOsdkMetrics-OOsnIMnD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

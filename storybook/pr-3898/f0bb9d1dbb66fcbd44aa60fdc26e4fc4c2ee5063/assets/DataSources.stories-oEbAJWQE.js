import{j as r}from"./iframe-BYRqOhSr.js";import{O as b}from"./object-table-C1zu1WDG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B4qysG9J.js";import{u as g}from"./useOsdkClient-DTSr5eBl.js";import"./preload-helper-DLGTrBKR.js";import"./Table-Dgu0q0Tw.js";import"./index-CSSebMeO.js";import"./Dialog-BholJzd6.js";import"./cross-Cdpkq547.js";import"./svgIconContainer-wW0CqYPP.js";import"./useBaseUiId-BFjTC6ra.js";import"./InternalBackdrop-DCg-_Sni.js";import"./composite-0rukfXMW.js";import"./index--Qkxp9Ch.js";import"./index-Crj6XLuG.js";import"./index-D9v2WBqW.js";import"./useEventCallback-D71ScrdE.js";import"./SkeletonBar-DvfqZoaT.js";import"./LoadingCell-Co7MMWAw.js";import"./ColumnConfigDialog-aTcyzx3L.js";import"./DraggableList-CtySVNWz.js";import"./search-DIpxBZ8i.js";import"./Input-DR73XI4T.js";import"./useControlled-BLCq1h60.js";import"./isEqual-3Z6cF9qG.js";import"./isObject-CcdWjjol.js";import"./Button-cKG_17Qb.js";import"./ActionButton-ExC3cibU.js";import"./Checkbox-CdERxcMz.js";import"./useValueChanged-C9z6EyUU.js";import"./CollapsiblePanel-AsX3Kr6W.js";import"./MultiColumnSortDialog-LB8bNOJz.js";import"./MenuTrigger-CYElN_HF.js";import"./CompositeItem-mcJO_U5b.js";import"./ToolbarRootContext-D6_V_hS-.js";import"./getDisabledMountTransitionStyles-v4JFZ5lq.js";import"./getPseudoElementBounds-DL5KJd8v.js";import"./chevron-down-DUmlt8XR.js";import"./index-CKEL1RmN.js";import"./error-DF1K1fTv.js";import"./BaseCbacBanner-BLUaN58l.js";import"./makeExternalStore-RjmvQ4XE.js";import"./Tooltip-CIIn7ppo.js";import"./PopoverPopup-LBvyw9jr.js";import"./toNumber-DsQD2KWL.js";import"./tick-DgN8qV2O.js";import"./DropdownField-DcXEiZFu.js";import"./withOsdkMetrics-BiRr5uSt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

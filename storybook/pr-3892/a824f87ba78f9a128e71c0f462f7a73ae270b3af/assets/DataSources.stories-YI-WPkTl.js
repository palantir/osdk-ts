import{j as r}from"./iframe-CjrvQ8Eq.js";import{O as b}from"./object-table-D_9iwXl4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DI24Zq18.js";import{u as g}from"./useOsdkClient-fvP73z5H.js";import"./preload-helper-BPg6l9d3.js";import"./Table-CmY1XOIx.js";import"./index-DB-uoMhr.js";import"./Dialog-DBs5NoZ0.js";import"./cross-CZEvBoD0.js";import"./svgIconContainer-CnoHMalv.js";import"./useBaseUiId-BUaVaBCu.js";import"./InternalBackdrop-Kq278Mqp.js";import"./composite-BdOz1pLd.js";import"./index-BMCwP6lU.js";import"./index-AcJBEuLY.js";import"./index-CFwdS4V_.js";import"./useEventCallback-ClvtAijH.js";import"./SkeletonBar-AiGWLobO.js";import"./LoadingCell-B03LsPyo.js";import"./ColumnConfigDialog-PWQsRQoY.js";import"./DraggableList-ByPe5g9-.js";import"./search-DnFytF8-.js";import"./Input-Pixh_UaU.js";import"./useControlled-nb9nN5WZ.js";import"./Button-BZpeRQKg.js";import"./small-cross-DEflC2UP.js";import"./ActionButton-zDJ9Z3uf.js";import"./Checkbox-D5b8v0Kz.js";import"./useValueChanged-CNswg7ar.js";import"./CollapsiblePanel-Dus4Tcn8.js";import"./MultiColumnSortDialog-BnixZ0ma.js";import"./MenuTrigger-BbIO4AR0.js";import"./CompositeItem-B9gYo-S0.js";import"./ToolbarRootContext-DcQsKFzE.js";import"./getDisabledMountTransitionStyles-zHfXsdqn.js";import"./getPseudoElementBounds-Ba141Nqq.js";import"./chevron-down-CKpFjGQX.js";import"./index-BcucvAIU.js";import"./error-tjFs6guL.js";import"./BaseCbacBanner-D8ERIvGi.js";import"./makeExternalStore-DfWi3bI5.js";import"./Tooltip-Ca7wRcoH.js";import"./PopoverPopup-CGi8wjo9.js";import"./debounce-B7Y7XFK0.js";import"./tick-CSctEYB7.js";import"./DropdownField-C9RkTgUh.js";import"./isEqual-BDvX4IKC.js";import"./withOsdkMetrics-DofP_XMa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

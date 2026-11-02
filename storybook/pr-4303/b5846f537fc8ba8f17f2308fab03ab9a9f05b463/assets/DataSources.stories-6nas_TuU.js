import{j as r}from"./iframe-gvVvTYdX.js";import{O as b}from"./object-table-DFjBN_se.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CgY_xdYl.js";import{u as g}from"./useOsdkClient-Bxmva0H0.js";import"./preload-helper-C4B8pL_K.js";import"./Table-1Rz47czG.js";import"./index-BKV8xI6r.js";import"./Dialog-DBoNWch_.js";import"./cross-DXV_E_3w.js";import"./svgIconContainer-CbGtxYsB.js";import"./useBaseUiId-fY3jSIio.js";import"./InternalBackdrop-CNqwZwO_.js";import"./composite-U12YfSVj.js";import"./index-DFGGqFfD.js";import"./index-Y-Z5WvlR.js";import"./index-DCXWz-bU.js";import"./useEventCallback-DfimSMM1.js";import"./SkeletonBar-CVnxkGMs.js";import"./LoadingCell-DpBxHhHx.js";import"./ColumnConfigDialog-CWwBUXFN.js";import"./DraggableList-qN4wxLC1.js";import"./search-BpBkWvYy.js";import"./Input-B5s_ufnw.js";import"./useControlled-Cz01Hj64.js";import"./Button-CM6iPOlW.js";import"./small-cross-BV4qub4t.js";import"./ActionButton-BgSv7ShY.js";import"./Checkbox-DYgYeeFL.js";import"./useValueChanged-C3nivXet.js";import"./CollapsiblePanel-nOE5zCVh.js";import"./MultiColumnSortDialog-BdNNmNBG.js";import"./MenuTrigger-Q0BQc2_7.js";import"./CompositeItem-Ceyb7lxq.js";import"./ToolbarRootContext-_TM7bc4T.js";import"./getDisabledMountTransitionStyles-By9d2gS-.js";import"./getPseudoElementBounds-VG4Ji2N1.js";import"./chevron-down-DNhCoDCr.js";import"./index-Ct7dCOO5.js";import"./error-oahmhnhI.js";import"./BaseCbacBanner-D7bzuDy6.js";import"./makeExternalStore-eDqNkvsc.js";import"./Tooltip-gD2N15mM.js";import"./PopoverPopup-BLoCic10.js";import"./debounce-NgHrS01x.js";import"./tick-DcPidvDM.js";import"./DropdownField-CySas3qf.js";import"./isEqual-DTkPEdjj.js";import"./withOsdkMetrics-DQiolCAA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

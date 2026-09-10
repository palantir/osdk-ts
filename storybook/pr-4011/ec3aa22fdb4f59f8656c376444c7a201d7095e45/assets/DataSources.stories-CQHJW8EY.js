import{j as r}from"./iframe-DdU1btI5.js";import{O as b}from"./object-table-D44as4zk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BfzJlni0.js";import{u as g}from"./useOsdkClient-DAa6LI-X.js";import"./preload-helper-CJIdcoC_.js";import"./Table-B5RIyH7v.js";import"./index-Bjdg2prT.js";import"./Dialog-BehTEpFP.js";import"./cross-DezMrsVo.js";import"./svgIconContainer-CevOR6cS.js";import"./useBaseUiId-BlXBlP0f.js";import"./InternalBackdrop-Btm-Z_2t.js";import"./composite-DKrCSbZ1.js";import"./index-CyCoQlJK.js";import"./index-CzZ9sR41.js";import"./index-BG8iFfop.js";import"./useEventCallback-CG7YyhyL.js";import"./SkeletonBar-BcdtXClT.js";import"./LoadingCell-D0aLZKOH.js";import"./ColumnConfigDialog-DWdFLUlW.js";import"./DraggableList-C0JVloPf.js";import"./search-DFTmIh4d.js";import"./Input-DBMe1jVC.js";import"./useControlled-BwHcuxO_.js";import"./Button-DOSUJ3M5.js";import"./small-cross-Qx7h4_xT.js";import"./ActionButton-WG4ypQCg.js";import"./Checkbox-BsmxXmhs.js";import"./useValueChanged-CZIiffVu.js";import"./CollapsiblePanel-DJJzQ09o.js";import"./MultiColumnSortDialog-mzJ0a9dw.js";import"./MenuTrigger-D6zsRA52.js";import"./CompositeItem-Dd62h_6-.js";import"./ToolbarRootContext--cZJ7PMX.js";import"./getDisabledMountTransitionStyles-BV0-CpFZ.js";import"./getPseudoElementBounds-DvL2rk6a.js";import"./chevron-down-BBg4HQxv.js";import"./index-I-zAiBXy.js";import"./error-NWRP_Q29.js";import"./BaseCbacBanner-B54bFTJG.js";import"./makeExternalStore-BXvxNDLv.js";import"./Tooltip-DNChs3yX.js";import"./PopoverPopup-DiH0uZZ4.js";import"./debounce-DZDPioJF.js";import"./tick-DBSn5IWS.js";import"./DropdownField-Fpq8W5FQ.js";import"./isEqual-Cy9j0AGB.js";import"./withOsdkMetrics--yltK86k.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

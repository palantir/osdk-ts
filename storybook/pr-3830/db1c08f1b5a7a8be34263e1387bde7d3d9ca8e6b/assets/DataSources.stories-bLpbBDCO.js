import{j as r}from"./iframe-BRm4vCFN.js";import{O as b}from"./object-table-D8m4l83f.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-HRy2qOlZ.js";import{u as g}from"./useOsdkClient-BDarQYfA.js";import"./preload-helper-B8qSzsyn.js";import"./Table-CaY8BvM5.js";import"./index-B7ENbfBC.js";import"./Dialog-btN0iOgg.js";import"./cross-DPDrF0U4.js";import"./svgIconContainer-OFMjb_Rs.js";import"./useBaseUiId-B7fRGxsO.js";import"./InternalBackdrop-BaGiZk1Y.js";import"./composite-wKCobVJO.js";import"./index-CnpvZLeY.js";import"./index-CpqlfQCh.js";import"./index-CWfM76cW.js";import"./useEventCallback-JHTQureV.js";import"./SkeletonBar-C6qn1HDI.js";import"./LoadingCell-Djw5Rm1L.js";import"./ColumnConfigDialog-DxbEr4NX.js";import"./DraggableList-I3NGg1TF.js";import"./search-ntbcNAhn.js";import"./Input-BpwNJM-I.js";import"./useControlled-CEOSMcVQ.js";import"./isEqual-C63Qhdu7.js";import"./isObject-CrHRd0xf.js";import"./Button-Bb-87jsh.js";import"./ActionButton-DD0zQbbI.js";import"./Checkbox-Dh5u6bQZ.js";import"./useValueChanged--EnHqbhq.js";import"./CollapsiblePanel-DWM-Z1Ph.js";import"./MultiColumnSortDialog-Bpnx2HZs.js";import"./MenuTrigger-BrBHYI-t.js";import"./CompositeItem-BNvDCPgA.js";import"./ToolbarRootContext-D1wgTrKR.js";import"./getDisabledMountTransitionStyles-D1IPv3z8.js";import"./getPseudoElementBounds-A6c4Mra_.js";import"./chevron-down-Cm7ysla1.js";import"./index-rovaKXjR.js";import"./error-BSqFGqFy.js";import"./BaseCbacBanner-CGSGQvZ8.js";import"./makeExternalStore-BzfExdb1.js";import"./Tooltip-CohfXHDn.js";import"./PopoverPopup-BggDBR68.js";import"./toNumber-DHFLqzDS.js";import"./tick-bUP2FK1I.js";import"./DropdownField-Dgc_bssU.js";import"./withOsdkMetrics-B9Su6DFN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

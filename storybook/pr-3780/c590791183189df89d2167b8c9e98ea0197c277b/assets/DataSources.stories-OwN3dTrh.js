import{j as r}from"./iframe-BZATJdBl.js";import{O as b}from"./object-table--pr_SZMY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dre9Bp0S.js";import{u as g}from"./useOsdkClient-CGBvXPC0.js";import"./preload-helper-BVfEAMh5.js";import"./Table-BSYnIaMJ.js";import"./index-BeDf9ptc.js";import"./Dialog-FZKelXwe.js";import"./cross-nok40gDW.js";import"./svgIconContainer-NoIJiYrj.js";import"./useBaseUiId-Z8K4HKfz.js";import"./InternalBackdrop-CYBXQb2P.js";import"./composite-P4bAAMDx.js";import"./index-XwTUwDpB.js";import"./index-CoEA7CVQ.js";import"./index-C59TsRZT.js";import"./useEventCallback-CUrsDJxK.js";import"./SkeletonBar-9B_vAWDx.js";import"./LoadingCell-DuUkJxz0.js";import"./ColumnConfigDialog-D6vMbmg7.js";import"./DraggableList-COPo4Mt-.js";import"./search-BVSZkFup.js";import"./Input-DEFEDUlG.js";import"./useControlled-CxH-Pm8q.js";import"./Button-NS3-hSgq.js";import"./small-cross-BXlzLQWB.js";import"./ActionButton-l5xHGsjV.js";import"./Checkbox-CTpOLrND.js";import"./useValueChanged-7MvwWlc1.js";import"./CollapsiblePanel-mfZGtD1p.js";import"./MultiColumnSortDialog-BbQi3aFj.js";import"./MenuTrigger-DK5e9JTM.js";import"./CompositeItem-CaX5c1ho.js";import"./ToolbarRootContext-CQ2TQyf5.js";import"./getDisabledMountTransitionStyles-DuQrfMvW.js";import"./getPseudoElementBounds-CtjWpK6C.js";import"./chevron-down-CrGAJBeU.js";import"./index-CmoMq8YN.js";import"./error-p84hxrGR.js";import"./BaseCbacBanner-DVjXQZ88.js";import"./makeExternalStore-DwSzgSOC.js";import"./Tooltip-BjgP057t.js";import"./PopoverPopup-CEXobH7N.js";import"./debounce-DDZCEkLF.js";import"./tick-B46Qzoeg.js";import"./DropdownField-DH9_Dn7d.js";import"./isEqual-DDkLnefP.js";import"./withOsdkMetrics-DkVKm51c.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

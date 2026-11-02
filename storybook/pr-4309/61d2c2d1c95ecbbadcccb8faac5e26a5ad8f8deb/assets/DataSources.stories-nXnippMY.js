import{j as r}from"./iframe-CHKcZgb7.js";import{O as b}from"./object-table-CyRHoSq9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DZYV-riS.js";import{u as g}from"./useOsdkClient-DiOlSmjl.js";import"./preload-helper-ebqo0JEM.js";import"./Table-DpgWkMa-.js";import"./index-BACJcPnF.js";import"./Dialog-CScZ8Bvj.js";import"./cross-Dk2dXrK7.js";import"./svgIconContainer-DY2QJrYz.js";import"./useBaseUiId-Cxc3vcrN.js";import"./InternalBackdrop-CusfxTNT.js";import"./composite-B6ohSiOB.js";import"./index-B0dGrXCM.js";import"./index-DHY3CWWm.js";import"./index-B7FvQMnW.js";import"./useEventCallback-5QUQz0lM.js";import"./SkeletonBar-BfLhsQBW.js";import"./LoadingCell-BztFPbfy.js";import"./ColumnConfigDialog-BKudSkg0.js";import"./DraggableList-C9WXx5Ua.js";import"./search-B4aplnsV.js";import"./Input-ByMels_v.js";import"./useControlled-aYGdNSsu.js";import"./Button-CiSWKai0.js";import"./small-cross-CG4ID_KO.js";import"./ActionButton-DTs1yjbe.js";import"./Checkbox-DowlVZ3I.js";import"./useValueChanged-CeGdvOdh.js";import"./CollapsiblePanel-CoovcH6q.js";import"./MultiColumnSortDialog-Bs9s_Iyt.js";import"./MenuTrigger-dpgwmopl.js";import"./CompositeItem-Brzkx-fO.js";import"./ToolbarRootContext-C-44hQT7.js";import"./getDisabledMountTransitionStyles-Dg77_XEZ.js";import"./getPseudoElementBounds-CDFDrqWX.js";import"./chevron-down-rruGkt0O.js";import"./index-BMxA9FcH.js";import"./error-3jD31VOr.js";import"./BaseCbacBanner-CrOdu8cS.js";import"./makeExternalStore-BWTgA4er.js";import"./Tooltip-D7qyJWee.js";import"./PopoverPopup-DZPcNR2_.js";import"./debounce-BI5dqIT5.js";import"./tick-Cbk0zspt.js";import"./DropdownField-JI6iE4-V.js";import"./isEqual-DmU6FREb.js";import"./withOsdkMetrics-CfcXJ1po.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

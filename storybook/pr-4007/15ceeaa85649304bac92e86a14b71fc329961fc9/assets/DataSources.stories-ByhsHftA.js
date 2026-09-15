import{j as r}from"./iframe-DL6bhntV.js";import{O as b}from"./object-table-CKdJoKQA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CLI-t_h1.js";import{u as g}from"./useOsdkClient-7LhcF-kZ.js";import"./preload-helper-Bzx1Zh_S.js";import"./Table-RqC9D474.js";import"./index-B8ftOcx-.js";import"./Dialog-9nwm2v7g.js";import"./cross-DyIDhlr1.js";import"./svgIconContainer-DSWQOkNx.js";import"./useBaseUiId-llhhqJOe.js";import"./InternalBackdrop-Bkvjmy8r.js";import"./composite-BF5DU4SU.js";import"./index-Bs7nlaiS.js";import"./index-DJ4ha6JU.js";import"./index-D_yYkCV1.js";import"./useEventCallback-CBeRn_5S.js";import"./SkeletonBar-DVq5tV_s.js";import"./LoadingCell-Ct-8OoY3.js";import"./ColumnConfigDialog-D4KL29wS.js";import"./DraggableList-OOuzfX9H.js";import"./search-DfezW5-F.js";import"./Input-BPBmB1lT.js";import"./useControlled-DiqKmz4m.js";import"./Button-B0CnBgjK.js";import"./small-cross-BUQz1fKF.js";import"./ActionButton-BzrCCI4n.js";import"./Checkbox-lnE4-5VB.js";import"./useValueChanged-CDlkl3OD.js";import"./CollapsiblePanel-DoYVi0Of.js";import"./MultiColumnSortDialog-Ddp0c38Q.js";import"./MenuTrigger-wuUZ3pYU.js";import"./CompositeItem-Bp1V_qz6.js";import"./ToolbarRootContext-CvpBNR1-.js";import"./getDisabledMountTransitionStyles-CUMX81wn.js";import"./getPseudoElementBounds-vxtOSGfI.js";import"./chevron-down-B213Fcrt.js";import"./index-DteBpDZt.js";import"./error-BD8Fuc9b.js";import"./BaseCbacBanner-DBz0MOp-.js";import"./makeExternalStore-OJ90FHcV.js";import"./Tooltip-CpYMs0DP.js";import"./PopoverPopup-CS8wg6vA.js";import"./debounce-B_yVPQMd.js";import"./tick-BHAOkmD3.js";import"./DropdownField-DNbepfr2.js";import"./isEqual-pvfu54a5.js";import"./withOsdkMetrics-D6wPv70n.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

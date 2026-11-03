import{j as r}from"./iframe-B6Lta6LP.js";import{O as b}from"./object-table-HO2pwWul.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CdBhTDoM.js";import{u as g}from"./useOsdkClient-LIxqnJR5.js";import"./preload-helper-CYbl2xdJ.js";import"./Table-Ct_buXIn.js";import"./index-tKxTuoVH.js";import"./Dialog-ByWbVagS.js";import"./cross-CAJFEHXr.js";import"./svgIconContainer-DPd9W8TR.js";import"./useBaseUiId-LeTLb_RS.js";import"./InternalBackdrop-CD_hYGA0.js";import"./composite-CXu030fZ.js";import"./index-DW8Y-83r.js";import"./index-C1Xd9eEP.js";import"./index-SAyxKn2n.js";import"./useEventCallback-CFBWhOz1.js";import"./SkeletonBar-CBfyp1TB.js";import"./LoadingCell-CtPX3UjT.js";import"./ColumnConfigDialog-CP4zGZfj.js";import"./DraggableList-Cigjyxxm.js";import"./search-CJ2Z9OiI.js";import"./Input-CNTN6kGr.js";import"./useControlled-Db4l5j0n.js";import"./Button-CDP0EtTw.js";import"./small-cross-CYXu3PwF.js";import"./ActionButton-CjKN-LnI.js";import"./Checkbox-Ch2RRzT2.js";import"./useValueChanged-Beo3vz_X.js";import"./CollapsiblePanel-C3KmqiQ1.js";import"./MultiColumnSortDialog-FC3kYSVd.js";import"./MenuTrigger-CEQn7r1g.js";import"./CompositeItem-aYCSoUde.js";import"./ToolbarRootContext-BwcsMBBX.js";import"./getDisabledMountTransitionStyles-dUaBn5kl.js";import"./getPseudoElementBounds-Cie9YPdh.js";import"./chevron-down-DP_Haie7.js";import"./index-BIznb_cm.js";import"./error-B_rV--z6.js";import"./BaseCbacBanner-BQ6d8Rvc.js";import"./makeExternalStore-BxbrneS1.js";import"./Tooltip-C9QEBkZZ.js";import"./PopoverPopup-Crm0F1MF.js";import"./debounce-DcTWGXcx.js";import"./tick-CR4FCYn3.js";import"./DropdownField-IaATl85X.js";import"./isEqual-DX8PeEAn.js";import"./withOsdkMetrics-D256mKJK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

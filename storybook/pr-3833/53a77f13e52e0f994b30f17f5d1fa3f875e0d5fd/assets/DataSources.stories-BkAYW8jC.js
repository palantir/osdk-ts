import{j as r}from"./iframe-CASB9tDT.js";import{O as b}from"./object-table-BFB1azMa.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BoHwirKK.js";import{u as g}from"./useOsdkClient-tq_rUodS.js";import"./preload-helper-BT4qy2DG.js";import"./Table-BlTt_xRt.js";import"./index-CaZjzwHl.js";import"./Dialog-Cwvfctts.js";import"./cross-BP6wgmXe.js";import"./svgIconContainer-D1NrwXBl.js";import"./useBaseUiId-CuUj_9P0.js";import"./InternalBackdrop-3KbW5bhi.js";import"./composite-CqdSrGVi.js";import"./index-DZkiBKN3.js";import"./index-SAn_G_wi.js";import"./index-quqksDWM.js";import"./useEventCallback-CbF17oj4.js";import"./SkeletonBar-BHscMRO0.js";import"./LoadingCell-B9WC_5s1.js";import"./ColumnConfigDialog-x-yNNTQb.js";import"./DraggableList-mPjKq5O9.js";import"./search-CfQ11krI.js";import"./Input-BW7gIe1E.js";import"./useControlled-DLW506J-.js";import"./isEqual-BtBzEQrf.js";import"./isObject-BlIY9m2I.js";import"./Button-BltQyjod.js";import"./ActionButton-DEKNXljN.js";import"./Checkbox-4jGkecAY.js";import"./useValueChanged-CaRDSGst.js";import"./CollapsiblePanel-Dl72Nyb5.js";import"./MultiColumnSortDialog-Buzy_vuM.js";import"./MenuTrigger-Q3VAWSQF.js";import"./CompositeItem-DTyFfYKq.js";import"./ToolbarRootContext-CqYiE2F9.js";import"./getDisabledMountTransitionStyles-CHPi5laV.js";import"./getPseudoElementBounds-DHd3hF1S.js";import"./chevron-down-B1bduZ3e.js";import"./index-6uAsZ-h5.js";import"./error-BrX8f-50.js";import"./BaseCbacBanner-Beigk8Y9.js";import"./makeExternalStore-BTh_nx7a.js";import"./Tooltip-CBVmdqZb.js";import"./PopoverPopup-DjMVUncd.js";import"./toNumber-s3UxQR4Z.js";import"./tick-BZot9d_H.js";import"./DropdownField-DcpakKzL.js";import"./withOsdkMetrics-C77tE57v.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

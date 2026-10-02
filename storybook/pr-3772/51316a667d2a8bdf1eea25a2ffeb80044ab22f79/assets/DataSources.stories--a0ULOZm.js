import{j as r}from"./iframe-CdV0oMQK.js";import{O as b}from"./object-table-PUOn78Wk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-SuGUxsiz.js";import{u as g}from"./useOsdkClient-CxdzKQBX.js";import"./preload-helper-DYnb1G2Z.js";import"./Table-PzGbpO_j.js";import"./index-CDOi726F.js";import"./Dialog-B0ebku9n.js";import"./cross-DjfMhKqA.js";import"./svgIconContainer-Db8D1oyf.js";import"./useBaseUiId-qoWBNaJE.js";import"./InternalBackdrop-BqcAGkPw.js";import"./composite-B01ubv1I.js";import"./index-DgVn8Y3N.js";import"./index-CtEXs2m1.js";import"./index-C40UMVEa.js";import"./useEventCallback-BZlczu6G.js";import"./SkeletonBar-CtDTL4xI.js";import"./LoadingCell-BXPO2_aI.js";import"./ColumnConfigDialog-LtsebjWK.js";import"./DraggableList-Cc6rUBn4.js";import"./search-KAXH_KdC.js";import"./Input-DcsAtJ_5.js";import"./useControlled-DmnLTdeY.js";import"./Button-PcrXfoGH.js";import"./small-cross-CO2wkq1Q.js";import"./ActionButton-B47enmWM.js";import"./Checkbox-xu6FUSrv.js";import"./useValueChanged-4-cIywSW.js";import"./CollapsiblePanel-BGdu-4zm.js";import"./MultiColumnSortDialog-CIn4vagO.js";import"./MenuTrigger-BymRryZB.js";import"./CompositeItem-BGsDUgBO.js";import"./ToolbarRootContext-sN3AAwIa.js";import"./getDisabledMountTransitionStyles-iAxy3nU0.js";import"./getPseudoElementBounds-DCYHN6OR.js";import"./chevron-down-CAimFdfR.js";import"./index-C2SvAwVc.js";import"./error-DatCfw_J.js";import"./BaseCbacBanner-CKCWA2nS.js";import"./makeExternalStore-Ble7iOu_.js";import"./Tooltip-CRHEL8Uo.js";import"./PopoverPopup-oZ9Rd77s.js";import"./debounce-C-fCXie1.js";import"./tick-Bi7vgB1Y.js";import"./DropdownField-DtCtfIum.js";import"./isEqual-C01czanu.js";import"./withOsdkMetrics-tj5br0ur.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

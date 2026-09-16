import{j as r}from"./iframe-B151MY39.js";import{O as b}from"./object-table-D-UIbvSk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DnVcynEx.js";import{u as g}from"./useOsdkClient-O0WN_-TA.js";import"./preload-helper-DjBvu03A.js";import"./Table-D-DcHuFZ.js";import"./index-D4Ktja5K.js";import"./Dialog-D2WugUSb.js";import"./cross-DQu9BvYN.js";import"./svgIconContainer-BLEuJ5z1.js";import"./useBaseUiId-B-w6rIot.js";import"./InternalBackdrop-ClpqOn9m.js";import"./composite-DsqMStnD.js";import"./index-_YRtSbhr.js";import"./index-K9vP9MSb.js";import"./index-CbZBg5h_.js";import"./useEventCallback-D9a4k8dW.js";import"./SkeletonBar-B37BkS3P.js";import"./LoadingCell--7LMLSTL.js";import"./ColumnConfigDialog-CO7m2sfy.js";import"./DraggableList-BA9k7mIf.js";import"./search-Cy5Pb8DF.js";import"./Input-BdL2sxgE.js";import"./useControlled-hVx5IBvW.js";import"./Button-D77_sTH4.js";import"./small-cross-CYn2ZJWp.js";import"./ActionButton-zvOE960M.js";import"./Checkbox-aWwK5z9s.js";import"./useValueChanged-INCVVQ2-.js";import"./CollapsiblePanel-aefLeZnL.js";import"./MultiColumnSortDialog-BoLHGqKn.js";import"./MenuTrigger-kFRhnlDq.js";import"./CompositeItem-DsqHLl_J.js";import"./ToolbarRootContext-CRksDvpW.js";import"./getDisabledMountTransitionStyles-Cs8S1gEh.js";import"./getPseudoElementBounds-D90KllDw.js";import"./chevron-down-C7ZT7QCO.js";import"./index-BUZnamy4.js";import"./error-BXj6iPTB.js";import"./BaseCbacBanner-CKm3WU7I.js";import"./makeExternalStore-DSGfAMdD.js";import"./Tooltip-Dx4JilCx.js";import"./PopoverPopup-G017xcEQ.js";import"./debounce-BOhPi2_d.js";import"./tick-CyZYyki1.js";import"./DropdownField-CwwIu_a4.js";import"./isEqual-BErWEpbD.js";import"./withOsdkMetrics-Bw9JRCxa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

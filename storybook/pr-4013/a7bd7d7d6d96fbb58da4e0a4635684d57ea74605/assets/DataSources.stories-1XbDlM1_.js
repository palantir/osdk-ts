import{j as r}from"./iframe-q73h-SNz.js";import{O as b}from"./object-table-KjuvFoNU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-hb082i9A.js";import{u as g}from"./useOsdkClient-CVuR42rF.js";import"./preload-helper-BvXISORE.js";import"./Table-BS6ZxxSV.js";import"./index-CNgILQVN.js";import"./Dialog-X4SIqq2i.js";import"./cross-UurqhnpQ.js";import"./svgIconContainer-BnJjPefi.js";import"./useBaseUiId-BT4TVIMU.js";import"./InternalBackdrop-3dmgnm-B.js";import"./composite-DsUUOBpL.js";import"./index-CmcHR3Mh.js";import"./index-GTDJrYHL.js";import"./index-CE_isF10.js";import"./useEventCallback-DHiiVSQq.js";import"./SkeletonBar-CyVdL5QR.js";import"./LoadingCell-BKwB91ug.js";import"./ColumnConfigDialog-Cuo6i1hm.js";import"./DraggableList-DYXgWAZz.js";import"./search-CyIDS8Xl.js";import"./Input-CUYY-XQS.js";import"./useControlled-CIDCJXAS.js";import"./Button-DMD0TrjN.js";import"./small-cross-KtqmkdiH.js";import"./ActionButton-DUEoS-Oq.js";import"./Checkbox-CnshtcrJ.js";import"./useValueChanged-vcJ35Sa1.js";import"./CollapsiblePanel-D1igOUIW.js";import"./MultiColumnSortDialog-chUbYR3p.js";import"./MenuTrigger-Dfchi1IP.js";import"./CompositeItem-8Q0GNXmT.js";import"./ToolbarRootContext-XN_eoe5I.js";import"./getDisabledMountTransitionStyles-dAfff5JR.js";import"./getPseudoElementBounds-BcUe90OX.js";import"./chevron-down-CcztAG1Q.js";import"./index-CgMWGLyW.js";import"./error-BBRDAF1W.js";import"./BaseCbacBanner-D5GS6fO6.js";import"./makeExternalStore-CvHnGZr3.js";import"./Tooltip-C1ULjr5P.js";import"./PopoverPopup-Djh0qu5C.js";import"./debounce-DSfFacxB.js";import"./tick-CDEBgOjy.js";import"./DropdownField-DpBuPkD-.js";import"./isEqual-DRblV8Co.js";import"./withOsdkMetrics-mt0BkM0o.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

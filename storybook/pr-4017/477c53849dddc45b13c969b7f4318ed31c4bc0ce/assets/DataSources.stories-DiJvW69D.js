import{j as r}from"./iframe-vnKEgnca.js";import{O as b}from"./object-table-Cdqb0T8o.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D__NCSdn.js";import{u as g}from"./useOsdkClient-3N-DZ2Jr.js";import"./preload-helper-sQW1CADx.js";import"./Table-jIMLYzem.js";import"./index-BeGfthlJ.js";import"./Dialog-CeIQS-Df.js";import"./cross-_8csVoP1.js";import"./svgIconContainer-NsUuck07.js";import"./useBaseUiId-CgxqfjcM.js";import"./InternalBackdrop-83r7I1RI.js";import"./composite-C9k3QAIL.js";import"./index-fmSw06oW.js";import"./index-CFCh4JjT.js";import"./index-CcuQRhTx.js";import"./useEventCallback-Dfml-rlK.js";import"./SkeletonBar-Dk4nJLO-.js";import"./LoadingCell-rXcdd4XO.js";import"./ColumnConfigDialog-CzA6lYEA.js";import"./DraggableList-BtqsKkmI.js";import"./search-DSYVPSfx.js";import"./Input-CWIjEhtY.js";import"./useControlled-Bxc3bdV1.js";import"./Button-28NdSEt3.js";import"./small-cross-CUYeKhnX.js";import"./ActionButton-D-nwGdVx.js";import"./Checkbox-DawziPMY.js";import"./useValueChanged-CDaiOFJe.js";import"./CollapsiblePanel-snp8kNHN.js";import"./MultiColumnSortDialog-Bata7hBa.js";import"./MenuTrigger-DIYp-ZLj.js";import"./CompositeItem-1_Yzr1XW.js";import"./ToolbarRootContext-CwAo2bG9.js";import"./getDisabledMountTransitionStyles-BwHnrPvs.js";import"./getPseudoElementBounds-CHJP1wr0.js";import"./chevron-down-DEu7XuhT.js";import"./index-BvRjSpJH.js";import"./error-BV36DzgX.js";import"./BaseCbacBanner-Dyqd2qNr.js";import"./makeExternalStore-CcMSZMO7.js";import"./Tooltip-Cj_Idruq.js";import"./PopoverPopup-BTMMw79y.js";import"./debounce-D-YcwjSi.js";import"./tick-0FUkR9Gc.js";import"./DropdownField-VOlhddjk.js";import"./isEqual-DUuBLzE6.js";import"./withOsdkMetrics-Dh0bq2dQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

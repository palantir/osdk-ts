import{j as r}from"./iframe-DsKrzcRN.js";import{O as b}from"./object-table-DBhAnef8.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CQf1Ewp5.js";import{u as g}from"./useOsdkClient-wqu6WPXo.js";import"./preload-helper-XXW3l9t_.js";import"./Table-BeDuu-gb.js";import"./index-CsPIGNQb.js";import"./Dialog-B0obumfQ.js";import"./cross-BW2NuQAF.js";import"./svgIconContainer-BOG8o0Qp.js";import"./useBaseUiId-BwjaGsvj.js";import"./InternalBackdrop-D3WUVm8B.js";import"./composite-4l0PTrfd.js";import"./index-CbFdJYZA.js";import"./index-v8oVnP18.js";import"./index-hJuN63ng.js";import"./useEventCallback-CLUwi7QW.js";import"./SkeletonBar-D_kDFvpB.js";import"./LoadingCell-BsInURSZ.js";import"./ColumnConfigDialog-Dytg4qH_.js";import"./DraggableList-DuyEaQju.js";import"./search-Dj7j7f4C.js";import"./Input-C_GhTUPn.js";import"./useControlled-Bqn_3IUK.js";import"./Button-BKP0-2mJ.js";import"./small-cross-4vbxp4Sf.js";import"./ActionButton-CvPzCsuM.js";import"./Checkbox-D_hoBzYk.js";import"./useValueChanged-B1kYQJI9.js";import"./CollapsiblePanel-B3VJ_HAc.js";import"./MultiColumnSortDialog-BJeXbJGy.js";import"./MenuTrigger-CJq6smMb.js";import"./CompositeItem-D26JRJU9.js";import"./ToolbarRootContext-DxArarjC.js";import"./getDisabledMountTransitionStyles-BHlXwaEB.js";import"./getPseudoElementBounds-JpoScsw5.js";import"./chevron-down-DEsS9nYL.js";import"./index-BFmUqTIz.js";import"./error-CfVMT4Jh.js";import"./BaseCbacBanner-D-xOAYw6.js";import"./makeExternalStore-lpe8zccP.js";import"./Tooltip-DsFZs_hy.js";import"./PopoverPopup-ZTUVQmKO.js";import"./debounce-BCcTzWEM.js";import"./tick-BcIHyu16.js";import"./DropdownField-CWYsNCev.js";import"./isEqual-DYTV2HCP.js";import"./withOsdkMetrics-DQcV-4YY.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

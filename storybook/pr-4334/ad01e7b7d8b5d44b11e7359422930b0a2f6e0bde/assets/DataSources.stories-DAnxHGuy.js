import{j as r}from"./iframe-A_fOpVjR.js";import{O as b}from"./object-table-CCMmutgl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B3Fm0Y_o.js";import{u as g}from"./useOsdkClient-Bel45J9c.js";import"./preload-helper-NNWOvscG.js";import"./Table-Ct0jk0QM.js";import"./index-C7FsEBhG.js";import"./Dialog-D5xAhZEq.js";import"./cross-BwNW8yAx.js";import"./svgIconContainer-Bq9Z_PVa.js";import"./useBaseUiId-C7m94P3Q.js";import"./InternalBackdrop-A8sqO8XG.js";import"./composite-BNlZpCYa.js";import"./index-CSGRTjjX.js";import"./index-BpdiA8C2.js";import"./index-CQmYgAHq.js";import"./useEventCallback-D0ioUuoD.js";import"./SkeletonBar-D_FkMl9_.js";import"./LoadingCell-Bq-rfy4t.js";import"./ColumnConfigDialog-D_VKogHN.js";import"./DraggableList-D9SbGZ1S.js";import"./search-DjdTcbXm.js";import"./Input-CPD69t9E.js";import"./useControlled-C2rTfK3U.js";import"./Button-DqOCaaxJ.js";import"./small-cross-DNEXD1XY.js";import"./ActionButton-D4KDRNf3.js";import"./Checkbox-CdBaEuZk.js";import"./useValueChanged-R8r5ZzIC.js";import"./CollapsiblePanel-D5N62OEf.js";import"./MultiColumnSortDialog-BTRSkNMD.js";import"./MenuTrigger-Dx8kVSll.js";import"./CompositeItem-CZZ_uEuP.js";import"./ToolbarRootContext-DqquyoSz.js";import"./getDisabledMountTransitionStyles-ChkLH3QV.js";import"./getPseudoElementBounds-C_2Jp177.js";import"./chevron-down-C0LTAe4-.js";import"./index-BLNyRWLa.js";import"./error-CBOQy5rF.js";import"./BaseCbacBanner-Cd-uPTKw.js";import"./makeExternalStore-BnincROM.js";import"./Tooltip-BmW3AFCg.js";import"./PopoverPopup-CgMv4Y2M.js";import"./debounce-DtL1LGCj.js";import"./tick-C7t8KzWK.js";import"./DropdownField-3zZSXBjS.js";import"./isEqual-BVMfoPU4.js";import"./withOsdkMetrics-SqCQVKc1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

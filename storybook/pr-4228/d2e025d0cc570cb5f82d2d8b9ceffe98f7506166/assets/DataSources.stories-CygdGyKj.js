import{j as r}from"./iframe-DhXfIq6R.js";import{O as b}from"./object-table-DBIkARTT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C9aREsd9.js";import{u as g}from"./useOsdkClient-DcI1QqiT.js";import"./preload-helper-DatgPFZX.js";import"./Table-NsZNr82v.js";import"./index-CQ4eecZm.js";import"./Dialog-CzsUSlqO.js";import"./cross-CjebjloY.js";import"./svgIconContainer-4NKQuWor.js";import"./useBaseUiId-B3PC069q.js";import"./InternalBackdrop-J9PQGeSn.js";import"./composite-CCswUWBV.js";import"./index-Hw9O_E6A.js";import"./index-BFbo8Hvm.js";import"./index-vY9vJBl3.js";import"./useEventCallback-CW5iGxQC.js";import"./SkeletonBar-CInnzOG7.js";import"./LoadingCell-DHehGixe.js";import"./ColumnConfigDialog-BOBDHjYf.js";import"./DraggableList-DwZszNC8.js";import"./search-Dx_Pysa4.js";import"./Input-BBnEWswJ.js";import"./useControlled-3_t6o5ui.js";import"./Button-Cy8uxh9T.js";import"./small-cross-C4GUnBXR.js";import"./ActionButton-BkYoJ84i.js";import"./Checkbox-BVm5ACkl.js";import"./useValueChanged-CxpIXHpQ.js";import"./CollapsiblePanel-BVGCo3Z2.js";import"./MultiColumnSortDialog-CLLrLW1L.js";import"./MenuTrigger-BRpNTEcF.js";import"./CompositeItem-DvhhImuQ.js";import"./ToolbarRootContext-B9c-sG_O.js";import"./getDisabledMountTransitionStyles-DzdB_-qH.js";import"./getPseudoElementBounds-CsuJ4a0u.js";import"./chevron-down-CjJDYGij.js";import"./index-C3bckibU.js";import"./error-UalGv9XX.js";import"./BaseCbacBanner-DVggLEji.js";import"./makeExternalStore-BPGOv1IN.js";import"./Tooltip-Dt9x_i73.js";import"./PopoverPopup-Q9Yq24sl.js";import"./debounce-gdpJ20Mf.js";import"./tick-CvbiSVsc.js";import"./DropdownField-s38Gfc6y.js";import"./isEqual-CCqm4KEh.js";import"./withOsdkMetrics-DbQJKwoW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

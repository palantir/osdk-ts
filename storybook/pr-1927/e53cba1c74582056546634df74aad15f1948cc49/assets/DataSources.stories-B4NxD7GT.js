import{j as r}from"./iframe-YwePy6Na.js";import{O as b}from"./object-table-Dp9r6Amm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D7nffWpu.js";import{u as g}from"./useOsdkClient-Dvnc0JJ7.js";import"./preload-helper-C5O8HAF_.js";import"./Table-vKwb6riK.js";import"./index-kDdf5Tk2.js";import"./Dialog-DkeogbIL.js";import"./cross-Y-lq_61F.js";import"./svgIconContainer-nKGCa_Yw.js";import"./useBaseUiId-vveaqpRL.js";import"./InternalBackdrop-n_VXKU8h.js";import"./composite-BvfYu_Ep.js";import"./index-B-58BhWJ.js";import"./index-Y7QOpJkL.js";import"./index-TgM_EtVZ.js";import"./useEventCallback-B9544m6r.js";import"./SkeletonBar-C0QVMjH7.js";import"./LoadingCell-COl8_Q6l.js";import"./ColumnConfigDialog-DwZUCWad.js";import"./DraggableList-z6CvTLCx.js";import"./search-CkQaqOfS.js";import"./Input-BbXslpL4.js";import"./useControlled-CXJ0FOIB.js";import"./Button-CajACsUP.js";import"./small-cross-BoYlxTd8.js";import"./ActionButton--mSG10q_.js";import"./Checkbox-B-rZLKxz.js";import"./useValueChanged-DOhoBYTW.js";import"./CollapsiblePanel-DhdNZ43G.js";import"./MultiColumnSortDialog-BDmfQifF.js";import"./MenuTrigger-H-hNI4h4.js";import"./CompositeItem-DwKpE3E9.js";import"./ToolbarRootContext-IvyHUIol.js";import"./getDisabledMountTransitionStyles-Dp-GSE2g.js";import"./getPseudoElementBounds-DvHm1E4j.js";import"./chevron-down-APdhRSd1.js";import"./index-B8BnOK3F.js";import"./error-BpwHZdni.js";import"./BaseCbacBanner-CV3UV8UT.js";import"./makeExternalStore-BDW_RQe5.js";import"./Tooltip-DWBJxFHb.js";import"./PopoverPopup-Di-M8mNa.js";import"./debounce-EjzoHQP3.js";import"./tick-yO9PCDBT.js";import"./DropdownField-DJy3CWMh.js";import"./isEqual-CjW4gmi7.js";import"./withOsdkMetrics-CdgeYRWr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

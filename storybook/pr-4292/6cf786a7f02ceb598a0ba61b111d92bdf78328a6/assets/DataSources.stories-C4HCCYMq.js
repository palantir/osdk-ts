import{j as r}from"./iframe-yzha5v0q.js";import{O as b}from"./object-table-7QNEleDy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-QL3qKRA_.js";import{u as g}from"./useOsdkClient-Bxqh4Bcm.js";import"./preload-helper-D-8FAAW5.js";import"./Table-1KtfhII5.js";import"./index-60EGa8qT.js";import"./Dialog-C5JPUXP6.js";import"./cross-BlwLOBUQ.js";import"./svgIconContainer-C44iOk89.js";import"./useBaseUiId-BbIMkHOG.js";import"./InternalBackdrop-Tn-t9TYq.js";import"./composite-BDH9_dFX.js";import"./index-O5EAmeT1.js";import"./index-BVrkRt64.js";import"./index-C1kDTagr.js";import"./useEventCallback-DsjWVVDr.js";import"./SkeletonBar-aZ1R4mdC.js";import"./LoadingCell-BQBa2JlH.js";import"./ColumnConfigDialog-CVF6mbu9.js";import"./DraggableList-Blt51KXd.js";import"./search-gm56Xs7t.js";import"./Input-EyuyzT2W.js";import"./useControlled-D0bVi2TG.js";import"./Button-BiUOfKuO.js";import"./small-cross-Cm5dK0ec.js";import"./ActionButton-DTkeL8Lj.js";import"./Checkbox-tgD1qeBp.js";import"./useValueChanged-B6X9c3a_.js";import"./CollapsiblePanel-DOlyQkQE.js";import"./MultiColumnSortDialog-S4FDUM3S.js";import"./MenuTrigger-CuI3s9S9.js";import"./CompositeItem-ha9gBhOi.js";import"./ToolbarRootContext-D2IbjqCY.js";import"./getDisabledMountTransitionStyles-IE49pSF5.js";import"./getPseudoElementBounds-DPNIWnqr.js";import"./chevron-down-DLVlSQ8P.js";import"./index-DbIozRF2.js";import"./error-B0YQBao9.js";import"./BaseCbacBanner-DjcIjJbq.js";import"./makeExternalStore-DbXaKl2K.js";import"./Tooltip-DPFg4mPg.js";import"./PopoverPopup-C3DSbH4l.js";import"./debounce-X5gf-7Uy.js";import"./tick-DY8FjhzJ.js";import"./DropdownField-Dw87S1et.js";import"./isEqual-BwFhy3Dl.js";import"./withOsdkMetrics-DqbCp-LC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-C3gWLFeF.js";import{O as b}from"./object-table-C9jS4D-A.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ByHsvVqq.js";import{u as g}from"./useOsdkClient-BepgIy04.js";import"./preload-helper-B5WkgH5S.js";import"./Table-7PutLn_O.js";import"./index-zbAiaIKZ.js";import"./Dialog-htHMIiV_.js";import"./cross-OJYwbU-X.js";import"./svgIconContainer-CatKefh0.js";import"./useBaseUiId-u8lDlXG3.js";import"./InternalBackdrop-Cy20o8GG.js";import"./composite-wYiSASeA.js";import"./index-B5sOm2sk.js";import"./index-RpbhQ7R2.js";import"./index-D5sUdKzc.js";import"./useEventCallback-BVsJ2e3U.js";import"./SkeletonBar-DMUqu9HM.js";import"./LoadingCell-DyY2yJ3K.js";import"./ColumnConfigDialog-CGgfMgKc.js";import"./DraggableList-DFgLwxtd.js";import"./search-C7TpUcEG.js";import"./Input-DxK0rYjH.js";import"./useControlled-D4ZhQDM-.js";import"./Button-z5VY6lqA.js";import"./small-cross-Dg9jp1lJ.js";import"./ActionButton-DPsCNtEG.js";import"./Checkbox-Cfd_YyW0.js";import"./useValueChanged-Czd01fGs.js";import"./CollapsiblePanel-DClJfuOE.js";import"./MultiColumnSortDialog-KXkxir9T.js";import"./MenuTrigger-BFueQcjv.js";import"./CompositeItem-aMc0HNV_.js";import"./ToolbarRootContext-CXNAcqNV.js";import"./getDisabledMountTransitionStyles-By20pHy9.js";import"./getPseudoElementBounds-CI4G4fnd.js";import"./chevron-down-C2wXIFgz.js";import"./index-B-Yw7Cy9.js";import"./error-BM64Bzf-.js";import"./BaseCbacBanner-DtP8wzf-.js";import"./makeExternalStore-y3W5E1gl.js";import"./Tooltip-kC1I1FSA.js";import"./PopoverPopup-DH8P3TnQ.js";import"./debounce-BT1KgTVv.js";import"./tick-DPtCobgt.js";import"./DropdownField-Cpn2i5fy.js";import"./isEqual-B-ZaIAD2.js";import"./withOsdkMetrics-BIxduPTg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

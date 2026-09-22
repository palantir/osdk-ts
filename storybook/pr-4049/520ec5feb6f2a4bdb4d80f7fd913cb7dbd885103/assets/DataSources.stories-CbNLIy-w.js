import{j as r}from"./iframe-CJFgfqJQ.js";import{O as b}from"./object-table-BIKPZuQr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CPJhJ6Gp.js";import{u as g}from"./useOsdkClient-DsGPKyv1.js";import"./preload-helper-CB2bVH8w.js";import"./Table-BfIW66aU.js";import"./index-BDuqkffg.js";import"./Dialog-D4LsLmkw.js";import"./cross-CGqAK_rm.js";import"./svgIconContainer-SiM3kExX.js";import"./useBaseUiId-KMobehZg.js";import"./InternalBackdrop-DVgaqM5_.js";import"./composite-D_U5DxNy.js";import"./index-D8JNb3--.js";import"./index-DCMHFOQf.js";import"./index-Dmlu-QeK.js";import"./useEventCallback-DwOB9kEk.js";import"./SkeletonBar-dUsinxB7.js";import"./LoadingCell-zvH6oYga.js";import"./ColumnConfigDialog-CSyGSnFa.js";import"./DraggableList-DHvtlonC.js";import"./search-DdMhLoUU.js";import"./Input-DmfjYINK.js";import"./useControlled-HhXb2sFD.js";import"./Button-cr6PNOy5.js";import"./small-cross-Bvt4-Cci.js";import"./ActionButton-qaoG7oqA.js";import"./Checkbox-DKqm-Ws3.js";import"./useValueChanged-DDVfSaOH.js";import"./CollapsiblePanel-B5YF5ZIm.js";import"./MultiColumnSortDialog-B88gd12P.js";import"./MenuTrigger-BYgin9ek.js";import"./CompositeItem-8xWeC0Vv.js";import"./ToolbarRootContext-DJb0kYMX.js";import"./getDisabledMountTransitionStyles-B5vF6vDs.js";import"./getPseudoElementBounds-BJ_KrdWI.js";import"./chevron-down-DGQA7IYp.js";import"./index-DFjPXJ5y.js";import"./error-DUmxQ8UR.js";import"./BaseCbacBanner-DbRUrc0m.js";import"./makeExternalStore-v_n6tY7p.js";import"./Tooltip-Dv9997-7.js";import"./PopoverPopup-Cs5VOili.js";import"./debounce-CeHNcT_D.js";import"./tick-DFl5nZ0u.js";import"./DropdownField-DwonOWM7.js";import"./isEqual-CMNbp24S.js";import"./withOsdkMetrics-DL4u8lDZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-Bq9JkkcV.js";import{O as b}from"./object-table-D6qgwCv6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-h61X_VDv.js";import{u as g}from"./useOsdkClient-44rjUua8.js";import"./preload-helper-Cqv5s2jj.js";import"./Table-DIqREGrv.js";import"./index-LFRJGjst.js";import"./Dialog-C2WNCz-n.js";import"./cross-Bk3fKCS7.js";import"./svgIconContainer-Cf0ZuXQT.js";import"./useBaseUiId-CRKQdUfR.js";import"./InternalBackdrop-BQMKI1KR.js";import"./composite-B8AhlmVu.js";import"./index-BLJWGSk2.js";import"./index-CiXmcJM_.js";import"./index-BNaE_Tt-.js";import"./useEventCallback-D9Esi33T.js";import"./SkeletonBar-DXhct9uD.js";import"./LoadingCell-Dc9leBYT.js";import"./ColumnConfigDialog-6z222bHh.js";import"./DraggableList-BOvLWd2b.js";import"./search-BNWG7jMi.js";import"./Input-CVFiTt6w.js";import"./useControlled-BOwVH0ok.js";import"./Button-CXvtykDV.js";import"./small-cross-BnGu73G1.js";import"./ActionButton-DsKQLZsS.js";import"./Checkbox-DzCahne8.js";import"./useValueChanged-smqOtCks.js";import"./CollapsiblePanel-BzrJ9qI-.js";import"./MultiColumnSortDialog-DdUBFoKl.js";import"./MenuTrigger-BSmrj6RT.js";import"./CompositeItem-CNijsmc1.js";import"./ToolbarRootContext-Cg88OliQ.js";import"./getDisabledMountTransitionStyles-BX0EtKPr.js";import"./getPseudoElementBounds-CerPCRKU.js";import"./chevron-down-BLdYc2zE.js";import"./index-CPslm5If.js";import"./error-Bc6kFz4J.js";import"./BaseCbacBanner-Dtq1flvT.js";import"./makeExternalStore-BoBeGpud.js";import"./Tooltip-Dq_sB7xx.js";import"./isObject-CmhVC78r.js";import"./debounce-CzyUj9dS.js";import"./tick-BFpzlNMH.js";import"./DropdownField-DAKJZGR4.js";import"./isEqual-Zzl_MNMm.js";import"./_baseIsEqual-3k_rL-8A.js";import"./withOsdkMetrics-BtcppCcW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};

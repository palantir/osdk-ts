import{j as r}from"./iframe-BqwXQKpA.js";import{O as b}from"./object-table-CuuBfL8J.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DkLzoQCM.js";import{u as g}from"./useOsdkClient-r71R63wR.js";import"./preload-helper-CPn3kR4s.js";import"./Table-DZ6bvBAp.js";import"./index-CYwWJaLD.js";import"./Dialog-Dp3EsUox.js";import"./cross-CedSfFXt.js";import"./svgIconContainer-r8u0NG4v.js";import"./useBaseUiId-DA7_UCFd.js";import"./InternalBackdrop-BKOhgmyu.js";import"./composite-Bp-cKdPO.js";import"./index-C72iR5_f.js";import"./index-jZeUOwty.js";import"./index-8nJMg384.js";import"./useEventCallback-Cv2hevdH.js";import"./SkeletonBar-ZCxSjfu7.js";import"./LoadingCell-DQMmvmgu.js";import"./ColumnConfigDialog-DCLkqrVc.js";import"./DraggableList-DqQhEMPD.js";import"./search-1XCyntXF.js";import"./Input-DTs9C08W.js";import"./useControlled-BcFAz7-u.js";import"./Button-DZqTJuVj.js";import"./small-cross-ClthSwzC.js";import"./ActionButton-BAZu2Krn.js";import"./Checkbox-D7v3Sdtf.js";import"./useValueChanged-CCMKETAO.js";import"./CollapsiblePanel-OwoGrBMO.js";import"./MultiColumnSortDialog-DtjY-7OY.js";import"./MenuTrigger-bU0oA_1O.js";import"./CompositeItem-DhjczCvx.js";import"./ToolbarRootContext-D7_GPkI_.js";import"./getDisabledMountTransitionStyles-BfGLnaja.js";import"./getPseudoElementBounds-DZfA0kMC.js";import"./chevron-down-Dhf3bz-4.js";import"./index-BmvdlYct.js";import"./error-CT5yNLGi.js";import"./BaseCbacBanner-BGfTp9D9.js";import"./makeExternalStore-CyyUqBSG.js";import"./Tooltip-Bk8ovUyB.js";import"./PopoverPopup-nFVTJuTn.js";import"./debounce-BqMuZJVi.js";import"./tick-BEDQHRbq.js";import"./DropdownField-QmoT8zOZ.js";import"./isEqual-CSC2yrxv.js";import"./withOsdkMetrics-p_rJ049m.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

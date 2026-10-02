import{j as r}from"./iframe-BwtdJUQ8.js";import{O as b}from"./object-table-av6kKlTv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ckc1HJ-m.js";import{u as g}from"./useOsdkClient-BqxjQYKW.js";import"./preload-helper-DJuGrF4Q.js";import"./Table-Z-O0NX-2.js";import"./index-ecbPEJsH.js";import"./Dialog-B_W78HUj.js";import"./cross-D5O7asJB.js";import"./svgIconContainer-BpIR-cOm.js";import"./useBaseUiId-DlvOV9lG.js";import"./InternalBackdrop-CisMUyd7.js";import"./composite-DglRx_pb.js";import"./index-D-6QZGaS.js";import"./index-NBYYlFiK.js";import"./index-BwJhQ8nN.js";import"./useEventCallback-MmoNwFiG.js";import"./SkeletonBar-BlzetxzD.js";import"./LoadingCell-hO_dH2eC.js";import"./ColumnConfigDialog-BfntsKdn.js";import"./DraggableList-BzxAZyLJ.js";import"./search-BMvzDH_4.js";import"./Input-Ckc7B0k2.js";import"./useControlled-CTxNl2GG.js";import"./Button-a-v4YEmM.js";import"./small-cross-I0t2HoBL.js";import"./ActionButton-DqEhm5OJ.js";import"./Checkbox-C99ZgYQU.js";import"./useValueChanged-CCi2b_rF.js";import"./CollapsiblePanel-YpC4VMjy.js";import"./MultiColumnSortDialog-CAn6zX2c.js";import"./MenuTrigger-C5yVijsH.js";import"./CompositeItem-gNAn1-ON.js";import"./ToolbarRootContext-B6jDfH-i.js";import"./getDisabledMountTransitionStyles-CQlZrmJ4.js";import"./getPseudoElementBounds-Bh8KnJGz.js";import"./chevron-down-DAI8xIlK.js";import"./index-BkxqopTp.js";import"./error-B3Glsuys.js";import"./BaseCbacBanner-CKiruCeJ.js";import"./makeExternalStore-BDYC9xXC.js";import"./Tooltip-j2N8aKD1.js";import"./PopoverPopup-tHLORX91.js";import"./debounce-DG4OIz6a.js";import"./tick-B5x4eMkK.js";import"./DropdownField-DTj4mE1E.js";import"./isEqual-D1B6T6kU.js";import"./withOsdkMetrics-DjmWzspB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

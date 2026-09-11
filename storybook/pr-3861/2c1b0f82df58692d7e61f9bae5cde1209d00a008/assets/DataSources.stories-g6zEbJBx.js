import{j as r}from"./iframe-BsJOdbCL.js";import{O as b}from"./object-table-Dp1R9NCg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B6F66l6F.js";import{u as g}from"./useOsdkClient-CHvyPAtQ.js";import"./preload-helper-DxS_Velh.js";import"./Table-Daf9LopS.js";import"./index-BqujQTW3.js";import"./Dialog-BQfhl9fd.js";import"./cross-Bxqdiez_.js";import"./svgIconContainer-CrnbMK0b.js";import"./useBaseUiId-CB5lNuw3.js";import"./InternalBackdrop-B2GNz5hu.js";import"./composite-CaVgyQab.js";import"./index-CEwR0XXE.js";import"./index-rSFhfOaH.js";import"./index-D_l1l0Yv.js";import"./useEventCallback-BINgInB_.js";import"./SkeletonBar-CeSQZW6w.js";import"./LoadingCell-D9LiPaaJ.js";import"./ColumnConfigDialog-nFVX_AzW.js";import"./DraggableList-Bb6he5CK.js";import"./search-DGRADUpj.js";import"./Input-BYGlPWDj.js";import"./useControlled-7DT6e4WZ.js";import"./Button-CWQ0OGf8.js";import"./small-cross-D1GEAGXQ.js";import"./ActionButton-JWlqJiJ4.js";import"./Checkbox-HV55hq3D.js";import"./useValueChanged-T_IVy1TV.js";import"./CollapsiblePanel-DMdta-mT.js";import"./MultiColumnSortDialog-yapUVthL.js";import"./MenuTrigger-jQfAwnOD.js";import"./CompositeItem-BS607TGd.js";import"./ToolbarRootContext-DI-YguYW.js";import"./getDisabledMountTransitionStyles-DqSxt_J-.js";import"./getPseudoElementBounds-CXXR7gCg.js";import"./chevron-down-CLIxImQx.js";import"./index-BwHn30HN.js";import"./error-Btl7YeDY.js";import"./BaseCbacBanner-Mp7AFB5Z.js";import"./makeExternalStore-DWYVyprO.js";import"./Tooltip-cqHh73tY.js";import"./PopoverPopup-BGpU1k4a.js";import"./debounce-MidBPb8y.js";import"./tick-DnQLWeom.js";import"./DropdownField-BBHxtCFQ.js";import"./isEqual-DEGlTRmV.js";import"./withOsdkMetrics-DV_LS9FP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

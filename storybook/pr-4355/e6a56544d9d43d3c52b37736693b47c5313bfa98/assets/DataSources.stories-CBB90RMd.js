import{j as r}from"./iframe-DNoPlrmW.js";import{O as b}from"./object-table-nzcluZUw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DGbpVY9a.js";import{u as g}from"./useOsdkClient-DEmkR6YZ.js";import"./preload-helper-BA-kC20r.js";import"./Table-C4kOqFlr.js";import"./index-GMd43Lzl.js";import"./Dialog-CqjErnak.js";import"./cross-Dbdjn7RF.js";import"./svgIconContainer-CUvRyfnW.js";import"./useBaseUiId-CG8dqONM.js";import"./InternalBackdrop-DL1HDt1e.js";import"./composite-8FnP0FRm.js";import"./index-CiJY3H2C.js";import"./index-PNiqJ9T4.js";import"./index-SE8XSgW-.js";import"./useEventCallback-CX57274w.js";import"./SkeletonBar-DvQ-YXlb.js";import"./LoadingCell-Bp5le_if.js";import"./ColumnConfigDialog-BFHfnyqX.js";import"./DraggableList-isYHywku.js";import"./search-BAl_vtGE.js";import"./Input-Ci_chYxf.js";import"./useControlled-L9fBFGN0.js";import"./Button-Au7RONC3.js";import"./small-cross-U2NFloQ_.js";import"./ActionButton-DjdbAx1F.js";import"./Checkbox-CyToGzmV.js";import"./useValueChanged-DL6q5b55.js";import"./CollapsiblePanel-CJnRgBiN.js";import"./MultiColumnSortDialog-DyzvNICP.js";import"./MenuTrigger-D0TngpDX.js";import"./CompositeItem-CVV0k2jm.js";import"./ToolbarRootContext-D3fcj2nK.js";import"./getDisabledMountTransitionStyles-BJ4RXawF.js";import"./getPseudoElementBounds-ByFx_aK9.js";import"./chevron-down-AD2NYQ4Y.js";import"./index-DzuC6B4f.js";import"./error-BcP9NYX_.js";import"./BaseCbacBanner-ComGjBeE.js";import"./makeExternalStore-ThIGMhbJ.js";import"./Tooltip-BLCCo0To.js";import"./PopoverPopup-CsydTAyn.js";import"./debounce-CwIobNTC.js";import"./tick-CkHBz8KO.js";import"./DropdownField-BQsQKUlk.js";import"./isEqual-CIzAN7dH.js";import"./withOsdkMetrics-C7RJ1R_V.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

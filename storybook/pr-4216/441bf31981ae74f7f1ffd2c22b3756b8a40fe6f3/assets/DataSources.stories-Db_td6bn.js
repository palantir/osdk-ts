import{j as r}from"./iframe-Bnd7pp_H.js";import{O as b}from"./object-table-4cK8FCON.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BfOnW1Jm.js";import{u as g}from"./useOsdkClient-Bzkrieut.js";import"./preload-helper-CQp4ttna.js";import"./Table-CT49F1bO.js";import"./index-Dq4Q7R9n.js";import"./Dialog-rVHDyjlb.js";import"./cross-nf57os0A.js";import"./svgIconContainer-BHFCuUIe.js";import"./useBaseUiId-C3FoEBlZ.js";import"./InternalBackdrop-DF5eA8FP.js";import"./composite-ChdURaw7.js";import"./index-CdD4spHg.js";import"./index-CFBknfgj.js";import"./index-_ppv4b-3.js";import"./useEventCallback-DrUAM8i2.js";import"./SkeletonBar-DNsqmLz9.js";import"./LoadingCell-Ba7x1O3X.js";import"./ColumnConfigDialog-BE67hQV-.js";import"./DraggableList-dtTt2aoG.js";import"./search-C2rfWWoo.js";import"./Input-Dh0I0gBB.js";import"./useControlled-BJ3TNVDx.js";import"./Button-wIX1QNwU.js";import"./small-cross-Fvp5VPfx.js";import"./ActionButton-Dfv8zCtw.js";import"./Checkbox-DnU42Rli.js";import"./useValueChanged-CBe6yFc7.js";import"./CollapsiblePanel-DplLNpgq.js";import"./MultiColumnSortDialog-Bi-DTI_a.js";import"./MenuTrigger-B6Hf9dfZ.js";import"./CompositeItem-B1cp5WfN.js";import"./ToolbarRootContext-V1EJjV6d.js";import"./getDisabledMountTransitionStyles-B1HGzF4D.js";import"./getPseudoElementBounds-DRM09z-T.js";import"./chevron-down-CkIljS9G.js";import"./index-L92dEHBQ.js";import"./error-vnD_TY7d.js";import"./BaseCbacBanner-BNaku5TU.js";import"./makeExternalStore-BZ_ZxDJW.js";import"./Tooltip-DxkXYJMW.js";import"./PopoverPopup-DVwvpeMg.js";import"./debounce-CLMmEpMo.js";import"./tick-BMXdWkDm.js";import"./DropdownField-28PDU_yD.js";import"./isEqual-DlIlAhIm.js";import"./withOsdkMetrics-CtQ2hxG_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

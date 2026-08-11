import{j as r}from"./iframe-BAzoJD_n.js";import{O as b}from"./object-table-CXjRtA9s.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bsv3MAJ7.js";import{u as g}from"./useOsdkClient-Bfmyk2Eg.js";import"./preload-helper-DSHDaNkC.js";import"./Table-D_rBRk7V.js";import"./index-s4lAOVrs.js";import"./Dialog-CR639lRj.js";import"./cross-Cz9X-8vp.js";import"./svgIconContainer-DcEtiJnJ.js";import"./useBaseUiId-X8JbO_jF.js";import"./InternalBackdrop-BEz-Het1.js";import"./composite-C2ZeH-nt.js";import"./index-DnptcgYz.js";import"./index-BMCs90I6.js";import"./index-D9L2mjOB.js";import"./useEventCallback-ClbdUzWy.js";import"./SkeletonBar-JSA8ez91.js";import"./LoadingCell-4aetjgV8.js";import"./ColumnConfigDialog-BY9NBeIW.js";import"./DraggableList-CluNiQuA.js";import"./search-BX5F8_z_.js";import"./Input-DvNrW-kH.js";import"./useControlled-cRyxw0TO.js";import"./isEqual-DiTVCVI3.js";import"./isObject-BRC3jVhz.js";import"./Button-C6-5CX8D.js";import"./ActionButton-xm3OfMXt.js";import"./Checkbox-D82zXn1s.js";import"./useValueChanged-B_BD_Ppi.js";import"./CollapsiblePanel-BOrVcuXG.js";import"./MultiColumnSortDialog-B8YCTi_s.js";import"./MenuTrigger-C2dbIgFm.js";import"./CompositeItem-Dx_RF7XZ.js";import"./ToolbarRootContext-DHhHK4Vd.js";import"./getDisabledMountTransitionStyles-alpHjjXx.js";import"./getPseudoElementBounds-0QkKzEQT.js";import"./chevron-down-BgJhhOtE.js";import"./index-RB9l46zQ.js";import"./error-3n0FpK4k.js";import"./BaseCbacBanner-C9TiEwDc.js";import"./makeExternalStore-C_ctE6bz.js";import"./Tooltip-D3twPyS2.js";import"./PopoverPopup-dsU5wvNs.js";import"./toNumber-Bt6DwShw.js";import"./tick-C3Hz3Jzx.js";import"./DropdownField-DTwMjcEt.js";import"./withOsdkMetrics-CiR7QeDt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

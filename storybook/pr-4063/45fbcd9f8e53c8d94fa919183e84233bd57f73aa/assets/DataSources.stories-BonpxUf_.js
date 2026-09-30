import{j as r}from"./iframe-BvtrFrDq.js";import{O as b}from"./object-table-WI4x_sPI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BII1_bzs.js";import{u as g}from"./useOsdkClient-BU66DrOT.js";import"./preload-helper-hiWkjTbI.js";import"./Table-ji2Mcr5u.js";import"./index-BJkhm3Ia.js";import"./Dialog-DBAH8-Tq.js";import"./cross-Dm_M5ayo.js";import"./svgIconContainer-CxzpI-nz.js";import"./useBaseUiId-D1zJXq-x.js";import"./InternalBackdrop-Bhnkys6D.js";import"./composite-D9wCA3L7.js";import"./index-B2QxPovI.js";import"./index-BmdzJuTV.js";import"./index-jQnhxv3F.js";import"./useEventCallback-heFPgHFU.js";import"./SkeletonBar-5j0-fDGa.js";import"./LoadingCell-CTU55bjC.js";import"./ColumnConfigDialog-t2KtF3py.js";import"./DraggableList-CLCYhfcj.js";import"./search-y87IcSNA.js";import"./Input-D3h_1eKW.js";import"./useControlled-C5pmq0AY.js";import"./Button-BJy_LHxZ.js";import"./small-cross-B9NMxasu.js";import"./ActionButton-Ye6rlMnt.js";import"./Checkbox-DeGVUvpG.js";import"./useValueChanged-CrlzAUPK.js";import"./CollapsiblePanel-CvNLT_W0.js";import"./MultiColumnSortDialog-BJOCPejF.js";import"./MenuTrigger-B7fnUekI.js";import"./CompositeItem-Rfg3qzju.js";import"./ToolbarRootContext-BrQK-hek.js";import"./getDisabledMountTransitionStyles-Bafsb8MV.js";import"./getPseudoElementBounds-B7QZiwEe.js";import"./chevron-down-BxwFps0j.js";import"./index-B5-tsrVL.js";import"./error-BbBH-DMp.js";import"./BaseCbacBanner-CHzQUt6Z.js";import"./makeExternalStore-CT6g87Zk.js";import"./Tooltip-B-M7Glcs.js";import"./PopoverPopup-B2L2ZFoJ.js";import"./debounce-D48NSO_6.js";import"./tick-D1kmaKOg.js";import"./DropdownField-D-hNk4Y1.js";import"./isEqual-aLexuwQw.js";import"./withOsdkMetrics-Cf9QOWiU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-D3l12Tr-.js";import{O as b}from"./object-table-nod7Wt-p.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B7cGW5ij.js";import{u as g}from"./useOsdkClient-0m55-sBo.js";import"./preload-helper-PcHol1Ue.js";import"./Table-CyeovwFu.js";import"./index-BPiZlFJR.js";import"./Dialog-GF5Yno-p.js";import"./cross-C3J0WO3R.js";import"./svgIconContainer-CrW6rOVr.js";import"./useBaseUiId-BNJrpCWm.js";import"./InternalBackdrop-ziShhlZl.js";import"./composite-CuNBJcuu.js";import"./index-3OzYw8WP.js";import"./index-D9TP-Dik.js";import"./index-iaCxRYSZ.js";import"./useEventCallback-BeRbrn2J.js";import"./SkeletonBar-DjZej6tn.js";import"./LoadingCell-CjWQnUcs.js";import"./ColumnConfigDialog-DY6HW5pi.js";import"./DraggableList-ZYKcWFuZ.js";import"./search-CdpCaKTD.js";import"./Input-BOpnVUAt.js";import"./useControlled-DWcGrjw6.js";import"./Button-DSLUEzYm.js";import"./small-cross-BCEWKAxW.js";import"./ActionButton-DCUde49g.js";import"./Checkbox-Hfm8jSI2.js";import"./useValueChanged-CBUdNBJG.js";import"./CollapsiblePanel-Dm9vP2Y3.js";import"./MultiColumnSortDialog-B5g7AoHm.js";import"./MenuTrigger-DJMPc6Ab.js";import"./CompositeItem-BQJ1FDQm.js";import"./ToolbarRootContext-DbokOTWe.js";import"./getDisabledMountTransitionStyles-DsE80_5m.js";import"./getPseudoElementBounds-D46F0KDp.js";import"./chevron-down-C6Fq88S4.js";import"./index-ChSzKfO9.js";import"./error-CKivbg2c.js";import"./BaseCbacBanner-CP6kabxU.js";import"./makeExternalStore-CvkBuVLJ.js";import"./Tooltip-NvOXi5xg.js";import"./PopoverPopup-CkdVrScL.js";import"./debounce-BHUK5RQM.js";import"./tick-Dx_ZSNZP.js";import"./DropdownField-CtgPUtSd.js";import"./isEqual-t_77Xxoc.js";import"./withOsdkMetrics-62C1cNRI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

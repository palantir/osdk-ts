import{j as r}from"./iframe-DMbRIuDb.js";import{O as b}from"./object-table-B0Csi-L9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BXy1dSz0.js";import{u as g}from"./useOsdkClient-CfV6cdO_.js";import"./preload-helper-sYBSF0kM.js";import"./Table-JZQclb11.js";import"./index-Bu-1yS3f.js";import"./Dialog-ofYSW6ZV.js";import"./cross-D-Gd3Z1L.js";import"./svgIconContainer-DRmK9U-I.js";import"./useBaseUiId-Ud_ZuwhE.js";import"./InternalBackdrop-D0_D0B89.js";import"./composite-BbcTHbJw.js";import"./index-BqPJnSgL.js";import"./index-DYfyQJ7D.js";import"./index-Bw2xP442.js";import"./useEventCallback-B5DihS4I.js";import"./SkeletonBar-CSxcwHsY.js";import"./LoadingCell-CSgKfeTm.js";import"./ColumnConfigDialog-C6UvhfFS.js";import"./DraggableList-gU76DxBG.js";import"./search-0CHVsg6w.js";import"./Input-D-dAAgmX.js";import"./useControlled-CIwMJypC.js";import"./Button-CD6kVtUc.js";import"./small-cross-Bl_8sGCy.js";import"./ActionButton-BuZQ80QL.js";import"./Checkbox-BiDq78AM.js";import"./useValueChanged-6Z_1Wu5g.js";import"./CollapsiblePanel-BRC6_1mg.js";import"./MultiColumnSortDialog-C31dFqGE.js";import"./MenuTrigger-D71lz07f.js";import"./CompositeItem-C_Zv4JbC.js";import"./ToolbarRootContext-CnFMRhrV.js";import"./getDisabledMountTransitionStyles-XoIoWCwu.js";import"./getPseudoElementBounds-DP-4v2Ps.js";import"./chevron-down-_C5sbwkb.js";import"./index-dCYLjsWC.js";import"./error-D_c53g1g.js";import"./BaseCbacBanner-CZaw_ege.js";import"./makeExternalStore-H1BAkO0H.js";import"./Tooltip-BwMVZzeJ.js";import"./PopoverPopup-LtTxVH8V.js";import"./debounce-IZu9ANTR.js";import"./tick-D2Wm6MFc.js";import"./DropdownField-Dmp4Hyee.js";import"./isEqual-Dl3fPPvK.js";import"./withOsdkMetrics-CiT1Znwa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

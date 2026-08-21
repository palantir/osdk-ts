import{j as r}from"./iframe-DitR3wrF.js";import{O as b}from"./object-table-CID5KzVr.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CjvLHmuR.js";import{u as g}from"./useOsdkClient-DsFPAnnx.js";import"./preload-helper-CNXpGYTW.js";import"./Table-DK5kkM-B.js";import"./index-BxGfYTdz.js";import"./Dialog-C34PcR-Z.js";import"./cross-Bk9CQZhu.js";import"./svgIconContainer-iiqqYfd1.js";import"./useBaseUiId-nvgLYlZj.js";import"./InternalBackdrop-rs5ZBr6w.js";import"./composite-C4jZt334.js";import"./index-mmwfIz2r.js";import"./index-B_n8V48u.js";import"./index-2m8BG5Sh.js";import"./useEventCallback-Dxp2t-VD.js";import"./SkeletonBar-HS9u5urc.js";import"./LoadingCell-DGAsi_Nc.js";import"./ColumnConfigDialog-D081vs0D.js";import"./DraggableList-CA3S4epP.js";import"./search-Bwe7rzXS.js";import"./Input-CYzB12qm.js";import"./useControlled-Bo2-iR5e.js";import"./Button-Bo3FBeXJ.js";import"./small-cross-COwDX3bd.js";import"./ActionButton-CIH2u_HO.js";import"./Checkbox-Do08-zmE.js";import"./useValueChanged-DJv87t3q.js";import"./CollapsiblePanel-DZ_aEzco.js";import"./MultiColumnSortDialog-7TPUamn-.js";import"./MenuTrigger-CMH3InYX.js";import"./CompositeItem-Drvp4rJR.js";import"./ToolbarRootContext-u_lF0Sl2.js";import"./getDisabledMountTransitionStyles-D4khNU9j.js";import"./getPseudoElementBounds-BvsDV4fR.js";import"./chevron-down-BsVtNM2T.js";import"./index-BPs86j1H.js";import"./error-C_6ZHNzG.js";import"./BaseCbacBanner-ChWdoKWk.js";import"./makeExternalStore-C2AhoyWG.js";import"./Tooltip-CdNUR4xK.js";import"./PopoverPopup-xyjhkdhH.js";import"./debounce-CuZ-w5Ov.js";import"./tick-C5e_5hJt.js";import"./DropdownField-CRY2WFNT.js";import"./isEqual-D8ZyDvjn.js";import"./withOsdkMetrics-wlTLtuGf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

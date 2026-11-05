import{j as r}from"./iframe-CeUrNeS8.js";import{O as b}from"./object-table-Bpteb8FA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BB8jKE8r.js";import{u as g}from"./useOsdkClient-CtzBUCwK.js";import"./preload-helper-kClf85ts.js";import"./Table-Dt77VVkm.js";import"./index-CNUBLdqm.js";import"./Dialog-d0Za69Wy.js";import"./cross-DWoJVskS.js";import"./svgIconContainer-Zj5VM8lV.js";import"./useBaseUiId-B6MLv2cX.js";import"./InternalBackdrop-UqnCaGVN.js";import"./composite-JSaF2J1s.js";import"./index-CIe6uhG7.js";import"./index-UtGuVeZo.js";import"./index-BzC6OjRU.js";import"./useEventCallback-Q2vk9PCY.js";import"./SkeletonBar-CgVsJVv3.js";import"./LoadingCell-A8k2lNO5.js";import"./ColumnConfigDialog-Ct6f0_e0.js";import"./DraggableList-BlJ4l4bX.js";import"./search-D1UF5EaJ.js";import"./Input-C4TGes2g.js";import"./useControlled-BdXF-8vf.js";import"./Button-BKP5ADZQ.js";import"./small-cross-D8svfqd3.js";import"./ActionButton-quaqHEPu.js";import"./Checkbox-D93Gj_vX.js";import"./useValueChanged-0avqLTHA.js";import"./CollapsiblePanel-DMLIpAbb.js";import"./MultiColumnSortDialog-DSV2K4Vg.js";import"./MenuTrigger-BcS9EnKj.js";import"./CompositeItem-BTE8y1pl.js";import"./ToolbarRootContext-U-LssyxT.js";import"./getDisabledMountTransitionStyles-C3IU8gic.js";import"./getPseudoElementBounds-BDhnbV4R.js";import"./chevron-down-DI7a3Uf5.js";import"./index-RhUwFwFJ.js";import"./error-BARMDzUn.js";import"./BaseCbacBanner-AwORgCyR.js";import"./makeExternalStore-BahKFFla.js";import"./Tooltip-1n8j-V5F.js";import"./PopoverPopup-DK71HW__.js";import"./debounce-CVh5FHmf.js";import"./tick-1CibzV_P.js";import"./DropdownField-Dgc8ONCk.js";import"./isEqual-BIAko7LF.js";import"./withOsdkMetrics-BcIRH2mN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

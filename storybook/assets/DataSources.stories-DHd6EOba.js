import{j as r}from"./iframe-BKkgtFSo.js";import{O as b}from"./object-table-BH4cY394.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DGB39KDC.js";import{u as g}from"./useOsdkClient-DFktUr12.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-eE5th-G5.js";import"./index-Dvbp0kPd.js";import"./NonIdealState-CcUJbrpE.js";import"./Dialog-C2aH1HrO.js";import"./cross-5K119jUx.js";import"./svgIconContainer-Ce9VGxQH.js";import"./useBaseUiId-BfmvZ33T.js";import"./InternalBackdrop-BpRAUWPw.js";import"./composite-CVFofIE7.js";import"./index-CNoy-iis.js";import"./index-BDs07rBu.js";import"./index-1AbeELNr.js";import"./SkeletonBar-DCi4lVfd.js";import"./LoadingCell-Do8SUb-f.js";import"./ColumnConfigDialog-CTuntdU9.js";import"./DraggableList-ByCpmkMe.js";import"./search-VxZ7VsjM.js";import"./Input-ajiamWew.js";import"./useControlled-CiCRPIrb.js";import"./Button-D0Mtf1Wu.js";import"./small-cross-D5_9Jwec.js";import"./ActionButton-DkNjySCa.js";import"./Checkbox-BRVfPQgc.js";import"./useValueChanged-BVys5dm-.js";import"./CollapsiblePanel-BB19Mn1b.js";import"./MultiColumnSortDialog-BH0ZXCbZ.js";import"./MenuTrigger-B3ghwpLY.js";import"./CompositeItem-B3A9StDG.js";import"./ToolbarRootContext-CGelScnS.js";import"./getDisabledMountTransitionStyles-X8rUrkvt.js";import"./getPseudoElementBounds-C1szzxdu.js";import"./chevron-down-C5BYt7gU.js";import"./index-CVd367Vi.js";import"./error-DeWUfdBM.js";import"./BaseCbacBanner-DqJ_osEB.js";import"./makeExternalStore-Qrh_OJH6.js";import"./Tooltip-Br4k1WIE.js";import"./PopoverPopup-Dkt2NgPN.js";import"./Select-CQIz6wip.js";import"./tick-Ch6cMwoK.js";import"./DropdownField-DT-aa1rt.js";import"./useDebouncedCallback-BzoQ_1l9.js";import"./isEqual-COOSB5_T.js";import"./_baseIsEqual-D4aVuU6Y.js";import"./stableSerialize-D_7L0Ei9.js";import"./withOsdkMetrics-Bs5QRS3m.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,ge={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const ue=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,ue as __namedExportsOrder,ge as default};

import{j as r}from"./iframe-BrG6cQfS.js";import{O as b}from"./object-table-ins_eC8g.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ClnpXOHb.js";import{u as g}from"./useOsdkClient-CoqhAt_a.js";import"./preload-helper-Bixkw_YY.js";import"./Table-CgOUWwSB.js";import"./index-BEzPF5rE.js";import"./Dialog-DFhocNiZ.js";import"./cross-DGQ_41Ww.js";import"./svgIconContainer-c7VzC2a1.js";import"./useBaseUiId-DamEe__I.js";import"./InternalBackdrop-C3iNMrIw.js";import"./composite-DHs3_um3.js";import"./index-R1lV5gJE.js";import"./index-GtEOCerY.js";import"./index-CnlkPWeq.js";import"./useEventCallback-BDu00IHC.js";import"./SkeletonBar-Bi5v0pgW.js";import"./LoadingCell-D-HPaQza.js";import"./ColumnConfigDialog-DoZj9VAj.js";import"./DraggableList-BwndBBDN.js";import"./search-jgXrXlZs.js";import"./Input-Dpso9xg2.js";import"./useControlled-CblOQAp9.js";import"./Button-DICz1J-P.js";import"./small-cross-ZjdxMb2P.js";import"./ActionButton-BZZYP6V2.js";import"./Checkbox-DJZEHWvF.js";import"./useValueChanged-CwLQb5A1.js";import"./CollapsiblePanel-DjI8FHot.js";import"./MultiColumnSortDialog-wEtgATb9.js";import"./MenuTrigger-4nCp8LZS.js";import"./CompositeItem-Dezopk9M.js";import"./ToolbarRootContext-C-eO9sv2.js";import"./getDisabledMountTransitionStyles-Bw2gn-S1.js";import"./getPseudoElementBounds-DIijxXuL.js";import"./chevron-down-B0I-pL1F.js";import"./index-B-kArG0q.js";import"./error-DOpFGD8C.js";import"./BaseCbacBanner-XaY-ha82.js";import"./makeExternalStore-DqEFEqtD.js";import"./Tooltip-C_nWVRfI.js";import"./PopoverPopup-DnIX79DU.js";import"./debounce-CR0MYlUB.js";import"./tick-4TnK2SFg.js";import"./DropdownField-DjQ0AkRs.js";import"./isEqual-DjuLte7N.js";import"./withOsdkMetrics-Dsha6ge2.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

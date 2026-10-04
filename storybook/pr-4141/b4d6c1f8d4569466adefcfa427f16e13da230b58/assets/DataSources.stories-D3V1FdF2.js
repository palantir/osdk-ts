import{j as r}from"./iframe-Bet7ZyCm.js";import{O as b}from"./object-table-BHp0fNyR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DIwaxYqd.js";import{u as g}from"./useOsdkClient-DFdeM1ww.js";import"./preload-helper-BUkBrZyY.js";import"./Table-B00XKz94.js";import"./index-DjVLxSFI.js";import"./Dialog-DTj3vbjE.js";import"./cross-BeELKFUT.js";import"./svgIconContainer-Barh-7SS.js";import"./useBaseUiId-CsxMin3O.js";import"./InternalBackdrop-CFlTUOfK.js";import"./composite-CRapEzeJ.js";import"./index-Dbf65m0z.js";import"./index-BTuCJIed.js";import"./index-Bfbp3vAN.js";import"./useEventCallback-CpGQqYvl.js";import"./SkeletonBar-lHRA8dS5.js";import"./LoadingCell-DWpMPAwG.js";import"./ColumnConfigDialog-nwuPe0vP.js";import"./DraggableList-B0h0wQfI.js";import"./search-DarFPo_N.js";import"./Input-C3dR_yK9.js";import"./useControlled-COCV5_w3.js";import"./Button-DA30xwtA.js";import"./small-cross-B5QztEfo.js";import"./ActionButton-BM2eOm48.js";import"./Checkbox-DN_g8-MN.js";import"./useValueChanged-BjBXj4B6.js";import"./CollapsiblePanel-E1_rckeS.js";import"./MultiColumnSortDialog-klGrbSD-.js";import"./MenuTrigger-CBMq_vc-.js";import"./CompositeItem-DTquphkU.js";import"./ToolbarRootContext-DNj0Wk9x.js";import"./getDisabledMountTransitionStyles-BLmiHtZa.js";import"./getPseudoElementBounds-D1bAAr1-.js";import"./chevron-down-5KX1Vgx1.js";import"./index-BcSOkjj6.js";import"./error-Y0ypiKIG.js";import"./BaseCbacBanner-CJzsHRT4.js";import"./makeExternalStore-BZZ89cDU.js";import"./Tooltip-BioUBHfR.js";import"./PopoverPopup-B0mVV_R3.js";import"./debounce-BHN0rKBM.js";import"./tick-DK1jZqTe.js";import"./DropdownField-DZGUXtRJ.js";import"./isEqual-o-GlHQCT.js";import"./withOsdkMetrics-8BIUQCxd.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

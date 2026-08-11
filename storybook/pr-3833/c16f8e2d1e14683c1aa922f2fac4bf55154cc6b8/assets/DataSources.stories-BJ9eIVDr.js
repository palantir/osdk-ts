import{j as r}from"./iframe-acbxn-f7.js";import{O as b}from"./object-table-CN5yha45.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BnnaW2Cy.js";import{u as g}from"./useOsdkClient-CqDg3tJw.js";import"./preload-helper-fbPQYzet.js";import"./Table-BBFk4ims.js";import"./index-CVPAqU1b.js";import"./Dialog-CwejTPwi.js";import"./cross-BW0HBlIL.js";import"./svgIconContainer-DRdEcW3D.js";import"./useBaseUiId-CdtAIfTS.js";import"./InternalBackdrop-CiYWkt9x.js";import"./composite-CPBbATn-.js";import"./index-D440U2lf.js";import"./index-DqqbpueN.js";import"./index-DywtUTxm.js";import"./useEventCallback-C4hxqqtx.js";import"./SkeletonBar-DfTJMEGe.js";import"./LoadingCell-Cxki7mau.js";import"./ColumnConfigDialog-D5_Oyh5j.js";import"./DraggableList-L1L_4TYq.js";import"./search-DiYKFhHE.js";import"./Input-BjbaQoWk.js";import"./useControlled-GOo3Sud3.js";import"./isEqual-z9pnKAG9.js";import"./isObject-DSXN-3i3.js";import"./Button-1BzMXgMp.js";import"./ActionButton-D0AUONzO.js";import"./Checkbox-CAXj-zpQ.js";import"./useValueChanged-UVEJ5iFP.js";import"./CollapsiblePanel-DaXd5Eta.js";import"./MultiColumnSortDialog-DWFARLg5.js";import"./MenuTrigger-2GuiCSnN.js";import"./CompositeItem-C-TpVr46.js";import"./ToolbarRootContext-DhAyKrZU.js";import"./getDisabledMountTransitionStyles-CoXTLwP5.js";import"./getPseudoElementBounds-n0j8dayn.js";import"./chevron-down-fLJV3lSr.js";import"./index-7FxVYwUR.js";import"./error-RYjU87Ko.js";import"./BaseCbacBanner-DZaR4XFw.js";import"./makeExternalStore-B4WBQrGe.js";import"./Tooltip-Bielf6rk.js";import"./PopoverPopup-A73qwNSF.js";import"./toNumber-hUwX4eVc.js";import"./tick-BS44LqM1.js";import"./DropdownField-BsQvaeWW.js";import"./withOsdkMetrics-DopriMje.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

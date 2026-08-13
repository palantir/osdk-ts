import{j as r}from"./iframe-CrdYfz1j.js";import{O as b}from"./object-table-DHo6Bu71.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BJr7-hIx.js";import{u as g}from"./useOsdkClient-BFBvlRT_.js";import"./preload-helper-BKATmCzL.js";import"./Table-Bp75n4mb.js";import"./index-DGf5UtC0.js";import"./Dialog-BNP-wm6l.js";import"./cross-CNNELhu-.js";import"./svgIconContainer-Tyi6-qoG.js";import"./useBaseUiId-dMQXpX2_.js";import"./InternalBackdrop-MxxDFkud.js";import"./composite-BQeUw1C5.js";import"./index-Bo5TPIYo.js";import"./index-2NC_6Tgs.js";import"./index-BV-m61ut.js";import"./useEventCallback-xVgMH8jq.js";import"./SkeletonBar-ByE7-9ZL.js";import"./LoadingCell-CInqLWbH.js";import"./ColumnConfigDialog-lcdEo0kN.js";import"./DraggableList-EsseXW8w.js";import"./search-CKLyWx-O.js";import"./Input-D68UoCnN.js";import"./useControlled-B-uObzoi.js";import"./Button-CchJ5cyG.js";import"./small-cross-CPhowe_e.js";import"./ActionButton-C2hPv--S.js";import"./Checkbox-CnESWY0h.js";import"./useValueChanged-C-ltvQdt.js";import"./CollapsiblePanel-DuQ0C_fv.js";import"./MultiColumnSortDialog-Cg_igUeZ.js";import"./MenuTrigger-BzQkxt2t.js";import"./CompositeItem-BBlnE76H.js";import"./ToolbarRootContext-C55ZrIvq.js";import"./getDisabledMountTransitionStyles-C4cYowrJ.js";import"./getPseudoElementBounds-BsSFA3pP.js";import"./chevron-down-BTPbSLrU.js";import"./index-CNhI-fgu.js";import"./error-d1zfkTvI.js";import"./BaseCbacBanner-DAQsf-Py.js";import"./makeExternalStore-BxvGt8fM.js";import"./Tooltip-B9Y-ls9x.js";import"./PopoverPopup-Cn_7Vy-e.js";import"./toNumber-BoMSplVD.js";import"./tick-CQsTpN7q.js";import"./DropdownField-D51Dua_3.js";import"./withOsdkMetrics-DAT7SN5n.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,Te={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const je=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,je as __namedExportsOrder,Te as default};

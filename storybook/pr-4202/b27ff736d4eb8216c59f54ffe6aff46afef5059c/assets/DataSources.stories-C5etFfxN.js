import{j as r}from"./iframe-DpYBlUf6.js";import{O as b}from"./object-table-B4dQhKDm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-FZoiWrqD.js";import{u as g}from"./useOsdkClient-BDUknGJW.js";import"./preload-helper-aJL6Jgcy.js";import"./Table-DnbhSzQH.js";import"./index-DG12qFyq.js";import"./Dialog-D_2RIDue.js";import"./cross-hvj-E3FQ.js";import"./svgIconContainer-BNnaw46F.js";import"./useBaseUiId-Cvpk5u0b.js";import"./InternalBackdrop-yAnNHODP.js";import"./composite-kZPGPCkC.js";import"./index-Zn6BbNql.js";import"./index-gjgAmiRP.js";import"./index-iyK82M59.js";import"./useEventCallback-DbLrzPiT.js";import"./SkeletonBar-Bim1zKuG.js";import"./LoadingCell-DkQrHs-y.js";import"./ColumnConfigDialog-yNxOstzr.js";import"./DraggableList-DVXGvHZi.js";import"./search-B-2FwTug.js";import"./Input-BuqKJ0cI.js";import"./useControlled-BzCwoTTi.js";import"./Button-OjQdDHcR.js";import"./small-cross-CE66X8dX.js";import"./ActionButton-DWHTDIUq.js";import"./Checkbox-DIIlcsg1.js";import"./useValueChanged-DfSVAW7h.js";import"./CollapsiblePanel-BOO07fZk.js";import"./MultiColumnSortDialog-6-IDQkGN.js";import"./MenuTrigger-D3BrYWAo.js";import"./CompositeItem-3SIjESMP.js";import"./ToolbarRootContext-D5uSuuYr.js";import"./getDisabledMountTransitionStyles-B2rY7D_M.js";import"./getPseudoElementBounds-BET_L97X.js";import"./chevron-down-DiWPSqGR.js";import"./index-DvRXLSHl.js";import"./error-_sVszbe4.js";import"./BaseCbacBanner-D67ftno0.js";import"./makeExternalStore-Dk5562or.js";import"./Tooltip-iXECaKde.js";import"./PopoverPopup-CjONQpR9.js";import"./debounce-D-UCwN4o.js";import"./tick-DQwvbD-D.js";import"./DropdownField-C4CuM9xG.js";import"./isEqual-ByuLvGFi.js";import"./withOsdkMetrics-Db3uKV6F.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

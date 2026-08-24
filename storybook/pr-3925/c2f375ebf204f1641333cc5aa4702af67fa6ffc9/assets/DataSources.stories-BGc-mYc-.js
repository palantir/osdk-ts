import{j as r}from"./iframe-D7uYHMK5.js";import{O as b}from"./object-table-V3UCM2fv.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cvk5saoh.js";import{u as g}from"./useOsdkClient-DZ4-w40f.js";import"./preload-helper-DiAZcfZm.js";import"./Table-DtMzJz3l.js";import"./index-BzC45Lga.js";import"./Dialog-Dva2zDK4.js";import"./cross-CD_5zqBE.js";import"./svgIconContainer-BznKxTlt.js";import"./useBaseUiId-Us591avB.js";import"./InternalBackdrop-BCzVBoy3.js";import"./composite-BcyVLOSD.js";import"./index-I4_6oK98.js";import"./index-Cjfc9eRI.js";import"./index-C8TJW-iD.js";import"./useEventCallback-cILH2oXo.js";import"./SkeletonBar-D-LRfS-M.js";import"./LoadingCell-21AE9QX4.js";import"./ColumnConfigDialog-K-9LCMyb.js";import"./DraggableList-DpVkgFNq.js";import"./search-DRrcfgZe.js";import"./Input-BabOhAfz.js";import"./useControlled-D3BSP16K.js";import"./Button-erxxrJMI.js";import"./small-cross-CRWB9qfi.js";import"./ActionButton-UcWGaKKs.js";import"./Checkbox-CtO4j5Lj.js";import"./useValueChanged-BdXhgOuv.js";import"./CollapsiblePanel-4QbvNyUk.js";import"./MultiColumnSortDialog-n9LPvjCu.js";import"./MenuTrigger-8U4VhxNl.js";import"./CompositeItem-DjaEdGcQ.js";import"./ToolbarRootContext-D0EWy9dk.js";import"./getDisabledMountTransitionStyles-BjeyX6Od.js";import"./getPseudoElementBounds-CoL9SufA.js";import"./chevron-down-BFTm3R8X.js";import"./index-BMEwLPMF.js";import"./error-DJXRLU5K.js";import"./BaseCbacBanner-B6bLhjoW.js";import"./makeExternalStore-DmFz2z1W.js";import"./Tooltip-vgfshVU2.js";import"./PopoverPopup-n-QszO91.js";import"./debounce-DmAwE0_8.js";import"./tick-C6rTYxk-.js";import"./DropdownField-7eRy7ajr.js";import"./isEqual-BeDN-3ha.js";import"./withOsdkMetrics-D9_ognri.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

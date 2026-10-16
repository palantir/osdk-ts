import{j as r}from"./iframe-BgteeNK7.js";import{O as b}from"./object-table-DEZ1G1NL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-1eHN5U9d.js";import{u as g}from"./useOsdkClient-CV4JlL1O.js";import"./preload-helper-D1QQRU4G.js";import"./Table-Ceo-XjXx.js";import"./index-Dh7VeDie.js";import"./Dialog-CeeYLjv-.js";import"./cross-DvJO6axF.js";import"./svgIconContainer-DMbES6r9.js";import"./useBaseUiId-Du-nzkw5.js";import"./InternalBackdrop-dEKlbFqb.js";import"./composite-Bw2x2Ls7.js";import"./index-D7D5AllY.js";import"./index-jEkUh6V5.js";import"./index-BwP8hvLS.js";import"./useEventCallback-D18102OR.js";import"./SkeletonBar-BQ-GEFTk.js";import"./LoadingCell-j33UUAJu.js";import"./ColumnConfigDialog-CYzqvnKo.js";import"./DraggableList-M5zgoLyw.js";import"./search-DnqpkQaz.js";import"./Input-BLKefb3k.js";import"./useControlled-DtLnayup.js";import"./Button-CTMGDM5U.js";import"./small-cross-CkykJveX.js";import"./ActionButton-D8GwUeFP.js";import"./Checkbox-C46TaKtu.js";import"./useValueChanged-Dxi0cZCL.js";import"./CollapsiblePanel-BVTc-BUt.js";import"./MultiColumnSortDialog-ZRpALFdX.js";import"./MenuTrigger-gK17DS2n.js";import"./CompositeItem-DbN5tfcI.js";import"./ToolbarRootContext-D9ylwIx5.js";import"./getDisabledMountTransitionStyles-BGJEt7yH.js";import"./getPseudoElementBounds-BUgENUZ_.js";import"./chevron-down-BazaCq4r.js";import"./index--nUSuqMP.js";import"./error-CHdhKpK1.js";import"./BaseCbacBanner-CP1G2zWQ.js";import"./makeExternalStore-D3iXBhr4.js";import"./Tooltip-BI_M7upB.js";import"./PopoverPopup-BdINBgGh.js";import"./debounce-DB2j4UjQ.js";import"./tick-Btid1QgJ.js";import"./DropdownField-N1dBIw-4.js";import"./isEqual-Dv0rflGl.js";import"./withOsdkMetrics-BGKMncSr.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

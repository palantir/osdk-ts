import{j as r}from"./iframe-9A7AV9Cy.js";import{O as b}from"./object-table-CPJv4BYW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CZWWhaGE.js";import{u as g}from"./useOsdkClient-C7At4pV9.js";import"./preload-helper-CK_ZcGGF.js";import"./Table-B59cxmyO.js";import"./index-Bkgk7vsR.js";import"./Dialog-Bl9zekAE.js";import"./cross-B7t6TzDw.js";import"./svgIconContainer-CR0pIEyo.js";import"./useBaseUiId-q7QIFNkg.js";import"./InternalBackdrop-CQ3SkFUe.js";import"./composite-CEEJ0vWU.js";import"./index-C7xfgMTV.js";import"./index-BV5cRfRG.js";import"./index--u-sCo5n.js";import"./useEventCallback-DNZWa-fZ.js";import"./SkeletonBar-TosXJUxL.js";import"./LoadingCell-Dumj3M5j.js";import"./ColumnConfigDialog-CBjPf0Hz.js";import"./DraggableList-C57KPCMS.js";import"./search-BWRhS2Qj.js";import"./Input-CCxEn7sH.js";import"./useControlled-DIFFKw6v.js";import"./Button-CKepLiXu.js";import"./small-cross-1ULwRpx5.js";import"./ActionButton-1V5zer9B.js";import"./Checkbox-CnzsJ8SG.js";import"./useValueChanged-kZaWbmaa.js";import"./CollapsiblePanel-CKt0R28j.js";import"./MultiColumnSortDialog-00THcpjd.js";import"./MenuTrigger-BtqQkzdC.js";import"./CompositeItem-DoPsMeEK.js";import"./ToolbarRootContext-DCS282rA.js";import"./getDisabledMountTransitionStyles-_YA1Iepr.js";import"./getPseudoElementBounds-Bq0sNDj9.js";import"./chevron-down-Bi1tvw_Y.js";import"./index-CzE6ZkZ0.js";import"./error-C8bHM7uj.js";import"./BaseCbacBanner-BsVniqSH.js";import"./makeExternalStore-UebcDacP.js";import"./Tooltip-Dfs7CnEh.js";import"./PopoverPopup-hsESB4RR.js";import"./debounce-ADxFBf6q.js";import"./tick-DlLbsS5l.js";import"./DropdownField-CNaJiffx.js";import"./isEqual-DKebV1YP.js";import"./withOsdkMetrics-B5obnKQC.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

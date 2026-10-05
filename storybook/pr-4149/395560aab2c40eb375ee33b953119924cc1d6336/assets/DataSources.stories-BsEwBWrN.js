import{j as r}from"./iframe-BOTLlUE6.js";import{O as b}from"./object-table-DkfNUSuH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CA_ag1q-.js";import{u as g}from"./useOsdkClient-CPWrwkuC.js";import"./preload-helper-DEIZygRs.js";import"./Table-LQrxACXN.js";import"./index-Cs-O_idR.js";import"./Dialog-CHvRVjiq.js";import"./cross-Cy8vOx7n.js";import"./svgIconContainer-Prc3KqJd.js";import"./useBaseUiId-Dd9KpxnA.js";import"./InternalBackdrop-IIlmsF_v.js";import"./composite-DGujq1fd.js";import"./index-CWHl0m7K.js";import"./index-CcyNoJe8.js";import"./index-C-efyImj.js";import"./useEventCallback-BajVHdte.js";import"./SkeletonBar-BYB-xe6O.js";import"./LoadingCell-BKuoj7-L.js";import"./ColumnConfigDialog-hjejOSHa.js";import"./DraggableList-BdR82jqh.js";import"./search-DlkeJy6k.js";import"./Input-D_iusRO5.js";import"./useControlled-2lHvWmOj.js";import"./Button-Dvgi56Dm.js";import"./small-cross-BXzGBX0-.js";import"./ActionButton-C-8n6E4h.js";import"./Checkbox-D2agivE0.js";import"./useValueChanged-BZ2Rr6kL.js";import"./CollapsiblePanel-D8vxxxpH.js";import"./MultiColumnSortDialog-BW406hS2.js";import"./MenuTrigger-52dLLXZL.js";import"./CompositeItem-CDnQJecr.js";import"./ToolbarRootContext-DuzuLF_7.js";import"./getDisabledMountTransitionStyles-L5goK-63.js";import"./getPseudoElementBounds-Cf68WDMb.js";import"./chevron-down-QX4KjP4d.js";import"./index-CI0V04Qg.js";import"./error-DjHdCw0S.js";import"./BaseCbacBanner-BNrGG6OT.js";import"./makeExternalStore-5sXqlo0x.js";import"./Tooltip-Dis53iex.js";import"./PopoverPopup-C5BaOSgy.js";import"./debounce-DYIbFqjP.js";import"./tick-HKjZmk2p.js";import"./DropdownField-CLSkteEy.js";import"./isEqual-CZgWSPLt.js";import"./withOsdkMetrics-VFTM94rP.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

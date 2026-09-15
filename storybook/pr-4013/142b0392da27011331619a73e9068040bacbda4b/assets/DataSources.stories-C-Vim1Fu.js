import{j as r}from"./iframe-CpWBydph.js";import{O as b}from"./object-table-BNn1Ll-c.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CdJGXOyl.js";import{u as g}from"./useOsdkClient-OrClxpkO.js";import"./preload-helper-D2EqYees.js";import"./Table-DVh8Ouz0.js";import"./index-DvfucFad.js";import"./Dialog-Cp3umFkg.js";import"./cross-NuddkLO5.js";import"./svgIconContainer-DbE5PrYx.js";import"./useBaseUiId-COtj2_rS.js";import"./InternalBackdrop-BSfinE2G.js";import"./composite-B-otFn75.js";import"./index-DrBBVf0s.js";import"./index-BmfQPoOF.js";import"./index-5xD2A4-R.js";import"./useEventCallback-BLTuArat.js";import"./SkeletonBar-XV3C3ne0.js";import"./LoadingCell-_Kzizub0.js";import"./ColumnConfigDialog-K0YRT_ip.js";import"./DraggableList-CwbCSsnT.js";import"./search-CA9yp1JF.js";import"./Input-CBPVcjqK.js";import"./useControlled-BmS1IvVS.js";import"./Button-CVph9TxQ.js";import"./small-cross-toPDb3Us.js";import"./ActionButton-CSVHMrTJ.js";import"./Checkbox-NGkojnFm.js";import"./useValueChanged-VjU-WqRp.js";import"./CollapsiblePanel-CygfXvb2.js";import"./MultiColumnSortDialog-B4rwN1TP.js";import"./MenuTrigger-CGEbHfg2.js";import"./CompositeItem-nG423aGN.js";import"./ToolbarRootContext-DMifvP-V.js";import"./getDisabledMountTransitionStyles-BccbayF2.js";import"./getPseudoElementBounds-D6k5ZcCj.js";import"./chevron-down-D78fMNFz.js";import"./index-D9R22dHy.js";import"./error-Due8my_O.js";import"./BaseCbacBanner-6xWHfIM4.js";import"./makeExternalStore-C7U98bYJ.js";import"./Tooltip-BhubVngg.js";import"./PopoverPopup-9FwNVPH6.js";import"./debounce-ClJ8DjPv.js";import"./tick-1IBp_A8v.js";import"./DropdownField-Cj_IdBfJ.js";import"./isEqual-D7VM7CcB.js";import"./withOsdkMetrics-CmC654Yj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

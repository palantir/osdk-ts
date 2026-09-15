import{j as r}from"./iframe-W9lZ6KB9.js";import{O as b}from"./object-table-EVBvwLH1.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-9M49qgZN.js";import{u as g}from"./useOsdkClient-CfTr_FGX.js";import"./preload-helper-FRDH_-i6.js";import"./Table-BwylGEhj.js";import"./index-zvENON5K.js";import"./Dialog-B9eCYEci.js";import"./cross-BA2Nf7ni.js";import"./svgIconContainer-GBMBocam.js";import"./useBaseUiId-CM8bj9T3.js";import"./InternalBackdrop-CxePxxDd.js";import"./composite-Dds-kjO9.js";import"./index-Do1aQnY4.js";import"./index-CiBIb1Hm.js";import"./index-ChcUrjTS.js";import"./useEventCallback-D0v7edrX.js";import"./SkeletonBar-D_VpdDsY.js";import"./LoadingCell-DTNeNwbU.js";import"./ColumnConfigDialog-De6q3yEz.js";import"./DraggableList-DmrQs1J0.js";import"./search-DtUsUWlr.js";import"./Input-BE9q1hzT.js";import"./useControlled-BibYMAkB.js";import"./Button-Cgco6Fdx.js";import"./small-cross-C2YcwmE1.js";import"./ActionButton-D1zQD0P_.js";import"./Checkbox-DetNGzt5.js";import"./useValueChanged-CclPVhvR.js";import"./CollapsiblePanel-Cz6nNrqA.js";import"./MultiColumnSortDialog-zMiz0Q2L.js";import"./MenuTrigger-U49E4e1V.js";import"./CompositeItem-9LwIi5rO.js";import"./ToolbarRootContext-DwUbHsl_.js";import"./getDisabledMountTransitionStyles-DN13DrMz.js";import"./getPseudoElementBounds-DgIVsabS.js";import"./chevron-down-CPOSM9ve.js";import"./index-WuDXyzt9.js";import"./error-DJOARvPR.js";import"./BaseCbacBanner-DHDCpkMg.js";import"./makeExternalStore-Bh-hA2FN.js";import"./Tooltip-B0ah55oe.js";import"./PopoverPopup-BW5x1WJ1.js";import"./debounce-AKwKS-26.js";import"./tick-CTwnnC4O.js";import"./DropdownField-f_oplqdE.js";import"./isEqual-Bdk7YwEU.js";import"./withOsdkMetrics-BEDTYsPk.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

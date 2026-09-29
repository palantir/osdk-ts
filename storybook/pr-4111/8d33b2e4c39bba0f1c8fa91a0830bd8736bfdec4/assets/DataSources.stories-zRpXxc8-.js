import{j as r}from"./iframe-DKYmESdc.js";import{O as b}from"./object-table-BzdfRhLC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CWMR6Jev.js";import{u as g}from"./useOsdkClient-D7r4vk7f.js";import"./preload-helper-D5LE5Idy.js";import"./Table-CZvg9-PS.js";import"./index-DiIAgi_U.js";import"./Dialog-DJCFoWTr.js";import"./cross-yKYTlWK6.js";import"./svgIconContainer-D8ijfEF1.js";import"./useBaseUiId-CdKuMMMb.js";import"./InternalBackdrop-D2B5n5hm.js";import"./composite-DHljAWKo.js";import"./index-Dh-P4ImN.js";import"./index-BEPjmphW.js";import"./index-C6gaZbLL.js";import"./useEventCallback-ClNFTONN.js";import"./SkeletonBar-B4aoYFGC.js";import"./LoadingCell-BA8GKKnf.js";import"./ColumnConfigDialog-B9GK9pIT.js";import"./DraggableList-ChqmULcQ.js";import"./search-B7mMrQlf.js";import"./Input-BxCkIabd.js";import"./useControlled-B4q39qZO.js";import"./Button-DgkmSaF3.js";import"./small-cross-CgLsC0gq.js";import"./ActionButton-BU5G-FGV.js";import"./Checkbox-EdSHZ3e6.js";import"./useValueChanged-UpP8-F1K.js";import"./CollapsiblePanel-rz3tKFdi.js";import"./MultiColumnSortDialog-DVsWttF1.js";import"./MenuTrigger-Cn617Mmm.js";import"./CompositeItem-DhBadV4y.js";import"./ToolbarRootContext-CrwTeoix.js";import"./getDisabledMountTransitionStyles-C2zNLNsa.js";import"./getPseudoElementBounds-CQqlgHcK.js";import"./chevron-down-D1R0n3KO.js";import"./index-CC7Zqv6C.js";import"./error-DPhIreuO.js";import"./BaseCbacBanner-CIktjUa1.js";import"./makeExternalStore-DpXPZl7r.js";import"./Tooltip-CyVgxnxr.js";import"./PopoverPopup-18xMmYUE.js";import"./debounce-DJdertEZ.js";import"./tick-CfTVfx8m.js";import"./DropdownField-DdjBmbfl.js";import"./isEqual-BukSJ3gf.js";import"./withOsdkMetrics-WG4CGMhx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

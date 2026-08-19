import{j as r}from"./iframe-CcTzUt4q.js";import{O as b}from"./object-table-B5mEs8na.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D9bphcYM.js";import{u as g}from"./useOsdkClient-zEDt1fx6.js";import"./preload-helper-DTHvyKL2.js";import"./Table-DgQH63iU.js";import"./index-B0L2Pz3U.js";import"./Dialog-BmK-QCMj.js";import"./cross-CX9TEYNs.js";import"./svgIconContainer-DT2XOI7O.js";import"./useBaseUiId-vUFCbP4O.js";import"./InternalBackdrop-LwozvRjF.js";import"./composite-D9XK8W5R.js";import"./index-Dn8qQBZ_.js";import"./index-Bo_ehpsT.js";import"./index-BIFOh3O8.js";import"./useEventCallback-BngVQc52.js";import"./SkeletonBar-P8lEjqKk.js";import"./LoadingCell-DyEWtc2c.js";import"./ColumnConfigDialog-DSI5UCP3.js";import"./DraggableList-kbk4Kq4T.js";import"./search-BaEk66pJ.js";import"./Input-BbwwJ3kI.js";import"./useControlled-CXU26uEu.js";import"./Button-Bhonpuif.js";import"./small-cross-Bi6fImtG.js";import"./ActionButton-38fDduAv.js";import"./Checkbox-DcPzVpFb.js";import"./useValueChanged-DiIlb2iV.js";import"./CollapsiblePanel-DtiDyN9v.js";import"./MultiColumnSortDialog-DpkiqiMy.js";import"./MenuTrigger-vvc96eLU.js";import"./CompositeItem-MWEwicQS.js";import"./ToolbarRootContext-C074rZoJ.js";import"./getDisabledMountTransitionStyles-DXxCwzEL.js";import"./getPseudoElementBounds-oYato3fO.js";import"./chevron-down-C2VHnW9O.js";import"./index-CtpHKrCG.js";import"./error-Dj7Fc47o.js";import"./BaseCbacBanner-CDFaIa-9.js";import"./makeExternalStore-BHMTu4YC.js";import"./Tooltip-DuBTlYLb.js";import"./PopoverPopup-CofoEXd7.js";import"./debounce-yBMZLkBq.js";import"./tick-DyThwVFn.js";import"./DropdownField-JbUzQxvd.js";import"./isEqual-BITCjXxY.js";import"./withOsdkMetrics-5Ex0_go8.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

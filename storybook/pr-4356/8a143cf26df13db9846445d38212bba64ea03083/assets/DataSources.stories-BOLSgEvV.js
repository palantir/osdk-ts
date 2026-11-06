import{j as r}from"./iframe-CaPOT9dY.js";import{O as b}from"./object-table-qfLAuJ5S.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BADLOL_I.js";import{u as g}from"./useOsdkClient-DrLWF_Tb.js";import"./preload-helper-CSJav7MA.js";import"./Table-BJZtcsXN.js";import"./index-Ho8J3uum.js";import"./Dialog-CsbG8SLi.js";import"./cross-Cgcm5Piu.js";import"./svgIconContainer-4uAuruPa.js";import"./useBaseUiId-53CqlhMX.js";import"./InternalBackdrop-BbFTOoCN.js";import"./composite-D8pTE5q2.js";import"./index-DSxM7sDI.js";import"./index-93ZDer7j.js";import"./index-d9vg3R-3.js";import"./useEventCallback-CSKwn_Ie.js";import"./SkeletonBar-CBVZTqOR.js";import"./LoadingCell-VK71aZjr.js";import"./ColumnConfigDialog-CP96cicV.js";import"./DraggableList-BWgG_TiL.js";import"./search-BIzPRVvQ.js";import"./Input-BuXaNZ_G.js";import"./useControlled-Desmn_f_.js";import"./Button-D6M8kmX2.js";import"./small-cross-ZhzSbXj6.js";import"./ActionButton-CRVG5z67.js";import"./Checkbox-B9GRJgNz.js";import"./useValueChanged-oispFcSe.js";import"./CollapsiblePanel-tClOO0R1.js";import"./MultiColumnSortDialog-BHr2SJsZ.js";import"./MenuTrigger-Cb2AZf0p.js";import"./CompositeItem-BhgS6pAU.js";import"./ToolbarRootContext-DKDtUl7Y.js";import"./getDisabledMountTransitionStyles-CDxcKCec.js";import"./getPseudoElementBounds-Dkvs0jvh.js";import"./chevron-down-D1yx8BpO.js";import"./index-BAZzkEjb.js";import"./error-D6rGwYTa.js";import"./BaseCbacBanner-C4kARAgI.js";import"./makeExternalStore-B6NoTbNG.js";import"./Tooltip-Bh3th1RS.js";import"./PopoverPopup-MxHlhfA4.js";import"./debounce-CKJ32hy1.js";import"./tick-BpCC2p4B.js";import"./DropdownField-BaMFvM0M.js";import"./isEqual-BBGsGrE4.js";import"./withOsdkMetrics-CqZfQr7E.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

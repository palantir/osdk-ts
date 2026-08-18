import{j as r}from"./iframe-BgvLvKva.js";import{O as b}from"./object-table-C5L2lUHh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BfH2t0Za.js";import{u as g}from"./useOsdkClient-CMrBc-CL.js";import"./preload-helper-B1HwKvYQ.js";import"./Table-BlCx7eH_.js";import"./index-C5UyF6W2.js";import"./Dialog-BEorr5lF.js";import"./cross-WN3vBfZU.js";import"./svgIconContainer-CcU0b5d6.js";import"./useBaseUiId-ctMKwW6N.js";import"./InternalBackdrop-BYbSa1OD.js";import"./composite-BYxHSO5E.js";import"./index-DHe1MgcY.js";import"./index-DIEiR9vc.js";import"./index-CZvid9ZQ.js";import"./useEventCallback-BeycNYXS.js";import"./SkeletonBar-Dy9e3NIH.js";import"./LoadingCell-Dwc76lDi.js";import"./ColumnConfigDialog-sp5VdiZD.js";import"./DraggableList-J22w-pzX.js";import"./search-BC3w2ZRf.js";import"./Input-BRpNUPT7.js";import"./useControlled-DJVt1nAj.js";import"./Button-CT3oLFOf.js";import"./small-cross-w8o8YAZK.js";import"./ActionButton-BW77J7ec.js";import"./Checkbox-f__wunET.js";import"./useValueChanged-DomNCZ4R.js";import"./CollapsiblePanel-B9nGBeF-.js";import"./MultiColumnSortDialog-BesTIq8C.js";import"./MenuTrigger-jvhRJjZJ.js";import"./CompositeItem-BIOBD7ED.js";import"./ToolbarRootContext-1Zs9_aIX.js";import"./getDisabledMountTransitionStyles-DDd2v21E.js";import"./getPseudoElementBounds-DZzp9gig.js";import"./chevron-down-Dsbl3RB_.js";import"./index-Dsqet5kS.js";import"./error-MS4gG1j8.js";import"./BaseCbacBanner-B4v3W_qt.js";import"./makeExternalStore-C6g-u5rg.js";import"./Tooltip-CdSKpuHY.js";import"./PopoverPopup-Cs96luoA.js";import"./debounce-DDxQirrc.js";import"./tick-BQ9Lr4SE.js";import"./DropdownField-CpbgYUlt.js";import"./isEqual-BAMquniX.js";import"./withOsdkMetrics-Ccq9KWbZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

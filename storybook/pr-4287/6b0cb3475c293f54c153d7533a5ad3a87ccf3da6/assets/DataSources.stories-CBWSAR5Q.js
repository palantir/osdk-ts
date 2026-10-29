import{j as r}from"./iframe-B4MgyMWl.js";import{O as b}from"./object-table-DH_X6CMQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Z8bvBpC9.js";import{u as g}from"./useOsdkClient-D1uuFUvl.js";import"./preload-helper-BUOdkVYn.js";import"./Table-DzrzPrUN.js";import"./index-CWrwK-HJ.js";import"./Dialog-CDzhEmLD.js";import"./cross-DeZ5LgCs.js";import"./svgIconContainer-DSK9BMKz.js";import"./useBaseUiId-cePy-Fka.js";import"./InternalBackdrop-DCdVc_fO.js";import"./composite-CAyP_TTE.js";import"./index-fmJhNd3L.js";import"./index-CyhRYA9d.js";import"./index-DqbVp-Pn.js";import"./useEventCallback-D3NXkfC-.js";import"./SkeletonBar-cG_KH1yq.js";import"./LoadingCell-BjBvMitl.js";import"./ColumnConfigDialog-CQQCXpXv.js";import"./DraggableList-D4-pid7-.js";import"./search-DD9Ps7Xi.js";import"./Input-DyGREfir.js";import"./useControlled-CqJ99-8o.js";import"./Button-CpaCdx-9.js";import"./small-cross-DDNekb4S.js";import"./ActionButton-C6ToF_1u.js";import"./Checkbox-gRAq5P8_.js";import"./useValueChanged-Dv5oraiV.js";import"./CollapsiblePanel-ECfDnot5.js";import"./MultiColumnSortDialog-Bsdkp2ea.js";import"./MenuTrigger-BHmlE0S3.js";import"./CompositeItem-Brr5mEPn.js";import"./ToolbarRootContext-BOMUT60A.js";import"./getDisabledMountTransitionStyles-CXsfR7z_.js";import"./getPseudoElementBounds-DxzYEc8w.js";import"./chevron-down-ie3vWH8s.js";import"./index-iqc6oGJg.js";import"./error-6geuwXkd.js";import"./BaseCbacBanner-ncoZ0sEj.js";import"./makeExternalStore-DUbcYQez.js";import"./Tooltip-D9C0Qo0s.js";import"./PopoverPopup-Cokuf9G4.js";import"./debounce-CCX8N0To.js";import"./tick-xz3SeBYf.js";import"./DropdownField-ksl0RW3R.js";import"./isEqual-Bqyg8bbd.js";import"./withOsdkMetrics-DM07Q-qZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

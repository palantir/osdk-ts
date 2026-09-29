import{j as r}from"./iframe-BOWU70X1.js";import{O as b}from"./object-table-cgavINgx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CeFeC1D5.js";import{u as g}from"./useOsdkClient-D5uHxQat.js";import"./preload-helper-DsrGzdLY.js";import"./Table-DOvh1xsn.js";import"./index-Dqy6Gfe7.js";import"./Dialog-B3WyzR5G.js";import"./cross-CVkoRI6N.js";import"./svgIconContainer-B9QIza-c.js";import"./useBaseUiId-8tGgV_0l.js";import"./InternalBackdrop-D2-B01xw.js";import"./composite-CSfG6ZaY.js";import"./index-BfjmLFxg.js";import"./index-DAEdDj8Q.js";import"./index-BSYQw0Uy.js";import"./useEventCallback-CoK8fJ8c.js";import"./SkeletonBar-xXHQ0iAC.js";import"./LoadingCell-CeE69STT.js";import"./ColumnConfigDialog-D3gFq4wl.js";import"./DraggableList-Dp5fZ28N.js";import"./search-Bm_8-FpL.js";import"./Input-Ba0NW75w.js";import"./useControlled-BdeVhzxt.js";import"./Button-BvbX1UI9.js";import"./small-cross-DKR3JJry.js";import"./ActionButton-CK7KXvFI.js";import"./Checkbox-pIrtE80l.js";import"./useValueChanged-Cko8QSI4.js";import"./CollapsiblePanel-IZqS99Hx.js";import"./MultiColumnSortDialog-C_pNjzkQ.js";import"./MenuTrigger-B1Guhxs6.js";import"./CompositeItem-CIAYfkGT.js";import"./ToolbarRootContext-CaVCFQJS.js";import"./getDisabledMountTransitionStyles-DisM1mEX.js";import"./getPseudoElementBounds-Beh_f-hj.js";import"./chevron-down-B1Z7ByUI.js";import"./index-utUHJIrZ.js";import"./error-BjTP1vhZ.js";import"./BaseCbacBanner-C_PYpr4S.js";import"./makeExternalStore-BS5Bz3Hp.js";import"./Tooltip-CWU8oDpl.js";import"./PopoverPopup-CZm5dGxt.js";import"./debounce-C0cDACkJ.js";import"./tick-ByRVlpzT.js";import"./DropdownField-DmaOVCkJ.js";import"./isEqual-DMW34l0I.js";import"./withOsdkMetrics-Bjyc-H5X.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

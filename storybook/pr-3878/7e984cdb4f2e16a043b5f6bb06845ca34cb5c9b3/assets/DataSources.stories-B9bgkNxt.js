import{j as r}from"./iframe-D_l2u6_6.js";import{O as b}from"./object-table-D1XKD5VY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-uBqOom6K.js";import{u as g}from"./useOsdkClient-Tzqd6rMR.js";import"./preload-helper-DpjmzVUp.js";import"./Table-fHmfLZAd.js";import"./index-Dh9XtuqD.js";import"./Dialog-ddbwFZ6h.js";import"./cross-gGpYcHa9.js";import"./svgIconContainer-5I5uI1yB.js";import"./useBaseUiId-CXCcQdyU.js";import"./InternalBackdrop-D_4E-Rxz.js";import"./composite-BhVnd5Ck.js";import"./index-DfO4jocZ.js";import"./index-CiyIlioJ.js";import"./index-DfCuXz0x.js";import"./useEventCallback-BgdlLsMa.js";import"./SkeletonBar-DlE-3K9g.js";import"./LoadingCell-C6vkENzn.js";import"./ColumnConfigDialog-D-SC4cU5.js";import"./DraggableList-DSDUX4s7.js";import"./search-CpZeqKUE.js";import"./Input-C-nLgfsl.js";import"./useControlled-BDw-HKbZ.js";import"./Button-CKuTj87a.js";import"./small-cross-C9PjvE4A.js";import"./ActionButton-BXiWW4vN.js";import"./Checkbox-DLVgl3J5.js";import"./useValueChanged-BH7Mlnbx.js";import"./CollapsiblePanel-C_xwzt2e.js";import"./MultiColumnSortDialog-DwXONmuL.js";import"./MenuTrigger-BPfbcpen.js";import"./CompositeItem-iF4WWV8_.js";import"./ToolbarRootContext-C1XZ50ky.js";import"./getDisabledMountTransitionStyles-x-mkt6n1.js";import"./getPseudoElementBounds-dXr3viq6.js";import"./chevron-down-CrG8bbfA.js";import"./index-DidMIQP-.js";import"./error-BMvuJzzL.js";import"./BaseCbacBanner-B6SfVemQ.js";import"./makeExternalStore-BcUYV5GH.js";import"./Tooltip-CT3gDVtv.js";import"./PopoverPopup-CJl6zO3k.js";import"./debounce-CDPBmaYV.js";import"./tick-CrfOW8ie.js";import"./DropdownField-BXaP58OO.js";import"./isEqual-CsFmxKDR.js";import"./withOsdkMetrics-BJ3LCUHt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

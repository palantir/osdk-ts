import{j as r}from"./iframe-BLnZQotn.js";import{O as b}from"./object-table-6c5WKZhP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D0Ksm3xh.js";import{u as g}from"./useOsdkClient-BizZoOjd.js";import"./preload-helper-DY9jpKUC.js";import"./Table-CP37JA88.js";import"./index-Br-sIVdK.js";import"./Dialog-B5z5pO7l.js";import"./cross-DScBbaG7.js";import"./svgIconContainer-4F-xtBaI.js";import"./useBaseUiId-mj7-YtUe.js";import"./InternalBackdrop-CJr0HIhe.js";import"./composite-BKQJBcnd.js";import"./index-B4OHcS41.js";import"./index-CZctS6MH.js";import"./index-5J9Ixf7O.js";import"./useEventCallback-DVmZABpv.js";import"./SkeletonBar-CkYIhZj8.js";import"./LoadingCell-CEWp7KDY.js";import"./ColumnConfigDialog-FpkupR4C.js";import"./DraggableList-DoR-tyVI.js";import"./search-XfyocaRu.js";import"./Input-BhzFnYGF.js";import"./useControlled-B6GUHUJM.js";import"./isEqual-CJHtwtni.js";import"./isObject-DLfBK2wg.js";import"./Button-BjgeWM_v.js";import"./ActionButton-D7Hs2uzo.js";import"./Checkbox-Cp9nxQ9c.js";import"./useValueChanged-EgQsYI_U.js";import"./CollapsiblePanel-BGeZbD5J.js";import"./MultiColumnSortDialog-4OOdrMWk.js";import"./MenuTrigger-V8m45X6w.js";import"./CompositeItem-DzcXIyhE.js";import"./ToolbarRootContext-C8cCGqF-.js";import"./getDisabledMountTransitionStyles-NJQ99kiK.js";import"./getPseudoElementBounds-D5Sm8-XT.js";import"./chevron-down-h1RtSMOg.js";import"./index-DFPaFGKs.js";import"./error-BjkGAX5r.js";import"./BaseCbacBanner-DRS4U5eU.js";import"./makeExternalStore-eh1oPVcU.js";import"./Tooltip-CxPTLfXU.js";import"./PopoverPopup-Ch34ozz9.js";import"./toNumber-Dx2WSPnF.js";import"./tick-ErOtw_Kk.js";import"./DropdownField-yIY6syyK.js";import"./withOsdkMetrics-DPb2-OHp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

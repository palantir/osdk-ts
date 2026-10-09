import{j as r}from"./iframe-kxdUQCve.js";import{O as b}from"./object-table-BAMrafAm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-F4fiXkq0.js";import{u as g}from"./useOsdkClient-B1pTCJqX.js";import"./preload-helper-Cuq4TkHU.js";import"./Table-ZCQwY607.js";import"./index-Dj-vHPb7.js";import"./Dialog-CzGO940J.js";import"./cross-BGuVVI58.js";import"./svgIconContainer-0muFsb9b.js";import"./useBaseUiId-DHH2yIbk.js";import"./InternalBackdrop-BZ9l1zrW.js";import"./composite-Bj70JY7P.js";import"./index-DLOXxPse.js";import"./index-Cm3W4-OV.js";import"./index-ClZwirhD.js";import"./useEventCallback-Bq9ZgDOO.js";import"./SkeletonBar-tkvmB8An.js";import"./LoadingCell-QLYyy_ta.js";import"./ColumnConfigDialog-CmW0Mys6.js";import"./DraggableList-BoFiuN1_.js";import"./search-Dtrnv9od.js";import"./Input-DaXzRTeY.js";import"./useControlled-BW2k3psm.js";import"./Button-Ca-rtxgT.js";import"./small-cross-CNq41qjz.js";import"./ActionButton-DqspKp5t.js";import"./Checkbox-D-YxkcmG.js";import"./useValueChanged-DqoHHV3-.js";import"./CollapsiblePanel-MI7Qpoh1.js";import"./MultiColumnSortDialog-Q2AWLRsd.js";import"./MenuTrigger-CixaXCmF.js";import"./CompositeItem-CSpMJ9Wh.js";import"./ToolbarRootContext-CW6avnm2.js";import"./getDisabledMountTransitionStyles-lcQ0Umsd.js";import"./getPseudoElementBounds-CPNZb4-2.js";import"./chevron-down-CKJ5Wwcf.js";import"./index-CAihI7G4.js";import"./error-Dc_ezcGJ.js";import"./BaseCbacBanner-xD1_g2fI.js";import"./makeExternalStore-CNzfft50.js";import"./Tooltip-BfGevlTY.js";import"./PopoverPopup-uby0I1CE.js";import"./debounce-BnMuliNi.js";import"./tick-Brv0cW5L.js";import"./DropdownField-ggEkgwUW.js";import"./isEqual-C16UXMCJ.js";import"./withOsdkMetrics-BsNzoRp3.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

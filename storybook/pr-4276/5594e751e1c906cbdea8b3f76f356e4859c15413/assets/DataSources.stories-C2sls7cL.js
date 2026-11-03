import{j as r}from"./iframe-Cp-VmNqL.js";import{O as b}from"./object-table-fVHk6Y9j.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-cSvnF3Qf.js";import{u as g}from"./useOsdkClient-Dc4Jqd5m.js";import"./preload-helper-AzhWXDuQ.js";import"./Table-C10pEohY.js";import"./index-dpygWVpJ.js";import"./Dialog-mfRgTcvc.js";import"./cross-uOKlIsXG.js";import"./svgIconContainer-zkQ14032.js";import"./useBaseUiId-OdIul-yE.js";import"./InternalBackdrop-Bt0yPmbq.js";import"./composite-DlQhckwI.js";import"./index-tUkk1A8p.js";import"./index-yO_woVyq.js";import"./index-Dv_Pm10I.js";import"./useEventCallback-DQ3ev7p0.js";import"./SkeletonBar-CobUMKVq.js";import"./LoadingCell-BLSw_Usr.js";import"./ColumnConfigDialog-8CcQMjz1.js";import"./DraggableList-8e9q-xdO.js";import"./search-HIN2ZGpm.js";import"./Input-BEEKmunm.js";import"./useControlled-OYIwur-C.js";import"./Button-NTUIWe38.js";import"./small-cross-CK1o2en6.js";import"./ActionButton-BN3wr41o.js";import"./Checkbox-dZI16_ZG.js";import"./useValueChanged-PvBM_FRE.js";import"./CollapsiblePanel-DBGwpADH.js";import"./MultiColumnSortDialog-B7_4K9o8.js";import"./MenuTrigger-psdGvQmS.js";import"./CompositeItem-CzQ4Mwjm.js";import"./ToolbarRootContext-DNY7Xc1D.js";import"./getDisabledMountTransitionStyles-DUUZwERC.js";import"./getPseudoElementBounds-AmAefdLG.js";import"./chevron-down-Dk2LvJq7.js";import"./index-Jc-X2-Ds.js";import"./error-BJ-TznDH.js";import"./BaseCbacBanner-BgrbmI5X.js";import"./makeExternalStore-oKADq8a2.js";import"./Tooltip-BczU44S5.js";import"./isObject-HPrV1TH6.js";import"./debounce-DCaOx8Rx.js";import"./tick-Bfi0n5W9.js";import"./DropdownField-BVLbkf-i.js";import"./isEqual-B45AHlAy.js";import"./_baseIsEqual-ctM4qMgO.js";import"./withOsdkMetrics-CWuMV6f9.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};

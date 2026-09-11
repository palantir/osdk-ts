import{j as r}from"./iframe-IYYJd2m9.js";import{O as b}from"./object-table-xPMVFcHm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DtabovkT.js";import{u as g}from"./useOsdkClient-BfouKB8F.js";import"./preload-helper-BFRTU8XL.js";import"./Table-iuVojU_1.js";import"./index-Db-eG3LN.js";import"./Dialog-FSl23wJV.js";import"./cross-KJA2o58Q.js";import"./svgIconContainer-B0Zw0e2B.js";import"./useBaseUiId-gMGlPD7U.js";import"./InternalBackdrop-6rPcc_n0.js";import"./composite-CvcKSveb.js";import"./index-DKHKGVOU.js";import"./index-DAnfA0in.js";import"./index-cmlbejKx.js";import"./useEventCallback-BRAtMScW.js";import"./SkeletonBar-C63LV7Rk.js";import"./LoadingCell-B9W9paLZ.js";import"./ColumnConfigDialog-DNEiA0Ox.js";import"./DraggableList-Cv_dcLbc.js";import"./search-CUDcYcS5.js";import"./Input-0frZHORa.js";import"./useControlled-2w2YfNvU.js";import"./Button-DQEdYpKK.js";import"./small-cross-D1iJnykI.js";import"./ActionButton-HX3-dAro.js";import"./Checkbox-DWaJq7Yp.js";import"./useValueChanged-BOlMICo1.js";import"./CollapsiblePanel-aw6L5bfc.js";import"./MultiColumnSortDialog-CV8aTgYk.js";import"./MenuTrigger-DR9Fwge5.js";import"./CompositeItem-B-bfj5TP.js";import"./ToolbarRootContext-CFnhaKDy.js";import"./getDisabledMountTransitionStyles-58Y24a1v.js";import"./getPseudoElementBounds-CCefMmxm.js";import"./chevron-down-B1MpC4Hz.js";import"./index-DsFI9coQ.js";import"./error-B-Yx8VFp.js";import"./BaseCbacBanner-DkONxgZ5.js";import"./makeExternalStore-DEaKK2Sx.js";import"./Tooltip-CGjryGi2.js";import"./PopoverPopup-J11dr7bo.js";import"./debounce-lUqXN7vV.js";import"./tick-ChhTG65X.js";import"./DropdownField-Cb58jruB.js";import"./isEqual-BFMVJJkC.js";import"./withOsdkMetrics-DxXSp5TR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

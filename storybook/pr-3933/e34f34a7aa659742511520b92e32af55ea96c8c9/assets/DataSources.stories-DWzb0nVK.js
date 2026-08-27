import{j as r}from"./iframe-Cd_V4KpW.js";import{O as b}from"./object-table-C4lb6IjE.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-mBMbRH5-.js";import{u as g}from"./useOsdkClient-BUMyGwPD.js";import"./preload-helper-BvId2qNX.js";import"./Table-DTcTPhVX.js";import"./index-CKbN7xoE.js";import"./Dialog-Cnzzznkv.js";import"./cross-8_7TK-gx.js";import"./svgIconContainer-OdpcSH6M.js";import"./useBaseUiId-Cg6vBntQ.js";import"./InternalBackdrop-B-QnZGQH.js";import"./composite-BRFYp8ys.js";import"./index-B7pcEyRI.js";import"./index-fbmKYReH.js";import"./index-CRzlT-la.js";import"./useEventCallback-CY_99pR_.js";import"./SkeletonBar-D2_Y9R07.js";import"./LoadingCell-DF-kunBe.js";import"./ColumnConfigDialog-DTOgZZhJ.js";import"./DraggableList-uvVZOkam.js";import"./search-kv1GPHwR.js";import"./Input-BnvXsjz5.js";import"./useControlled-CHek0QKa.js";import"./Button-B2mzAnjv.js";import"./small-cross-D66utcYW.js";import"./ActionButton-eat6g3bK.js";import"./Checkbox-DC42b3iB.js";import"./useValueChanged-CPJhnvXb.js";import"./CollapsiblePanel-CvaPBsH3.js";import"./MultiColumnSortDialog-D3BD3vVQ.js";import"./MenuTrigger-CqdD1k-X.js";import"./CompositeItem-DZc7qyRg.js";import"./ToolbarRootContext-BLj_5vvK.js";import"./getDisabledMountTransitionStyles-BEVZ6IMz.js";import"./getPseudoElementBounds-CBW_NZlb.js";import"./chevron-down-DksiwaSO.js";import"./index-Paj9WnhS.js";import"./error-DeuwQWwL.js";import"./BaseCbacBanner-j4qkw37Y.js";import"./makeExternalStore-iWOM0D5L.js";import"./Tooltip-5gkTsU1u.js";import"./PopoverPopup-BnHPOSxW.js";import"./debounce-DCv4P7fq.js";import"./tick-eJRABlUb.js";import"./DropdownField-MmnLozo5.js";import"./isEqual-B-I72i7y.js";import"./withOsdkMetrics-i_JOH502.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-NfexZY9x.js";import{O as b}from"./object-table-5hrx1AIT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CAlW70K-.js";import{u as g}from"./useOsdkClient-Bp3-RDM4.js";import"./preload-helper-CLTJrXfR.js";import"./Table-I8E0mLIT.js";import"./index-DHazzmu_.js";import"./Dialog-DfKhixPu.js";import"./cross-BPxlVDyK.js";import"./svgIconContainer-p6aEe31f.js";import"./useBaseUiId-C16bF6M9.js";import"./InternalBackdrop-8mGv6jNv.js";import"./composite-BGUozWMo.js";import"./index-DaRojdGd.js";import"./index-Dp-u7LeB.js";import"./index-BnBOcHOT.js";import"./useEventCallback-DTK6M9zp.js";import"./SkeletonBar-_pY-LFxw.js";import"./LoadingCell-B5QQ7dT1.js";import"./ColumnConfigDialog-Bo-hV8UH.js";import"./DraggableList-CI_hj_Rq.js";import"./search-CmlPMAF4.js";import"./Input-CPs1rDr1.js";import"./useControlled-qgEamnCT.js";import"./Button-DY6lym1F.js";import"./small-cross-BjgiVUVX.js";import"./ActionButton-BT8WXcBI.js";import"./Checkbox-uVVxQ-wM.js";import"./useValueChanged-CYgXq6N-.js";import"./CollapsiblePanel-izSDW4TN.js";import"./MultiColumnSortDialog-D4m8m0GD.js";import"./MenuTrigger-CFx5IQyW.js";import"./CompositeItem-CHYMHjt2.js";import"./ToolbarRootContext-BdUx3mSp.js";import"./getDisabledMountTransitionStyles-C9b0y1iT.js";import"./getPseudoElementBounds-LhciNlN1.js";import"./chevron-down-ZCZOaNcj.js";import"./index-C7mnTzRF.js";import"./error-CIC9WqgE.js";import"./BaseCbacBanner-CIauo2y7.js";import"./makeExternalStore-C62gR5VT.js";import"./Tooltip-BQGbUuSo.js";import"./isObject-CQ_LajrM.js";import"./debounce-ChoeoRSR.js";import"./tick-BpZziSjB.js";import"./DropdownField-CcTDIp1R.js";import"./isEqual-D9nxHocX.js";import"./_baseIsEqual-B9eMrTO6.js";import"./withOsdkMetrics-DSmb0LrF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

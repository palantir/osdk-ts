import{j as r}from"./iframe-D9Hj5gXP.js";import{O as b}from"./object-table-Bzw1yp1a.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B-M90BpZ.js";import{u as g}from"./useOsdkClient-DldD5hq7.js";import"./preload-helper-46igzL0d.js";import"./Table-CMOy0Hhh.js";import"./index-BGKBGloN.js";import"./Dialog-B15eJBe2.js";import"./cross-Q-Rh6Md8.js";import"./svgIconContainer-DUAmOtu_.js";import"./useBaseUiId-B3UGffNT.js";import"./InternalBackdrop-DlA1FKGc.js";import"./composite-aH77Cbrs.js";import"./index-AnDVD4rM.js";import"./index-B3OkYupr.js";import"./index-jowm6RnV.js";import"./useEventCallback-Bwe-RZ2-.js";import"./SkeletonBar-DXV33xVm.js";import"./LoadingCell-DaoSKNPM.js";import"./ColumnConfigDialog-NielXSTy.js";import"./DraggableList-CVNnHbov.js";import"./search-Itm3619L.js";import"./Input-CbGZkwW7.js";import"./useControlled-Bt5_5gUM.js";import"./Button-Djg1VeWx.js";import"./small-cross-C9HLCPSm.js";import"./ActionButton-n9ZfdiZ_.js";import"./Checkbox-V_Hcv-4P.js";import"./useValueChanged-tLVk5hgi.js";import"./CollapsiblePanel-DJVPti5E.js";import"./MultiColumnSortDialog-v5JhTEnu.js";import"./MenuTrigger-BrLf1mzD.js";import"./CompositeItem-DWvpMhCv.js";import"./ToolbarRootContext-D-kNo729.js";import"./getDisabledMountTransitionStyles-nKpBFA9S.js";import"./getPseudoElementBounds-BLiX7v_s.js";import"./chevron-down-CTUGvO1x.js";import"./index-dBvJuZc1.js";import"./error-CBRvRAY4.js";import"./BaseCbacBanner-CXx3HT4t.js";import"./makeExternalStore-BMGSmgu1.js";import"./Tooltip-bqfYO4-a.js";import"./PopoverPopup-CsWrH6rr.js";import"./debounce-DfbGHQI5.js";import"./tick-DjzXnXMl.js";import"./DropdownField-szw3P9fl.js";import"./isEqual-txn9w4tS.js";import"./withOsdkMetrics-CL-J3VAE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

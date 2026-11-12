import{j as r}from"./iframe-qEFPpghE.js";import{O as b}from"./object-table-BHJ3czxR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B_1F0XKV.js";import{u as g}from"./useOsdkClient-Aa7m3fKW.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C4yL4Qmh.js";import"./index-BH9ELRZv.js";import"./Dialog-dWZ9u7DQ.js";import"./cross-CrQI27cl.js";import"./svgIconContainer-CQknLjCX.js";import"./useBaseUiId-v_A1mAU8.js";import"./InternalBackdrop-D5rmKUjx.js";import"./composite-DEeYGE6i.js";import"./index-BYmDYJlP.js";import"./index-DW-XX4vU.js";import"./index-Dz-dXwVN.js";import"./useEventCallback-BYQDS9uj.js";import"./SkeletonBar-yJWTc5ft.js";import"./LoadingCell-B42bnXLv.js";import"./ColumnConfigDialog-CChypS3K.js";import"./DraggableList-CsnH7LBp.js";import"./search-D09RX6LY.js";import"./Input-BablyCOK.js";import"./useControlled-CzEkdiJb.js";import"./Button--WxUXUTJ.js";import"./small-cross-D0luzVMu.js";import"./ActionButton-Di4a-gre.js";import"./Checkbox-CawO4u45.js";import"./useValueChanged-hy1rwhTW.js";import"./CollapsiblePanel-D3XrjZdW.js";import"./MultiColumnSortDialog-Dj5WqPTW.js";import"./MenuTrigger-CSyK8zi4.js";import"./CompositeItem-HOTCeKr0.js";import"./ToolbarRootContext-mJyuSkMG.js";import"./getDisabledMountTransitionStyles-TORQ_bbl.js";import"./getPseudoElementBounds-D1gaCrRx.js";import"./chevron-down-BYYCeXTI.js";import"./index-BoodJoCF.js";import"./error-AR1tV96Q.js";import"./BaseCbacBanner-TLh3mHe1.js";import"./makeExternalStore-AlhYZ7re.js";import"./Tooltip-0QhHY8T6.js";import"./PopoverPopup-Cb7HfMf8.js";import"./Select-DLArSuaB.js";import"./tick-DmViAXqM.js";import"./DropdownField-SZD2xT-o.js";import"./useDebouncedCallback-CLudjFmJ.js";import"./isEqual-hnu1wVCK.js";import"./_baseIsEqual-CsbRecuA.js";import"./stableSerialize-CmHN0ptm.js";import"./withOsdkMetrics-Ch_Qi-aF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,ge={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const ue=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,ue as __namedExportsOrder,ge as default};

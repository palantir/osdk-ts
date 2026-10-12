import{j as r}from"./iframe-Bg9VnJHM.js";import{O as b}from"./object-table-amVzFco4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BxZ0jYtP.js";import{u as g}from"./useOsdkClient-BIv1liKI.js";import"./preload-helper-m1Y4Llv5.js";import"./Table-BuldsrKU.js";import"./index-CrJT52a7.js";import"./Dialog-DUK3wWA4.js";import"./cross-DEexlnSb.js";import"./svgIconContainer-B5yPj85L.js";import"./useBaseUiId-CYMqm51-.js";import"./InternalBackdrop-CeTJdNJ6.js";import"./composite-CF0kxpXB.js";import"./index-B_gLEwxs.js";import"./index-CG5WNHLL.js";import"./index-P4YHC7Tt.js";import"./useEventCallback-ZjhazvKS.js";import"./SkeletonBar-bBmFROmS.js";import"./LoadingCell-BJt2EPmy.js";import"./ColumnConfigDialog-UV8R_Qk-.js";import"./DraggableList-TKA3_RUd.js";import"./search-B3ctgFIA.js";import"./Input--DCIJnB7.js";import"./useControlled-CD1625aB.js";import"./Button-bC6hWzK9.js";import"./small-cross-OY9xNRBI.js";import"./ActionButton-B6dXjYLE.js";import"./Checkbox-Cg65FgW0.js";import"./useValueChanged-DRlc2qqv.js";import"./CollapsiblePanel-DSo0JsvZ.js";import"./MultiColumnSortDialog-qjN4KhlD.js";import"./MenuTrigger-Duemy2Ih.js";import"./CompositeItem-Doe6baU0.js";import"./ToolbarRootContext-CPQhz84F.js";import"./getDisabledMountTransitionStyles-bhI1sbqZ.js";import"./getPseudoElementBounds-C_Awe47M.js";import"./chevron-down-DMUuxvLr.js";import"./index-LhIP_XZe.js";import"./error-Cbas_szk.js";import"./BaseCbacBanner-BrC_F4yF.js";import"./makeExternalStore-CC5GqevO.js";import"./Tooltip-2G34amcZ.js";import"./PopoverPopup-chqgajPg.js";import"./debounce-GP3wjz1k.js";import"./tick-y1MkAvoV.js";import"./DropdownField-BLKPA1Pt.js";import"./isEqual-DX2mLbEy.js";import"./withOsdkMetrics-UJO3eOQJ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

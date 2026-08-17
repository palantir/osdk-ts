import{j as r}from"./iframe-DRtOcaPG.js";import{O as b}from"./object-table-BCfwSR0a.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DIL1r3qA.js";import{u as g}from"./useOsdkClient-DR_uLwOS.js";import"./preload-helper-9DgHanXn.js";import"./Table-D8C_QUcD.js";import"./index-Ce2dl65O.js";import"./Dialog-6XlLOHmL.js";import"./cross-BX3J5cVV.js";import"./svgIconContainer-DpZEtLv9.js";import"./useBaseUiId-BGBZ1HUg.js";import"./InternalBackdrop-DEWb66um.js";import"./composite-N79hpvK_.js";import"./index-DHqOpqOn.js";import"./index-D8e0XOwM.js";import"./index-B1juJX5y.js";import"./useEventCallback-KpeXCugf.js";import"./SkeletonBar-Bn8psVV6.js";import"./LoadingCell-TIEVW5Z1.js";import"./ColumnConfigDialog-BoPwK1_S.js";import"./DraggableList-BLdMLrLx.js";import"./search-Dtkc2Iz5.js";import"./Input-QNUGF4Iu.js";import"./useControlled-BcvbWefU.js";import"./Button-CK6d5OG4.js";import"./small-cross-DcKEL8t4.js";import"./ActionButton-D4k0Ykwf.js";import"./Checkbox-BIE_uDYH.js";import"./useValueChanged-BDN_9EGE.js";import"./CollapsiblePanel-Dny0UpIl.js";import"./MultiColumnSortDialog-tRhI4Szy.js";import"./MenuTrigger-cVWNdQTi.js";import"./CompositeItem-DWL2WPXo.js";import"./ToolbarRootContext-B6bPz9D9.js";import"./getDisabledMountTransitionStyles-BJl-4ZY_.js";import"./getPseudoElementBounds-Dwgu6l1I.js";import"./chevron-down-SYe_Fp71.js";import"./index-Bi5AS5V_.js";import"./error-BkqrjqGY.js";import"./BaseCbacBanner-CS1xI85h.js";import"./makeExternalStore-Ch0Jbi30.js";import"./Tooltip-xjkYLVuc.js";import"./PopoverPopup-CNH5KUV5.js";import"./debounce-1FOPDn_n.js";import"./tick-DoLa9jip.js";import"./DropdownField-BVBUpAg_.js";import"./isEqual-DydWlIf1.js";import"./withOsdkMetrics-DDwhyEqf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

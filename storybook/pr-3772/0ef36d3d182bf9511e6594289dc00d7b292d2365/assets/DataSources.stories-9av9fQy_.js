import{j as r}from"./iframe-B4QLcSZV.js";import{O as b}from"./object-table-TmS98yQc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-d_bm6d_p.js";import{u as g}from"./useOsdkClient-B-uzLvHR.js";import"./preload-helper-Bo3Ha5vh.js";import"./Table-CUL-p863.js";import"./index-CU2p5LDV.js";import"./Dialog-DWf3MPjd.js";import"./cross-DnvIeiSW.js";import"./svgIconContainer-Dh-Zaef4.js";import"./useBaseUiId-BSZdLkOo.js";import"./InternalBackdrop-uUiSI24W.js";import"./composite-CgB6Of8a.js";import"./index-B8xzy7Yy.js";import"./index-CX5vZraN.js";import"./index-gAGpFD5r.js";import"./useEventCallback-DPBUZYhA.js";import"./SkeletonBar-BC4f_AtB.js";import"./LoadingCell-CExaaW-4.js";import"./ColumnConfigDialog-BYqwTb39.js";import"./DraggableList-aVeantjG.js";import"./search-eHSn6FPQ.js";import"./Input-CSlKlom8.js";import"./useControlled-BC3YGi64.js";import"./Button-Buk5h-ut.js";import"./small-cross-DCQk5yBJ.js";import"./ActionButton-d6fkUWG8.js";import"./Checkbox-b_blCxhg.js";import"./useValueChanged-VkzDJT1T.js";import"./CollapsiblePanel-BG51YQ8C.js";import"./MultiColumnSortDialog-ABdCwbqA.js";import"./MenuTrigger-DMDEMWwK.js";import"./CompositeItem-CpoTinek.js";import"./ToolbarRootContext-CQfevRIV.js";import"./getDisabledMountTransitionStyles-DmmMgL1o.js";import"./getPseudoElementBounds-B-_TxDI7.js";import"./chevron-down-DwcY0-Tx.js";import"./index-In1SvQxE.js";import"./error-DsKpT3Ih.js";import"./BaseCbacBanner-RbdcKH8U.js";import"./makeExternalStore-Dm5zWOFv.js";import"./Tooltip-yCjMXIIG.js";import"./isObject-DJnDAPtu.js";import"./debounce-B9U4OBQQ.js";import"./tick-f-G-5w7P.js";import"./DropdownField-DIllcogd.js";import"./isEqual-DL7tfxNk.js";import"./_baseIsEqual-y-2kiQl4.js";import"./withOsdkMetrics-BGZuYz8s.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

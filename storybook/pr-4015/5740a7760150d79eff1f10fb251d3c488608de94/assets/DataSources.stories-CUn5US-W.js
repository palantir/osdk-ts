import{j as r}from"./iframe-BTZXjcS6.js";import{O as b}from"./object-table-D_sLcuJX.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BMGgytcl.js";import{u as g}from"./useOsdkClient-Cw0tNi-2.js";import"./preload-helper-C9NzPdgc.js";import"./Table-DPotH737.js";import"./index-CeqBwR3m.js";import"./Dialog-CKsDrnqD.js";import"./cross-B7KIcqou.js";import"./svgIconContainer-B_6Ye4VC.js";import"./useBaseUiId-BYa5JSvm.js";import"./InternalBackdrop-D9v-IY9L.js";import"./composite-Bir0R2T2.js";import"./index-Bc5CyDlw.js";import"./index-PyK1kYPr.js";import"./index-D4TIv0Oq.js";import"./useEventCallback-C8TjJx_C.js";import"./SkeletonBar-Cl9ArMG3.js";import"./LoadingCell-BQH4NmwW.js";import"./ColumnConfigDialog-DrgaikaZ.js";import"./DraggableList-DwILAAnX.js";import"./search-B_jja5k9.js";import"./Input-CufnAxBU.js";import"./useControlled-D3czSe4k.js";import"./Button-tBNbm5Ca.js";import"./small-cross-C8iYyEOq.js";import"./ActionButton-DtvrG6sU.js";import"./Checkbox-D1G0cO7j.js";import"./useValueChanged-dea3ckth.js";import"./CollapsiblePanel-CiJsgmp5.js";import"./MultiColumnSortDialog-C9vv9d7M.js";import"./MenuTrigger-QWlI38EG.js";import"./CompositeItem-BbZyoEpe.js";import"./ToolbarRootContext-CSsWfPwj.js";import"./getDisabledMountTransitionStyles-CE8RpoIN.js";import"./getPseudoElementBounds-CEAZG3b7.js";import"./chevron-down-BnB-eP8_.js";import"./index-BwVZwZx_.js";import"./error-CNEXn0eH.js";import"./BaseCbacBanner-6VvjFDu5.js";import"./makeExternalStore-CzWUEmmK.js";import"./Tooltip-4a177B8O.js";import"./PopoverPopup-C-rIrhf-.js";import"./debounce-BkHDw0VY.js";import"./tick-CZ2olpkR.js";import"./DropdownField-BGDFHIhQ.js";import"./isEqual-BOZ0NKP1.js";import"./withOsdkMetrics-Ca4dglEg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

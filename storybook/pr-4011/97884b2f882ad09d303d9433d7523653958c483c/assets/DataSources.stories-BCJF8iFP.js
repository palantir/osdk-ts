import{j as r}from"./iframe-EfiBoZIR.js";import{O as b}from"./object-table-_-j2bQLx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C9KK_Wat.js";import{u as g}from"./useOsdkClient-Cm0A3DMr.js";import"./preload-helper-D_Wykq9t.js";import"./Table-C_CGpyWA.js";import"./index-0eA-Cgh_.js";import"./Dialog-vs1IxkDw.js";import"./cross-BOeJXaLq.js";import"./svgIconContainer-Daui2Dw7.js";import"./useBaseUiId-cd03ijFK.js";import"./InternalBackdrop-BzXWuiQX.js";import"./composite-CC9kaygZ.js";import"./index-CaF7GUuf.js";import"./index-B7OwTQ75.js";import"./index-QLAugMY9.js";import"./useEventCallback-BLFhQYGq.js";import"./SkeletonBar-RRAm9W8p.js";import"./LoadingCell-C2ulrMWC.js";import"./ColumnConfigDialog-CGmVT9TB.js";import"./DraggableList-CMhSXHv7.js";import"./search-DW9KpidM.js";import"./Input-Bf8UFFCR.js";import"./useControlled-RgsLbGbj.js";import"./Button-WoBFNDMc.js";import"./small-cross-B5IfQiVk.js";import"./ActionButton-B7QgbfJ7.js";import"./Checkbox-Cmu3nVCT.js";import"./useValueChanged-DRM7hTnG.js";import"./CollapsiblePanel-B5r09xR-.js";import"./MultiColumnSortDialog-THzE8H3e.js";import"./MenuTrigger-D2n7tF1q.js";import"./CompositeItem-Bcq4203w.js";import"./ToolbarRootContext-VaUVpuNK.js";import"./getDisabledMountTransitionStyles-CMp4u3oX.js";import"./getPseudoElementBounds-D32SWUco.js";import"./chevron-down-Bjf9KWk2.js";import"./index-kHpZltIW.js";import"./error-CzXhBCLL.js";import"./BaseCbacBanner-CAMpKzDW.js";import"./makeExternalStore-DJM-d-Lr.js";import"./Tooltip-ClBCWMU5.js";import"./PopoverPopup-D88MF7O9.js";import"./debounce-DHoJk0fe.js";import"./tick-B421wai_.js";import"./DropdownField-BsrbnwCh.js";import"./isEqual-C3btcwZk.js";import"./withOsdkMetrics-EFBhc3BK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

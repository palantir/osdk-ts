import{j as r}from"./iframe-CfP80nhE.js";import{O as b}from"./object-table-BVaDN9oy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Ck76e-zS.js";import{u as g}from"./useOsdkClient-BiT3AVNq.js";import"./preload-helper-DVx9So3f.js";import"./Table-C-C6MgHD.js";import"./index-COwN8tdJ.js";import"./Dialog-iX7BQDos.js";import"./cross-Dhhk-QOY.js";import"./svgIconContainer-ByL1CzmI.js";import"./useBaseUiId-BpCYJZt6.js";import"./InternalBackdrop-Bx7guY_d.js";import"./composite-BXpnnXVg.js";import"./index-CTbyqW3F.js";import"./index-5ZL8iVjG.js";import"./index-yQDp3qiC.js";import"./useEventCallback-BZgh7tEU.js";import"./SkeletonBar-BTKdZ9Ff.js";import"./LoadingCell-CB6w0OIv.js";import"./ColumnConfigDialog-C-rNyPlT.js";import"./DraggableList-BTeUHn5f.js";import"./search-DBbR_HQC.js";import"./Input-C5rpYEfy.js";import"./useControlled-DY45BqZY.js";import"./Button-CBX6PhDU.js";import"./small-cross-MDPhdUvt.js";import"./ActionButton-bm-7ANXn.js";import"./Checkbox-HB4hmGD9.js";import"./useValueChanged-BWuoub0f.js";import"./CollapsiblePanel-C-Oui3tr.js";import"./MultiColumnSortDialog-FvhHmpMw.js";import"./MenuTrigger-BVMKdwJK.js";import"./CompositeItem-rrhF1DOt.js";import"./ToolbarRootContext-BNZ6uAxf.js";import"./getDisabledMountTransitionStyles-CkkZsrSS.js";import"./getPseudoElementBounds-B5VczZa8.js";import"./chevron-down-DosI46m-.js";import"./index-Db0uTKuy.js";import"./error-D8W3ZfFh.js";import"./BaseCbacBanner-Dx8ja9_G.js";import"./makeExternalStore-CX8kqVGx.js";import"./Tooltip-I7xftFyx.js";import"./isObject-C97A8-HS.js";import"./debounce-o-BE-ayW.js";import"./tick-bPvw1r3T.js";import"./DropdownField-DFKXNXg2.js";import"./isEqual-BqwGPlqV.js";import"./_baseIsEqual-7qS6C5tt.js";import"./withOsdkMetrics-B-Iw4pyn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

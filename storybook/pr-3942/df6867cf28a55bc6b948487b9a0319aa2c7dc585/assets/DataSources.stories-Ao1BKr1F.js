import{j as r}from"./iframe-CpSXGIMP.js";import{O as b}from"./object-table-BfhkxOeM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DWX_Km0I.js";import{u as g}from"./useOsdkClient-nFyg2naI.js";import"./preload-helper-BAIK3F_r.js";import"./Table-C1hP_W1k.js";import"./index-CKAzeimB.js";import"./Dialog-20OrDQWb.js";import"./cross-CzQoIi7Z.js";import"./svgIconContainer-DUtflVNj.js";import"./useBaseUiId-D-3zNuFz.js";import"./InternalBackdrop-DZlr-aNU.js";import"./composite-B3b5WAJp.js";import"./index-Cik8okmC.js";import"./index-B7KWUsJB.js";import"./index-DftJEGwA.js";import"./useEventCallback-BBf_aYTc.js";import"./SkeletonBar-CNXCAGmc.js";import"./LoadingCell-D_8obgOr.js";import"./ColumnConfigDialog-BTrG7a_x.js";import"./DraggableList-DXHuvwR9.js";import"./search-CuxqOQhv.js";import"./Input-UzrhFg4t.js";import"./useControlled-BmzJBEAD.js";import"./Button-68wBS86H.js";import"./small-cross-DWFx64Mr.js";import"./ActionButton-Dz39mG8V.js";import"./Checkbox-sbgttWZA.js";import"./useValueChanged-BqjXh4dX.js";import"./CollapsiblePanel-BeRSQgN_.js";import"./MultiColumnSortDialog-C2n86c34.js";import"./MenuTrigger-D4bpA_BO.js";import"./CompositeItem-DSORcIfD.js";import"./ToolbarRootContext-DEzzSQ1U.js";import"./getDisabledMountTransitionStyles-MU4kd6R3.js";import"./getPseudoElementBounds-Ce2XLvLP.js";import"./chevron-down-Btszu4M0.js";import"./index-B-U1HPP1.js";import"./error-Cwk6m0y9.js";import"./BaseCbacBanner-BTg5nBuQ.js";import"./makeExternalStore-DmkWZ8pD.js";import"./Tooltip-a-xfMqZ7.js";import"./PopoverPopup-B2SsDUTB.js";import"./debounce-TFuakvIj.js";import"./tick-FjTw9avv.js";import"./DropdownField-D9b5Vmbe.js";import"./isEqual-D1jnOiv1.js";import"./withOsdkMetrics-DDed3ono.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

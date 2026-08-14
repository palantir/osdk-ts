import{j as r}from"./iframe-C8W_1yJa.js";import{O as b}from"./object-table-CfEXVxhw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C7V_WJfi.js";import{u as g}from"./useOsdkClient-ud-o5HVE.js";import"./preload-helper-CTLXhaGl.js";import"./Table-CYPF32De.js";import"./index-BHosZjWC.js";import"./Dialog-CbnrLYcS.js";import"./cross-CZHInJK7.js";import"./svgIconContainer-BYaq9C4Y.js";import"./useBaseUiId-D9u19KRt.js";import"./InternalBackdrop-DJwuEZsI.js";import"./composite-D9vkqeMo.js";import"./index-A9PJi114.js";import"./index-Ckh3kz80.js";import"./index-DY7N8tg4.js";import"./useEventCallback-BQQwBwX-.js";import"./SkeletonBar-BMP97Bi7.js";import"./LoadingCell-x9q3_gtq.js";import"./ColumnConfigDialog-BwNIscIX.js";import"./DraggableList-_tdrOdNd.js";import"./search-DN1_1bJo.js";import"./Input-QwDU-OOH.js";import"./useControlled-BNicjJXr.js";import"./Button-BTdxh1PU.js";import"./small-cross-VRGJdYzw.js";import"./ActionButton-DQmOZQvx.js";import"./Checkbox-DhKrDZ9A.js";import"./useValueChanged-DKvAzyx9.js";import"./CollapsiblePanel-FwTNNP5Y.js";import"./MultiColumnSortDialog-BQD749yI.js";import"./MenuTrigger-CfEP9Xzr.js";import"./CompositeItem-ksibX-Pt.js";import"./ToolbarRootContext-B64BT2dX.js";import"./getDisabledMountTransitionStyles-AYk6J0dN.js";import"./getPseudoElementBounds-9jhDuj_I.js";import"./chevron-down-CTsGKY-w.js";import"./index-BDWszJ74.js";import"./error-DTe2-M69.js";import"./BaseCbacBanner-bPaBonGO.js";import"./makeExternalStore-Dkf4Frge.js";import"./Tooltip-DJOihC1O.js";import"./PopoverPopup-BJN7bFZl.js";import"./debounce-C0R7ONRw.js";import"./tick-CFChvKzW.js";import"./DropdownField-C0lsf-fP.js";import"./isEqual-EFg4idVR.js";import"./withOsdkMetrics-CU6eTpB7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

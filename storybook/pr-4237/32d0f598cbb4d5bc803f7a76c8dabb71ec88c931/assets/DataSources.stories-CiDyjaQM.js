import{j as r}from"./iframe-D46iQmwz.js";import{O as b}from"./object-table-DxFWiXYn.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BuyVVzsz.js";import{u as g}from"./useOsdkClient-DUJkV3uU.js";import"./preload-helper-CD5q78pN.js";import"./Table-RgT9q70T.js";import"./index-aAuOiy4H.js";import"./Dialog-ButokuTd.js";import"./cross-DILS2Eyl.js";import"./svgIconContainer-B30Y3J7X.js";import"./useBaseUiId-CzYRzxTP.js";import"./InternalBackdrop-by-ceIbs.js";import"./composite-DKDexQnG.js";import"./index-B9mI2qXL.js";import"./index-B11g5eQq.js";import"./index-U-d4CKYD.js";import"./useEventCallback-V7mrEIFj.js";import"./SkeletonBar-CcQvDZ8T.js";import"./LoadingCell-Bxm1teQi.js";import"./ColumnConfigDialog-F2a0IOsV.js";import"./DraggableList-DgOkYP-g.js";import"./search-CTXiTDhB.js";import"./Input-Y05_-7l4.js";import"./useControlled-B0hedhV2.js";import"./Button-C713JtES.js";import"./small-cross-BSVqwTPi.js";import"./ActionButton-BYzYLETk.js";import"./Checkbox-CYI0w2Al.js";import"./useValueChanged-BMGjZ3vx.js";import"./CollapsiblePanel-Dtiip96Z.js";import"./MultiColumnSortDialog-Du8-c8-x.js";import"./MenuTrigger-DNh9DzA2.js";import"./CompositeItem-K2_1UaBE.js";import"./ToolbarRootContext-D_lRWVni.js";import"./getDisabledMountTransitionStyles-3PNri0U8.js";import"./getPseudoElementBounds-CjKg6Y1I.js";import"./chevron-down-CLNkT6er.js";import"./index-BcX9m2km.js";import"./error-C1HeeVQA.js";import"./BaseCbacBanner-DAJ3aiv3.js";import"./makeExternalStore-BRMHbBWy.js";import"./Tooltip-Co7-V-9X.js";import"./PopoverPopup-l6zrAa5D.js";import"./debounce-CZeVCb1Q.js";import"./tick-CSNy2-E-.js";import"./DropdownField-CVhHYQdg.js";import"./isEqual-CBpUdabS.js";import"./withOsdkMetrics-BBV3u7Lm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

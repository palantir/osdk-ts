import{j as r}from"./iframe-YPYsIb22.js";import{O as b}from"./object-table-CtbV_lm5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-LmUbciDQ.js";import{u as g}from"./useOsdkClient-BBWJ8V-r.js";import"./preload-helper-Bm267i2E.js";import"./Table-DRkKPyHa.js";import"./index-tbAq8Ohd.js";import"./Dialog-KKxMQUvZ.js";import"./cross-Bvh9g_GQ.js";import"./svgIconContainer-DjM3XCjt.js";import"./useBaseUiId-DcZVCxGy.js";import"./InternalBackdrop-CdruCL_T.js";import"./composite-DzJGJJnK.js";import"./index-Cg0mmqLz.js";import"./index-DBWmIQLG.js";import"./index-DwCIcKt5.js";import"./useEventCallback-B9OthbKU.js";import"./SkeletonBar-WJg75WZq.js";import"./LoadingCell-zWDjiQ5u.js";import"./ColumnConfigDialog-8A-B2Bod.js";import"./DraggableList-C2O4QV4a.js";import"./search-Cmuvm24Z.js";import"./Input-C7Rttt_L.js";import"./useControlled-CSFowk_7.js";import"./isEqual-s1bPN8Kr.js";import"./isObject-CYfcTCzm.js";import"./Button-BIBGF6Kj.js";import"./ActionButton-BpXqO9zC.js";import"./Checkbox-D6GbL2Cv.js";import"./useValueChanged-91bWric7.js";import"./CollapsiblePanel-DmGeo7Hg.js";import"./MultiColumnSortDialog-DcJA4KJc.js";import"./MenuTrigger-ornS5oyF.js";import"./CompositeItem-guz_X3dC.js";import"./ToolbarRootContext-BbwNnKOF.js";import"./getDisabledMountTransitionStyles-JY1Za2dw.js";import"./getPseudoElementBounds-xEkpdBae.js";import"./chevron-down-DA0ta6Kf.js";import"./index-rKVmsUIV.js";import"./error-C5wdbzy2.js";import"./BaseCbacBanner-5IT3qCUT.js";import"./makeExternalStore-6VAz4fOk.js";import"./Tooltip-CLhzcRJW.js";import"./PopoverPopup-D-OFQvOK.js";import"./toNumber-CJU3h-Bh.js";import"./tick-D0TmV92Y.js";import"./DropdownField-ChvYS7Am.js";import"./withOsdkMetrics-B5RDuhJT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

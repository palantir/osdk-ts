import{j as r}from"./iframe-BLH-rzjX.js";import{O as b}from"./object-table-D-6ov8rd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BuxPAH4-.js";import{u as g}from"./useOsdkClient-B89sr5Rr.js";import"./preload-helper-Boseizqx.js";import"./Table-C-l9FtnV.js";import"./index-BshiJ0vb.js";import"./Dialog-BbzT8uGy.js";import"./cross-CjxN7NXy.js";import"./svgIconContainer-ClFD8O3h.js";import"./useBaseUiId-_L7E6isP.js";import"./InternalBackdrop-DJXpTlYo.js";import"./composite-CJF2SW-C.js";import"./index-CjzgRjXg.js";import"./index-1GWYtBv5.js";import"./index-DhrrZED7.js";import"./useEventCallback-CvA-dmQo.js";import"./SkeletonBar-2jCSSfIk.js";import"./LoadingCell-Dgx9nWzQ.js";import"./ColumnConfigDialog-CvYNYs5O.js";import"./DraggableList-CQlronkH.js";import"./search-Dcpgl82t.js";import"./Input-ChiRpiSd.js";import"./useControlled-DoMCNvxt.js";import"./Button-Cb7__wFY.js";import"./small-cross-CxW1zdvK.js";import"./ActionButton-CNmUd466.js";import"./Checkbox-CDybbOiX.js";import"./useValueChanged-BtzRyrp7.js";import"./CollapsiblePanel-D2wDAZ7-.js";import"./MultiColumnSortDialog-DtmEBHii.js";import"./MenuTrigger-C_w6gyFE.js";import"./CompositeItem-tv6DhAGC.js";import"./ToolbarRootContext-N5PisKcU.js";import"./getDisabledMountTransitionStyles-D801SK_0.js";import"./getPseudoElementBounds-DPi59aQg.js";import"./chevron-down-gdTU0sCy.js";import"./index-D07nHwth.js";import"./error-CxjKCqiV.js";import"./BaseCbacBanner-Bk_IZ-ld.js";import"./makeExternalStore-VNm4xFie.js";import"./Tooltip-CNF5wHNx.js";import"./PopoverPopup-C1mq6siy.js";import"./debounce-7gj880Zc.js";import"./tick-Do25CLpe.js";import"./DropdownField-DKQdUIUg.js";import"./isEqual-BYAPAqkH.js";import"./withOsdkMetrics-CNvw97j4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

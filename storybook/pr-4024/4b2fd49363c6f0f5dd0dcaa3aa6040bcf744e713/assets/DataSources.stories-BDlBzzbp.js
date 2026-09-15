import{j as r}from"./iframe-BhKMX8Fx.js";import{O as b}from"./object-table-BbGAztGy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DgnvE-xz.js";import{u as g}from"./useOsdkClient-ZpvYWodJ.js";import"./preload-helper-CZy_0jgg.js";import"./Table-rC_PCiVc.js";import"./index-DyXRR_oe.js";import"./Dialog-LwmqZ--E.js";import"./cross-Cg-ZPVlB.js";import"./svgIconContainer-Dqg69n5p.js";import"./useBaseUiId-B9dth6ze.js";import"./InternalBackdrop-BS1tlxHN.js";import"./composite-CveWDbYe.js";import"./index-BvAdv-zV.js";import"./index-C8--fwDy.js";import"./index-DE7CeQ9V.js";import"./useEventCallback-C9nVCC2I.js";import"./SkeletonBar-Kk12plMz.js";import"./LoadingCell-BNwqEIy0.js";import"./ColumnConfigDialog-XiyJeGoz.js";import"./DraggableList-BnUTNsfm.js";import"./search-BJB8jL9m.js";import"./Input-qedQc-sF.js";import"./useControlled-D7ZrYDZP.js";import"./Button-XEWUMbMz.js";import"./small-cross-CG13Z6HZ.js";import"./ActionButton-B1IiXgFb.js";import"./Checkbox-CXzE7Fij.js";import"./useValueChanged-Eluq5fvP.js";import"./CollapsiblePanel-BZGbmPQ9.js";import"./MultiColumnSortDialog-C3wMDocw.js";import"./MenuTrigger-5qdkchvr.js";import"./CompositeItem-CaT0iTXd.js";import"./ToolbarRootContext-CjkyXnS-.js";import"./getDisabledMountTransitionStyles-JqiqpVqP.js";import"./getPseudoElementBounds-ChNg3QuF.js";import"./chevron-down-B_4JujMO.js";import"./index-C-yRIYxo.js";import"./error-BDttauQc.js";import"./BaseCbacBanner-BO0Gh_zS.js";import"./makeExternalStore-ChUKIeN-.js";import"./Tooltip-DxrxksXr.js";import"./PopoverPopup-DGMdDGjG.js";import"./debounce-CzfTDtAQ.js";import"./tick-C_DOXN-b.js";import"./DropdownField-BeMP89sC.js";import"./isEqual-DJe3rn5X.js";import"./withOsdkMetrics-Bm1ct0GQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

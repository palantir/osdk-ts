import{j as r}from"./iframe-CgX-XfZe.js";import{O as b}from"./object-table-BfAW9lRl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-fEOet2ZZ.js";import{u as g}from"./useOsdkClient-CGTaZpCt.js";import"./preload-helper-B7xu4jFf.js";import"./Table-tTPFVIKa.js";import"./index-BcViD_AJ.js";import"./Dialog-BaFW1Zjw.js";import"./cross-Nv8Io3xy.js";import"./svgIconContainer-CXZEPhaW.js";import"./useBaseUiId-BXQE2Tij.js";import"./InternalBackdrop-CvIKv91P.js";import"./composite-CuhqFDst.js";import"./index-a2F2ZKsn.js";import"./index-BmNCbeoV.js";import"./index-DrrGWtE8.js";import"./useEventCallback-CJOkzsfk.js";import"./SkeletonBar-rtQtEYsd.js";import"./LoadingCell-wXQ9cx3W.js";import"./ColumnConfigDialog-D9BeChM7.js";import"./DraggableList-D1MymrnJ.js";import"./search-DTGDsddM.js";import"./Input-yuy0l2cX.js";import"./useControlled-CVDZAttb.js";import"./Button-BRRWL_gG.js";import"./small-cross-CldOek9E.js";import"./ActionButton-eETZToHJ.js";import"./Checkbox-OMZwBT2q.js";import"./useValueChanged-CJQsRnGQ.js";import"./CollapsiblePanel-ztAj1qzb.js";import"./MultiColumnSortDialog-CbBSNnI_.js";import"./MenuTrigger-CvwlMuvL.js";import"./CompositeItem-Cosvl6JF.js";import"./ToolbarRootContext-auY9xRTT.js";import"./getDisabledMountTransitionStyles-CY7m0Re-.js";import"./getPseudoElementBounds-Cb9yX_CQ.js";import"./chevron-down-QOEZh7s4.js";import"./index-Dj-xdEDu.js";import"./error-ByGGXW3h.js";import"./BaseCbacBanner-vW1LjLLW.js";import"./makeExternalStore-CRMwT7Da.js";import"./Tooltip-C7b0j1Nz.js";import"./PopoverPopup-AplR6RR1.js";import"./debounce-542eBR78.js";import"./tick-8a_8sCFa.js";import"./DropdownField-D1OnXseu.js";import"./isEqual-Dv3NJm4i.js";import"./withOsdkMetrics-N-qC9xyD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

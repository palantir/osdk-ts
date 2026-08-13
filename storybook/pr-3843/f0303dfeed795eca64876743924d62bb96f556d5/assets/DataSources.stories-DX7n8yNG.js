import{j as r}from"./iframe-dW7ZySVo.js";import{O as b}from"./object-table-DpTS8D6-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BPZsCBIH.js";import{u as g}from"./useOsdkClient-D9vq8O0M.js";import"./preload-helper-ietlItcG.js";import"./Table-B9djy5zR.js";import"./index-CyX_mbZv.js";import"./Dialog-DoD6CH3Q.js";import"./cross-BV4X4rJT.js";import"./svgIconContainer-De3VosTd.js";import"./useBaseUiId-CltpoqoE.js";import"./InternalBackdrop-OnfUmyRP.js";import"./composite-yun7E3H0.js";import"./index-NFcKjdXW.js";import"./index-BUDv2oUY.js";import"./index-B9U1zr68.js";import"./useEventCallback-CTf3PETg.js";import"./SkeletonBar-C0qNZ57m.js";import"./LoadingCell-D2Nn0dkn.js";import"./ColumnConfigDialog-BOj2sQSf.js";import"./DraggableList-CjL1Zeyb.js";import"./search-BVLxwhoK.js";import"./Input-BEPGpKmX.js";import"./useControlled--a4EJP-K.js";import"./isEqual-B26u38ta.js";import"./isObject-Bq6JsHLJ.js";import"./Button-BjotpDzx.js";import"./ActionButton-DXVIhKZW.js";import"./Checkbox-BUcGvUET.js";import"./useValueChanged-BNUhKGYr.js";import"./CollapsiblePanel-7EbWsdAY.js";import"./MultiColumnSortDialog-DxbnrFRY.js";import"./MenuTrigger-DpEpaw3t.js";import"./CompositeItem-B9fLtNsk.js";import"./ToolbarRootContext-Cx1oPDzo.js";import"./getDisabledMountTransitionStyles-BJhCKUOQ.js";import"./getPseudoElementBounds-BE0VWDCU.js";import"./chevron-down-D0s0iZJp.js";import"./index-CiitfvmC.js";import"./error-CUjzZGeI.js";import"./BaseCbacBanner-BziABg8b.js";import"./makeExternalStore-p_MVbTGu.js";import"./Tooltip-BdcEiRfO.js";import"./PopoverPopup-B41CZPnS.js";import"./toNumber-boKe2Guz.js";import"./tick-DhgI4Zis.js";import"./DropdownField-C86F5zQw.js";import"./withOsdkMetrics-CzRWl-u7.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

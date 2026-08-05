import{j as r}from"./iframe-CLumNID0.js";import{O as b}from"./object-table-DLcdYrfg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-UXFUV72m.js";import{u as g}from"./useOsdkClient-DETgLlTn.js";import"./preload-helper-Dz-GKNZ3.js";import"./Table-BD70MMX1.js";import"./index-DKU1K2_w.js";import"./Dialog-C-vWojNb.js";import"./cross-D2EPxtxs.js";import"./svgIconContainer-CPoSZbgC.js";import"./useBaseUiId-Bh-y6B9l.js";import"./InternalBackdrop-BIVaWud6.js";import"./composite-BcZGRwv5.js";import"./index-CVKRWWtF.js";import"./index-BZx9EN2X.js";import"./index-CqEKhfCt.js";import"./useEventCallback-DmAk5Nvb.js";import"./SkeletonBar-Cg4i2Eky.js";import"./LoadingCell-pTieUBV_.js";import"./ColumnConfigDialog-CHH6dhJt.js";import"./DraggableList-Cht41XrX.js";import"./search-DLeM-Fzk.js";import"./Input-B4Ein_ID.js";import"./useControlled-CAmMAraC.js";import"./isEqual-DgAnO35B.js";import"./isObject-BQdnS6rT.js";import"./Button-CBLB_2Qn.js";import"./ActionButton-ubYiUC_C.js";import"./Checkbox-Bjs8_wlf.js";import"./useValueChanged-53h7i9dd.js";import"./CollapsiblePanel-B1lI3eRJ.js";import"./MultiColumnSortDialog-DXw6tgQ9.js";import"./MenuTrigger-NPeyU7rU.js";import"./CompositeItem-CO8dmy82.js";import"./ToolbarRootContext-ldJ0ppJC.js";import"./getDisabledMountTransitionStyles-cNfoKVbW.js";import"./getPseudoElementBounds-DiLLOldJ.js";import"./chevron-down-CS76UfJi.js";import"./index-cZ7ucSab.js";import"./error-DDoBRt2_.js";import"./BaseCbacBanner-BN-MpSnO.js";import"./makeExternalStore-CkYrcdla.js";import"./Tooltip-D54JRXPt.js";import"./PopoverPopup-iQufl1us.js";import"./toNumber-dmoB_w4W.js";import"./tick-CZCe4N3w.js";import"./DropdownField-7ALzCTeZ.js";import"./withOsdkMetrics-jJjprDjm.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

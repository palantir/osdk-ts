import{j as r}from"./iframe-a31F6Zea.js";import{O as b}from"./object-table-BINMUfCj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CuLm83_u.js";import{u as g}from"./useOsdkClient-Ci2TgkT7.js";import"./preload-helper-BfFj_4tp.js";import"./Table-MhGt0czb.js";import"./index-BnGZPYV4.js";import"./Dialog-BuBmqvFw.js";import"./cross-Ctxx23y-.js";import"./svgIconContainer-DxZS3Oh3.js";import"./useBaseUiId-CSUeT06E.js";import"./InternalBackdrop-DjwrHJRF.js";import"./composite-B8asvRon.js";import"./index-DFESKWXH.js";import"./index-DSAvdwec.js";import"./index-CTMiLHyK.js";import"./useEventCallback-DbzrgPEa.js";import"./SkeletonBar-4ArO1hst.js";import"./LoadingCell-CeC_Y0KB.js";import"./ColumnConfigDialog-pS-0zZHr.js";import"./DraggableList-BjfnW581.js";import"./search-BWfh2RdL.js";import"./Input-CBWYwmBc.js";import"./useControlled-CN75eaZx.js";import"./Button-a8my9L0w.js";import"./small-cross-DydNjtyB.js";import"./ActionButton-DRwEwaLd.js";import"./Checkbox-CH-4dSS6.js";import"./useValueChanged-BCR7isnN.js";import"./CollapsiblePanel-BhG8Ptxn.js";import"./MultiColumnSortDialog-jD23MlbX.js";import"./MenuTrigger-DvGn-ZBM.js";import"./CompositeItem-mbuOs1fC.js";import"./ToolbarRootContext-wQy2gScd.js";import"./getDisabledMountTransitionStyles-DnjPaBF0.js";import"./getPseudoElementBounds-BXq9UpA2.js";import"./chevron-down-hBWeBGBN.js";import"./index-gZqL-2oV.js";import"./error-C3q1XKPy.js";import"./BaseCbacBanner-BYsPA5Ea.js";import"./makeExternalStore-CySlHC0C.js";import"./Tooltip-Bta8a6KY.js";import"./PopoverPopup--cbpjW0Q.js";import"./debounce-CODw_OdZ.js";import"./tick-D6JN-An3.js";import"./DropdownField-C3Jn0eQq.js";import"./isEqual-Cj_SI081.js";import"./withOsdkMetrics-B5cAgh1b.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

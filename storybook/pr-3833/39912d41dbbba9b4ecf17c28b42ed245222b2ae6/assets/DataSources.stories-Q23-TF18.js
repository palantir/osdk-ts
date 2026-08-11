import{j as r}from"./iframe-Yz96DrPS.js";import{O as b}from"./object-table-C9CZSVN3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DlQoeLXY.js";import{u as g}from"./useOsdkClient-CZVm7tZv.js";import"./preload-helper-DSFQiPJa.js";import"./Table-CGMnratr.js";import"./index-CA1nYKRZ.js";import"./Dialog-BsdhZ-e7.js";import"./cross-BL7_pA6T.js";import"./svgIconContainer-IHZKkt63.js";import"./useBaseUiId-Bc9L5zEM.js";import"./InternalBackdrop-CqHdaW_q.js";import"./composite-1RMje4bP.js";import"./index-DmVlcIuM.js";import"./index-D76oELgs.js";import"./index-9KFZRagp.js";import"./useEventCallback-C6xW0i3s.js";import"./SkeletonBar-DwqWqllh.js";import"./LoadingCell-KICmHti6.js";import"./ColumnConfigDialog-1mo1JJrV.js";import"./DraggableList-D2XGl1k6.js";import"./search-CxWHrvts.js";import"./Input-BRSvXeIv.js";import"./useControlled-khTqGeBT.js";import"./isEqual-SXKv2-Wb.js";import"./isObject-BC5vm0Dx.js";import"./Button-D4d_fs9b.js";import"./ActionButton-BOkv0UrP.js";import"./Checkbox-kbAY1eIe.js";import"./useValueChanged-CkRMjmpp.js";import"./CollapsiblePanel-B5BqE5nI.js";import"./MultiColumnSortDialog-05yqGdj8.js";import"./MenuTrigger-BxMx821b.js";import"./CompositeItem-CaVP6J8g.js";import"./ToolbarRootContext-k35ZWRp2.js";import"./getDisabledMountTransitionStyles-ygwefoAc.js";import"./getPseudoElementBounds-eFRwNGrO.js";import"./chevron-down-D2BRaLqM.js";import"./index-BobGwXvv.js";import"./error-D7GMvIdW.js";import"./BaseCbacBanner-CsYbWqLr.js";import"./makeExternalStore-BEyUkIfG.js";import"./Tooltip-CmLFGvq0.js";import"./PopoverPopup-ua-uP1ZY.js";import"./toNumber-Dw-8SHMn.js";import"./tick-DNnM64JX.js";import"./DropdownField-CWVsDrhE.js";import"./withOsdkMetrics-AzfXO0By.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

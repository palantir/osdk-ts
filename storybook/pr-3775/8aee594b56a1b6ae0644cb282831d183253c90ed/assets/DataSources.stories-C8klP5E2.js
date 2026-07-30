import{j as r}from"./iframe-oJ2FO9gh.js";import{O as b}from"./object-table-DDfdUfwh.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bpzz5_WR.js";import{u as g}from"./useOsdkClient-BRxg0s9r.js";import"./preload-helper-CvpglEc3.js";import"./Table-Daq1nRPv.js";import"./index-BV7N8IQq.js";import"./Dialog-rr-wanT4.js";import"./cross-JrXM6Q4E.js";import"./svgIconContainer-DrpVPmB5.js";import"./useBaseUiId--8htrZkx.js";import"./InternalBackdrop-WR8b6Qpn.js";import"./composite-DNBMgSTn.js";import"./index-Cc835WrV.js";import"./index-Cs1NT0zx.js";import"./index-DYZJDtdA.js";import"./useEventCallback-Bkdj3IwB.js";import"./SkeletonBar-DmHtdZfF.js";import"./LoadingCell-CnxTs2mT.js";import"./ColumnConfigDialog-xt-kq9cY.js";import"./DraggableList-BLmy14XX.js";import"./search-YW5i8NVp.js";import"./Input-Bnt9eVNU.js";import"./useControlled-C3SPN_RN.js";import"./isEqual-CIsSANAT.js";import"./isObject-CZVCdMvb.js";import"./Button-f6PsM82T.js";import"./ActionButton-DBjSnZHs.js";import"./Checkbox-D_GgxpAc.js";import"./useValueChanged-EI4pgMLr.js";import"./CollapsiblePanel-Clqftq_k.js";import"./MultiColumnSortDialog-CJ4QNJt3.js";import"./MenuTrigger-wCrramWO.js";import"./CompositeItem-Dq5Pjrzb.js";import"./ToolbarRootContext-KIChva0u.js";import"./getDisabledMountTransitionStyles-BdOIDXL5.js";import"./getPseudoElementBounds-BJpCkOYE.js";import"./chevron-down-Ba4HOL7F.js";import"./index-Bm7cqmq_.js";import"./error-B9ewsirH.js";import"./BaseCbacBanner-wohGbFNN.js";import"./makeExternalStore-D6lsgFI3.js";import"./Tooltip-C1gKNyzG.js";import"./PopoverPopup-BQM51qRN.js";import"./toNumber-B6mridBS.js";import"./tick-CRJBTjv9.js";import"./DropdownField-CBUm68iK.js";import"./withOsdkMetrics-BAaL3YVb.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-Brj9Sbid.js";import{O as b}from"./object-table-BZ0MZy9P.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cjp9y3XZ.js";import{u as g}from"./useOsdkClient-2oRxYRX2.js";import"./preload-helper-oLILJVBL.js";import"./Table-BH-RZNCP.js";import"./index-DvGT_2Rb.js";import"./Dialog-COLSia6k.js";import"./cross-DGEDR-iR.js";import"./svgIconContainer-BlZrGf5w.js";import"./useBaseUiId-DtogBb13.js";import"./InternalBackdrop-BlNxxS8w.js";import"./composite-DqYqntwB.js";import"./index-BpZgmo5w.js";import"./index-CwFbsAXM.js";import"./index-Ztr5QER3.js";import"./useEventCallback-COtfvcHe.js";import"./SkeletonBar-BbYnj_B5.js";import"./LoadingCell-CY4ngEPG.js";import"./ColumnConfigDialog-8P-8ZUWB.js";import"./DraggableList-CocCSwkY.js";import"./search-Bft1Biki.js";import"./Input-B_oVxWvi.js";import"./useControlled-DBZzTWcr.js";import"./isEqual-BbyvGaTy.js";import"./isObject-BtnLo4c4.js";import"./Button-S6siwBTp.js";import"./ActionButton-BABk4Pl1.js";import"./Checkbox-DMncT4kw.js";import"./useValueChanged-BLJ42nt0.js";import"./CollapsiblePanel-BbalYaX2.js";import"./MultiColumnSortDialog-TPqwtccN.js";import"./MenuTrigger-CiscVOMj.js";import"./CompositeItem-nP0KtzgK.js";import"./ToolbarRootContext-2sbonX9x.js";import"./getDisabledMountTransitionStyles-CZQAQSKz.js";import"./getPseudoElementBounds-u9mOl45S.js";import"./chevron-down-Bd6yaiTi.js";import"./index-BtFlrDNb.js";import"./error-C5CNb-QP.js";import"./BaseCbacBanner-ClkIB2_j.js";import"./makeExternalStore-JCpwxwwp.js";import"./Tooltip-CszSZdJE.js";import"./PopoverPopup-bU_8XjBZ.js";import"./toNumber-ClpiI6JA.js";import"./tick-DjhBTBL8.js";import"./DropdownField-Db4z1Gaj.js";import"./withOsdkMetrics-Cz2Nq3As.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

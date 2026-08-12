import{j as r}from"./iframe-DeFJRJj_.js";import{O as b}from"./object-table-FpQH8zDH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DaWxGL97.js";import{u as g}from"./useOsdkClient-CAv7eSZO.js";import"./preload-helper-qD0ucBRi.js";import"./Table-yqvulaG4.js";import"./index-ZhtX4fsv.js";import"./Dialog-CQAmh9mS.js";import"./cross-CrAtm1fx.js";import"./svgIconContainer-CTkWWvQN.js";import"./useBaseUiId-Bq3F6Rv_.js";import"./InternalBackdrop-I_xge_tr.js";import"./composite-zNv1yGvS.js";import"./index-D6kTPWWX.js";import"./index-BL95TNIJ.js";import"./index-PDfAbFc3.js";import"./useEventCallback-DOh_QwCs.js";import"./SkeletonBar-BCypp59V.js";import"./LoadingCell-C8Ob_9Qb.js";import"./ColumnConfigDialog-CYlKSxfl.js";import"./DraggableList-BzyMgYvc.js";import"./search-DY35zBxg.js";import"./Input-CsBuql1A.js";import"./useControlled-Dn21pgdp.js";import"./isEqual-7SFR467m.js";import"./isObject-BUAr3np9.js";import"./Button-CSCQK9mA.js";import"./ActionButton-ZjjCkAyn.js";import"./Checkbox-D454IOsY.js";import"./useValueChanged-Du1T7LSL.js";import"./CollapsiblePanel-DfGBm_UI.js";import"./MultiColumnSortDialog-CLinEGLK.js";import"./MenuTrigger-X1kUqg13.js";import"./CompositeItem-CZp4_PXj.js";import"./ToolbarRootContext-BL-4vvnE.js";import"./getDisabledMountTransitionStyles-3seGgd_O.js";import"./getPseudoElementBounds-YW0J0z3g.js";import"./chevron-down-aqXgsfqW.js";import"./index-CJ3Iicbp.js";import"./error-CZdOWqiH.js";import"./BaseCbacBanner-DdLprQAt.js";import"./makeExternalStore-D6AD-Szb.js";import"./Tooltip-tTWRSFbd.js";import"./PopoverPopup-BiBkyadf.js";import"./toNumber-B-Ufdoco.js";import"./tick-Kxgypmmn.js";import"./DropdownField-CKIbBTPW.js";import"./withOsdkMetrics-inWDWazQ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

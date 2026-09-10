import{j as r}from"./iframe-oqiETzjs.js";import{O as b}from"./object-table-rNXIHn5Q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CRx7p4hm.js";import{u as g}from"./useOsdkClient-B_WbWNUS.js";import"./preload-helper-DY6GVQaH.js";import"./Table-BflKtP03.js";import"./index-ZtK2AEsr.js";import"./Dialog-Cz1Kh4Dd.js";import"./cross-CMMlEidH.js";import"./svgIconContainer-C-hQGfLn.js";import"./useBaseUiId-DB5E9Fa7.js";import"./InternalBackdrop-BD9FMsgH.js";import"./composite-DUWgXaax.js";import"./index-D6-tP7ey.js";import"./index-BcAnoDMR.js";import"./index-CDmWDyVL.js";import"./useEventCallback-CgLXQDBT.js";import"./SkeletonBar-BrsaaqIx.js";import"./LoadingCell-DZynjFCS.js";import"./ColumnConfigDialog-DWQC5Adn.js";import"./DraggableList-Zvqqdsz9.js";import"./search-Hb2jWcJP.js";import"./Input-DVeUb6S9.js";import"./useControlled-CGzg1vVh.js";import"./Button-BnpV_XVG.js";import"./small-cross-CVZbPmwP.js";import"./ActionButton-Br3jBZ8T.js";import"./Checkbox-CFStyuqq.js";import"./useValueChanged-DvOpzAYW.js";import"./CollapsiblePanel-BJpSAUrV.js";import"./MultiColumnSortDialog-CNdNiaKX.js";import"./MenuTrigger-D8dN5Oyb.js";import"./CompositeItem-D_YoAFpQ.js";import"./ToolbarRootContext-B7aYE2db.js";import"./getDisabledMountTransitionStyles-Df2F2xk8.js";import"./getPseudoElementBounds-XzSdEMVW.js";import"./chevron-down-B5wuH3n5.js";import"./index-Dg5Wo44B.js";import"./error-B914xSJQ.js";import"./BaseCbacBanner-DnRPWhLM.js";import"./makeExternalStore-BIBGwZYl.js";import"./Tooltip-BjFPs1Cw.js";import"./PopoverPopup-C_RplgjD.js";import"./debounce--r48Cn5x.js";import"./tick-Bf3wXGgd.js";import"./DropdownField-WW4hkpJ1.js";import"./isEqual-p6GWxLy9.js";import"./withOsdkMetrics-tcmfqEow.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

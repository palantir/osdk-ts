import{j as r}from"./iframe-DbOzOGDn.js";import{O as b}from"./object-table-CnHgsnlH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CHKGYvpX.js";import{u as g}from"./useOsdkClient-DnKXdJAr.js";import"./preload-helper-CEOnTWAP.js";import"./Table-K52p4n9o.js";import"./index-Dg0aL1Ya.js";import"./Dialog-D-I0jKPM.js";import"./cross-p3kX_C4C.js";import"./svgIconContainer-BkMavql5.js";import"./useBaseUiId-BHeQMfEi.js";import"./InternalBackdrop-oULkb1ND.js";import"./composite-BwS7DM51.js";import"./index-DXhnYg4n.js";import"./index-CR6MxkSt.js";import"./index-CTUo3yCV.js";import"./useEventCallback-DlBcu5ho.js";import"./SkeletonBar-N1bXFhek.js";import"./LoadingCell-DrlWD_f-.js";import"./ColumnConfigDialog-NQ0ghzKG.js";import"./DraggableList-BdGFR88X.js";import"./search-B4i-bCdH.js";import"./Input-DhGctLIw.js";import"./useControlled-1SoxEbMs.js";import"./isEqual-CmtwWJaV.js";import"./isObject-YLlwJBkh.js";import"./Button-F6Bjz8AF.js";import"./ActionButton-H1WvZcF1.js";import"./Checkbox-DmJ7kxVi.js";import"./useValueChanged-fPXgHsVW.js";import"./CollapsiblePanel-J3B3q2NF.js";import"./MultiColumnSortDialog-DZdikWlT.js";import"./MenuTrigger-BqOdHhDk.js";import"./CompositeItem-BHfyFTGc.js";import"./ToolbarRootContext-BcsxKm3i.js";import"./getDisabledMountTransitionStyles-DpC69aQF.js";import"./getPseudoElementBounds-DcwtftU4.js";import"./chevron-down-DWiP-M1R.js";import"./index-CNFuF0v3.js";import"./error-AkXLsrSc.js";import"./BaseCbacBanner-Cy7-gQ95.js";import"./makeExternalStore-BRXhYe85.js";import"./Tooltip-DEmas6fX.js";import"./PopoverPopup-CZMDX-Af.js";import"./toNumber-DorZ4yjy.js";import"./tick-e1TkvrqX.js";import"./DropdownField-CR1fQbVR.js";import"./withOsdkMetrics-C0unEn4u.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

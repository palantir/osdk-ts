import{j as r}from"./iframe-iQYe401C.js";import{O as b}from"./object-table-CQAKZvn7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DSzrhooB.js";import{u as g}from"./useOsdkClient-CZTlJRJQ.js";import"./preload-helper-BJxdJnS2.js";import"./Table-CZW6W3yy.js";import"./index-Cj4wtDol.js";import"./Dialog-CBrFYyiH.js";import"./cross-TYvUZ_zv.js";import"./svgIconContainer-D--fuUS3.js";import"./useBaseUiId-BaHVsYFy.js";import"./InternalBackdrop-S4bmd6Lm.js";import"./composite-XRaaCNpo.js";import"./index-CdUd9ljx.js";import"./index-CRQmWOJF.js";import"./index-BXM3Dfw8.js";import"./useEventCallback-DBxYjDu9.js";import"./SkeletonBar-DvhrPwLx.js";import"./LoadingCell-B7vN1qdl.js";import"./ColumnConfigDialog-4i9wvyxB.js";import"./DraggableList-COk6-1af.js";import"./search-B3fBbeLu.js";import"./Input-BwZPvKdY.js";import"./useControlled-DFWRskTz.js";import"./Button-Cg1RHP_F.js";import"./small-cross-CU5ZGaMO.js";import"./ActionButton-BGE_oPjS.js";import"./Checkbox-Dwil23Ps.js";import"./useValueChanged-Dc317jR-.js";import"./CollapsiblePanel-BZFSURwn.js";import"./MultiColumnSortDialog-CJozMRHX.js";import"./MenuTrigger-DN5oXxmx.js";import"./CompositeItem-CnHJu7Fq.js";import"./ToolbarRootContext-Qv2LHZju.js";import"./getDisabledMountTransitionStyles-BornKuZB.js";import"./getPseudoElementBounds-SeQsgf4Z.js";import"./chevron-down-CJ48f6Cy.js";import"./index-BtxoyDek.js";import"./error-5BtLRQh_.js";import"./BaseCbacBanner-CB5UjwFo.js";import"./makeExternalStore-CHwacdcE.js";import"./Tooltip-sxUSyvW-.js";import"./PopoverPopup-BxUICyhU.js";import"./debounce-BzmjoLzO.js";import"./tick-BFnnzHdi.js";import"./DropdownField-BLF6TyfM.js";import"./isEqual-DiXstpw3.js";import"./withOsdkMetrics-BYb2lN1I.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

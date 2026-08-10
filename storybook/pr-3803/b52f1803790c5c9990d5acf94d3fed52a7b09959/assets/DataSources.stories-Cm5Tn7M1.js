import{j as r}from"./iframe-rflnhUL0.js";import{O as b}from"./object-table-BuC8IlXH.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DlCMfGHX.js";import{u as g}from"./useOsdkClient-Ufw7pTgL.js";import"./preload-helper-JrW1tzuD.js";import"./Table-CcDzY1b4.js";import"./index-CKEIJLZz.js";import"./Dialog-CaW29oo5.js";import"./cross-DnlUR3uJ.js";import"./svgIconContainer-CfRMoYYm.js";import"./useBaseUiId-B-D920ll.js";import"./InternalBackdrop-BmgqUUZm.js";import"./composite-DWpGM0Ys.js";import"./index-DskUz2s5.js";import"./index-Cmmo0Jm_.js";import"./index-CYog2F1S.js";import"./useEventCallback-IFua3RYV.js";import"./SkeletonBar-Bx9hAro-.js";import"./LoadingCell-gS42QkYV.js";import"./ColumnConfigDialog-st3e9zUU.js";import"./DraggableList-BB16q4ou.js";import"./search-Dbr7xQD1.js";import"./Input-DxO_QsKj.js";import"./useControlled-pmT8hQxb.js";import"./isEqual-DbN-tv-e.js";import"./isObject-BkxNQewi.js";import"./Button-C3fC6A6m.js";import"./ActionButton-DK7xXRak.js";import"./Checkbox-BROO1bDi.js";import"./useValueChanged-B6Ou-IZI.js";import"./CollapsiblePanel-BUTZsP3m.js";import"./MultiColumnSortDialog-CQP0H1PV.js";import"./MenuTrigger-CnsFIHQ4.js";import"./CompositeItem--VYrNhIm.js";import"./ToolbarRootContext-DEPy0pOQ.js";import"./getDisabledMountTransitionStyles-CZvlUQGU.js";import"./getPseudoElementBounds-C99NhKV6.js";import"./chevron-down-DJU55j1c.js";import"./index-CVhEYDwD.js";import"./error-CQhUr9EW.js";import"./BaseCbacBanner-C3An4QRs.js";import"./makeExternalStore-CT5u938L.js";import"./Tooltip-BsKl9t32.js";import"./PopoverPopup-BByUGNRE.js";import"./toNumber-DmIm5Qmb.js";import"./tick-Dsl8J2EY.js";import"./DropdownField-CHHdcXVp.js";import"./withOsdkMetrics-KUKh2Lgy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

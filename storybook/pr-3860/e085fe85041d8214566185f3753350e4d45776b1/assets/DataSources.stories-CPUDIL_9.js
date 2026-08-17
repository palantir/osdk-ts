import{j as r}from"./iframe-DxXKdltG.js";import{O as b}from"./object-table-Bj4-DbWM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cx9I6s9C.js";import{u as g}from"./useOsdkClient-DQ_KPrvO.js";import"./preload-helper-DeiUyftX.js";import"./Table-BCRzEpGp.js";import"./index-BtfwOrEP.js";import"./Dialog-CDoh5PA7.js";import"./cross-BuyZb8_W.js";import"./svgIconContainer-cbdygDVB.js";import"./useBaseUiId-BIU3X4c6.js";import"./InternalBackdrop-CWJDzul9.js";import"./composite-thvm4Qx2.js";import"./index-Zxk0DmkR.js";import"./index-cP62887E.js";import"./index-oU8fVFfk.js";import"./useEventCallback-CHffR8EK.js";import"./SkeletonBar-120LEEzJ.js";import"./LoadingCell-BpiL5yLu.js";import"./ColumnConfigDialog-DtWOobBZ.js";import"./DraggableList-CHRK6gSE.js";import"./search-BGr984X9.js";import"./Input-B2m11alO.js";import"./useControlled-CaTiOTAf.js";import"./Button-DmXHdCRF.js";import"./small-cross-B7cAW_f_.js";import"./ActionButton-BxZEyn-_.js";import"./Checkbox-DA9O83FT.js";import"./useValueChanged-aU9wdss0.js";import"./CollapsiblePanel-DE-53r5b.js";import"./MultiColumnSortDialog-CHEYUa-f.js";import"./MenuTrigger-RBwYXjaK.js";import"./CompositeItem-Co5br9Tc.js";import"./ToolbarRootContext-Oju08BfH.js";import"./getDisabledMountTransitionStyles-kwkiwBEE.js";import"./getPseudoElementBounds-BTSwOJ5D.js";import"./chevron-down-vwGCQFp5.js";import"./index-QYya9p5M.js";import"./error-JxDwIdvE.js";import"./BaseCbacBanner--K3_UuZs.js";import"./makeExternalStore-B1C7zDDl.js";import"./Tooltip-BS-tcXN-.js";import"./PopoverPopup-DDqVXp1Q.js";import"./debounce-C0urt5pH.js";import"./tick-BRyYqbgU.js";import"./DropdownField-ClA4NquN.js";import"./isEqual-DrAT4LG7.js";import"./withOsdkMetrics-B-_hpiKp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

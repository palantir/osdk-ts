import{j as r}from"./iframe-BAeLbAl6.js";import{O as b}from"./object-table-BnsFvJtA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-yhM5wv8X.js";import{u as g}from"./useOsdkClient-BGONbmHM.js";import"./preload-helper-m_84o41e.js";import"./Table-CK4yTRyV.js";import"./index-PFCRcBB8.js";import"./Dialog-dItpOhns.js";import"./cross-LaD09s4o.js";import"./svgIconContainer-BwzsxKuu.js";import"./useBaseUiId-Bqj7O5fV.js";import"./InternalBackdrop-ks6tfBqL.js";import"./composite-CB1zzFRj.js";import"./index-C94QZByk.js";import"./index-Cewd33Zv.js";import"./index-Bxsk2OvM.js";import"./useEventCallback-DWjHyX_4.js";import"./SkeletonBar-CcamCJ4u.js";import"./LoadingCell-B3P3spJG.js";import"./ColumnConfigDialog-B5H1sWgC.js";import"./DraggableList-D3jEqs9W.js";import"./search-DSQXKmVC.js";import"./Input-v-g3V96U.js";import"./useControlled-ESFaGK0R.js";import"./isEqual-3WwyNO5B.js";import"./isObject-DuMSLyr1.js";import"./Button-DlDEnFnv.js";import"./ActionButton-DHS8Tw7g.js";import"./Checkbox-JYmrAvZy.js";import"./useValueChanged-BxkTgku3.js";import"./CollapsiblePanel-C0jKchik.js";import"./MultiColumnSortDialog-2mMkw3qI.js";import"./MenuTrigger-DE_ZRb6u.js";import"./CompositeItem-CWT-t3Tx.js";import"./ToolbarRootContext-Cd959Anj.js";import"./getDisabledMountTransitionStyles-fDJE5x_7.js";import"./getPseudoElementBounds-CW_MLhzy.js";import"./chevron-down-Xy6No0Yn.js";import"./index-CZsDhWOE.js";import"./error-BE-E_O08.js";import"./BaseCbacBanner-DqseBF8U.js";import"./makeExternalStore-DgNy_XDA.js";import"./Tooltip-DU3L3KsD.js";import"./PopoverPopup-BeJ0b8hw.js";import"./toNumber-CfjuIAcz.js";import"./tick-POonDG8j.js";import"./DropdownField-Dq4vr_wR.js";import"./withOsdkMetrics-CMXM2A9g.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

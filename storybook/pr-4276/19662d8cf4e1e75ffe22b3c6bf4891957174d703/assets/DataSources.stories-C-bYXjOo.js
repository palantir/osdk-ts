import{j as r}from"./iframe-CStnt8bf.js";import{O as b}from"./object-table-DFsXId9i.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BtyzdY5X.js";import{u as g}from"./useOsdkClient-Jni9x8Xr.js";import"./preload-helper-BHFu-ydw.js";import"./Table-DBS6XJdH.js";import"./index-bIM1mjE2.js";import"./Dialog-CkqR53d9.js";import"./cross-CzL3ilF7.js";import"./svgIconContainer-CBrsISO6.js";import"./useBaseUiId-D9TkSWZv.js";import"./InternalBackdrop-dpQuuCiD.js";import"./composite-DIpMeE4S.js";import"./index-Dubonfnq.js";import"./index-VT6Dn2OL.js";import"./index-DyrSN_o7.js";import"./useEventCallback-Ds_cQgpI.js";import"./SkeletonBar-6Pwtzhfc.js";import"./LoadingCell-DbhG2pOg.js";import"./ColumnConfigDialog-Cx-LiGAh.js";import"./DraggableList-DHNVyXK9.js";import"./search-BrGXguj5.js";import"./Input-BxZoPAuB.js";import"./useControlled-B4F-euPl.js";import"./Button-BTOFQ1SZ.js";import"./small-cross-DKMVFFWv.js";import"./ActionButton-DOBKUozS.js";import"./Checkbox-Dx3AAe_X.js";import"./useValueChanged-DwaCIejN.js";import"./CollapsiblePanel-BDHPVZWV.js";import"./MultiColumnSortDialog-D2eHp6DO.js";import"./MenuTrigger-NDl8CeUW.js";import"./CompositeItem-BdSAWgXI.js";import"./ToolbarRootContext-Dy3DBHgn.js";import"./getDisabledMountTransitionStyles-9rWadWne.js";import"./getPseudoElementBounds-BjFdhu5l.js";import"./chevron-down-DP-5q6nZ.js";import"./index-BZfBBfBl.js";import"./error-CM07sBvh.js";import"./BaseCbacBanner-D4DXqewK.js";import"./makeExternalStore-Cv8ow0-9.js";import"./Tooltip-BV608A00.js";import"./isObject-DTA28_gJ.js";import"./debounce-CBH2mxRm.js";import"./tick-B9r2rV47.js";import"./DropdownField-eRFOlzDf.js";import"./isEqual-DcoImb_5.js";import"./_baseIsEqual-CQQa-Rsq.js";import"./withOsdkMetrics-8Qsa17lA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};

import{j as r}from"./iframe-BYejxj2b.js";import{O as b}from"./object-table-DeEAqfUC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DRl75OGu.js";import{u as g}from"./useOsdkClient-v91fIKBr.js";import"./preload-helper-C0rDQy5D.js";import"./Table-Ck2donfE.js";import"./index-iipsf35Q.js";import"./Dialog-_5OGUo-t.js";import"./cross-C58IIDJt.js";import"./svgIconContainer-BpdSUco1.js";import"./useBaseUiId-C9Oeigog.js";import"./InternalBackdrop-CpB9FOQ-.js";import"./composite-E5tzecJv.js";import"./index-CXPcvEZE.js";import"./index-CPmCN5n5.js";import"./index-mOzIY_Cu.js";import"./useEventCallback-Bqw3GNAH.js";import"./SkeletonBar-Br2yrjJj.js";import"./LoadingCell-CI4BrKiD.js";import"./ColumnConfigDialog-CU3B-UjG.js";import"./DraggableList-B1HdKVrR.js";import"./search-DoJ4TrKJ.js";import"./Input-iw0NWTaR.js";import"./useControlled-C0V-KMju.js";import"./Button-CuqI5477.js";import"./small-cross-Cu684_cF.js";import"./ActionButton-oGSx-SKD.js";import"./Checkbox-yIlqtiqn.js";import"./useValueChanged-CzPX0usT.js";import"./CollapsiblePanel-CMFkfvwx.js";import"./MultiColumnSortDialog-BdsAjARw.js";import"./MenuTrigger-CP1yKMgK.js";import"./CompositeItem-Ze_igsRp.js";import"./ToolbarRootContext-BhZB42YH.js";import"./getDisabledMountTransitionStyles-CEv9PYlI.js";import"./getPseudoElementBounds-Ch3KvVo0.js";import"./chevron-down-CRHNnKNO.js";import"./index-CZoFsv0k.js";import"./error-D3cs_59E.js";import"./BaseCbacBanner-De0tLRQx.js";import"./makeExternalStore-BiJsDtWq.js";import"./Tooltip-Cz_WgPBn.js";import"./PopoverPopup-DPn5xYgL.js";import"./debounce-B4fjUaL7.js";import"./tick-xiLoJvOV.js";import"./DropdownField-B9F8HYeP.js";import"./isEqual-B5NKSLiF.js";import"./withOsdkMetrics-BsRlr_Wc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

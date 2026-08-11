import{j as r}from"./iframe-BYn0Dbkf.js";import{O as b}from"./object-table-B0lAPirf.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bbrqd3jL.js";import{u as g}from"./useOsdkClient-DwNUV0Zv.js";import"./preload-helper-Bs3XUXmU.js";import"./Table-9ofcA_L-.js";import"./index-DAPmu22T.js";import"./Dialog-a20WTzra.js";import"./cross-BXV7hkb7.js";import"./svgIconContainer-BVGjJ7Ho.js";import"./useBaseUiId-BF9dGCHt.js";import"./InternalBackdrop-C6QQSOU_.js";import"./composite-DJ1g0dtg.js";import"./index-XbPpfGjN.js";import"./index-3eUfjQeA.js";import"./index-k0LAveS5.js";import"./useEventCallback-C2Vv72P0.js";import"./SkeletonBar-B8UnVDE_.js";import"./LoadingCell-CXCaMwdV.js";import"./ColumnConfigDialog-Crc9dj67.js";import"./DraggableList-DX3N03Ic.js";import"./search-BHLX4gDD.js";import"./Input-JHNZlMmd.js";import"./useControlled-BjeGab0J.js";import"./isEqual-C6o1lCTI.js";import"./isObject-D59ADqrH.js";import"./Button-SDlJ1SYG.js";import"./ActionButton-3OKX3KKo.js";import"./Checkbox-Cw8U-R78.js";import"./useValueChanged-lInqvc-E.js";import"./CollapsiblePanel-CS8vV5wB.js";import"./MultiColumnSortDialog-DxC7E4Cw.js";import"./MenuTrigger-B6ffxhp1.js";import"./CompositeItem-D_irOX6v.js";import"./ToolbarRootContext-CIeppiht.js";import"./getDisabledMountTransitionStyles-BFmswiN_.js";import"./getPseudoElementBounds-DddCY1gg.js";import"./chevron-down-CkcBV-EM.js";import"./index-BcYpOZ5o.js";import"./error-Ca0TYJkV.js";import"./BaseCbacBanner-CbvQ2cnZ.js";import"./makeExternalStore-yw69iLs7.js";import"./Tooltip--_7id-zF.js";import"./PopoverPopup-BtDf8BBC.js";import"./toNumber-BIk96f3L.js";import"./tick-CGOrJa2L.js";import"./DropdownField-DYO0cR2M.js";import"./withOsdkMetrics-C6gKOAoe.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

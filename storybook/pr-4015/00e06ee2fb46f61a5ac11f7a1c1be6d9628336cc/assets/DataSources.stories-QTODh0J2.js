import{j as r}from"./iframe-BqB00GiJ.js";import{O as b}from"./object-table-C2NKZ5Ei.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BykhRnMh.js";import{u as g}from"./useOsdkClient-TXFw7McP.js";import"./preload-helper-CBNowE1F.js";import"./Table-YLFb9JTa.js";import"./index-B6ljFb81.js";import"./Dialog-DxiqR021.js";import"./cross-NroKy72c.js";import"./svgIconContainer-BKScRVgJ.js";import"./useBaseUiId-BOd5ixEm.js";import"./InternalBackdrop-BrgH0B3m.js";import"./composite-pnQuH5Q_.js";import"./index-HDQn5rHu.js";import"./index-Bn4ERW5E.js";import"./index-9yoITr-1.js";import"./useEventCallback-D3Kfk8Ap.js";import"./SkeletonBar-CqIDeBXY.js";import"./LoadingCell-BZUln8hk.js";import"./ColumnConfigDialog-Bm9Omtos.js";import"./DraggableList-DQlXK6nA.js";import"./search-Bz2m71mS.js";import"./Input-BuKObC1x.js";import"./useControlled-BB4FINPW.js";import"./Button-UzxjVW7Z.js";import"./small-cross-DuiafL3Y.js";import"./ActionButton-DkxsgQ7J.js";import"./Checkbox-Cxps6qHC.js";import"./useValueChanged-vVuVXkf4.js";import"./CollapsiblePanel-Dm2x088n.js";import"./MultiColumnSortDialog-D4aqIUgF.js";import"./MenuTrigger-Dmunabbl.js";import"./CompositeItem-E84gf2Yn.js";import"./ToolbarRootContext-B0-kN55K.js";import"./getDisabledMountTransitionStyles-BLzEUkBl.js";import"./getPseudoElementBounds-DPHULfcE.js";import"./chevron-down-DmxY4RQH.js";import"./index-DIoCyghZ.js";import"./error-D0GZGtsZ.js";import"./BaseCbacBanner-ChsHyYrj.js";import"./makeExternalStore-CanGYDv6.js";import"./Tooltip-NtIdK9rB.js";import"./PopoverPopup-9AX7mF7M.js";import"./debounce-DJYw4rW8.js";import"./tick-km-CKWcD.js";import"./DropdownField-DMGNppZZ.js";import"./isEqual-B_bGdX-y.js";import"./withOsdkMetrics-D9LjqIyU.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

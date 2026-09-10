import{j as r}from"./iframe-DXJ7n1Mt.js";import{O as b}from"./object-table-C9iUs_pB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BKSU-XC3.js";import{u as g}from"./useOsdkClient-CbGeUOIk.js";import"./preload-helper-J-T-Ktwt.js";import"./Table-BtAWTgx_.js";import"./index-BI3hFpTv.js";import"./Dialog-CV-I8Cmc.js";import"./cross-DmSTTtGj.js";import"./svgIconContainer-Cy-yvyP2.js";import"./useBaseUiId-CYKekcVM.js";import"./InternalBackdrop-DDjs_3_h.js";import"./composite-Br3qqN8V.js";import"./index-q7aE4fUG.js";import"./index-_EiW5ygO.js";import"./index-BfPkbabJ.js";import"./useEventCallback-DE2r_0Dc.js";import"./SkeletonBar-C2wmfKY_.js";import"./LoadingCell-MVk8M1F_.js";import"./ColumnConfigDialog-D58-ins6.js";import"./DraggableList-COSKQo83.js";import"./search-CS5luSCI.js";import"./Input-Cdu0Ne1b.js";import"./useControlled-DcXpzJX2.js";import"./Button-B1cldSa1.js";import"./small-cross-Bj0C9Gd0.js";import"./ActionButton--bYsYf66.js";import"./Checkbox-B0ntZnQU.js";import"./useValueChanged-CziH8SsH.js";import"./CollapsiblePanel-lE4KEPz7.js";import"./MultiColumnSortDialog-D_ET05Qr.js";import"./MenuTrigger-B0cYrf69.js";import"./CompositeItem-Btxqtw0m.js";import"./ToolbarRootContext-CBBxIG3X.js";import"./getDisabledMountTransitionStyles-DkNiKvvo.js";import"./getPseudoElementBounds-DRUex6O1.js";import"./chevron-down-zhZwP9mu.js";import"./index-CP1UTh8c.js";import"./error-9QZoIHyb.js";import"./BaseCbacBanner-ChfQU8z9.js";import"./makeExternalStore-BQUk64un.js";import"./Tooltip-DjRrr2Ut.js";import"./PopoverPopup-PPlNSATF.js";import"./debounce-BShPyhNf.js";import"./tick-6IruXiCw.js";import"./DropdownField-oynydTCh.js";import"./isEqual-BY-qrHy9.js";import"./withOsdkMetrics-AS-zNNJp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

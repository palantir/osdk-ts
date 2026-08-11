import{j as r}from"./iframe-MD_hxJ5J.js";import{O as b}from"./object-table-BysSjEUR.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cwxi1gtA.js";import{u as g}from"./useOsdkClient-DKSwjyPJ.js";import"./preload-helper-CxmPmWZ8.js";import"./Table-C0PNNGWc.js";import"./index-64-1SNr_.js";import"./Dialog-D69y0_7h.js";import"./cross-D46twNIG.js";import"./svgIconContainer-BvauezIc.js";import"./useBaseUiId-ChxOhtPS.js";import"./InternalBackdrop-Cqjgz7i6.js";import"./composite-C2KSVEv8.js";import"./index-BZUy6kD9.js";import"./index-Cg6AvCFD.js";import"./index-D4y1rNQs.js";import"./useEventCallback-C5sJ9WEe.js";import"./SkeletonBar-Hr-KZlfW.js";import"./LoadingCell-CsGyK1hi.js";import"./ColumnConfigDialog-BYmJzKVj.js";import"./DraggableList-CPFfWHpr.js";import"./search-7pK9Rle0.js";import"./Input-0PB2eg3D.js";import"./useControlled-C8cjmXAr.js";import"./isEqual-tprnv5r8.js";import"./isObject-DUcirasF.js";import"./Button-DTHIbyog.js";import"./ActionButton-B6Tvr6s_.js";import"./Checkbox-Gr2j_OCE.js";import"./useValueChanged-BooVG2Ea.js";import"./CollapsiblePanel-B36qfma4.js";import"./MultiColumnSortDialog-CsWcyhKj.js";import"./MenuTrigger-DRuvgmkE.js";import"./CompositeItem-CADo38Yn.js";import"./ToolbarRootContext-BSmt9IfE.js";import"./getDisabledMountTransitionStyles-CtRo1WPu.js";import"./getPseudoElementBounds-XHz08wL-.js";import"./chevron-down-BLw2RaDz.js";import"./index-Bke-1tqH.js";import"./error-BL4ywDu6.js";import"./BaseCbacBanner-C8xLY8Qd.js";import"./makeExternalStore-CQNZO13J.js";import"./Tooltip-CEMJXePV.js";import"./PopoverPopup-BiefuPNN.js";import"./toNumber-CZGYHYtn.js";import"./tick-5aivGE4p.js";import"./DropdownField-TiPjHrlF.js";import"./withOsdkMetrics-DoESnEyg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

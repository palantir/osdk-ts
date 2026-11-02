import{j as r}from"./iframe-BCqrjcZp.js";import{O as b}from"./object-table-C_GnPGDg.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-pnfQYMrz.js";import{u as g}from"./useOsdkClient-DPRWmwVD.js";import"./preload-helper-IP6Q7Lp8.js";import"./Table-C1ZLuF4G.js";import"./index-D0jlJMeY.js";import"./Dialog-CViBcxvF.js";import"./cross-B5B9w1fn.js";import"./svgIconContainer-DwsnB4Bh.js";import"./useBaseUiId-BHV9sQZt.js";import"./InternalBackdrop-CTTwd3gc.js";import"./composite-D7-rpd9b.js";import"./index-CI0KRk9Y.js";import"./index-i3vQjJLM.js";import"./index-DXLbvv5i.js";import"./useEventCallback-CVpAOZ4R.js";import"./SkeletonBar-DCUOzX1s.js";import"./LoadingCell-CJKgeEY6.js";import"./ColumnConfigDialog-5BjgoD7j.js";import"./DraggableList-ghEwlwg0.js";import"./search-uqqKBKCA.js";import"./Input-CuKouNDL.js";import"./useControlled-Bzb-P5Sw.js";import"./Button-u7PTjF0v.js";import"./small-cross-uBxq7RBA.js";import"./ActionButton-BeKm1dws.js";import"./Checkbox--_dd5ccs.js";import"./useValueChanged-Xw3hkMdy.js";import"./CollapsiblePanel-jE2vmdzP.js";import"./MultiColumnSortDialog-DVas1kCG.js";import"./MenuTrigger-C0DYfKbf.js";import"./CompositeItem-CI0_kgLB.js";import"./ToolbarRootContext-gONCPNww.js";import"./getDisabledMountTransitionStyles-fk6vko0H.js";import"./getPseudoElementBounds-BFSuywVY.js";import"./chevron-down-ClwDZxr-.js";import"./index-C-VgWq2f.js";import"./error--BdktMRw.js";import"./BaseCbacBanner-C-Bmu30y.js";import"./makeExternalStore-IQ_ZHFEU.js";import"./Tooltip-BZ1-8qFM.js";import"./PopoverPopup-lQJBNDjd.js";import"./debounce-KOiwrhH1.js";import"./tick-Mmlb1_fs.js";import"./DropdownField-DR9iVX7L.js";import"./isEqual-Bdex3d6x.js";import"./withOsdkMetrics-C5LHIkEx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

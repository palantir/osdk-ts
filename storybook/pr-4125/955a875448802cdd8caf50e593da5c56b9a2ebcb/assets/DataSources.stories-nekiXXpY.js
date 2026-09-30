import{j as r}from"./iframe-CJUVjq4K.js";import{O as b}from"./object-table-9j7hJKGq.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-8t1iR8.js";import{u as g}from"./useOsdkClient-Bn_kWgls.js";import"./preload-helper-DSClUnrb.js";import"./Table-BHtfhcbt.js";import"./index-GE7urbEt.js";import"./Dialog-BuLoeA1I.js";import"./cross-B9ZydxGz.js";import"./svgIconContainer-CvZRP5Wc.js";import"./useBaseUiId-CYXUYH1v.js";import"./InternalBackdrop-C3RvedXC.js";import"./composite-DKgrSWPF.js";import"./index-Cy6fVwoK.js";import"./index-Bf3fiI44.js";import"./index-DebWIRa-.js";import"./useEventCallback-BIZx9_-2.js";import"./SkeletonBar-B9k800l5.js";import"./LoadingCell-BMMxeSXI.js";import"./ColumnConfigDialog-D97QBTu9.js";import"./DraggableList-BVcfWvj2.js";import"./search-DE0VchUk.js";import"./Input-CRzIer8e.js";import"./useControlled-CmmcI5hz.js";import"./Button-3MSado4D.js";import"./small-cross-CVDb-HU5.js";import"./ActionButton-DVQysWwt.js";import"./Checkbox-CZkvMdfq.js";import"./useValueChanged-XTKnjh2G.js";import"./CollapsiblePanel-8s1IX430.js";import"./MultiColumnSortDialog-DVQqUNoO.js";import"./MenuTrigger-DuK6ZS-3.js";import"./CompositeItem-Dt49eISw.js";import"./ToolbarRootContext-BC2o7QKp.js";import"./getDisabledMountTransitionStyles-CJ0sEwK5.js";import"./getPseudoElementBounds-5mjFlJzS.js";import"./chevron-down-CQOxC3pu.js";import"./index-CnwddG-W.js";import"./error-Qoo-TgP1.js";import"./BaseCbacBanner-ClYJmr6A.js";import"./makeExternalStore-X814geH6.js";import"./Tooltip-DWTM9fE9.js";import"./PopoverPopup-BSqbMmuQ.js";import"./debounce-Ckmd3QDC.js";import"./tick-Dnvepkck.js";import"./DropdownField-2TmnJYIn.js";import"./isEqual-CaNBV33-.js";import"./withOsdkMetrics-_5PcUp3d.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

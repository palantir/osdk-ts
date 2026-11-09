import{j as r}from"./iframe-CNsFCmRD.js";import{O as b}from"./object-table-DstampKG.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BSJENfDt.js";import{u as g}from"./useOsdkClient-CvQAwD1B.js";import"./preload-helper-B3EQxtCm.js";import"./Table-Dgn2vo8F.js";import"./index-DehS0r9u.js";import"./Dialog-njFU-RsG.js";import"./cross-BgW6BP2I.js";import"./svgIconContainer-BLE7kABU.js";import"./useBaseUiId-DIFzx6WD.js";import"./InternalBackdrop-DlN7xffD.js";import"./composite-Difoiya5.js";import"./index-B7uESB1d.js";import"./index-Bu5_opre.js";import"./index-BV9ZuCbx.js";import"./useEventCallback-DRTsw9WP.js";import"./SkeletonBar-CVDn_hln.js";import"./LoadingCell-CVwdJWtD.js";import"./ColumnConfigDialog-C-bJHr5P.js";import"./DraggableList-DrJzXDE_.js";import"./search-D35U4f_q.js";import"./Input-DAosEkIl.js";import"./useControlled-DkXcDe2n.js";import"./Button-g1ae3uCc.js";import"./small-cross-N6zuJUXf.js";import"./ActionButton-C58Jqytf.js";import"./Checkbox-DZMuniEK.js";import"./useValueChanged-BQU9nMqw.js";import"./CollapsiblePanel-Dl7L2YAZ.js";import"./MultiColumnSortDialog-B_U1GzVy.js";import"./MenuTrigger-CIV0rhl6.js";import"./CompositeItem-PSR5eG0p.js";import"./ToolbarRootContext-DMD9u7kY.js";import"./getDisabledMountTransitionStyles-FanyKRLk.js";import"./getPseudoElementBounds-BDmo4YIs.js";import"./chevron-down-CgfsyRf8.js";import"./index-D9KhH6vm.js";import"./error-bpMZEwT_.js";import"./BaseCbacBanner-Bn09Oi1T.js";import"./makeExternalStore-V3MhvWul.js";import"./Tooltip-DXHkZovs.js";import"./isObject-DA6ucP6Z.js";import"./debounce-BZlJnoz_.js";import"./tick-B2tOyb01.js";import"./DropdownField-BeeT3wky.js";import"./isEqual--rV8x3RZ.js";import"./_baseIsEqual-DXkaLe8p.js";import"./withOsdkMetrics-DhWG7RdG.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

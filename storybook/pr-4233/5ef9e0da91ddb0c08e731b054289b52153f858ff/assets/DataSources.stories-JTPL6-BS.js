import{j as r}from"./iframe-C-gRhmL7.js";import{O as b}from"./object-table-BuNrcFUB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DqgBh324.js";import{u as g}from"./useOsdkClient-CVDU5GOE.js";import"./preload-helper-BRnBMuxX.js";import"./Table-D1wEI7Jw.js";import"./index-BomyFAOQ.js";import"./Dialog-DORMEh_O.js";import"./cross-BgbLU6cP.js";import"./svgIconContainer-D3HKLOfp.js";import"./useBaseUiId-Dr0jpy2a.js";import"./InternalBackdrop-DAQFGGKN.js";import"./composite-abNLhxgk.js";import"./index-Cc3D0dS0.js";import"./index-CMgDy_5O.js";import"./index-Bn78Igy-.js";import"./useEventCallback-L7w5wNTM.js";import"./SkeletonBar-BrXfWJ3s.js";import"./LoadingCell-CGoqfSvN.js";import"./ColumnConfigDialog-CRQ1b3Zi.js";import"./DraggableList-DPdWpbia.js";import"./search-BQdh6WXo.js";import"./Input-D1XkMJrA.js";import"./useControlled-BYigcnNh.js";import"./Button-CE8V4pbx.js";import"./small-cross-QE8L2S61.js";import"./ActionButton-CtsB9LNj.js";import"./Checkbox-BoknC1gS.js";import"./useValueChanged-DfaHdTkd.js";import"./CollapsiblePanel-BKE8iGjK.js";import"./MultiColumnSortDialog-CMd7Ma2F.js";import"./MenuTrigger-B1zMt0LI.js";import"./CompositeItem-Dc0cRnHM.js";import"./ToolbarRootContext-tG5LuvDM.js";import"./getDisabledMountTransitionStyles-BmL3-adz.js";import"./getPseudoElementBounds-Cw9ZB0lo.js";import"./chevron-down-Cj7UC7sg.js";import"./index-CYurDmtO.js";import"./error-AkMr3-YU.js";import"./BaseCbacBanner-CFHgpu92.js";import"./makeExternalStore-s0ePZNdW.js";import"./Tooltip-DQzNOf2f.js";import"./PopoverPopup-BfjojjnZ.js";import"./debounce-DGWONp_t.js";import"./tick-CwSemnZF.js";import"./DropdownField-Br06tlrV.js";import"./isEqual-CM2lqVB7.js";import"./withOsdkMetrics-Dez2mISn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

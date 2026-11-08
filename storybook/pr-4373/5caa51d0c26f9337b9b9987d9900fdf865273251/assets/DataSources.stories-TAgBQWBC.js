import{j as r}from"./iframe-DLzx97EJ.js";import{O as b}from"./object-table-Bls2cpf5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cpbjss9K.js";import{u as g}from"./useOsdkClient-CSee95DU.js";import"./preload-helper-CmYTg0Pf.js";import"./Table-BPSf2wSw.js";import"./index-BEQknSG7.js";import"./Dialog-CPtbtyx7.js";import"./cross-DRLacgjp.js";import"./svgIconContainer-C-g24xF0.js";import"./useBaseUiId-CAg2kwlj.js";import"./InternalBackdrop-mcEx2LQV.js";import"./composite-TVTsKD6c.js";import"./index-CgT906ZM.js";import"./index-Cte0d9nS.js";import"./index-AfoCt9lG.js";import"./useEventCallback-DbTNteze.js";import"./SkeletonBar-Dkadgbgq.js";import"./LoadingCell-B5BixPe9.js";import"./ColumnConfigDialog-BhUEQFpf.js";import"./DraggableList-DRkFdlpE.js";import"./search-C5FqELUQ.js";import"./Input-qCKZZo4z.js";import"./useControlled-BbqDqbUq.js";import"./Button-CdJ05kOF.js";import"./small-cross-CYyVIp2I.js";import"./ActionButton-BW3xtD-H.js";import"./Checkbox-Bzjtoy4g.js";import"./useValueChanged-C73KFNzj.js";import"./CollapsiblePanel-CBgwT-zE.js";import"./MultiColumnSortDialog-BSXuZQtD.js";import"./MenuTrigger-4LTYbf6O.js";import"./CompositeItem-zOuWTjc0.js";import"./ToolbarRootContext-N07wipSz.js";import"./getDisabledMountTransitionStyles-WIr647eh.js";import"./getPseudoElementBounds-D5V_JJVH.js";import"./chevron-down-C33gMPot.js";import"./index-D_0Hlfon.js";import"./error-DMQmvEXe.js";import"./BaseCbacBanner-CQ9lL0tM.js";import"./makeExternalStore-BTZjjXmJ.js";import"./Tooltip-CyfA5k5X.js";import"./isObject-CVaKVVla.js";import"./debounce-De8aR-i4.js";import"./tick-OXHUkGbE.js";import"./DropdownField-K5yYb8ch.js";import"./isEqual-WJJYsQBD.js";import"./_baseIsEqual-B87nTnwS.js";import"./withOsdkMetrics-iNTrmMm4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

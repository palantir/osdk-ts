import{j as r}from"./iframe-D_LKzUXQ.js";import{O as b}from"./object-table-BchkJ-Em.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D4IUE3rz.js";import{u as g}from"./useOsdkClient-CLGEaWRs.js";import"./preload-helper-2fv74GlU.js";import"./Table-F3rcyGFs.js";import"./index-BPEb3ehC.js";import"./Dialog-WWjQgLVx.js";import"./cross-CCKxEsOh.js";import"./svgIconContainer-DG_1Q-tY.js";import"./useBaseUiId-BXLolyby.js";import"./InternalBackdrop-asWjbBnz.js";import"./composite-5BerH0eb.js";import"./index-DNSIml9_.js";import"./index-mwOrEPHi.js";import"./index-B3oHgBYy.js";import"./useEventCallback-D0iVUQFt.js";import"./SkeletonBar-BbsrKIs5.js";import"./LoadingCell-DEdSw60Z.js";import"./ColumnConfigDialog-C2H2qnB0.js";import"./DraggableList-DAeeociK.js";import"./search-C0zqzJLG.js";import"./Input-CHcldx9v.js";import"./useControlled-Dzikzr9a.js";import"./Button-o_hXJy7p.js";import"./small-cross-BDTx6akH.js";import"./ActionButton-ebUdVosY.js";import"./Checkbox-5X1ZQ4KX.js";import"./useValueChanged-BP5iuKzH.js";import"./CollapsiblePanel-C4EqNm8Y.js";import"./MultiColumnSortDialog-CQZVlwfk.js";import"./MenuTrigger-BpqOgltM.js";import"./CompositeItem-BWjfeaLs.js";import"./ToolbarRootContext-CaB66j5D.js";import"./getDisabledMountTransitionStyles-BjArrEX_.js";import"./getPseudoElementBounds-LjVBvCza.js";import"./chevron-down-Cbs_q2nL.js";import"./index-Ovo3sWxh.js";import"./error-CNMY2Oh1.js";import"./BaseCbacBanner-BbS5LMra.js";import"./makeExternalStore-WNQzhlnt.js";import"./Tooltip-D1QNS5SS.js";import"./PopoverPopup-DogzSAr-.js";import"./debounce-B6oiERcW.js";import"./tick-B_dnXVgZ.js";import"./DropdownField-NQ1Fw51O.js";import"./isEqual-CgRG_MjP.js";import"./withOsdkMetrics-CJQ6Lm1u.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

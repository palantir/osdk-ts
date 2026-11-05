import{j as r}from"./iframe-cQ3f48MB.js";import{O as b}from"./object-table-CycBgw2h.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D2l2nDGP.js";import{u as g}from"./useOsdkClient-CamUyQ2y.js";import"./preload-helper-D6QOSXh4.js";import"./Table-DEKDqocf.js";import"./index-D1RuRedd.js";import"./Dialog-2_OY6EqA.js";import"./cross-DauAavmu.js";import"./svgIconContainer-CgizML4Q.js";import"./useBaseUiId-CMNXwzlb.js";import"./InternalBackdrop-DuDjQ0BZ.js";import"./composite-B6VOm6ZQ.js";import"./index-MlmEIZWp.js";import"./index-C8RTiPbx.js";import"./index-Bs-Z1Jgq.js";import"./useEventCallback-Y2QBMo-H.js";import"./SkeletonBar-D4mUM1vS.js";import"./LoadingCell-DNvez4my.js";import"./ColumnConfigDialog-BUoGlIi-.js";import"./DraggableList-DjVBxeH3.js";import"./search-iHipGmJb.js";import"./Input-BuFeTP1U.js";import"./useControlled-ByZlI-u7.js";import"./Button-DZgLeZFj.js";import"./small-cross-BObFe73S.js";import"./ActionButton-k9CcFnZX.js";import"./Checkbox-CpTiMr31.js";import"./useValueChanged-BQFlsv8-.js";import"./CollapsiblePanel-BS0BxhJu.js";import"./MultiColumnSortDialog-JnW_yKzW.js";import"./MenuTrigger-BzoDHwuv.js";import"./CompositeItem-684cCOtj.js";import"./ToolbarRootContext-DNEaNwHU.js";import"./getDisabledMountTransitionStyles-Bg1kr4yU.js";import"./getPseudoElementBounds-DKU8Ia-1.js";import"./chevron-down-CIrisS0y.js";import"./index-C-MPwgvx.js";import"./error-CsayxGJU.js";import"./BaseCbacBanner-Cfhd9GNF.js";import"./makeExternalStore-DtAasX45.js";import"./Tooltip-DsHuisIK.js";import"./isObject-saTum3J5.js";import"./debounce-Dl9ssa6I.js";import"./tick-nlg_x8OU.js";import"./DropdownField-CLQWIPME.js";import"./isEqual-C7bvgrWO.js";import"./_baseIsEqual-BGW9PiVU.js";import"./withOsdkMetrics-D1uLGy1n.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

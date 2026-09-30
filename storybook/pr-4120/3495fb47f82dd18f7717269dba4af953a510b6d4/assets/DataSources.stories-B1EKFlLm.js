import{j as r}from"./iframe-3FtDhECv.js";import{O as b}from"./object-table-B4QWEKR6.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dm4rthHX.js";import{u as g}from"./useOsdkClient-B3tCYy8u.js";import"./preload-helper-70ekmL9Z.js";import"./Table-DnGLekSf.js";import"./index-DDuj02wW.js";import"./Dialog-LyQi3Gjk.js";import"./cross-3payUlda.js";import"./svgIconContainer-8d5y5XmV.js";import"./useBaseUiId-ba-AZLlh.js";import"./InternalBackdrop-C2qcUA_S.js";import"./composite-l2Xk1Iwz.js";import"./index-Di_GBi9u.js";import"./index-CdOyTJBF.js";import"./index-Bb5nNbut.js";import"./useEventCallback-BV-K2SB8.js";import"./SkeletonBar-BaDwHjIr.js";import"./LoadingCell-BjgaM6VY.js";import"./ColumnConfigDialog-DUOgEN2V.js";import"./DraggableList-G2GxQFyw.js";import"./search-DQyEiXG4.js";import"./Input-eNpsdHBj.js";import"./useControlled-DAFRtrE7.js";import"./Button-CtxTGJJ5.js";import"./small-cross-CzrrmRc2.js";import"./ActionButton-D3HdF3S7.js";import"./Checkbox-6zXLtXx_.js";import"./useValueChanged-JT8yV3AQ.js";import"./CollapsiblePanel-Bju8gm12.js";import"./MultiColumnSortDialog-DXsifQAh.js";import"./MenuTrigger-CTl5ZYh1.js";import"./CompositeItem-X94Emfw4.js";import"./ToolbarRootContext-DWWF2uk2.js";import"./getDisabledMountTransitionStyles-Sp-qRZJf.js";import"./getPseudoElementBounds-Bb3UwPzL.js";import"./chevron-down-eXeXyWJp.js";import"./index-BmkwvzsK.js";import"./error-Co_bSTMk.js";import"./BaseCbacBanner-DeVRrDcz.js";import"./makeExternalStore-Bttk8K2M.js";import"./Tooltip-DBBzsEJq.js";import"./PopoverPopup-Cbhnh0d6.js";import"./debounce-D5jfSGyg.js";import"./tick-DP_oPzGl.js";import"./DropdownField-DGhWjt6v.js";import"./isEqual-DbUoSpPl.js";import"./withOsdkMetrics-CkiSk4kW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

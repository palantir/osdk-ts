import{j as r}from"./iframe-LK7OOuZ_.js";import{O as b}from"./object-table-D9ETwD5j.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cy3-mOpa.js";import{u as g}from"./useOsdkClient-BTkGaJ3_.js";import"./preload-helper-Day3KTOO.js";import"./Table-B1UTJePN.js";import"./index-CwVQ5Krz.js";import"./Dialog-DeA5iwJU.js";import"./cross-BIG9tMZn.js";import"./svgIconContainer-Bm4iT3eI.js";import"./useBaseUiId-B6K6_xMQ.js";import"./InternalBackdrop-DXj_l9qd.js";import"./composite-lCB-i_uM.js";import"./index-BxZZb_0K.js";import"./index-CNFZjGa7.js";import"./index-97qOkHLc.js";import"./useEventCallback-GF5A1PPP.js";import"./SkeletonBar-C2-u18kR.js";import"./LoadingCell-CptE6iqP.js";import"./ColumnConfigDialog-BExXTM8H.js";import"./DraggableList-CiyBThjP.js";import"./search-DoOWQiUr.js";import"./Input-zz_AAM2k.js";import"./useControlled-D18eST4p.js";import"./Button-DOOnpy1b.js";import"./small-cross-Cj_cWLGh.js";import"./ActionButton-Bp5ltgtK.js";import"./Checkbox-CNeKPyQB.js";import"./useValueChanged-BS5zssgA.js";import"./CollapsiblePanel-DFaCEzJh.js";import"./MultiColumnSortDialog-CQjbZz0O.js";import"./MenuTrigger-DwbW3AdY.js";import"./CompositeItem-Dzq7tRMR.js";import"./ToolbarRootContext-DqesGwMA.js";import"./getDisabledMountTransitionStyles-591mdyd3.js";import"./getPseudoElementBounds-CQJtfdLJ.js";import"./chevron-down-Dq5oFVl8.js";import"./index-XVTMlPM4.js";import"./error-BqhqjqOC.js";import"./BaseCbacBanner-JPw4QD5g.js";import"./makeExternalStore-BVPBtEqc.js";import"./Tooltip-CWdCJPSO.js";import"./PopoverPopup-Va_O6hKU.js";import"./debounce-BSTGe6_B.js";import"./tick-BVd9NWyG.js";import"./DropdownField-C9okc_y1.js";import"./isEqual-Dn55Gl5y.js";import"./withOsdkMetrics-BMjEIbaa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

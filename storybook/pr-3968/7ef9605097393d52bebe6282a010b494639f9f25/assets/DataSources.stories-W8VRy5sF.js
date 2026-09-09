import{j as r}from"./iframe-D07_tlNY.js";import{O as b}from"./object-table-mDZNy2eA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DCiePWM-.js";import{u as g}from"./useOsdkClient-Dp-gfOqY.js";import"./preload-helper-BZ5VSi4J.js";import"./Table-DhmSo6kc.js";import"./index-BQ0PEMCN.js";import"./Dialog-zKwf6kcN.js";import"./cross-cfoeTeHb.js";import"./svgIconContainer-BLgeYPC8.js";import"./useBaseUiId-B0wQwkXS.js";import"./InternalBackdrop-B6N_TrYF.js";import"./composite-gwuj_Yg_.js";import"./index-EmEIjE8b.js";import"./index-Dy14VnsS.js";import"./index-Djr2tU3g.js";import"./useEventCallback-CacU8cTK.js";import"./SkeletonBar-Y8JMEaWt.js";import"./LoadingCell-Eyo1i6r7.js";import"./ColumnConfigDialog-CLjvnD13.js";import"./DraggableList-HRQfyvgY.js";import"./search-c3tWQKm6.js";import"./Input-C_nbkkcq.js";import"./useControlled-BOVJlk7U.js";import"./Button-xkyJItTT.js";import"./small-cross-ByB9N4b6.js";import"./ActionButton-C1-Qn1rI.js";import"./Checkbox-Cu6eiH4X.js";import"./useValueChanged-DGjiOWT_.js";import"./CollapsiblePanel-WfZDl8Bs.js";import"./MultiColumnSortDialog-CR7MeaoO.js";import"./MenuTrigger-DSHQ860W.js";import"./CompositeItem-B62DALdv.js";import"./ToolbarRootContext-A8nSy6Lb.js";import"./getDisabledMountTransitionStyles-BiaitSmC.js";import"./getPseudoElementBounds-De8tJeym.js";import"./chevron-down-Dm8M3XHE.js";import"./index-B2TS2X4n.js";import"./error-D7fddi8p.js";import"./BaseCbacBanner-C7-RK-oc.js";import"./makeExternalStore-DW0gV4Fp.js";import"./Tooltip-D43kVT1Z.js";import"./PopoverPopup-BogJF-KW.js";import"./debounce--cq45Syc.js";import"./tick-D3lvgpVt.js";import"./DropdownField-Xg10lVkk.js";import"./isEqual-BPrEtiGy.js";import"./withOsdkMetrics-CK10C4kZ.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

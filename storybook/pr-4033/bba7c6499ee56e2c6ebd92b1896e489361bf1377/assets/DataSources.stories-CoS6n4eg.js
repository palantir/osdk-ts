import{j as r}from"./iframe-CHEKlg6X.js";import{O as b}from"./object-table-BP_zntdA.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DKL17oQX.js";import{u as g}from"./useOsdkClient-D_1rD8l7.js";import"./preload-helper-Bk_EBvkM.js";import"./Table-BuyJuU36.js";import"./index-BlVg7-ny.js";import"./Dialog-vP86KpqH.js";import"./cross-CLXDm_xy.js";import"./svgIconContainer-CkU_wGfW.js";import"./useBaseUiId-Dm5MMLjS.js";import"./InternalBackdrop-C-VD7cf_.js";import"./composite-CfCX0gh6.js";import"./index-D9r-VgWS.js";import"./index-B4M03-o8.js";import"./index-D-2F9sJ3.js";import"./useEventCallback-OPC9ZPah.js";import"./SkeletonBar-BRlkv3E0.js";import"./LoadingCell-CJCiWLh3.js";import"./ColumnConfigDialog-CriuUgSm.js";import"./DraggableList-C_pi7nFv.js";import"./search-C2zDUTqA.js";import"./Input-BQ285Nrh.js";import"./useControlled-YILXX2lb.js";import"./Button-BeqL8QWK.js";import"./small-cross-D0U4JMZD.js";import"./ActionButton-BEr53hKB.js";import"./Checkbox-CLYIDo-5.js";import"./useValueChanged-DpZywDla.js";import"./CollapsiblePanel-BhAp95bX.js";import"./MultiColumnSortDialog-Cu7uDp8D.js";import"./MenuTrigger-Bs3ieiYQ.js";import"./CompositeItem-BM163bD9.js";import"./ToolbarRootContext-Cjz1--hk.js";import"./getDisabledMountTransitionStyles-HaZ0LwJT.js";import"./getPseudoElementBounds-eH10EFit.js";import"./chevron-down-2mN8R6m0.js";import"./index-CaLR8Vgq.js";import"./error-DR3tFMqe.js";import"./BaseCbacBanner-BZvPs1fF.js";import"./makeExternalStore--de5UDab.js";import"./Tooltip-B-MZurAO.js";import"./PopoverPopup-lRNkVQdy.js";import"./debounce-L-eLPBO3.js";import"./tick-BxZLRw17.js";import"./DropdownField-DMVGeKqk.js";import"./isEqual-CfJ7iHOo.js";import"./withOsdkMetrics-CBYIB_jK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-B9e47JAt.js";import{O as b}from"./object-table-B3vUriCd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CE4ne8Ly.js";import{u as g}from"./useOsdkClient-D5uYQrdS.js";import"./preload-helper-BRB8NOW_.js";import"./Table-moZoz-tl.js";import"./index-C_6xtQCD.js";import"./Dialog-De_UFcHU.js";import"./cross-ymxOUFGj.js";import"./svgIconContainer-dHjn9I5b.js";import"./useBaseUiId-VqyZRI0q.js";import"./InternalBackdrop-Dfj_iS6F.js";import"./composite-BethEnTN.js";import"./index-D_iw6W8D.js";import"./index-BBqzf2o3.js";import"./index-DZGqQgW1.js";import"./useEventCallback-Bg7GLrL9.js";import"./SkeletonBar-BISleUwK.js";import"./LoadingCell-CHpd1JEV.js";import"./ColumnConfigDialog-DTLTAVEi.js";import"./DraggableList-BII7t1lU.js";import"./search-BejwSAXg.js";import"./Input-CPGlOkat.js";import"./useControlled-BBsT5_Nc.js";import"./Button-z2FVGTG2.js";import"./small-cross-DPszHJJB.js";import"./ActionButton-Bfthi2f3.js";import"./Checkbox-t96oYsN4.js";import"./useValueChanged-vvzPWCqc.js";import"./CollapsiblePanel-CcEY7J9b.js";import"./MultiColumnSortDialog-CK2phl-f.js";import"./MenuTrigger-BkF3VMxq.js";import"./CompositeItem-BJasfKU0.js";import"./ToolbarRootContext-DycOOcjn.js";import"./getDisabledMountTransitionStyles-BAlW402o.js";import"./getPseudoElementBounds-BbyW3FZM.js";import"./chevron-down-ChPDwIrO.js";import"./index-DY7BzFjI.js";import"./error-pDyLX5xW.js";import"./BaseCbacBanner-Dmr6f2y2.js";import"./makeExternalStore-CBsYhUmA.js";import"./Tooltip-FBqtZC3b.js";import"./PopoverPopup-Bvuw1Zd4.js";import"./debounce-CUqU57Yl.js";import"./tick-C3sbvhix.js";import"./DropdownField-rd7rOyCh.js";import"./isEqual-zLwlDRee.js";import"./withOsdkMetrics-CmtdaepB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

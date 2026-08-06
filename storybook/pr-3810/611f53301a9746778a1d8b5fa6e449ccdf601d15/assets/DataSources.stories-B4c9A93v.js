import{j as r}from"./iframe-BfpGyLEa.js";import{O as b}from"./object-table-CReHjQqT.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DeDGxROB.js";import{u as g}from"./useOsdkClient-wg32HbIo.js";import"./preload-helper-B3VqCvDk.js";import"./Table-DBzqhcXp.js";import"./index-HQRwX0sG.js";import"./Dialog-BfwGzw59.js";import"./cross-On_Sn6mV.js";import"./svgIconContainer-DjfkGdUu.js";import"./useBaseUiId-ByeyJXQZ.js";import"./InternalBackdrop-DRhc4Tux.js";import"./composite-BgeLt9pq.js";import"./index-CnwcoLiT.js";import"./index-C1hBHqbI.js";import"./index-DI4kr843.js";import"./useEventCallback-CLrYJF5s.js";import"./SkeletonBar-CVXLUSoX.js";import"./LoadingCell-CjGrgX8S.js";import"./ColumnConfigDialog-B22PE52R.js";import"./DraggableList-BYAI8JzX.js";import"./search-PEXLOihg.js";import"./Input-CzADAXYu.js";import"./useControlled-BVUZlzvp.js";import"./isEqual-Dgi0ZaAt.js";import"./isObject-DDhARXOo.js";import"./Button-DxBNRoWp.js";import"./ActionButton-CxBd5f-7.js";import"./Checkbox-ChqM5Q0I.js";import"./useValueChanged-Br-kPmpL.js";import"./CollapsiblePanel-Xt2EWbql.js";import"./MultiColumnSortDialog-9V2M6VCH.js";import"./MenuTrigger-DMQaU_hF.js";import"./CompositeItem-D07VWMUd.js";import"./ToolbarRootContext-DSTawcBa.js";import"./getDisabledMountTransitionStyles-B03uOhek.js";import"./getPseudoElementBounds-BkubrDWa.js";import"./chevron-down-D80S2cyc.js";import"./index-BOHHG715.js";import"./error-_erutXgY.js";import"./BaseCbacBanner-1vi7wFhA.js";import"./makeExternalStore-p4wOuTs-.js";import"./Tooltip-D8X_gFsZ.js";import"./PopoverPopup-CSvozSxL.js";import"./toNumber-B-CjzLUf.js";import"./tick-CS4u37BA.js";import"./DropdownField-ClrrHaef.js";import"./withOsdkMetrics-C1uTzjR-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

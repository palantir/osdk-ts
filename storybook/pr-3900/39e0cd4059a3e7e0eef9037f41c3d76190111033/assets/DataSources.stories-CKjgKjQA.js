import{j as r}from"./iframe-CNz8RlYl.js";import{O as b}from"./object-table-BFKZlesw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-zgxCtrQD.js";import{u as g}from"./useOsdkClient-il4guZPb.js";import"./preload-helper-BIeB60q0.js";import"./Table-Dyr6DZ2y.js";import"./index-XxW0KRYf.js";import"./Dialog-yEMCC74c.js";import"./cross-CO8ceZUf.js";import"./svgIconContainer-B0JmWAlI.js";import"./useBaseUiId-D4vwSczU.js";import"./InternalBackdrop--VJLOWNr.js";import"./composite-CZy-mnNe.js";import"./index-DGRndsQB.js";import"./index-BlGd4sFh.js";import"./index-CPfBu2RL.js";import"./useEventCallback-DfP35NXy.js";import"./SkeletonBar-Sl0pLnzx.js";import"./LoadingCell-CsRc4-EC.js";import"./ColumnConfigDialog-RcbP0ZVL.js";import"./DraggableList-Bi4SEbSM.js";import"./search-ERRW7qI9.js";import"./Input-CpAPI-dP.js";import"./useControlled-DQvqj1ii.js";import"./Button-BoQYF-o_.js";import"./small-cross-PTH7Ve-P.js";import"./ActionButton-revmG3rY.js";import"./Checkbox-CdslJ3sm.js";import"./useValueChanged-C6ABxE1k.js";import"./CollapsiblePanel-DvAEYQfZ.js";import"./MultiColumnSortDialog-CovHMgzm.js";import"./MenuTrigger-BYzbxebb.js";import"./CompositeItem-rHSaquZY.js";import"./ToolbarRootContext-D4VXXO-L.js";import"./getDisabledMountTransitionStyles-B2i134Af.js";import"./getPseudoElementBounds-Der8dMUs.js";import"./chevron-down-DoirlpdZ.js";import"./index-9-SdAaB2.js";import"./error-DqoZ7f_W.js";import"./BaseCbacBanner-DHpPxvN7.js";import"./makeExternalStore-pBRszKy8.js";import"./Tooltip-CAngo_3k.js";import"./PopoverPopup-Dj7q3xHP.js";import"./debounce-DBQB4U5e.js";import"./tick-Bs481eBK.js";import"./DropdownField-DQKVOkv8.js";import"./isEqual-CofoEUjw.js";import"./withOsdkMetrics-CtoWR-rA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

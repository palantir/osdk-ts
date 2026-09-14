import{j as r}from"./iframe-CdsRGRZD.js";import{O as b}from"./object-table-CeOE5Mdz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Clkq4NhY.js";import{u as g}from"./useOsdkClient-B3rsIMmP.js";import"./preload-helper-CGHORiIs.js";import"./Table-C_N_Eckt.js";import"./index-Fk1WgWoL.js";import"./Dialog-DuuLYCJ_.js";import"./cross-DAi95Y0X.js";import"./svgIconContainer-Cxkf-wd_.js";import"./useBaseUiId-DiEHO-EU.js";import"./InternalBackdrop-c4kOEo_j.js";import"./composite-DyS-Ch2i.js";import"./index-BbC0pNoY.js";import"./index-Pe1K3mB3.js";import"./index-CfhQ_HhS.js";import"./useEventCallback-DbOnN22T.js";import"./SkeletonBar-Dldmu3tt.js";import"./LoadingCell-COUXzJd2.js";import"./ColumnConfigDialog-CBifeMKK.js";import"./DraggableList-DhJLvr1S.js";import"./search-B-mt-Fpc.js";import"./Input-BrPBFCOf.js";import"./useControlled-CXpC8eD9.js";import"./Button-CMyVgQSr.js";import"./small-cross-DD2bSDX4.js";import"./ActionButton-B-ECTkAX.js";import"./Checkbox-9ZfJtWE0.js";import"./useValueChanged-hFU-JeNn.js";import"./CollapsiblePanel-BCipB-WW.js";import"./MultiColumnSortDialog-CpORbkLb.js";import"./MenuTrigger-BFayFRUa.js";import"./CompositeItem-CNBfRrGp.js";import"./ToolbarRootContext-DYboyT6t.js";import"./getDisabledMountTransitionStyles-DXjYuHQ4.js";import"./getPseudoElementBounds-Cg-geDk4.js";import"./chevron-down-C7u5o2RL.js";import"./index-C2Mhw8zH.js";import"./error-D2kK2TGa.js";import"./BaseCbacBanner-PXIb0wXt.js";import"./makeExternalStore-8ZflOwQq.js";import"./Tooltip-CHHDt5TJ.js";import"./PopoverPopup-CExD3oNB.js";import"./debounce-C26q8tZz.js";import"./tick-slqArv83.js";import"./DropdownField-C2AO5vc6.js";import"./isEqual-B5I4IGDV.js";import"./withOsdkMetrics-DzKI7pdO.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-xdaTYGRj.js";import{O as b}from"./object-table-CXau66t4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D056Y_Xm.js";import{u as g}from"./useOsdkClient-CrpVNgyy.js";import"./preload-helper-DZUDwwCn.js";import"./Table-DQJKa7S1.js";import"./index-BdPDvpnl.js";import"./Dialog-Dusk4zGf.js";import"./cross-CSoA2ZQa.js";import"./svgIconContainer-exvQzp4T.js";import"./useBaseUiId-CxUh_Q__.js";import"./InternalBackdrop-POEzz6gH.js";import"./composite-BBMq-zQx.js";import"./index-ChGZ1vto.js";import"./index-DjfesuTU.js";import"./index-BvtF8lSO.js";import"./useEventCallback-BzvhssYV.js";import"./SkeletonBar-B8t_W87W.js";import"./LoadingCell-C1DmdKaJ.js";import"./ColumnConfigDialog-OpKrZQ53.js";import"./DraggableList-ZBGvnIzB.js";import"./search-Ba1wUlyN.js";import"./Input-CVYxdw6a.js";import"./useControlled-BvC-sVWY.js";import"./Button-DhIcXnSN.js";import"./small-cross-BW9BpdHj.js";import"./ActionButton-asvmdyUj.js";import"./Checkbox-BcViMRef.js";import"./useValueChanged-Ch5z-mkh.js";import"./CollapsiblePanel-ClYrkXoI.js";import"./MultiColumnSortDialog-DhoBGIBc.js";import"./MenuTrigger-C_lNo9IA.js";import"./CompositeItem-Cl6_46jA.js";import"./ToolbarRootContext-5SJeTWub.js";import"./getDisabledMountTransitionStyles-B16LXGKh.js";import"./getPseudoElementBounds-Dy-Bisec.js";import"./chevron-down-aagd7exO.js";import"./index-CUVjcwyy.js";import"./error-CApwHpph.js";import"./BaseCbacBanner-CceQ-h3H.js";import"./makeExternalStore-DYC4j6Cy.js";import"./Tooltip-CW0n3yWY.js";import"./PopoverPopup-BKjDaV96.js";import"./debounce-DBf5uZYv.js";import"./tick-C88F2OoG.js";import"./DropdownField-C6ZSBKPJ.js";import"./isEqual-DJka3NIw.js";import"./withOsdkMetrics-D5YFfTwH.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

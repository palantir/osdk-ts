import{j as r}from"./iframe-C-mlL1d1.js";import{O as b}from"./object-table-CflN7BW3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DB8FGED5.js";import{u as g}from"./useOsdkClient-BSUtxC4C.js";import"./preload-helper-BUxDkfWR.js";import"./Table-CrwMjEH3.js";import"./index-B6OYb_DA.js";import"./Dialog-J8erkqPd.js";import"./cross-bL1PiJj_.js";import"./svgIconContainer-DOFv3aDL.js";import"./useBaseUiId-BKlcYEBY.js";import"./InternalBackdrop-Bno6e7cF.js";import"./composite-T8-lg8nr.js";import"./index-nwLa4JDa.js";import"./index-BMP6rH9L.js";import"./index-ChA1IBqb.js";import"./useEventCallback-BrE-PuVs.js";import"./SkeletonBar-Bg2MXuuJ.js";import"./LoadingCell-CxcZgFpo.js";import"./ColumnConfigDialog-BIS05p60.js";import"./DraggableList-CLfe6gab.js";import"./search-9EoPaIsu.js";import"./Input-DwnchpfY.js";import"./useControlled-Bq8qBaBJ.js";import"./Button-To2COh7T.js";import"./small-cross-B5y9L61C.js";import"./ActionButton-DhCGZoHD.js";import"./Checkbox-CrUAsNNw.js";import"./useValueChanged-Bo5thQ8O.js";import"./CollapsiblePanel-CNKrkZjW.js";import"./MultiColumnSortDialog-sYWUGk65.js";import"./MenuTrigger-CXVAqCWg.js";import"./CompositeItem-CF65Mtg9.js";import"./ToolbarRootContext-BcwoWGuf.js";import"./getDisabledMountTransitionStyles-B16n-yTJ.js";import"./getPseudoElementBounds-0jq6bko3.js";import"./chevron-down-CfvB8SzD.js";import"./index-Bb5I7VlI.js";import"./error-C0XWqrZ2.js";import"./BaseCbacBanner-DBuHYUCN.js";import"./makeExternalStore-Dn2EZb1T.js";import"./Tooltip-JNvzBEcs.js";import"./PopoverPopup-B2DKSbuW.js";import"./debounce-BS-XCJuC.js";import"./tick-DD6qfwut.js";import"./DropdownField-zYP-JtQg.js";import"./isEqual-BajcDWPI.js";import"./withOsdkMetrics-DYUhhphE.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

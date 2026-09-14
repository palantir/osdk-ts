import{j as r}from"./iframe-CGyuUHxy.js";import{O as b}from"./object-table-CqzVwxGZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BONKzh45.js";import{u as g}from"./useOsdkClient-Dvl_qWbV.js";import"./preload-helper-CHXR4TEM.js";import"./Table-D3_qtNfp.js";import"./index-BY9adCgo.js";import"./Dialog-CSowe9qH.js";import"./cross-IJIRpi8I.js";import"./svgIconContainer-BsIK3M0v.js";import"./useBaseUiId-CxRjJ2eA.js";import"./InternalBackdrop-D2QUgXtn.js";import"./composite-Ccbhb-G_.js";import"./index-BAxLRNzk.js";import"./index-CiafOJ6c.js";import"./index-BeL2DRU1.js";import"./useEventCallback-D7IhiRBC.js";import"./SkeletonBar-DpG5K-jj.js";import"./LoadingCell-KJtsg1rt.js";import"./ColumnConfigDialog-BBfs4NJo.js";import"./DraggableList-BSQTvWPg.js";import"./search-lH3pU1gQ.js";import"./Input-C3-P_z4v.js";import"./useControlled-DMowJxn0.js";import"./Button-BCdalSJc.js";import"./small-cross-C5mq1gMO.js";import"./ActionButton-1oqP8PoB.js";import"./Checkbox-C1SgmmoO.js";import"./useValueChanged-BTu-LDDs.js";import"./CollapsiblePanel-BrxTnTCc.js";import"./MultiColumnSortDialog-D9g3JzPL.js";import"./MenuTrigger-C1mo3QbN.js";import"./CompositeItem-C9KCjhut.js";import"./ToolbarRootContext-B3Ikfeie.js";import"./getDisabledMountTransitionStyles-BiBOKD-Z.js";import"./getPseudoElementBounds-Di2B7QRI.js";import"./chevron-down-DvkSXyV_.js";import"./index-GV80kSzg.js";import"./error-2nP38RK7.js";import"./BaseCbacBanner--HBtBBsc.js";import"./makeExternalStore-DIn4B4sN.js";import"./Tooltip-qASfieF8.js";import"./PopoverPopup-C8iqkpjZ.js";import"./debounce-qtcXepJn.js";import"./tick-BgWIPs4c.js";import"./DropdownField-DV35Ur0Z.js";import"./isEqual-BidfQ1Lo.js";import"./withOsdkMetrics-BUGq6PJK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

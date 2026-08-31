import{j as r}from"./iframe-A9SMdxTk.js";import{O as b}from"./object-table-SMZwmdv_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CBr9ZXMI.js";import{u as g}from"./useOsdkClient-DlYGuUgU.js";import"./preload-helper-DQLolCHZ.js";import"./Table-Dt18qZF-.js";import"./index-CCGgfNub.js";import"./Dialog-CxTZ5sEs.js";import"./cross-2Xnw9coj.js";import"./svgIconContainer-CNaxbSBM.js";import"./useBaseUiId-B4Zg0t3a.js";import"./InternalBackdrop-CjvwhqTr.js";import"./composite-7A3yZ68G.js";import"./index-DVtEeQpM.js";import"./index-u-M_bDzq.js";import"./index-DSNNOMbW.js";import"./useEventCallback-Cs7j8rjy.js";import"./SkeletonBar-Bsavensj.js";import"./LoadingCell-MuKAq9ox.js";import"./ColumnConfigDialog-BPaq44ED.js";import"./DraggableList-enJHXPWW.js";import"./search-Bmlhhw47.js";import"./Input-deyBktI2.js";import"./useControlled-BfWlfukP.js";import"./Button-BqU3-dcX.js";import"./small-cross-L7YPfTAg.js";import"./ActionButton-SqRrJytR.js";import"./Checkbox-DnbmlZ-x.js";import"./useValueChanged-DoC4-4sS.js";import"./CollapsiblePanel-pH-Ll-5X.js";import"./MultiColumnSortDialog-Bu7YdQ1a.js";import"./MenuTrigger-yNgCAx0M.js";import"./CompositeItem-B_0BvpK8.js";import"./ToolbarRootContext-bZyAVUWu.js";import"./getDisabledMountTransitionStyles-DPN9mdtk.js";import"./getPseudoElementBounds-DnEf810H.js";import"./chevron-down-B5VXYyUb.js";import"./index-Vl3wc69p.js";import"./error-Bs_ECeoC.js";import"./BaseCbacBanner-DG7waKo_.js";import"./makeExternalStore-DS1IY1Cv.js";import"./Tooltip-CvmQ17Y-.js";import"./PopoverPopup-PlkIfJuv.js";import"./debounce-CJPgIkeW.js";import"./tick-d3JyzzOo.js";import"./DropdownField-B59uqojr.js";import"./isEqual-89fgiQle.js";import"./withOsdkMetrics-Drgty0Zj.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-KzcVBCRi.js";import{O as b}from"./object-table-BskToQWp.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DSLLSA6T.js";import{u as g}from"./useOsdkClient-B5kzp8lo.js";import"./preload-helper-BHEHcaci.js";import"./Table-BkmXv9h9.js";import"./index-CzXxEHHr.js";import"./Dialog-Bg6StrtK.js";import"./cross-C3McpADX.js";import"./svgIconContainer-59d154vN.js";import"./useBaseUiId-DZF9dUKs.js";import"./InternalBackdrop-DU_2I3T6.js";import"./composite-5RWCdSN2.js";import"./index-k64aStbd.js";import"./index-2DqsNDep.js";import"./index-DjI5xhOO.js";import"./useEventCallback-C8Tozf_J.js";import"./SkeletonBar-Cjrbehp8.js";import"./LoadingCell-CB-JnvM9.js";import"./ColumnConfigDialog-oYSxjE5e.js";import"./DraggableList-CV6ahxMz.js";import"./search-CflGQf1d.js";import"./Input-Cd7kdMt2.js";import"./useControlled-uli5q6ql.js";import"./Button-CBd10Xxd.js";import"./small-cross-DS-iYFW3.js";import"./ActionButton-IdIQB2NM.js";import"./Checkbox-Cc_wqZbm.js";import"./useValueChanged-WxAxKP7S.js";import"./CollapsiblePanel-Bw4ONZWv.js";import"./MultiColumnSortDialog-DyVxfK2i.js";import"./MenuTrigger-BVsiP-tY.js";import"./CompositeItem-BzuuDXx0.js";import"./ToolbarRootContext-BWXPXzbU.js";import"./getDisabledMountTransitionStyles-VJ04QHXq.js";import"./getPseudoElementBounds-B5CJHYyN.js";import"./chevron-down-DpGps272.js";import"./index-BCuz_Fvw.js";import"./error-BAN-C5Cp.js";import"./BaseCbacBanner-CmTZFDnE.js";import"./makeExternalStore-DCqqAOa1.js";import"./Tooltip-CutkRXXV.js";import"./PopoverPopup-CndzA1oj.js";import"./debounce-NVX7x4-3.js";import"./tick-BnZkTXtc.js";import"./DropdownField-CLCiF7Rm.js";import"./isEqual-D7ffYgj9.js";import"./withOsdkMetrics-DIAhwg3C.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

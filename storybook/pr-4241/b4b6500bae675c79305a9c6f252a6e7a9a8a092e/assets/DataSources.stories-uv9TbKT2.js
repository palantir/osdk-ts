import{j as r}from"./iframe-Bg0i_UAO.js";import{O as b}from"./object-table-CAxIaCCb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B4HYtWJ2.js";import{u as g}from"./useOsdkClient-r7ETv_l7.js";import"./preload-helper-bomzM5Jo.js";import"./Table-CGrH-X0a.js";import"./index-iuNvYGUj.js";import"./Dialog-TKFKzbdM.js";import"./cross-DYXULJqv.js";import"./svgIconContainer-458A5wVg.js";import"./useBaseUiId-Dy2tLJKh.js";import"./InternalBackdrop-CVk0rAPJ.js";import"./composite-DU2hn-v2.js";import"./index-BNlKleF-.js";import"./index-DmhiGDhn.js";import"./index-Ce8RK2-k.js";import"./useEventCallback-DQN4LN3R.js";import"./SkeletonBar-C9Q9W8wl.js";import"./LoadingCell-CEhAQo9k.js";import"./ColumnConfigDialog-CJ9aQ0gr.js";import"./DraggableList-D5_UR4g5.js";import"./search-FIM5R_Xb.js";import"./Input-DGqcQ9G-.js";import"./useControlled-BYTWKxAR.js";import"./Button-BG7UnPBU.js";import"./small-cross-CCjOzjzK.js";import"./ActionButton-DnfLk4MD.js";import"./Checkbox-eD26ecQs.js";import"./useValueChanged-B-bZoMqO.js";import"./CollapsiblePanel-CQh_sS0z.js";import"./MultiColumnSortDialog-CnlpFVmC.js";import"./MenuTrigger-D1u63OZL.js";import"./CompositeItem-DcA0lzjF.js";import"./ToolbarRootContext-BrU5VQqZ.js";import"./getDisabledMountTransitionStyles-DmbZ1RCY.js";import"./getPseudoElementBounds-HKqm4JQP.js";import"./chevron-down-WqwXZksn.js";import"./index-DdfZaivF.js";import"./error-DVM1iMsf.js";import"./BaseCbacBanner-DVJrTKK6.js";import"./makeExternalStore-DXmjaos-.js";import"./Tooltip-De8rcIwq.js";import"./PopoverPopup-BF-Javiq.js";import"./debounce-BL-pXwMa.js";import"./tick-CXF_8gMW.js";import"./DropdownField-DD3uTne1.js";import"./isEqual-CUS3cLoh.js";import"./withOsdkMetrics-CcEO5U0p.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

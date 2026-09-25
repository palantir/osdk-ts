import{j as r}from"./iframe-C0-x1FP0.js";import{O as b}from"./object-table-472WP8_C.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DmTb61LJ.js";import{u as g}from"./useOsdkClient-B74sjWML.js";import"./preload-helper-DCX9k7ir.js";import"./Table-DJMsOaR-.js";import"./index-DV22TdK8.js";import"./Dialog-CbKuY7bP.js";import"./cross-yFQp_D_Z.js";import"./svgIconContainer-BSxvLIZD.js";import"./useBaseUiId-CA7uGIeg.js";import"./InternalBackdrop-brHMeUVe.js";import"./composite-Dy-B8Ijy.js";import"./index-DUQSD1NB.js";import"./index-C7QUHUmQ.js";import"./index-Bo-o19rY.js";import"./useEventCallback-CKs1ld83.js";import"./SkeletonBar-C2MOvv6_.js";import"./LoadingCell-Cb8ccBYd.js";import"./ColumnConfigDialog-Grq4fMuX.js";import"./DraggableList-Q22sHSvj.js";import"./search-Vl3MAPNS.js";import"./Input-BXkRChlq.js";import"./useControlled-Dp-jMyqd.js";import"./Button-CvK_tZY2.js";import"./small-cross-DvHjGkkh.js";import"./ActionButton-DT15JGE9.js";import"./Checkbox-BbkHkxig.js";import"./useValueChanged-ByiOoXtD.js";import"./CollapsiblePanel-0BooQOGv.js";import"./MultiColumnSortDialog-D3MwWUNe.js";import"./MenuTrigger-BL9KlAPW.js";import"./CompositeItem-D0Pwm5JG.js";import"./ToolbarRootContext-DthEPhMn.js";import"./getDisabledMountTransitionStyles-Btbbq1bs.js";import"./getPseudoElementBounds-DzHxX6wm.js";import"./chevron-down-Tbopdf5u.js";import"./index-ai2s7LZ-.js";import"./error-VkCpPEhJ.js";import"./BaseCbacBanner-CIb3UhEC.js";import"./makeExternalStore-C9rMI5OP.js";import"./Tooltip-CA4Uvv6q.js";import"./PopoverPopup-CbjVo92q.js";import"./debounce-BdQw7iZx.js";import"./tick-D7IllXvz.js";import"./DropdownField-CN-ggOq5.js";import"./isEqual-enoGD4YI.js";import"./withOsdkMetrics-Dw6CTACt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-CZmLz8ZP.js";import{O as b}from"./object-table-tURiphu4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BgD-MlMq.js";import{u as g}from"./useOsdkClient-TwNF5t3v.js";import"./preload-helper-DvTMhaTO.js";import"./Table-D5vCd__W.js";import"./index-CAhEgdCZ.js";import"./Dialog-DTRTvxsf.js";import"./cross-BwuwEvtS.js";import"./svgIconContainer-Dqq8-oQ4.js";import"./useBaseUiId-BCYLkR1F.js";import"./InternalBackdrop-CvNifAli.js";import"./composite-BqzE7WbV.js";import"./index-8Ow4xnki.js";import"./index-BTcDhi6R.js";import"./index-CR3UHMh2.js";import"./useEventCallback-hUMvgE-6.js";import"./SkeletonBar-BqJ3WV_V.js";import"./LoadingCell-Bt-HBQJH.js";import"./ColumnConfigDialog-DFQqa886.js";import"./DraggableList-qwBLBySq.js";import"./search-DI3kZ9bs.js";import"./Input-IY6ZJX7E.js";import"./useControlled-BH9r8IuZ.js";import"./Button-D3buvkEb.js";import"./small-cross-D4_v44P4.js";import"./ActionButton-85kQsPr_.js";import"./Checkbox-UF-o2fFY.js";import"./useValueChanged-Cdhwq_au.js";import"./CollapsiblePanel-UuQCKDA5.js";import"./MultiColumnSortDialog-CZkfkUYs.js";import"./MenuTrigger-CUPM2MO5.js";import"./CompositeItem-C7RhivEH.js";import"./ToolbarRootContext-C9PFHMIF.js";import"./getDisabledMountTransitionStyles-CxXxx8m-.js";import"./getPseudoElementBounds-CGaPX9Rs.js";import"./chevron-down-D49DBeyU.js";import"./index-0tShKdJa.js";import"./error-SF1rOjxj.js";import"./BaseCbacBanner-CHu5VYNo.js";import"./makeExternalStore-C3ECuZEf.js";import"./Tooltip-o2rFlVA_.js";import"./PopoverPopup-Bl4kSVcT.js";import"./debounce-CCB4c__K.js";import"./tick-DrhRfY11.js";import"./DropdownField-i3QfSn95.js";import"./isEqual-DhsO4tE3.js";import"./withOsdkMetrics-rK3p9Fti.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

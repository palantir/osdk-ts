import{j as r}from"./iframe-Ccapaqae.js";import{O as b}from"./object-table-Dz76OuRn.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BotASJUJ.js";import{u as g}from"./useOsdkClient-BB4EEIlx.js";import"./preload-helper-B0fDxzOV.js";import"./Table-D6loqJR_.js";import"./index-CAc_fcE_.js";import"./Dialog-OboDm5XO.js";import"./cross-DVe-hkuB.js";import"./svgIconContainer-usxw3tZ0.js";import"./useBaseUiId-BD8gqrlU.js";import"./InternalBackdrop-BN-hTzRo.js";import"./composite-D5uZkbga.js";import"./index-DJ_c_Zcf.js";import"./index-Bb7LrozI.js";import"./index-C-nQHSmy.js";import"./useEventCallback-B8B0zh1F.js";import"./SkeletonBar-CxVZ2dgM.js";import"./LoadingCell-B0rni8W2.js";import"./ColumnConfigDialog-BIUweG0f.js";import"./DraggableList-D0wc-qLT.js";import"./search-gfBqCBGK.js";import"./Input-Cmwk-bsi.js";import"./useControlled-OeZ6f7Nb.js";import"./Button-YLU6pcy0.js";import"./small-cross-BCCk6ZGS.js";import"./ActionButton-BU9tJHwz.js";import"./Checkbox-DC6mo_fZ.js";import"./useValueChanged-fMEzhjAD.js";import"./CollapsiblePanel-BRx4L-gI.js";import"./MultiColumnSortDialog-B_yL99Yt.js";import"./MenuTrigger-CdarDH0K.js";import"./CompositeItem-BQ56iutS.js";import"./ToolbarRootContext-h1fk3wwB.js";import"./getDisabledMountTransitionStyles-CX7DWXGm.js";import"./getPseudoElementBounds-3hF2b042.js";import"./chevron-down-NuPa8cs3.js";import"./index-BmU3DUw1.js";import"./error-rF1GSzue.js";import"./BaseCbacBanner-59JQ6rwc.js";import"./makeExternalStore-g6LhMIcg.js";import"./Tooltip-OyMbgjjf.js";import"./PopoverPopup-Bdu2GGRB.js";import"./debounce-DqeA49PZ.js";import"./tick-B2UO1Zse.js";import"./DropdownField-BincnoLP.js";import"./isEqual-DSfnir-p.js";import"./withOsdkMetrics-Clo6yw-m.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

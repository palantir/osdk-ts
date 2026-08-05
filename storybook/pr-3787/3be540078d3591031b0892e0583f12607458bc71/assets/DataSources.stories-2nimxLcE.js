import{j as r}from"./iframe-B5ZzFpGV.js";import{O as b}from"./object-table-BAN1bX6b.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8q015nN.js";import{u as g}from"./useOsdkClient-DEz3juUB.js";import"./preload-helper-BJvIoz8B.js";import"./Table-B3CRxTpo.js";import"./index-z4xETEDy.js";import"./Dialog-DeF2s5sl.js";import"./cross-BGaKNqwh.js";import"./svgIconContainer-CW1kT3WQ.js";import"./useBaseUiId-DJnMsM3b.js";import"./InternalBackdrop-t-Tkp2mf.js";import"./composite-ilR61S-U.js";import"./index-BXOUosox.js";import"./index-CRM3J1t9.js";import"./index-pipDnF82.js";import"./useEventCallback-B8zk15kN.js";import"./SkeletonBar-DJk1-8Bw.js";import"./LoadingCell-x1ad322X.js";import"./ColumnConfigDialog-uerieJHr.js";import"./DraggableList-BlLBygSa.js";import"./search-C_g1Mr7n.js";import"./Input-CwAbMfOY.js";import"./useControlled-DiSq_f2x.js";import"./isEqual-wEqXlrPC.js";import"./isObject-GtkGHpJ0.js";import"./Button-CYH1D7qG.js";import"./ActionButton-BDEvghIZ.js";import"./Checkbox-D5r_2i7u.js";import"./useValueChanged-DHoXd38F.js";import"./CollapsiblePanel-BQpiv9Vm.js";import"./MultiColumnSortDialog-DWxuuXXs.js";import"./MenuTrigger-D9c0vcFB.js";import"./CompositeItem-C8C3gNK6.js";import"./ToolbarRootContext-ChmL4KtX.js";import"./getDisabledMountTransitionStyles-BLQLaFmr.js";import"./getPseudoElementBounds-DZHDf8sw.js";import"./chevron-down-D8Xw2XSL.js";import"./index-DTZ3ogMT.js";import"./error-CweQ51t5.js";import"./BaseCbacBanner-uc8qvZPA.js";import"./makeExternalStore-WLdqxZL2.js";import"./Tooltip-CE0dRtvL.js";import"./PopoverPopup-dtml0Wne.js";import"./toNumber-AlaGGTap.js";import"./tick-Cruxb3nb.js";import"./DropdownField-ButkmT75.js";import"./withOsdkMetrics-B_Ikpxmc.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

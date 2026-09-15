import{j as r}from"./iframe-ClXV96ol.js";import{O as b}from"./object-table-CDlU6gyI.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-ClNmBonX.js";import{u as g}from"./useOsdkClient-ptfwTLa8.js";import"./preload-helper-GIvq9Fgh.js";import"./Table-Bibtya0A.js";import"./index-BS_93M16.js";import"./Dialog-B1iIak_-.js";import"./cross-DTt9RaJo.js";import"./svgIconContainer-BzIt4vSD.js";import"./useBaseUiId-CeQ_TKpW.js";import"./InternalBackdrop-BOzPpyjM.js";import"./composite-C0Fpedst.js";import"./index-Bkk5ODU2.js";import"./index-CLBh2Emm.js";import"./index-BLOk9I5e.js";import"./useEventCallback-CSmRluI9.js";import"./SkeletonBar-uZMzevzj.js";import"./LoadingCell-DzMkXgiz.js";import"./ColumnConfigDialog-6XQXVFz4.js";import"./DraggableList-Be7V3q25.js";import"./search-C1vc_KSz.js";import"./Input-CzDuGki_.js";import"./useControlled-Bvg52cep.js";import"./Button-DpTMspMt.js";import"./small-cross-DI0ePjHj.js";import"./ActionButton-dXKws96p.js";import"./Checkbox-5mv4ru67.js";import"./useValueChanged-BOSK5wJR.js";import"./CollapsiblePanel-YRb-6JkX.js";import"./MultiColumnSortDialog-sM5RqFSy.js";import"./MenuTrigger-5DVlRwvj.js";import"./CompositeItem-UA3lXUwr.js";import"./ToolbarRootContext-dOFs4mME.js";import"./getDisabledMountTransitionStyles-Dzb55fqZ.js";import"./getPseudoElementBounds-Y4TxrJ4m.js";import"./chevron-down-BtcKUO_9.js";import"./index-BEQyJeIH.js";import"./error-JR-fCQaz.js";import"./BaseCbacBanner-Cw-Inebf.js";import"./makeExternalStore-CMtJRYT9.js";import"./Tooltip-Cp6NNLht.js";import"./PopoverPopup-BfnU-QCF.js";import"./debounce-DTKHa4Ak.js";import"./tick-CPeibzQx.js";import"./DropdownField-Cf9jSBwq.js";import"./isEqual-D5sVeEdH.js";import"./withOsdkMetrics-CY10LFb-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

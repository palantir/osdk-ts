import{j as r}from"./iframe-XZT6dXfR.js";import{O as b}from"./object-table-BQSE7qsB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CJTsz3CQ.js";import{u as g}from"./useOsdkClient-JmfcqbuF.js";import"./preload-helper-Bq4RjIN3.js";import"./Table-BS9XaZPa.js";import"./index-DBmC_ZXQ.js";import"./Dialog-B2xCcXCg.js";import"./cross-DhoAWiHd.js";import"./svgIconContainer-CU7rRNTz.js";import"./useBaseUiId-B8UoJpnF.js";import"./InternalBackdrop-CIqXcp3k.js";import"./composite-8to6_dHI.js";import"./index-CNzOt5rB.js";import"./index-DBvBEYmO.js";import"./index-CwmKjwjW.js";import"./useEventCallback-CrcHZf2i.js";import"./SkeletonBar-QCqk1NFT.js";import"./LoadingCell-B5xITLxa.js";import"./ColumnConfigDialog-D5p_98S6.js";import"./DraggableList-B9SHbjAV.js";import"./search-JQ5a7a7P.js";import"./Input-ieeoajuX.js";import"./useControlled-eor914uw.js";import"./Button-CFmpzwcx.js";import"./small-cross-Bs01bh1t.js";import"./ActionButton-tWe0lZ3U.js";import"./Checkbox-CAfM_O_2.js";import"./useValueChanged-BiHw7QxN.js";import"./CollapsiblePanel-B1faMpX3.js";import"./MultiColumnSortDialog-BsF5urer.js";import"./MenuTrigger-BxQzviuH.js";import"./CompositeItem-CFpArZRZ.js";import"./ToolbarRootContext-DmE1Zvel.js";import"./getDisabledMountTransitionStyles-DOuJdwmK.js";import"./getPseudoElementBounds-yKX43mtP.js";import"./chevron-down-7slW-jes.js";import"./index-CAFrt6ka.js";import"./error-CE5bRqvK.js";import"./BaseCbacBanner-Ca9YHGdr.js";import"./makeExternalStore-DkP425EE.js";import"./Tooltip-COCJMSAT.js";import"./PopoverPopup-BDOMby4V.js";import"./debounce-DSg_tuNC.js";import"./tick-wmOq-VtM.js";import"./DropdownField-r6GmTP-a.js";import"./isEqual-DhcMgsNP.js";import"./withOsdkMetrics-waGd8POl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

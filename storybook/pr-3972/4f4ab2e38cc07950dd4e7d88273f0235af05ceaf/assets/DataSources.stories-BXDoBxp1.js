import{j as r}from"./iframe-CK77c45c.js";import{O as b}from"./object-table-CD9xgxQ4.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-nYdVP7HY.js";import{u as g}from"./useOsdkClient-Tt2idpLi.js";import"./preload-helper-DbNEja4W.js";import"./Table-Cv6K4vEv.js";import"./index-C442JOIH.js";import"./Dialog-BL8f_VaG.js";import"./cross-CwI5OEk2.js";import"./svgIconContainer-L_jjiIf-.js";import"./useBaseUiId-dVZqGFlU.js";import"./InternalBackdrop-C6LC9TgG.js";import"./composite-Dh-nFKNO.js";import"./index-qnj-Mesk.js";import"./index-BoFZ_UqF.js";import"./index-DlpSJTu4.js";import"./useEventCallback-ClxfXOPq.js";import"./SkeletonBar-X3eUnAaJ.js";import"./LoadingCell-BRV08XBm.js";import"./ColumnConfigDialog-Cy2f2WtW.js";import"./DraggableList-zAtO2Yt3.js";import"./search-CV_E7rKM.js";import"./Input-DeIqzZkQ.js";import"./useControlled-jnmU5UAL.js";import"./Button-CWY22zau.js";import"./small-cross-BtlEs72Q.js";import"./ActionButton-CLfSCTXA.js";import"./Checkbox-CWGtiWas.js";import"./useValueChanged-BaVslEYl.js";import"./CollapsiblePanel-BCyMY8rI.js";import"./MultiColumnSortDialog-CxJXY1yp.js";import"./MenuTrigger-GGTOeyws.js";import"./CompositeItem-CAzkW6h4.js";import"./ToolbarRootContext-BQcuSjIX.js";import"./getDisabledMountTransitionStyles-CaJMflFk.js";import"./getPseudoElementBounds-nGyt1hPn.js";import"./chevron-down-CFkNPRkg.js";import"./index-1zjImjvm.js";import"./error-BvwPFshU.js";import"./BaseCbacBanner-DUD1Qbr1.js";import"./makeExternalStore-C2N1fTLN.js";import"./Tooltip-CY4cYmbh.js";import"./PopoverPopup-BOimy_Ld.js";import"./debounce-BKHqtWZX.js";import"./tick-sW9HqPYz.js";import"./DropdownField-DZE5zpKv.js";import"./isEqual-DbplaoR8.js";import"./withOsdkMetrics-7D8iT2W4.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-I-oDj4Zf.js";import{O as b}from"./object-table-BDzyk2ws.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dq8aHjVx.js";import{u as g}from"./useOsdkClient-CEoxI4QC.js";import"./preload-helper-DoR3GGZy.js";import"./Table-BbncEI9K.js";import"./index-QR0ynjTm.js";import"./Dialog-DqQkO56R.js";import"./cross-CX2gEjus.js";import"./svgIconContainer-BrWiwUny.js";import"./useBaseUiId-DbsMUGHz.js";import"./InternalBackdrop-CfSb4ma1.js";import"./composite-CVLqeN_f.js";import"./index-D2sLcc-K.js";import"./index-CPedUlI1.js";import"./index-DpMDyn81.js";import"./useEventCallback-Bc6J5k71.js";import"./SkeletonBar-CGYOp5T6.js";import"./LoadingCell-BoayzotZ.js";import"./ColumnConfigDialog-D2jY4VLY.js";import"./DraggableList-LDR0wrNb.js";import"./search-CIYeg_xA.js";import"./Input-QRcBEz-L.js";import"./useControlled-CphiSNJu.js";import"./Button-DZTSIR38.js";import"./small-cross-D7PZgAK5.js";import"./ActionButton-C-BKMT4N.js";import"./Checkbox-C0EGJ27n.js";import"./useValueChanged-CiTYSghQ.js";import"./CollapsiblePanel-BGlZd1qK.js";import"./MultiColumnSortDialog-Cn0wU-xj.js";import"./MenuTrigger-DMkgApeK.js";import"./CompositeItem-Bh0NB-Cc.js";import"./ToolbarRootContext-DOAo9bSD.js";import"./getDisabledMountTransitionStyles-yOgeaO0s.js";import"./getPseudoElementBounds-Cs3Xa3sB.js";import"./chevron-down-DsdifgPL.js";import"./index-COac3hDI.js";import"./error-DQf4Jva_.js";import"./BaseCbacBanner-PQFEbr0C.js";import"./makeExternalStore-DSBRYZ6v.js";import"./Tooltip-DkmWZB-H.js";import"./PopoverPopup-D4Yb-OFT.js";import"./debounce-D5e0wjoa.js";import"./tick-BrOwqOvA.js";import"./DropdownField-I4HAtEDY.js";import"./isEqual-CssyDgHr.js";import"./withOsdkMetrics-CzZMIy3-.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

import{j as r}from"./iframe-D8UHlLM-.js";import{O as b}from"./object-table-DriLHpx0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cp3sB6tJ.js";import{u as g}from"./useOsdkClient-HNKtj353.js";import"./preload-helper-B2drndpz.js";import"./Table-DIJzy73N.js";import"./index-2pZAxqQ8.js";import"./Dialog-LP3kER3w.js";import"./cross-zCnfpZEf.js";import"./svgIconContainer-Ckme5BEx.js";import"./useBaseUiId-B83MHcbd.js";import"./InternalBackdrop-BiFzgO2t.js";import"./composite-BYq1KtFB.js";import"./index-DrmX_pzR.js";import"./index-BrcjEskR.js";import"./index-CbaYF84n.js";import"./useEventCallback-BoHAEoDT.js";import"./SkeletonBar-BE_VQs-9.js";import"./LoadingCell-BIhXQH6G.js";import"./ColumnConfigDialog-DUp2kRps.js";import"./DraggableList-waEoSKM6.js";import"./search-DmARyhAU.js";import"./Input-BHmmIdQN.js";import"./useControlled-DT-SiHVq.js";import"./Button-SSlA87_g.js";import"./small-cross-LQUt3Gb7.js";import"./ActionButton-BScY58m0.js";import"./Checkbox-DGOEyl7w.js";import"./useValueChanged-BuBsDfgp.js";import"./CollapsiblePanel-CifK208E.js";import"./MultiColumnSortDialog-Cqg1dnup.js";import"./MenuTrigger-BfJ69Gas.js";import"./CompositeItem-DhPX7cGM.js";import"./ToolbarRootContext-Df4LXHpy.js";import"./getDisabledMountTransitionStyles-CbL9qvCd.js";import"./getPseudoElementBounds-Cr-VGz-T.js";import"./chevron-down-B03gIwVp.js";import"./index-CwPCwgJ9.js";import"./error-CsDtSshc.js";import"./BaseCbacBanner-Clb2sC9-.js";import"./makeExternalStore-CDgVz-Cr.js";import"./Tooltip-BSlgHJeE.js";import"./PopoverPopup-Dye_SGlA.js";import"./debounce-DEV0SMqr.js";import"./tick-CckWobbk.js";import"./DropdownField-BqKtTUT-.js";import"./isEqual-BKZS-MzX.js";import"./withOsdkMetrics-BtMau99A.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

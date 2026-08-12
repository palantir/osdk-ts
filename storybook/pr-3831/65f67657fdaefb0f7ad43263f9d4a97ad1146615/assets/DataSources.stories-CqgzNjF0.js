import{j as r}from"./iframe-ohJVZKOW.js";import{O as b}from"./object-table-BQf4gSPe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CShWgETT.js";import{u as g}from"./useOsdkClient-BCwpDIbF.js";import"./preload-helper-C1R0P_VY.js";import"./Table-DHhtMo4h.js";import"./index-C4DoG2f-.js";import"./Dialog-hp52T4ga.js";import"./cross-Bfip_FoZ.js";import"./svgIconContainer-DzjVEjGe.js";import"./useBaseUiId-LmdhvU1h.js";import"./InternalBackdrop-CGIgSFQ4.js";import"./composite-DQx9kvkN.js";import"./index-BnE2PvA_.js";import"./index-DW2zHBPJ.js";import"./index-BBGAx8RY.js";import"./useEventCallback-zsHSeYCI.js";import"./SkeletonBar-gFkpuj06.js";import"./LoadingCell-ChUx_zUn.js";import"./ColumnConfigDialog-Du02Nzwe.js";import"./DraggableList-Dc-sxHhv.js";import"./search-BG9SxdnF.js";import"./Input-Drh9HzXR.js";import"./useControlled-ClfC2jv8.js";import"./isEqual-BJL22rN0.js";import"./isObject-IFnXNPKD.js";import"./Button-CsxMEHMa.js";import"./ActionButton-6tpCH2WS.js";import"./Checkbox-BInzSkBA.js";import"./useValueChanged-DsZbiuI8.js";import"./CollapsiblePanel-CDuCRfTD.js";import"./MultiColumnSortDialog--rdOM0mO.js";import"./MenuTrigger-Cmh-HMwy.js";import"./CompositeItem-DRccTLFK.js";import"./ToolbarRootContext-BclOg9vJ.js";import"./getDisabledMountTransitionStyles-B_LH_dlj.js";import"./getPseudoElementBounds-CI1x8v8B.js";import"./chevron-down-B-OZmB_2.js";import"./index-Bdc5AnYd.js";import"./error-BoH5SAwj.js";import"./BaseCbacBanner-iflnoL7j.js";import"./makeExternalStore-C5RAotff.js";import"./Tooltip-BJh6oCPg.js";import"./PopoverPopup-Cw_qMkyL.js";import"./toNumber-g7Jojpxk.js";import"./tick-QFxu5a3T.js";import"./DropdownField-BkXQZJoe.js";import"./withOsdkMetrics-CxazBpkT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

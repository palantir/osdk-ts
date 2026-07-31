import{j as r}from"./iframe-Da9MDiTI.js";import{O as b}from"./object-table-hvAUoQlk.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-zDqaKmpi.js";import{u as g}from"./useOsdkClient-C-zfD-7k.js";import"./preload-helper-Dd6abAIO.js";import"./Table-D9w8xY2h.js";import"./index-Bjs-izmB.js";import"./Dialog-BMLbot9J.js";import"./cross-Ddpno7b6.js";import"./svgIconContainer-BJth7iyz.js";import"./useBaseUiId-BayoovkJ.js";import"./InternalBackdrop-CzcHRs0y.js";import"./composite-BaDdnoh8.js";import"./index-DcIVUlGH.js";import"./index-DKfY6EcW.js";import"./index-BABJwW4T.js";import"./useEventCallback-BUPM0wCF.js";import"./SkeletonBar-BA89NcKp.js";import"./LoadingCell-BvG1pWNr.js";import"./ColumnConfigDialog-DgtSL3SL.js";import"./DraggableList-BLkSctgh.js";import"./search-CZHusTi7.js";import"./Input-BgILf_TN.js";import"./useControlled-3ADGh7jp.js";import"./isEqual-BrsKUsje.js";import"./isObject-DOueF4aQ.js";import"./Button-g9bDBW5N.js";import"./ActionButton-BqLgMeMC.js";import"./Checkbox-Dp74PQJD.js";import"./useValueChanged-CL6nsKU1.js";import"./CollapsiblePanel-OzU7gzyb.js";import"./MultiColumnSortDialog-CSCWSXUH.js";import"./MenuTrigger-B8eDG6ju.js";import"./CompositeItem-C0Jbe1ov.js";import"./ToolbarRootContext-Dc0wNS2-.js";import"./getDisabledMountTransitionStyles-BmSIApxN.js";import"./getPseudoElementBounds-C4CJm2lO.js";import"./chevron-down-CY9Oj2p3.js";import"./index-CBjdGpQ-.js";import"./error-D7APwBuJ.js";import"./BaseCbacBanner-DDOuDFv6.js";import"./makeExternalStore-BEHro4Nx.js";import"./Tooltip-B_NdwVxI.js";import"./PopoverPopup-Cs_ntUEj.js";import"./toNumber-j5nLiGs_.js";import"./tick-Bhyac6W7.js";import"./DropdownField-Dhg5kbhU.js";import"./withOsdkMetrics-B9D4iGy_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

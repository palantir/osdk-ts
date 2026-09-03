import{j as r}from"./iframe-Cxs4teez.js";import{O as b}from"./object-table-BfyAEuWs.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CwhUGX8H.js";import{u as g}from"./useOsdkClient-Ba7AvsVH.js";import"./preload-helper-Bd6Vgg8g.js";import"./Table-B1mo_osj.js";import"./index-C3kmvWsS.js";import"./Dialog-C87BIpGH.js";import"./cross-D5j5wcq7.js";import"./svgIconContainer-JiM41EbN.js";import"./useBaseUiId-DWXmNFpC.js";import"./InternalBackdrop-DP9WD5Fk.js";import"./composite-b3NzNsDh.js";import"./index-C7HiqnbK.js";import"./index-WVEl5G15.js";import"./index-B-Om34Y_.js";import"./useEventCallback-CAv6RzeS.js";import"./SkeletonBar-Bleds7Vl.js";import"./LoadingCell-Btu8ADTl.js";import"./ColumnConfigDialog-n3tDAug6.js";import"./DraggableList-C_GhJA9q.js";import"./search-BrqbiSOv.js";import"./Input-BYExG4yH.js";import"./useControlled-Dc-gXlj3.js";import"./Button-B-HuJTwa.js";import"./small-cross-TqcPNZ3o.js";import"./ActionButton-dCm50BWS.js";import"./Checkbox-ByH-RI4p.js";import"./useValueChanged-D29qGbgw.js";import"./CollapsiblePanel-C0e4ATLG.js";import"./MultiColumnSortDialog-DMGRj25k.js";import"./MenuTrigger-Dua7Pz0U.js";import"./CompositeItem-4Ik-gd3d.js";import"./ToolbarRootContext-BD8ceMmu.js";import"./getDisabledMountTransitionStyles-iLI7eNCy.js";import"./getPseudoElementBounds-DE7atGjs.js";import"./chevron-down-DR1MLtBA.js";import"./index-CTzs5x76.js";import"./error-CSDPFrAs.js";import"./BaseCbacBanner-BImE2vA-.js";import"./makeExternalStore-Db6eeeft.js";import"./Tooltip-And-vmyU.js";import"./PopoverPopup-DEvs5olF.js";import"./debounce-BZ5yTYau.js";import"./tick-C3Mfhxb_.js";import"./DropdownField-BQN_NaVg.js";import"./isEqual-C_HXGO6S.js";import"./withOsdkMetrics-BMMQ7JDA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

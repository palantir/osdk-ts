import{j as r}from"./iframe-BVDCNjcv.js";import{O as b}from"./object-table-iMyLgsRb.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-PJp8_2xi.js";import{u as g}from"./useOsdkClient-DZXCpy0q.js";import"./preload-helper-BYyHjn7h.js";import"./Table-CLSRkwMy.js";import"./index-_ZEFwRG4.js";import"./Dialog-CN3I2CLp.js";import"./cross-ha5THBWj.js";import"./svgIconContainer-DE6RIudO.js";import"./useBaseUiId-Bn7tPMyc.js";import"./InternalBackdrop-Cagl88rt.js";import"./composite-DfTYjTcf.js";import"./index-CiJWuuCz.js";import"./index-BpeKA42d.js";import"./index-DNPYVeRb.js";import"./useEventCallback-DymoCTvT.js";import"./SkeletonBar-Cht_cLuj.js";import"./LoadingCell-QXCWoCnM.js";import"./ColumnConfigDialog-C1Xo1sgk.js";import"./DraggableList-31c1qP_b.js";import"./search-DoN7C3Ww.js";import"./Input-D5ZE_3yL.js";import"./useControlled-C2Zp9gz_.js";import"./Button-ChLPke0x.js";import"./small-cross-59pV_NVH.js";import"./ActionButton-BEoPIWdX.js";import"./Checkbox-Bea_Wqm9.js";import"./useValueChanged-DLhsDHsb.js";import"./CollapsiblePanel-BnLgPV0Z.js";import"./MultiColumnSortDialog-BEjTzm5X.js";import"./MenuTrigger-DTO-2qCK.js";import"./CompositeItem-DqfwRJk9.js";import"./ToolbarRootContext-CtetOuLM.js";import"./getDisabledMountTransitionStyles-CAjd8DqA.js";import"./getPseudoElementBounds--sz9K5fS.js";import"./chevron-down-5NG5qhbV.js";import"./index-CMAvGmQJ.js";import"./error-CyfM8m9x.js";import"./BaseCbacBanner-_y_LvwWU.js";import"./makeExternalStore-B2YAtvuk.js";import"./Tooltip-BBhWS3Lt.js";import"./PopoverPopup-BsoLGNYy.js";import"./debounce-vPvNsZNP.js";import"./tick-4Gk2pH7M.js";import"./DropdownField-DxF_HQob.js";import"./isEqual-BlEwvh7Y.js";import"./withOsdkMetrics-vrnHfU6i.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

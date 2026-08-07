import{j as r}from"./iframe-BUEP5_KN.js";import{O as b}from"./object-table-DsgKjrEY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BTHyvNXJ.js";import{u as g}from"./useOsdkClient-CVJbm5_v.js";import"./preload-helper-BCZ0e6Bx.js";import"./Table-C2pSHfCx.js";import"./index-Cv5GbN86.js";import"./Dialog-BKn-ZTlZ.js";import"./cross-BFI2c1gT.js";import"./svgIconContainer-BxBMhXhK.js";import"./useBaseUiId-CtzwQFB0.js";import"./InternalBackdrop-0AgP2Frr.js";import"./composite-CRlO-KKn.js";import"./index-BFlpobHB.js";import"./index-C5qosZUE.js";import"./index-CWhxk_VF.js";import"./useEventCallback-C1Zgw4Ky.js";import"./SkeletonBar-GFqMzlNc.js";import"./LoadingCell-DgzNywjO.js";import"./ColumnConfigDialog-D0EGSflz.js";import"./DraggableList-PUeo89lO.js";import"./search-ug0_eoW4.js";import"./Input-Bnyr3ygR.js";import"./useControlled-PKwq7ae5.js";import"./isEqual-DuiBvV2G.js";import"./isObject-DY1gTwAG.js";import"./Button-BSn-_RfD.js";import"./ActionButton-D5yLikE9.js";import"./Checkbox-D0bYA1uK.js";import"./useValueChanged-TybsbpVT.js";import"./CollapsiblePanel-70q2W7BX.js";import"./MultiColumnSortDialog-zP5bDXpD.js";import"./MenuTrigger--G7NFvZU.js";import"./CompositeItem-C6hNbQz3.js";import"./ToolbarRootContext-BnGkTKD4.js";import"./getDisabledMountTransitionStyles-Dfr23WDG.js";import"./getPseudoElementBounds-F4tv6nV9.js";import"./chevron-down-BLw7EeHj.js";import"./index-B16c37PX.js";import"./error-CGouaaOn.js";import"./BaseCbacBanner-CCEIv-FS.js";import"./makeExternalStore-BQTvyZx_.js";import"./Tooltip-BMIm9wqW.js";import"./PopoverPopup-I_I-0Ao-.js";import"./toNumber-BkzfzitC.js";import"./tick-DqD8ipnV.js";import"./DropdownField-SVotLH5l.js";import"./withOsdkMetrics-B5ElZfNl.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

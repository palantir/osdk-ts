import{j as r}from"./iframe-fiDzxSac.js";import{O as b}from"./object-table-Cfy5VgMd.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-K-WCjZzf.js";import{u as g}from"./useOsdkClient-BTUTxBhe.js";import"./preload-helper-vUH8WtXv.js";import"./Table-DKy28Mke.js";import"./index-RsLmo9Ef.js";import"./Dialog-DOJr_i77.js";import"./cross-Dj0Tr1LR.js";import"./svgIconContainer-DuFQRV6L.js";import"./useBaseUiId-D5crqalZ.js";import"./InternalBackdrop-CodZtGfP.js";import"./composite-BaurXFau.js";import"./index-ZxWxF6R4.js";import"./index-CFMoivIb.js";import"./index-BbKVh42F.js";import"./useEventCallback-CNobfbIA.js";import"./SkeletonBar-Bv_L57OJ.js";import"./LoadingCell-CzRJ6sTb.js";import"./ColumnConfigDialog-2FQHcVYm.js";import"./DraggableList-BSfGvR0K.js";import"./search-B0MLGd_Y.js";import"./Input-kfNjj_-b.js";import"./useControlled-CY87ml-W.js";import"./Button-BF-ip-LD.js";import"./small-cross-XpA8OmpU.js";import"./ActionButton-DJAwwkO8.js";import"./Checkbox-C_Tjg2ZD.js";import"./useValueChanged-DVEDmsGJ.js";import"./CollapsiblePanel-rOI86CBK.js";import"./MultiColumnSortDialog-CEkRnoUu.js";import"./MenuTrigger-D7sevTuD.js";import"./CompositeItem-CFHCXDOZ.js";import"./ToolbarRootContext-C3QdEmtK.js";import"./getDisabledMountTransitionStyles-Cl4MErAH.js";import"./getPseudoElementBounds-Cz4hQZQV.js";import"./chevron-down-BeNvA5Jp.js";import"./index-CxuMtNmx.js";import"./error-DWaVmqt2.js";import"./BaseCbacBanner-Df49S7d1.js";import"./makeExternalStore-GIa5UA4P.js";import"./Tooltip-BmuBTOPC.js";import"./PopoverPopup-CoMFK958.js";import"./debounce-D-d1nhMU.js";import"./tick-_9QlYMSH.js";import"./DropdownField-Pss_3XlK.js";import"./isEqual-Dm9UOhP2.js";import"./withOsdkMetrics-CGcDstXp.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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

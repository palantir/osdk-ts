import{j as r}from"./iframe-CMaTw6X_.js";import{O as b}from"./object-table-CvS1PKqw.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-hC38tzGR.js";import{u as g}from"./useOsdkClient-BWocAVB-.js";import"./preload-helper-YUCSvBRl.js";import"./Table-BdZxk-Ie.js";import"./index-DcwZFFHE.js";import"./Dialog-BtAm0E3z.js";import"./cross-BToySQSC.js";import"./svgIconContainer-DzaaatyJ.js";import"./useBaseUiId-BQVDaT2W.js";import"./InternalBackdrop-B4tVXPLL.js";import"./composite-CLM32H9h.js";import"./index-DrAoL5DS.js";import"./index-CokBQJMj.js";import"./index-i_JEJzIT.js";import"./useEventCallback-JAzPbeMV.js";import"./SkeletonBar-y-lFwvfk.js";import"./LoadingCell-DIjFy37G.js";import"./ColumnConfigDialog-dfkhJbJK.js";import"./DraggableList-D1PRcDgt.js";import"./search-DX2tWApA.js";import"./Input-C22UXl1f.js";import"./useControlled-BhIydEad.js";import"./Button-gCGWFRxS.js";import"./small-cross-D_VaN_YZ.js";import"./ActionButton-j6Ig36dP.js";import"./Checkbox-BSSG_spo.js";import"./useValueChanged-DC6zsyd6.js";import"./CollapsiblePanel-zt3byeQH.js";import"./MultiColumnSortDialog-ju9Ri7Y7.js";import"./MenuTrigger-Cha642qv.js";import"./CompositeItem-BOjJ-dS3.js";import"./ToolbarRootContext-0tvyCtzm.js";import"./getDisabledMountTransitionStyles-21zR2DnY.js";import"./getPseudoElementBounds-t54joTAf.js";import"./chevron-down-CiliQGq8.js";import"./index-FMHsbTbl.js";import"./error-QpkULiAa.js";import"./BaseCbacBanner-CdnmMMv_.js";import"./makeExternalStore-daS2Qovb.js";import"./Tooltip-B5T5Xpkt.js";import"./PopoverPopup-_o2oNRLE.js";import"./debounce-CcQQoCkT.js";import"./tick-D-4tdeUZ.js";import"./DropdownField-C8LlY8gH.js";import"./isEqual-HbZTEvno.js";import"./withOsdkMetrics-06-Hb-DT.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
